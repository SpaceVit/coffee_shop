import React from 'react';
import styles from './AboutUs.module.scss';
import SocialLinkList from 'components/share/SocialLinkList';

const AboutUs = () => {
  return (
    <div id="About" className={styles.aboutUsContainer}>
      <h2>ABOUT US</h2>
      <p>Добро пожаловать в кофейню "Ароматная Оазис" - место, где каждая чашка кофе становится настоящим открытием для вашего вкуса и удовольствия. Наша цель - создать уютную атмосферу, где каждый гость может насладиться превосходным кофе и отдохнуть от суеты повседневности. Мы гордимся нашим широким выбором кофейных напитков, от традиционного эспрессо до авторских смесей, которые созданы специально для наших посетителей. Наши бариста - настоящие мастера своего дела, готовые удовлетворить самый изысканный вкус и пожелания наших гостей.
</p>
      <SocialLinkList id="Contacts"/>
    </div>
  );
};

export default AboutUs;
