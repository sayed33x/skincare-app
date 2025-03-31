// src/services/api.js
import axios from 'axios';

// Base URL for your API (adjust according to your backend)
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Skin Analysis API Calls
export const skinAnalysisApi = {
  analyzeSkin: async (skinData) => {
    try {
      const response = await api.post('/skin/analyze', skinData);
      return response.data;
    } catch (error) {
      console.error('Skin analysis error:', error);
      throw error.response?.data || { error: 'Analysis failed' };
    }
  },
  getAnalysisHistory: async () => {
    try {
      const response = await api.get('/skin/history');
      return response.data;
    } catch (error) {
      console.error('History fetch error:', error);
      throw error.response?.data || { error: 'Failed to fetch history' };
    }
  }
};

// Product API Calls
export const productApi = {
  getProducts: async () => {
    try {
      const response = await api.get('/products');
      return response.data;
    } catch (error) {
      console.error('Products fetch error:', error);
      throw error.response?.data || { error: 'Failed to fetch products' };
    }
  },
  searchProducts: async (query) => {
    try {
      const response = await api.get('/products/search', { params: { q: query } });
      return response.data;
    } catch (error) {
      console.error('Product search error:', error);
      throw error.response?.data || { error: 'Search failed' };
    }
  }
};

// Add interceptors if needed
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Handle unauthorized requests
      console.warn('Authentication required');
    }
    return Promise.reject(error);
  }
);

export default api;