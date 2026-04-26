import React from 'react';
import styles from '../styles/PremSideBar.module.css';
import ApprovalIcon from '@mui/icons-material/Approval';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { useTranslation } from 'next-i18next';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FlightIcon from '@mui/icons-material/Flight';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AddTaskIcon from '@mui/icons-material/AddTask';

function PremSideBar() {

  const { t } = useTranslation();

  return (
    <div className={styles.premSideBar}>
        <h1 className={styles.premSideBar__title}>{t('prem_header')}</h1>
        <h2 className={styles.premSideBar__pr}> {t('prem_subtitle')} </h2>
      <ul className={styles.premSideBar__ul}>
          <li className={styles.premSideBar__li}><ApprovalIcon className={styles.premSideBar__icons}/> {t('prem_li1')} </li>
          <li className={styles.premSideBar__li}><FormatAlignLeftIcon className={styles.premSideBar__icons}/> {t('prem_li2')} </li>
          <li className={styles.premSideBar__li}><FingerprintIcon className={styles.premSideBar__icons}/> {t('prem_li3')} </li>
          <li className={styles.premSideBar__li}><SupportAgentIcon className={styles.premSideBar__icons}/> {t('prem_li4')} </li>
          <li className={styles.premSideBar__li}><LightbulbIcon className={styles.premSideBar__icons}/> {t('prem_li5')} </li>
          <li className={styles.premSideBar__li}><AddTaskIcon className={styles.premSideBar__icons}/> {t('prem_li6')} </li>
      </ul>
      <h2 className={styles.premSideBar__pr}>{t('prem_price')}</h2>
      <p className={styles.premSideBar__note}>{t('prem_note')}</p>

      <div className={styles.premuimSupport__sidebar__bx}>
            <h2>{t('premSupport_header')}</h2>
            <div className={styles.premsideBar__icons__bx}>
                <TravelExploreIcon className={styles.premuimSupport__icon}/> 
                <FlightIcon className={styles.premuimSupport__icon}/> 
                <MenuBookIcon className={styles.premuimSupport__icon}/>
            </div>
          </div>
    </div>
  )
}

export default PremSideBar