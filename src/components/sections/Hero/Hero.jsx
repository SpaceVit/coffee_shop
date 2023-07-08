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
              <a href="#Our" className={styles.heroText}>
                Our coffee
              </a>
              <a href="#About" className={styles.heroText}>
                About us
              </a>
            </div>
          </header>
        </div>
        <div className={styles.heroDownContainer}>
          <a href="#Contacts" className={styles.heroText}>
            Contacts
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
