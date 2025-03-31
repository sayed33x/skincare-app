// src/services/skinAnalysis.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.deepseek.com/v1',
  timeout: 8000,
});

export const analyzeSkinWithAI = async ({ skinType, concerns, skinArea }) => {
  // Check for API key first
  if (!process.env.REACT_APP_DEEPSEEK_API_KEY) {
    console.error('DeepSeek API key is missing');
    return getFallbackAnalysis(skinType, concerns, skinArea);
  }

  const prompt = `...`; // Keep your existing prompt

  try {
    const response = await api.post('/chat/completions', {
      model: 'deepseek-chat',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: 500
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_DEEPSEEK_API_KEY}`,
      }
    });

    return response.data.choices[0].message.content || 
           getFallbackAnalysis(skinType, concerns, skinArea);

  } catch (error) {
    console.error('AI Analysis Error:', error);
    return handleAnalysisError(error, skinType, concerns, skinArea);
  }
};

// Improved fallback content
const getFallbackAnalysis = (skinType, concerns, skinArea) => {
  return `
  ✨ **Basic Skin Advice** ✨
  
  **Skin Type:** ${skinType}
  **Main Concerns:** ${concerns.join(', ')}
  **Area:** ${skinArea}
  
  **Recommended Care:**
  - Cleanse with a gentle ${skinArea === 'face' ? 'facial' : 'body'} cleanser
  - Use non-comedogenic products
  - ${skinArea === 'face' ? 'Apply SPF 30+ daily' : 'Moisturize after showering'}
  
  **Key Ingredients to Look For:**
  ${getIngredientSuggestions(skinType, concerns)}
  
  _For personalized analysis, please check your API configuration and try again._
  `;
};

// Enhanced error handler
const handleAnalysisError = (error, skinType, concerns, skinArea) => {
  let errorMessage = '';
  
  if (error.response) {
    switch (error.response.status) {
      case 401:
        errorMessage = "🔐 Authentication failed. Please check your API key configuration.";
        break;
      case 429:
        errorMessage = "⏳ Too many requests. Please wait before trying again.";
        break;
      case 500:
        errorMessage = "🛠️ Our skin analysis service is temporarily unavailable.";
        break;
      default:
        errorMessage = "⚠️ Analysis unavailable. Showing basic recommendations instead.";
    }
  } else if (error.request) {
    errorMessage = "🌐 Network error. Please check your internet connection.";
  } else {
    errorMessage = "⚠️ Unexpected error. Showing basic recommendations.";
  }

  return `
  ${errorMessage}
  
  ${getFallbackAnalysis(skinType, concerns, skinArea)}
  `;
};

// Helper function for ingredient suggestions
function getIngredientSuggestions(skinType, concerns) {
  const suggestions = {
    'Dry': ['hyaluronic acid', 'ceramides', 'squalane'],
    'Oily': ['niacinamide', 'salicylic acid', 'zinc PCA'],
    'Combination': ['mandelic acid', 'green tea extract'],
    'Sensitive': ['oat extract', 'allantoin', 'panthenol'],
    'Normal': ['antioxidants', 'peptides']
  };

  let base = suggestions[skinType] || ['vitamin C', 'glycerin'];
  
  if (concerns.includes('Acne')) {
    base.push('tea tree oil', 'benzoyl peroxide (spot treatment)');
  }
  if (concerns.includes('Aging')) {
    base.push('retinol', 'matrixyl');
  }

  return base.slice(0, 4).join(', ');
}