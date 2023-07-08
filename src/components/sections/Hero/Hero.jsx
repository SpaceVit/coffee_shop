import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroUpContainer}>
          <header className={styles.heroHeader}>
            <h1 className={styles.heroTitle}>Coffe shop</h1>
            <div className={styles.heroTextWrapper}>
              <p className={styles.heroText}> Our coffe</p>
              <p className={styles.heroText}> About us</p>
            </div>
          </header>
        </div>
        <div className={styles.heroDownContainer}>
          <p className={styles.heroText}> Contats</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
