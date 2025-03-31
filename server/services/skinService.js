// services/skinService.js - Updated Version
import { getProductsBySkinType, getProductsByConcerns } from './productService.js';

export const analyzeSkin = async (imageUrl, skinType, concerns) => {
  // Validate input
  if (!imageUrl || !skinType || !concerns) {
    throw new Error('Missing required parameters');
  }

  // Get products from database (connected to your actual product data)
  const [skinTypeProducts, concernProducts] = await Promise.all([
    getProductsBySkinType(skinType),
    getProductsByConcerns(concerns)
  ]);

  // Combine and deduplicate products
  const allProducts = [...new Map(
    [...skinTypeProducts, ...concernProducts].map(p => [p.id, p])
  ).values()];

  // Categorize products into routine steps
  const categorizeProducts = (products) => ({
    cleansers: products.filter(p => p.category.toLowerCase().includes('cleans')),
    treatments: products.filter(p => 
      p.category.toLowerCase().includes('treatment') || 
      p.category.toLowerCase().includes('serum')
    ),
    moisturizers: products.filter(p => p.category.toLowerCase().includes('moisturiz')),
    sunscreens: products.filter(p => p.category.toLowerCase().includes('sunscreen'))
  });

  const categorized = categorizeProducts(allProducts);

  return {
    imageUrl,
    skinType,
    concerns,
    analysisResults: {
      hydrationLevel: calculateHydration(skinType),
      sensitivityScore: calculateSensitivity(concerns),
      recommendedProducts: allProducts,
      routine: {
        morning: [
          ...categorized.cleansers.slice(0, 1),
          ...categorized.treatments,
          ...categorized.moisturizers.slice(0, 1),
          ...categorized.sunscreens.slice(0, 1)
        ],
        evening: [
          ...categorized.cleansers.slice(0, 1),
          ...categorized.treatments,
          ...categorized.moisturizers.slice(0, 1)
        ]
      }
    }
  };
};

// ... keep the existing helper functions ...