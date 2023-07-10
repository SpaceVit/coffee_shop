import React from 'react';
import styles from './AboutUs.module.scss';
import SocialLinkList from 'components/share/SocialLinkList';

const AboutUs = () => {
  return (
    <div id="About" className={styles.aboutUsContainer}>
      <h2>ABOUT US</h2>
      <p>Lorem ipsum dolor sit amet consectetur. Adipiscing sodales neque vestibulum tincidunt nibh. In nibh quis quis pellentesque. Amet a maecenas varius sit volutpat quam euismod vulputate aliquam. Semper leo morbi ut mattis orci auctor vitae.</p>
      <SocialLinkList id="Contacts"/>
    </div>
  );
};

export default AboutUs;
