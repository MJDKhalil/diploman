import React from 'react';
import './VisaAssistProcess.css';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { useTranslation } from "react-i18next";


function VisaAssistProcess() {

  const { t } = useTranslation();

  return (
    <div className='visaAssistProcess'>
      <h2 className='visaAssistProcess__title'>{t('vaProcess_title')}</h2>
      <h2 className='visaAssistProcess__title2'>{t('vaProcess_li1')}</h2>
      <ul className='visaAssistProcess__ul'>
          <li><FactCheckIcon className='visaAssistProcess__icons'/> {t('vaProcess_li2')} </li>
          <li><FormatAlignLeftIcon className='visaAssistProcess__icons'/> {t('vaProcess_li3')} </li>
          <li><FingerprintIcon className='visaAssistProcess__icons'/> {t('vaProcess_li4')} </li>
          <li><LightbulbIcon className='visaAssistProcess__icons'/> {t('vaProcess_li5')} </li>
      </ul>
      <h2 className='visaAssistProcess__title2'>{t('vaProcess_subtitle')}</h2>
      <h2 className="visaAssistProcess__title2">{t('va_title')}</h2>
      <p className='visaAssistProcess__note'>{t('vaProcess_note')}</p>
      
    </div>
  )
}

export default VisaAssistProcess