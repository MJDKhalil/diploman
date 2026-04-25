import React from 'react';
import styles from '../styles/VisaAssistProcess.module.css';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { useTranslation } from 'next-i18next';


function VisaAssistProcess() {

  const { t } = useTranslation();

  return (
    <div className={styles.visaAssistProcess}>
      <h2 className={styles.visaAssistProcess__title}>{t('vaProcess_title')}</h2>
      <h2 className={styles.visaAssistProcess__title2}>{t('vaProcess_li1')}</h2>
      <ul className={styles.visaAssistProcess__ul}>
          <li className={styles.visaAssistProcess__li}><FactCheckIcon className={styles.visaAssistProcess__icons}/> {t('vaProcess_li2')} </li>
          <li className={styles.visaAssistProcess__li}><FormatAlignLeftIcon className={styles.visaAssistProcess__icons}/> {t('vaProcess_li3')} </li>
          <li className={styles.visaAssistProcess__li}><FingerprintIcon className={styles.visaAssistProcess__icons}/> {t('vaProcess_li4')} </li>
          <li className={styles.visaAssistProcess__li}><LightbulbIcon className={styles.visaAssistProcess__icons}/> {t('vaProcess_li5')} </li>
      </ul>
      <h2 className={styles.visaAssistProcess__title2}>{t('vaProcess_subtitle')}</h2>
      <h2 className={styles.visaAssistProcess__title2}>{t('va_title')}</h2>
      <p className={styles.visaAssistProcess__note}>{t('vaProcess_note')}</p>
      
    </div>
  )
}

export default VisaAssistProcess;