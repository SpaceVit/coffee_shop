import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroUpContainer}>
          <header>
            <h1>Coffe shop</h1>
            <p> Our coffe</p>
            <p> About us</p>
          </header>
        </div>
        <div className={styles.heroDownContainer}>
          <p> Contats</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
