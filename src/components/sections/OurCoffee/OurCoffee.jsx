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
Наша кофейня предлагает вам самые изысканные сорта кофе, которые только можно найти.
<br/>Мы принимаем особую заботу о каждом зерне, чтобы оно стало идеальным ингредиентом для наших неповторимых напитков.
<br/>Наши бариста мастерски обжаривают зерна кофе, раскрывая уникальные ноты и ароматы каждого сорта. 
<br/>Мы убеждены, что истинное удовольствие от кофе начинается с внимательной обработки каждого шага – от отбора сортов до приготовления напитка.
<br/>В нашем меню вы найдете классические сорта кофе, такие как Арабика и Робуста, а также эксклюзивные смеси и кофейные напитки с авторскими добавками. Мы уверены, что каждый посетитель найдет у нас напиток по своему вкусу.
<br/>Присоединяйтесь к нам, чтобы погрузиться в мир утонченного кофейного искусства и насладиться богатством вкуса и аромата, которые только настоящий кофе может предложить. В вашем распоряжении - лучшие сорта кофе со всего мира, созданные с любовью к кофеиному искусству.
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