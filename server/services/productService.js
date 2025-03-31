// services/productService.js
import db from '../db.js';

export const getProductsBySkinType = async (skinType) => {
  const { rows } = await db.query(
    `SELECT * FROM products 
     WHERE $1 = ANY(skin_type) OR 'All Skin Types' = ANY(skin_type)`,
    [skinType]
  );
  return rows;
};

export const getProductsByConcerns = async (concerns) => {
  const { rows } = await db.query(
    `SELECT * FROM products 
     WHERE concerns && $1`,
    [concerns]
  );
  return rows;
};