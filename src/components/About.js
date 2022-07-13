import React from 'react';
import ApprovalIcon from '@mui/icons-material/Approval';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import './About.css';
import { useTranslation } from "react-i18next";
import Hands from '../assets/images/hands.jpg';

function About() {

  const { t } = useTranslation();

  return (
    <div id="about" className='about'>
      <div className='about__frame'>
          <h2 className='about__title'>{t('about_title')}</h2>
          <p className='about__presentation'>{t('about_desc')}</p>
          <ul>
            <li className='about__li'><SupportAgentIcon className='about__icon'/> {t('about_li1')}</li>
            <li className='about__li'><LightbulbIcon className='about__icon'/> {t('about_li2')}</li>
            <li className='about__li'><FormatAlignLeftIcon className='about__icon'/> {t('about_li3')}</li>
            <li className='about__li'><FactCheckIcon className='about__icon'/> {t('about_li4')}</li>
            <li className='about__li'><ApprovalIcon className='about__icon'/> {t('about_li5')}</li>
          </ul>
      </div>
      <img className='about__image' src={Hands} alt='hands' />
    </div>
  )
}

export default About;