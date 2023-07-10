import React from 'react';
import styles from './OurCoffee.module.scss';
import icons from '../../../images/icons.svg';

const OurCoffee = () => {
  const screenWidth = window.screen.width;
  console.log(screenWidth)

  return (
    <div className={styles.ourCoffeeSection}>

      <div className={styles.ourCoffeeUpContainer}>
       
        <div className={styles.ourCoffeeLeftPart}> 
          <div className={styles.paperCupBoxTab}>
            <svg className={styles.paperCupIcon}>
              <use href={icons + '#icon-coffee2'} />
            </svg>
            <p className={styles.paperCupIconDescription}>to go</p>
          </div>
          <div className={styles.mugBox}>
           <svg className={styles.mugIcon}>
             <use href={icons + '#icon-coffee3'} />
           </svg>
           <p className={styles.mugIconDescription}> at home</p>
         </div>
        </div>
        
        <div className={styles.ourCoffeeRightPart}>
         <h1 id="Our" className={styles.ourCoffeeTitle}>
            OUR COFFEE
          </h1>
          <p className={styles.ourCoffeeText}>
            Lorem ipsum dolor sit amet consectetur.
            Adipiscing sodales neque vestibulum tincidunt nibh. In nibh quis quis pellentesque. Amet a maecenas varius sit volutpat quam euismod vulputate
            aliquam. Semper leo morbi ut mattis orci auctor vitae.
          </p> 
        </div>
          
      </div>
    
      <div className={styles.ourCoffeeDownContainer}>
        <div className={styles.paperCupBox}>
          <svg className={styles.paperCupIcon}>
            <use href={icons + '#icon-coffee2'} />
          </svg>
          <p className={styles.paperCupIconDescription}>to go</p>
        </div>
        <div className={styles.cupBox}>
          <p className={styles.cupIconDescription}>in cafe</p>
          <svg className={styles.cupIcon}>
            <use href={icons + '#icon-coffee1'} />
          </svg>
        </div>
        <div className={styles.teapotBox}>
          <svg className={styles.teapotIcon}>
            <use href={icons + '#icon-coffee4'} />
          </svg>
          <p className={styles.teapotIconDescription}>at home</p>
        </div>
      </div>
    </div>
  );
};

export default OurCoffee;



        // <div className={styles.leftBox}>
        //   <svg className={styles.mugIcon}>
        //     <use href={icons + '#icon-coffee3'} />
        //   </svg>
        //   <p className={styles.mugIconDescription}> at home</p>
        // </div>


      //   <div className={styles.ourCoffeeDownContainer}>
      //   <div className={styles.paperCupBox}>
      //     <svg className={styles.paperCupIcon}>
      //       <use href={icons + '#icon-coffee2'} />
      //     </svg>
      //     <p className={styles.paperCupIconDescription}>to go</p>
      //   </div>
      //   <div className={styles.cupBox}>
      //     <p className={styles.cupIconDescription}>in cafe</p>
      //     <svg className={styles.cupIcon}>
      //       <use href={icons + '#icon-coffee1'} />
      //     </svg>
      //   </div>
      // </div>