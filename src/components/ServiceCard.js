import React from 'react';
import styles from '../styles/ServiceCard.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MaltaImage from '../assets/images/malta.jpg';
import UkImage from '../assets/images/uk.jpg';
import UsaImage from '../assets/images/usa.jpg';
import CaImage from '../assets/images/canada.jpg';
import { useTranslation } from 'next-i18next';
import CheckIcon from '@mui/icons-material/Check';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Link from 'next/link';
import { Collapse } from '@mui/material';
import useWindowPosition  from '../hocs/useWindowPosition';
import Image from 'next/image';


function ServiceCard() {

  const { t } = useTranslation();
  const checked = useWindowPosition('headerEmo');
    
  return (
    <div className={styles.serviceCard}>
        <h1 id="services" className={styles.serviceCard__mainTitle}>{t('serviceCard_title')}</h1>
        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
          <div className={styles.serviceCard__container}>
              <Card className={styles.serviceCard__root}>
                <Image className={styles.serviceCard__img} src={MaltaImage} alt='card-display'/>
                <CardContent className={styles.serviceCard__box}>
                  <Typography className={styles.serviceCard__title}>{t('admission_card')}</Typography>
                  <div className={styles.serviceCard__desc}>
                    <ul className={styles.serviceCard__ul}>
                      <li className={styles.serviceCard__miniTitle}>{t('admission_subtitle')}</li>
                      <li className={styles.serviceCard__li}><CheckIcon className={styles.serviceCard__li__Icon}/>{t('admission_li1')}</li>
                      <li className={styles.serviceCard__li}><CheckIcon className={styles.serviceCard__li__Icon}/>{t('admission_li2')}</li>
                      <li className={styles.serviceCard__li}><CheckIcon className={styles.serviceCard__li__Icon}/>{t('admission_li3')}</li>
                      <li className={styles.serviceCard__li}><CheckIcon className={styles.serviceCard__li__Icon}/>{t('admission_li4')}</li>
                      <li className={styles.serviceCard__btn__box}><Link className={styles.serviceCard__link} href='/Admission'><Button className={styles.serviceCard__learnMore} >{t('card_learnMore')}</Button></Link></li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className={styles.serviceCard__root}>
                <Image className={styles.serviceCard__img} src={UkImage} alt='card-display'/>
                <CardContent className={styles.serviceCard__box}>
                  <Typography className={styles.serviceCard__title}>{t('assist_card')}</Typography>
                  <div className={styles.serviceCard__desc}>
                    <ul className={styles.serviceCard__ul}>
                      <li className={styles.serviceCard__miniTitle}>{t('assist_subtitle')}</li>
                      <li className={styles.serviceCard__li}><CheckIcon className={styles.serviceCard__li__Icon}/>{t('assist_li1')}</li>
                      <li className={styles.serviceCard__li}><CheckIcon className={styles.serviceCard__li__Icon}/>{t('assist_li2')}</li>
                      <li className={styles.serviceCard__li}><CheckIcon className={styles.serviceCard__li__Icon}/>{t('assist_li3')}</li>
                      <li className={styles.serviceCard__li}><CheckIcon className={styles.serviceCard__li__Icon}/>{t('assist_li4')}</li>
                      <li className={styles.serviceCard__btn__box}><Link className={styles.serviceCard__link} href='/Visa-assist'><Button className={styles.serviceCard__learnMore}>{t('card_learnMore')}</Button></Link></li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

            {/* <Button className='serviceCard__button'> */}
              <Card className={styles.serviceCard__root}>
                <Image className={styles.serviceCard__img} src={UsaImage} alt='card-display'/>
                <CardContent className={styles.serviceCard__box}>
                  <Typography className={styles.serviceCard__title}>{t('premium_card')}</Typography>
                  <div className={styles.serviceCard__desc}>
                    <ul className={styles.serviceCard__ul}>
                      <li className={styles.serviceCard__miniTitle}>{t('premium_subtitle')}</li>
                      <li className={styles.serviceCard__li}><AddTaskIcon className={styles.serviceCard__li__Icon}/>{t('premium_li1')}</li>
                      <li className={styles.serviceCard__li}><AddTaskIcon className={styles.serviceCard__li__Icon}/>{t('premium_li2')}</li>
                      <li className={styles.serviceCard__li}><CheckIcon className={styles.serviceCard__li__Icon}/>{t('premium_li3')}</li>
                      <li className={styles.serviceCard__li}><CheckIcon className={styles.serviceCard__li__Icon}/>{t('premium_li4')}</li>
                      <li className={styles.serviceCard__btn__box}><Link className={styles.serviceCard__link} href='/Premium'><Button className={styles.serviceCard__learnMore}>{t('card_learnMore')}</Button></Link></li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            {/* </Button> */}

            <Card className={styles.serviceCard__root}>
                <Image className={styles.serviceCard__img} src={CaImage} alt='card-display'/>
                <CardContent className={styles.serviceCard__box}>
                  <Typography className={styles.serviceCard__title}>{t('guide_card')}</Typography>
                  <div className={styles.serviceCard__desc}>
                    <ul className={styles.serviceCard__ul}>
                      <li className={styles.guide__li}>{t('guide_desc')}</li>
                      <li className={styles.serviceCard__btn__box}><Link className={styles.serviceCard__link} href='/Guid'><Button className={styles.serviceCard__learnMore}>{t('card_learnMore')}</Button></Link></li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

          </div>
        </Collapse> 
    </div>
  )
};

export default ServiceCard;