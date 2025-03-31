import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  connectionString: 'postgresql://postgres.rllwdrtvbhsovmmehmav:xosnam-tahtir-3wyxqA@aws-0-eu-central-1.pooler.supabase.com:6543/postgres',
  ssl: { 
    rejectUnauthorized: false, // Supabase requires SSL but allows self-signed certificates
  },
  connectionTimeoutMillis: 10000, // 10 seconds timeout for connection
  idleTimeoutMillis: 10000, // 10 seconds timeout for idle clients
});

// Test connection on startup
(async () => {
  try {
    const client = await pool.connect();
    console.log('✅ Database connected successfully');
    const res = await client.query('SELECT NOW()');
    console.log('⏱️ Database time:', res.rows[0].now);
    client.release();
  } catch (err) {
    console.error('❌ DATABASE CONNECTION ERROR:', err.message);
    process.exit(1);
  }
})();

export default {
  query: (text, params) => {
    console.log('📝 Executing query:', text, params);
    return pool.query(text, params);
  },
  end: () => pool.end()
};