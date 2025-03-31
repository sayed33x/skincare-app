import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { skinTypes, commonConcerns } from '../../constants/products';
import { getRecommendedRoutine } from '../../utils/productRecommendation';
import { analyzeSkinWithAI } from '../../services/skinAnalysis';
import AnalysisProductCard from '../AnalysisProductCard';
import styles from './SkinAnalysisWizard.module.css';

const SkinAnalysisWizard = () => {
  const [step, setStep] = useState(1);
  const [skinType, setSkinType] = useState('');
  const [concerns, setConcerns] = useState([]);
  const [skinArea, setSkinArea] = useState('face');
  const [isLoading, setIsLoading] = useState(false);
  const [routine, setRoutine] = useState([]);
  const [aiAnalysis, setAiAnalysis] = useState('');
  const [aiError, setAiError] = useState(null);
  const navigate = useNavigate();

  const handleConcernToggle = (concern) => {
    setConcerns(prev => 
      prev.includes(concern) 
        ? prev.filter(c => c !== concern) 
        : [...prev, concern]
    );
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setAiError(null);
    
    try {
      // Get recommended products first (instant)
      const recommended = getRecommendedRoutine(skinType, concerns, skinArea);
      setRoutine(recommended);

      // Then get AI analysis (async)
      const analysis = await analyzeSkinWithAI({
        skinType,
        concerns,
        skinArea
      });
      setAiAnalysis(analysis);
      
      setStep(3);
    } catch (error) {
      console.error('Analysis error:', error);
      setAiError({
        message: "We couldn't complete your AI analysis",
        details: error.message.includes('401') 
          ? 'Please check your API configuration' 
          : 'Please try again later'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const renderAIAnalysis = () => {
    if (aiError) {
      return (
        <div className={styles.errorAlert}>
          <h3>AI Analysis:</h3>
          <p>⚠️ {aiError.message}</p>
          {aiError.details && <p className={styles.errorDetails}>{aiError.details}</p>}
          <div className={styles.fallbackAdvice}>
            <h4>Basic Recommendations:</h4>
            <ul>
              <li>Cleanse with a {skinArea === 'face' ? 'gentle facial' : 'body'} cleanser</li>
              <li>Use non-comedogenic products</li>
              {skinArea === 'face' && <li>Apply SPF 30+ daily</li>}
              <li>Moisturize regularly</li>
            </ul>
          </div>
        </div>
      );
    }

    if (!aiAnalysis) {
      return (
        <div className={styles.loadingPlaceholder}>
          <p>Generating AI analysis...</p>
        </div>
      );
    }

    return (
      <>
        <h3>AI Analysis:</h3>
        <div className={styles.aiAnalysis}>
          {aiAnalysis.split('\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.wizardContainer}>
        <h1 className={styles.title}>SkinCareAI</h1>
        
        {step === 1 && (
          <div className={styles.step}>
            <h2 className={styles.question}>What's your skin type?</h2>
            <div className={styles.skinTypeOptions}>
              {skinTypes.map(type => (
                <button
                  key={type}
                  type="button"
                  className={`${styles.skinTypeButton} ${skinType === type ? styles.active : ''}`}
                  onClick={() => setSkinType(type)}
                >
                  {type}
                </button>
              ))}
            </div>

            <h3 className={styles.question}>Skin Area Focus</h3>
            <div className={styles.skinAreaOptions}>
              <button
                type="button"
                className={`${styles.skinTypeButton} ${skinArea === 'face' ? styles.active : ''}`}
                onClick={() => setSkinArea('face')}
              >
                Face
              </button>
              <button
                type="button"
                className={`${styles.skinTypeButton} ${skinArea === 'body' ? styles.active : ''}`}
                onClick={() => setSkinArea('body')}
              >
                Body
              </button>
            </div>

            <button
              className={styles.primaryButton}
              disabled={!skinType}
              onClick={() => setStep(2)}
            >
              Continue to Skin Concerns
            </button>
          </div>
        )}

        {step === 2 && (
          <div className={styles.step}>
            <h2 className={styles.question}>Select your main concerns</h2>
            <div className={styles.concernsGrid}>
              {commonConcerns.map(concern => (
                <button
                  key={concern}
                  type="button"
                  className={`${styles.concernButton} ${concerns.includes(concern) ? styles.selected : ''}`}
                  onClick={() => handleConcernToggle(concern)}
                >
                  {concern}
                </button>
              ))}
            </div>
            <div className={styles.buttonGroup}>
              <button 
                className={styles.secondaryButton}
                onClick={() => setStep(1)}
              >
                Back
              </button>
              <button
                className={styles.primaryButton}
                disabled={concerns.length === 0 || isLoading}
                onClick={handleSubmit}
              >
                {isLoading ? (
                  <span className={styles.loadingText}>
                    <span className={styles.spinner}></span> Analyzing...
                  </span>
                ) : (
                  'Analyze My Skin'
                )}
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className={styles.results}>
            <h2 className={styles.resultsTitle}>Your Skin Analysis Results</h2>
            
            <div className={styles.resultSummary}>
              <div className={styles.resultCard}>
                <h3>Skin Type: <span className={styles.highlight}>{skinType}</span></h3>
                <h3>Main Concerns:</h3>
                <ul className={styles.concernsList}>
                  {concerns.map(concern => (
                    <li key={concern}>{concern}</li>
                  ))}
                </ul>
                {renderAIAnalysis()}
              </div>
            </div>

            <h3 className={styles.recommendationsTitle}>
              Recommended Routine ({routine.length} {skinArea === 'face' ? 'face' : 'body'} products)
            </h3>
            {routine.length > 0 ? (
              <div className={styles.productsGrid}>
                {routine.map(product => (
                  <AnalysisProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <p className={styles.noProducts}>No products match your criteria</p>
            )}

            <div className={styles.resultActions}>
              <button 
                className={styles.secondaryButton}
                onClick={() => setStep(1)}
              >
                Start New Analysis
              </button>
              <button 
                className={styles.primaryButton}
                onClick={() => navigate('/')}
              >
                Return to Home
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkinAnalysisWizard;