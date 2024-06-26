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
          Наша кав'ярня пропонує вам найвишуканіші сорти кави, які тільки можна знайти.
<br/>Ми приймаємо особливу турботу про кожне зерно, щоб воно стало ідеальним інгредієнтом для наших неповторних напоїв.
<br/>Наші бариста майстерно обсмажують зерна кави, розкриваючи унікальні ноти та аромати кожного сорту. 
<br/>Ми впевнені, що справжнє задоволення від кави починається з уважної обробки кожного кроку – від відбору сортів до приготування напою.
<br/>У нашому меню ви знайдете класичні сорти кави, такі як Арабіка та Робуста, а також ексклюзивні суміші та кавові напої з авторськими добавками. Ми впевнені, що кожен відвідувач знайде у нас напій на свій смак.
<br/>Приєднуйтесь до нас, щоб поринути у світ витонченого кавового мистецтва та насолодитися багатством смаку та аромату, які тільки справжня кава може запропонувати. У вашому розпорядженні – найкращі сорти кави з усього світу, створені з любов'ю до кавового мистецтва.
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