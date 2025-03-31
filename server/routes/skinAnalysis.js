import express from 'express';
import { analyzeSkin } from '../services/skinService.js';
import db from '../db.js';

const router = express.Router();

// POST /api/skin/analyze
router.post('/analyze', async (req, res) => {
  try {
    const { imageUrl, skinType, concerns } = req.body;
    
    // Input validation
    if (!imageUrl || !skinType || !concerns) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['imageUrl', 'skinType', 'concerns']
      });
    }

    // Get analysis results
    const analysis = await analyzeSkin(imageUrl, skinType, concerns);
    
    // Save to PostgreSQL
    const { rows } = await db.query(
      `INSERT INTO skin_analyses 
       (image_url, skin_type, concerns, analysis_results) 
       VALUES ($1, $2, $3, $4) 
       RETURNING *`,
      [imageUrl, skinType, concerns, analysis.analysisResults]
    );

    res.status(201).json({
      ...analysis,
      id: rows[0].id,
      createdAt: rows[0].created_at
    });
  } catch (error) {
    console.error('Analysis error:', error);
    res.status(500).json({ 
      error: 'Analysis failed',
      details: error.message
    });
  }
});

// GET /api/skin/history
router.get('/history', async (req, res) => {
  try {
    const { rows } = await db.query(
      `SELECT * FROM skin_analyses 
       ORDER BY created_at DESC 
       LIMIT 10`
    );
    
    res.json(rows.map(row => ({
      id: row.id,
      imageUrl: row.image_url,
      skinType: row.skin_type,
      concerns: row.concerns,
      analysisResults: row.analysis_results,
      createdAt: row.created_at
    })));
  } catch (error) {
    console.error('History fetch error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch history',
      details: error.message
    });
  }
});

// Use either default export OR named exports, not both
export default router;
// OR if you prefer named exports:
// export { router as skinRouter };