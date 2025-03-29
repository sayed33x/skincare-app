import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import skinRouter from './routes/skinAnalysis.js';
import 'dotenv/config'; // For environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection (using your provided string)
const MONGODB_URI = "mongodb+srv://meraitysa:FR8LRPGibfu74efI@cluster0.osf9wya.mongodb.net/skincare?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};

// Routes
app.use('/api/skin-analysis', skinRouter);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
};

startServer().catch(err => {
  console.error("Failed to start server:", err);
});