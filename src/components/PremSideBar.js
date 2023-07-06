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
        <h1 className='premSideBar__title'>{t('prem_header')}</h1>
        <h2 className='premSideBar__pr'> {t('prem_subtitle')} </h2>
      <ul className='premSideBar__ul'>
          <li className='premSideBar__li'><ApprovalIcon className='premSideBar__icons'/> {t('prem_li1')} </li>
          <li className='premSideBar__li'><FormatAlignLeftIcon className='premSideBar__icons'/> {t('prem_li2')} </li>
          <li className='premSideBar__li'><FingerprintIcon className='premSideBar__icons'/> {t('prem_li3')} </li>
          <li className='premSideBar__li'><SupportAgentIcon className='premSideBar__icons'/> {t('prem_li4')} </li>
          <li className='premSideBar__li'><LightbulbIcon className='premSideBar__icons'/> {t('prem_li5')} </li>
          <li className='premSideBar__li'><AddTaskIcon className='premSideBar__icons'/> {t('prem_li6')} </li>
      </ul>
      <h2 className='premSideBar__pr'>{t('prem_price')}</h2>
      <p className='premSideBar__note'>{t('prem_note')}</p>

      <div className='premuimSupport__sidebar__bx'>
            <h2>{t('premSupport_header')}</h2>
            <div className='premsideBar__icons__bx'>
                <TravelExploreIcon className='premuimSupport__icon'/> 
                <FlightIcon className='premuimSupport__icon'/> 
                <MenuBookIcon className='premuimSupport__icon'/>
            </div>
          </div>
    </div>
  )
}

export default PremSideBar