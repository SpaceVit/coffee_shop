import React from 'react';
import styles from './AboutUs.module.scss';
import SocialLinkList from 'components/share/SocialLinkList';

const AboutUs = () => {
  return (
    <div id="About" className={styles.aboutUsContainer}>
      <h2>ABOUT US</h2>
      <p>Ласкаво просимо до кав'ярні "Ароматна Оаза" - місце, де кожна чашка кави стає справжнім відкриттям для вашого смаку та задоволення. Наша мета – створити затишну атмосферу, де кожен гість може насолодитися чудовою кавою та відпочити від суєти повсякденності. Ми пишаємось нашим широким вибором кавових напоїв, від традиційного еспресо до авторських сумішей, створених спеціально для наших відвідувачів. Наші бариста – справжні майстри своєї справи, готові задовольнити найвишуканіший смак та побажання наших гостей.</p>
      <SocialLinkList id="Contacts"/>
    </div>
  );
};

export default AboutUs;
