import React from 'react';
import './VisaGuidProcess.css';
import { Link } from 'react-router-dom';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ExploreIcon from '@mui/icons-material/Explore';
import NextPlanIcon from '@mui/icons-material/NextPlan';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import { useTranslation } from "react-i18next";

function VisaGuidProcess() {

  const { t } = useTranslation();

  return (
    <div className='visaGuidProcess'>
        <h1 className='visaAssistProcess__title'>{t('guideProcess_title')}</h1>
      <hr className='visaAssistProcess__hr'/>
      
        <p className='visaAssistProcess__pr'>{t('guideProcess_text')}</p>
        <ul className='visaAssistProcess__ul'>    
          <li><ExploreIcon className='visaGuidProcess__icon1'/> {t('guideProcess_li1')} </li>
          <li><PriorityHighIcon className='visaGuidProcess__icon1'/> {t('guideProcess_li2')} </li>
          <li><GTranslateIcon className='visaGuidProcess__icon1'/> {t('guideProcess_li3')} </li>
          <li><FormatAlignLeftIcon className='visaGuidProcess__icon1'/> {t('guideProcess_li4')} </li>
          <li><MeetingRoomIcon className='visaGuidProcess__icon1'/> {t('guideProcess_li5')} </li>
          <li><CreditScoreIcon className='visaGuidProcess__icon1'/> {t('guideProcess_li6')} </li>
      </ul>
      <h2 className='visaAssistProcess__or'>{t('guideProcess_or')}</h2>
      <p className='visaAssistProcess__pr'>{t('guideProcess_request')} <Link className='visaGuidProcess__link' to='/visa-assist'>{t('assist_card')}</Link> {t('guideProcess_subText')}</p>
      <p className='visaAssistProcess__pr'> {t('guideProcess_subText2')}</p>
      <div className='visaGuidProcess__icon__container'><ExploreIcon className='visaGuidProcess__icon2'/><NextPlanIcon className='visaGuidProcess__icon2'/><SupportAgentIcon className='visaGuidProcess__icon2'/><FormatAlignLeftIcon className='visaGuidProcess__icon2'/><MeetingRoomIcon className='visaGuidProcess__icon2'/><CreditScoreIcon className='visaGuidProcess__icon2'/></div>
    </div>
  )
}

export default VisaGuidProcess