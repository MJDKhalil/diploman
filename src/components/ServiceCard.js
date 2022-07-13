import React from 'react';
import './ServiceCard.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MaltaImage from '../assets/images/malta.jpg';
import UkImage from '../assets/images/uk.jpg';
import UsaImage from '../assets/images/usa.jpg';
import CaImage from '../assets/images/canada.jpg';
import { useTranslation } from "react-i18next";
import CheckIcon from '@mui/icons-material/Check';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { Link } from 'react-router-dom';
import { Collapse } from '@mui/material';
import useWindowPosition  from '../hocs/useWindowPosition';


function ServiceCard() {

  const { t } = useTranslation();
  const checked = useWindowPosition('headerEmo');
    
  return (
    <div className='serviceCard'>
        <h2 id="services" className='serviceCard__mainTitle'>{t('serviceCard_title')}</h2>
        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
          <div className='serviceCard__container'>
              <Card className='serviceCard__root'>
                <img className='serviceCard__img' src={MaltaImage} alt='card-display'/>
                <CardContent className='serviceCard__box'>
                  <Typography className="serviceCard__title">{t('admission_card')}</Typography>
                  <div className='serviceCard__desc'>
                    <ul className='serviceCard__ul'>
                      <li className='serviceCard__miniTitle'>{t('admission_subtitle')}</li>
                      <li className='serviceCard__li'><CheckIcon className='serviceCard__li__Icon'/>{t('admission_li1')}</li>
                      <li className='serviceCard__li'><CheckIcon className='serviceCard__li__Icon'/>{t('admission_li2')}</li>
                      <li className='serviceCard__li'><CheckIcon className='serviceCard__li__Icon'/>{t('admission_li3')}</li>
                      <li className='serviceCard__li'><CheckIcon className='serviceCard__li__Icon'/>{t('admission_li4')}</li>
                      <li className='serviceCard__btn__box'><Link className='serviceCard__link' to='/admission'><Button className='serviceCard__learnMore' >{t('card_learnMore')}</Button></Link></li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className='serviceCard__root'>
                <img className='serviceCard__img' src={UkImage} alt='card-display'/>
                <CardContent className='serviceCard__box'>
                  <Typography className="serviceCard__title">{t('assist_card')}</Typography>
                  <div className='serviceCard__desc'>
                    <ul className='serviceCard__ul'>
                      <li className='serviceCard__miniTitle'>{t('assist_subtitle')}</li>
                      <li className='serviceCard__li'><CheckIcon className='serviceCard__li__Icon'/>{t('assist_li1')}</li>
                      <li className='serviceCard__li'><CheckIcon className='serviceCard__li__Icon'/>{t('assist_li2')}</li>
                      <li className='serviceCard__li'><CheckIcon className='serviceCard__li__Icon'/>{t('assist_li3')}</li>
                      <li className='serviceCard__li'><CheckIcon className='serviceCard__li__Icon'/>{t('assist_li4')}</li>
                      <li className='serviceCard__btn__box'><Link className='serviceCard__link' to='/visa-assist'><Button className='serviceCard__learnMore' >{t('card_learnMore')}</Button></Link></li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

            {/* <Button className='serviceCard__button'> */}
              <Card className='serviceCard__root'>
                <img className='serviceCard__img' src={UsaImage} alt='card-display'/>
                <CardContent className='serviceCard__box'>
                  <Typography className="serviceCard__title">{t('premium_card')}</Typography>
                  <div className='serviceCard__desc'>
                    <ul className='serviceCard__ul'>
                      <li className='serviceCard__miniTitle'>{t('premium_subtitle')}</li>
                      <li className='serviceCard__li'><AddTaskIcon className='serviceCard__li__Icon'/>{t('premium_li1')}</li>
                      <li className='serviceCard__li'><AddTaskIcon className='serviceCard__li__Icon'/>{t('premium_li2')}</li>
                      <li className='serviceCard__li'><CheckIcon className='serviceCard__li__Icon'/>{t('premium_li3')}</li>
                      <li className='serviceCard__li'><CheckIcon className='serviceCard__li__Icon'/>{t('premium_li4')}</li>
                      <li className='serviceCard__btn__box'><Link className='serviceCard__link' to='/premuim-support'><Button className='serviceCard__learnMore' >{t('card_learnMore')}</Button></Link></li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            {/* </Button> */}

            <Card className='serviceCard__root'>
                <img className='serviceCard__img' src={CaImage} alt='card-display'/>
                <CardContent className='serviceCard__box'>
                  <Typography className="serviceCard__title">{t('guide_card')}</Typography>
                  <div className='serviceCard__desc'>
                    <ul className='serviceCard__ul'>
                      <li className='guide__li'>{t('guide_desc')}</li>
                      <li className='serviceCard__btn__box'><Link className='serviceCard__link' to='/guid'><Button className='serviceCard__learnMore' >{t('card_learnMore')}</Button></Link></li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

          </div>
        </Collapse> 
    </div>
  )
}

export default ServiceCard