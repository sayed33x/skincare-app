// src/utils/productRecommendation.js
import { products } from '../constants/products';

export const getRecommendedRoutine = (skinType, concerns, skinArea = 'face') => {
  const maxProducts = skinArea === 'face' ? 4 : 3;
  const mustHaveCategories = skinArea === 'face' 
    ? ['Cleanser', 'Sunscreen'] 
    : [];

  // Filter products by skin type and concerns
  let recommendations = products.filter(product => 
    (product.skinType.includes(skinType) || product.skinType.includes('All Skin Types')) &&
    concerns.some(concern => 
      product.concerns.some(pc => 
        pc.toLowerCase().includes(concern.toLowerCase())
      )
    )
  );

  // Prioritize must-have categories
  const mustHaves = mustHaveCategories.map(category => 
    recommendations.find(p => p.category === category)
  ).filter(Boolean);

  // Get remaining products (excluding must-haves)
  const remainingProducts = recommendations.filter(p => 
    !mustHaveCategories.includes(p.category)
  ).slice(0, maxProducts - mustHaves.length);

  return [...mustHaves, ...remainingProducts].filter(Boolean);
};