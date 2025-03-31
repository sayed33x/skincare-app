import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import skinRouter from './routes/skinAnalysis.js'; // For default export
// OR if using named export:
// import { skinRouter } from './routes/skinAnalysis.js';
import net from 'net';
import db from './db.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/skin', skinRouter);

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// Database test endpoint
app.get('/api/test-db', async (req, res) => {
  try {
    console.log('Testing database connection...');
    const now = await db.query('SELECT NOW()');
    console.log('Database query successful:', now.rows[0]);

    await db.query(`
      CREATE TABLE IF NOT EXISTS skin_analyses (
        id SERIAL PRIMARY KEY,
        image_url TEXT NOT NULL,
        skin_type VARCHAR(50) NOT NULL,
        concerns TEXT[] NOT NULL,
        analysis_results JSONB NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);
    console.log('Table creation successful.');

    const insert = await db.query(
      `INSERT INTO skin_analyses 
       (image_url, skin_type, concerns, analysis_results)
       VALUES ($1, $2, $3, $4)
       RETURNING id`,
      [
        'https://example.com/test.jpg',
        'test-type', 
        ['test-concern'], 
        { test: true }
      ]
    );
    console.log('Data insertion successful:', insert.rows[0]);

    res.json({
      status: 'Database operational',
      time: now.rows[0].now,
      insertedId: insert.rows[0].id
    });
  } catch (err) {
    console.error('Test DB error:', err);
    res.status(500).json({
      error: 'Database test failed',
      details: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  }
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something broke!',
    details: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Improved port handling
const findAvailablePort = async (startPort) => {
  let port = startPort;
  while (port < startPort + 100) {
    const available = await new Promise(resolve => {
      const server = net.createServer();
      server.unref();
      server.on('error', () => resolve(false));
      server.listen(port, () => {
        server.close(() => resolve(true));
      });
    });
    if (available) return port;
    port++;
  }
  throw new Error('No available ports found');
};

const startServer = async () => {
  try {
    const PORT = await findAvailablePort(parseInt(process.env.PORT || 5001));
    const server = app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(`🔌 Database test endpoint: http://localhost:${PORT}/api/test-db`);
    });

    // Graceful shutdown logic
    let isShuttingDown = false;

    const shutdown = () => {
      if (isShuttingDown) return;
      isShuttingDown = true;

      console.log('Shutting down gracefully');
      server.close(() => {
        console.log('Server closed');
        db.end().then(() => {
          console.log('Database connection closed');
          process.exit(0);
        }).catch(err => {
          console.error('Error closing database connection:', err);
          process.exit(1);
        });
      });
    };

    process.on('SIGTERM', shutdown);
    process.on('SIGINT', shutdown);
    
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
};

startServer();