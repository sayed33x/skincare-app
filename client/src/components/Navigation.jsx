import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = ({ showProducts = false }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logo}>SkinCareAI</Link>
        <div className={styles.navLinks}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/skin-analysis" className={styles.navLink}>Analysis</Link>
          {showProducts && (
            <Link to="/products" className={styles.navLink}>Products</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;