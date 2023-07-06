import React from 'react';
import ApprovalIcon from '@mui/icons-material/Approval';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import styles from '../styles/About.module.css';
import { useTranslation } from 'next-i18next';
import Hands from '../assets/images/hands.jpg';
import Image from 'next/image';

function About() {

  const { t } = useTranslation();

  return (
    <div id="about" className={styles.about}>
      <div className={styles.about__frame}>
          <h2 className={styles.about__title}>{t('about_title')}</h2>
          <p className={styles.about__presentation}>{t('about_desc')}</p>
          <ul className={styles.about__ul}>
            <li className={styles.about__li}><SupportAgentIcon className={styles.about__icon}/> {t('about_li1')}</li>
            <li className={styles.about__li}><LightbulbIcon className={styles.about__icon}/> {t('about_li2')}</li>
            <li className={styles.about__li}><FormatAlignLeftIcon className={styles.about__icon}/> {t('about_li3')}</li>
            <li className={styles.about__li}><FactCheckIcon className={styles.about__icon}/> {t('about_li4')}</li>
            <li className={styles.about__li}><ApprovalIcon className={styles.about__icon}/> {t('about_li5')}</li>
          </ul>
      </div>
      <Image className={styles.about__image} src={Hands} alt='hands' />
    </div>
  )
}

export default About;