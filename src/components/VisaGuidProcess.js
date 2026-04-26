import React from 'react';
import styles from '../styles/VisaGuidProcess.module.css';
import Link from 'next/link';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ExploreIcon from '@mui/icons-material/Explore';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import { useTranslation } from 'next-i18next';

function VisaGuidProcess() {

  const { t } = useTranslation();

  return (
    <div className={styles.visaGuidProcess}>
        <h1 className={styles.visaAssistProcess__title}>{t('guideProcess_title')}</h1>
      <hr className={styles.visaAssistProcess__hr}/>
      
        <p className={styles.visaAssistProcess__pr}>{t('guideProcess_text')}</p>
        <ul className={styles.visaAssistProcess__ul}>    
          <li><ExploreIcon className={styles.visaGuidProcess__icon1}/> {t('guideProcess_li1')} </li>
          <li><PriorityHighIcon className={styles.visaGuidProcess__icon1}/> {t('guideProcess_li2')} </li>
          <li><GTranslateIcon className={styles.visaGuidProcess__icon1}/> {t('guideProcess_li3')} </li>
          <li><FormatAlignLeftIcon className={styles.visaGuidProcess__icon1}/> {t('guideProcess_li4')} </li>
          <li><MeetingRoomIcon className={styles.visaGuidProcess__icon1}/> {t('guideProcess_li5')} </li>
          <li><CreditScoreIcon className={styles.visaGuidProcess__icon1}/> {t('guideProcess_li6')} </li>
      </ul>
      <h2 className={styles.visaAssistProcess__or}>{t('guideProcess_or')}</h2>
      <p className={styles.visaAssistProcess__pr}>{t('guideProcess_request')} <Link className={styles.visaGuidProcess__link} href='/Visa-assist'>{t('assist_card')}</Link> {t('guideProcess_subText')}</p>
      <p className={styles.visaAssistProcess__pr}> {t('guideProcess_subText2')}</p>
      <div className={styles.visaGuidProcess__icon__container}><ExploreIcon className={styles.visaGuidProcess__icon2}/><NextPlanIcon className={styles.visaGuidProcess__icon2}/><SupportAgentIcon className={styles.visaGuidProcess__icon2}/><FormatAlignLeftIcon className={styles.visaGuidProcess__icon2}/><MeetingRoomIcon className={styles.visaGuidProcess__icon2}/><CreditScoreIcon className={styles.visaGuidProcess__icon2}/></div>
    </div>
  )
};

export default VisaGuidProcess;