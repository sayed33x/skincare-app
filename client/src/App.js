// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SkinAnalysisWizard from './components/SkinAnalysis/SkinAnalysisWizard';
import Products from './components/Products';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skin-analysis" element={<SkinAnalysisWizard />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;