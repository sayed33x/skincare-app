import React, { useState } from 'react';
import { products } from '../constants/products';
import styles from './Products.module.css';

const Products = () => {
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const handleImageError = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: 'error' }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>SkinCareAI</h1>
        <h2 className={styles.subtitle}>Our Products</h2>
      </div>
      
      <div className={styles.productsGrid}>
        {products.map(product => {
          const imagePath = `/images/products/${product.imageUrl}`;
          const isLoaded = loadedImages[product.id] === true;
          const isError = loadedImages[product.id] === 'error';

          return (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.imageContainer}>
                {!isLoaded && !isError && (
                  <div className={styles.imageLoader}>Loading...</div>
                )}
                {isError && (
                  <div className={styles.imageError}>Image not available</div>
                )}
                <img 
                  src={imagePath}
                  alt={product.name}
                  className={`${styles.productImage} ${isLoaded ? styles.visible : ''}`}
                  onLoad={() => handleImageLoad(product.id)}
                  onError={() => handleImageError(product.id)}
                  loading="lazy"
                />
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.name}</h3>
                <div className={styles.details}>
                  <p className={styles.brand}>{product.brand}</p>
                  <p className={styles.category}>{product.category}</p>
                  <p className={styles.size}>{product.size}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;