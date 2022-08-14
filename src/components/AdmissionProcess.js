import React from 'react'
import './AdmissionProcess.css'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useTranslation } from "react-i18next";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FlightIcon from '@mui/icons-material/Flight';
import MenuBookIcon from '@mui/icons-material/MenuBook';

function AdmissionProcess() {

  const { t } = useTranslation();

  return (
    <div className='admissionProcess'>
      <h1 className='admissionProcess__title'> {t('admissionProcess_header')} <WbSunnyIcon className='ad__sunIcon'/> </h1>
      <span className='admissionProcess__span'>{t('admissionProcess_ul')}</span>
      <ul>
          <li className='admissionProcess__1st__li admissionProcess__li'><GroupWorkIcon className='admissionProcess__icons'/> {t('admissionProcess_li1')}</li>
          <li className='admissionProcess__li'><AddCircleOutlineIcon className='admissionProcess__icons'/> {t('admissionProcess_li2')}</li>
          <li className='admissionProcess__li'><AddCircleOutlineIcon className='admissionProcess__icons'/> {t('admissionProcess_li3')}</li>
      </ul>
      <p className='admissionProcess__note'>{t('admissionProcess_note1')}</p>
      <p className='admissionProcess__note'>{t('admissionProcess_note2')}</p>
 
        <h2 className='admissionProcess__title2'>{t('requestAdmission_header')} </h2>
        <div className='admissionProcess__icons__bx'>
            <TravelExploreIcon className='request__admission__icon'/> 
            <FlightIcon className='request__admission__icon'/> 
            <MenuBookIcon className='request__admission__icon'/>
        </div>
    </div>
  )
}

export default AdmissionProcess