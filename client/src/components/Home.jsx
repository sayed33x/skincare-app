// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>SkinCareAI</h1>
        <h2 className={styles.heroSubtitle}>Your Personalized Skin Care Solution</h2>
        <p className={styles.heroText}>Get custom product recommendations based on your unique skin profile</p>
        
        <Link to="/skin-analysis" className={styles.ctaButton}>
          Start Skin Analysis
        </Link>
      </section>

      <section className={styles.features}>
        <div className={styles.featureCard}>
          <h3 className={styles.featureTitle}>AI-Powered Analysis</h3>
          <p className={styles.featureText}>Our advanced algorithm evaluates your skin type and concerns</p>
        </div>
        
        <div className={styles.featureCard}>
          <h3 className={styles.featureTitle}>Personalized Routine</h3>
          <p className={styles.featureText}>Get morning and evening routines tailored just for you</p>
        </div>
        
        <div className={styles.featureCard}>
          <h3 className={styles.featureTitle}>Science-Backed Products</h3>
          <p className={styles.featureText}>Recommendations from dermatologist-approved brands</p>
        </div>
      </section>
    </div>
  );
};

export default Home;