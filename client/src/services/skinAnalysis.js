// src/services/skinAnalysis.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://generativelanguage.googleapis.com/v1beta/models',
    timeout: 10000, // Increased timeout
});

const geminiModel = 'gemini-2.0-flash'; // Use gemini-2.0-flash
export const analyzeSkinWithAI = async ({ skinType, concerns, skinArea }) => {
    // Debugging - remove in production
    console.log('[DEBUG] Environment variables:', {
        apiKeyPresent: !!process.env.REACT_APP_GEMINI_API_KEY,
        baseURL: api.defaults.baseURL
    });

    // Check for API key
    if (!process.env.REACT_APP_GEMINI_API_KEY) {
        console.error('Gemini API key is missing in environment variables');
        return getFallbackAnalysis(skinType, concerns, skinArea);
    }

    // Structured prompt for better results
    const prompt = `
  Act as a board-certified dermatologist. Provide detailed skincare recommendations in MARKDOWN format for:
  
  **Patient Profile:**
  - Skin Type: ${skinType}
  - Primary Concerns: ${concerns.join(', ')}
  - Treatment Area: ${skinArea}
  
  Include these sections:
  
  ## Recommended Routine
  ### Morning:
  1. Cleanser: 
  2. Treatment: 
  3. Moisturizer: 
  4. Sunscreen: 
  
  ### Evening:
  1. Cleanser: 
  2. Treatment: 
  3. Moisturizer: 
  
  ## Key Ingredients
  - For ${skinType} skin: 
  - For ${concerns.join(' and ')}: 
  
  ## Professional Advice
  - Lifestyle tips:
  - What to avoid:
  
  Format the response with clear markdown headers and bullet points.
  `;

    try {
        console.log('[DEBUG] Sending request to Gemini API...');

        const response = await api.post(
            `/${geminiModel}:generateContent?key=${process.env.REACT_APP_GEMINI_API_KEY}`,
            {
                contents: [{
                    parts: [{ text: prompt }],
                    role: "user"
                }],
                generationConfig: {
                    temperature: 0.7,
                    topP: 0.9
                }
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        );

        console.log('[DEBUG] Gemini API response:', response.data);

        // Handle Gemini's response structure
        const geminiResponse = response.data;
        if (!geminiResponse.candidates?.[0]?.content?.parts?.[0]?.text) {
            console.error('Unexpected response structure:', geminiResponse);
            return getFallbackAnalysis(skinType, concerns, skinArea);
        }

        const analysisResult = geminiResponse.candidates[0].content.parts[0].text;
        return analysisResult || getFallbackAnalysis(skinType, concerns, skinArea);

    } catch (error) {
        console.error('API Request Failed:', {
            error: error.message,
            response: error.response?.data,
            status: error.response?.status
        });
        return handleAnalysisError(error, skinType, concerns, skinArea);
    }
};

// Fallback content generator
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

// Error handler with Gemini-specific cases
const handleAnalysisError = (error, skinType, concerns, skinArea) => {
    let errorMessage = '⚠️ Analysis unavailable. Showing basic recommendations.';

    if (error.response) {
        const geminiError = error.response.data?.error;
        errorMessage = geminiError?.message || `API Error (${error.response.status})`;

        switch (error.response.status) {
            case 400:
                errorMessage = "Invalid request to Gemini API. Check your prompt structure.";
                break;
            case 403:
                errorMessage = "Authentication failed. Verify your API key.";
                break;
            case 429:
                errorMessage = "Rate limit exceeded. Please wait before trying again.";
                break;
            case 503:
                errorMessage = "Gemini service unavailable. Try again later.";
                break;
        }
    } else if (error.code === 'ECONNABORTED') {
        errorMessage = "Request timeout. Check your internet connection.";
    }

    return `
  ${errorMessage}
  
  ${getFallbackAnalysis(skinType, concerns, skinArea)}
  `;
};

// Ingredient suggestions database
function getIngredientSuggestions(skinType, concerns) {
    const suggestions = {
        'Dry': ['hyaluronic acid', 'ceramides', 'squalane', 'shea butter'],
        'Oily': ['niacinamide', 'salicylic acid', 'zinc PCA', 'clay extracts'],
        'Combination': ['mandelic acid', 'green tea extract', 'alpha-arbutin'],
        'Sensitive': ['oat extract', 'allantoin', 'panthenol', 'centella asiatica'],
        'Normal': ['antioxidants', 'peptides', 'vitamin E', 'ferulic acid']
    };

    let base = suggestions[skinType] || ['vitamin C', 'glycerin', 'aloe vera'];

    // Concern-specific additions
    const concernMap = {
        'Acne': ['tea tree oil', 'benzoyl peroxide', 'azelaic acid'],
        'Aging': ['retinol', 'matrixyl', 'bakuchiol', 'coenzyme Q10'],
        'Dullness': ['vitamin C', 'licorice root extract', 'glycolic acid'],
        'Large Pores': ['niacinamide', 'witch hazel', 'retinoids'],
        'Redness': ['centella asiatica', 'aloe vera', 'chamomile extract']
    };

    concerns.forEach(concern => {
        if (concernMap[concern]) {
            base.push(...concernMap[concern]);
        }
    });

    return [...new Set(base)].slice(0, 6).join(', ');
}