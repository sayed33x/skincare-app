import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  // Create image filename from product name
  const getImageFilename = (productName) => {
    return productName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '') + '.jpg';
  };

  const imageFilename = getImageFilename(product.name);
  const imagePath = `/images/products/${imageFilename}`;
  const placeholderPath = '/images/placeholder-product.jpg';

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img 
          src={imagePath} 
          alt={product.name}
          className={styles.image}
          onError={(e) => {
            e.target.src = placeholderPath;
            e.target.onerror = null;
          }}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.brand}>{product.brand}</p>
        <p className={styles.size}>{product.size}</p>
        <p className={styles.category}>{product.category}</p>
      </div>
    </div>
  );
};

export default ProductCard;