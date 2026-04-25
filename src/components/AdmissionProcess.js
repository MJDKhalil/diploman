import React from 'react'
import styles from '../styles/AdmissionProcess.module.css'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useTranslation } from 'next-i18next';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FlightIcon from '@mui/icons-material/Flight';
import MenuBookIcon from '@mui/icons-material/MenuBook';

function AdmissionProcess() {

  const { t } = useTranslation();

  return (
    <div className={styles.admissionProcess}>
      <h1 className={styles.admissionProcess__title}> {t('admissionProcess_header')} <WbSunnyIcon className={styles.ad__sunIcon}/> </h1>
      <span className={styles.admissionProcess__span}>{t('admissionProcess_ul')}</span>
      <ul>
          <li className={styles['admissionProcess__1st__li']+' '+styles['admissionProcess__li']}><GroupWorkIcon className={styles.admissionProcess__icons}/> {t('admissionProcess_li1')}</li>
          <li className={styles.admissionProcess__li}><AddCircleOutlineIcon className={styles.admissionProcess__icons}/> {t('admissionProcess_li2')}</li>
          <li className={styles.admissionProcess__li}><AddCircleOutlineIcon className={styles.admissionProcess__icons}/> {t('admissionProcess_li3')}</li>
      </ul>
      <p className={styles.admissionProcess__note}>{t('admissionProcess_note1')}</p>
      <p className={styles.admissionProcess__note}>{t('admissionProcess_note2')}</p>
 
      <h2 className={styles.admissionProcess__title2}>{t('requestAdmission_header')} </h2>
      <div className={styles.admissionProcess__icons__bx}>
          <TravelExploreIcon className={styles.request__admission__icon}/> 
          <FlightIcon className={styles.request__admission__icon}/> 
          <MenuBookIcon className={styles.request__admission__icon}/>
      </div>
    </div>
  )
}

export default AdmissionProcess