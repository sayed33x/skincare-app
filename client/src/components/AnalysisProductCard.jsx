// src/components/AnalysisProductCard.jsx
import React from 'react';
import styles from './AnalysisProductCard.module.css';

const AnalysisProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img 
          src={`/images/products/${product.imageUrl}`}
          alt={product.name}
          className={styles.image}
          onError={(e) => {
            e.target.src = '/images/placeholder-product.jpg';
            e.target.onerror = null;
          }}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{product.name}</h3>
        <div className={styles.details}>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Size:</strong> {product.size}</p>
          {product.bestFor && <p><strong>Best For:</strong> {product.bestFor}</p>}
          {product.keyIngredients && (
            <div className={styles.section}>
              <h4>Key Ingredients:</h4>
              <ul>
                {product.keyIngredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
            </div>
          )}
          {product.keyBenefits && (
            <div className={styles.section}>
              <h4>Key Benefits:</h4>
              <ul>
                {product.keyBenefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalysisProductCard;