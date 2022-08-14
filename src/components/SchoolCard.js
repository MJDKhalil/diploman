import React from 'react';
import './SchoolCard.css';
import { useTranslation } from "react-i18next";
import AddTaskIcon from '@mui/icons-material/AddTask';
import CheckIcon from '@mui/icons-material/Check';
import Carousel from 'react-elastic-carousel';
import WCG from '../assets/images/wcg.png';
import EC from '../assets/images/ec.jpg';
import ACE from '../assets/images/ace.png';
import Californi from '../assets/images/california_kl.png';
import ELEC from '../assets/images/elec.png';
import FL from '../assets/images/fl.jpg';
import GSE from '../assets/images/gse.png';

const schoolBreakPoints = [
    {width: 1, itemsToShow: 1 },
    {width: 550, itemsToShow: 2 },
    {width: 768, itemsToShow: 3 },
    {width: 1200, itemsToShow: 4 },
];

function SchoolCard() {

    const { t } = useTranslation();

  return (
    <div id='schoolCards' className='schoolCards'>
        <h2 className='schoolCard__subheading'>{t('schoolCard_title')}</h2>
        <Carousel className='schoolCards__carousel' breakPoints={schoolBreakPoints}>
            <div className='schoolCard'>
                <div className='schoolCard__info'>
                    <div className='schoolCard__display'>
                        <img className='schoolCard__image' src={FL} alt='school logo' />
                    </div>
                    <h3 className='school__language__center'>{t('flCard_title')}</h3>
                    <p className='school__country'>{t('flCard_Mainlocation')}</p>
                    <p className='school__course'>{t('flCard_course')}</p>
                    <hr className='schools__hr'/>
                    <ul className='schoolCard__ul'>
                        <li><CheckIcon className='schoolCard__icon' /> {t('flCard_li1')}</li>
                        <li><AddTaskIcon className='schoolCard__icon' /> {t('flCard_li2')}</li>
                        <li><AddTaskIcon className='schoolCard__icon' /> {t('flCard_li3')}</li>
                        <li><AddTaskIcon className='schoolCard__icon' /> {t('flCard_li4')}</li>
                    </ul>
                </div>
            </div>

            <div className='schoolCard'>
                <div className='schoolCard__info'>
                    <div className='schoolCard__display'>
                        <img className='' src={WCG} alt='school logo' />
                    </div>
                    <h3 className='school__language__center'>{t('wcgCard_title')}</h3>
                    <p className='school__country'>{t('wcgCard_Mainlocation')}</p>
                    <p className='school__course'>{t('wcgCard_course')}</p>
                    <hr className='schools__hr'/>
                    <ul className='schoolCard__ul'>
                      <li><CheckIcon className='schoolCard__icon' /> {t('wcgCard_li1')}</li>
                      <li><AddTaskIcon className='schoolCard__icon' /> {t('wcgCard_li2')}</li>
                      <li><AddTaskIcon className='schoolCard__icon' /> {t('wcgCard_li3')}</li>
                      <li><AddTaskIcon className='schoolCard__icon' /> {t('wcgCard_li4')}</li>
                      <li><CheckIcon className='schoolCard__icon' /> {t('wcgCard_li5')}</li>
                    </ul>
                </div>
            </div>

            <div className='schoolCard'>
                <div className='schoolCard__info'>
                    <div className='schoolCard__display'>
                        <img className='schoolCard__image' src={ELEC} alt='school logo' />
                    </div>
                    <h3 className='school__language__center'>{t('elecCard_title')}</h3>
                    <p className='school__country'>{t('elecCard_Mainlocation')}</p>
                    <p className='school__course'>{t('elecCard_course')}</p>
                    <hr className='schools__hr'/>
                    <ul className='schoolCard__ul'>
                        <li><CheckIcon className='schoolCard__icon' /> {t('elecCard_li1')}</li>
                        <li><AddTaskIcon className='schoolCard__icon' /> {t('elecCard_li2')}</li>
                        <li><CheckIcon className='schoolCard__icon' /> {t('elecCard_li3')}</li>
                    </ul>
                </div>
            </div>

            <div className='schoolCard'>
                <div className='schoolCard__info'>
                    <div className='schoolCard__display'>
                        <img className='' src={Californi} alt='school logo' />
                    </div>
                    <h3 className='school__language__center'>{t('californiCard_title')}</h3>
                    <p className='school__country'>{t('californiCard_Mainlocation')}</p>
                    <p className='school__course'>{t('californiCard_course')}</p>
                    <hr className='schools__hr'/>
                    <ul className='schoolCard__ul'>
                        <li><CheckIcon className='schoolCard__icon' /> {t('californiCard_li1')}</li>
                        <li><AddTaskIcon className='schoolCard__icon' /> {t('californiCard_li2')}</li>
                        <li><CheckIcon className='schoolCard__icon' /> {t('californiCard_li3')}</li>
                    </ul>
                </div>
            </div>

            <div className='schoolCard'>
                <div className='schoolCard__info'>
                    <div className='schoolCard__display'>
                        <img className='' src={ACE} alt='school logo' />
                    </div>
                    <h3 className='school__language__center'>{t('aceCard_title')}</h3>
                    <p className='school__country'>{t('aceCard_Mainlocation')}</p>
                    <p className='school__course'>{t('aceCard_course')}</p>
                    <hr className='schools__hr'/>
                    <ul className='schoolCard__ul'>
                        <li><CheckIcon className='schoolCard__icon' /> {t('aceCard_li1')}</li>
                        <li><AddTaskIcon className='schoolCard__icon' /> {t('aceCard_li2')}</li>
                        <li><AddTaskIcon className='schoolCard__icon' /> {t('aceCard_li3')}</li>
                        <li><CheckIcon className='schoolCard__icon' /> {t('aceCard_li4')}</li>
                    </ul>
                </div>
            </div>

            <div className='schoolCard'>
                <div className='schoolCard__info'>
                    <div className='schoolCard__display'>
                        <img className='schoolCard__image' src={GSE} alt='school logo' />
                    </div>
                    <h3 className='school__language__center'>{t('gseCard_title')}</h3>
                    <p className='school__country'>{t('gseCard_Mainlocation')}</p>
                    <p className='school__course'>{t('gseCard_course')}</p>
                    <hr className='schools__hr'/>
                    <ul className='schoolCard__ul'>
                        <li><CheckIcon className='schoolCard__icon' /> {t('gseCard_li1')}</li>
                        <li><AddTaskIcon className='schoolCard__icon' /> {t('gseCard_li2')}</li>
                        <li><AddTaskIcon className='schoolCard__icon' /> {t('gseCard_li3')}</li>
                        <li><CheckIcon className='schoolCard__icon' /> {t('gseCard_li4')}</li>
                    </ul>
                </div>
            </div>

            <div className='schoolCard'>
                <div className='schoolCard__info'>
                    <div className='schoolCard__display'>
                        <img className='' src={EC} alt='school logo' />
                    </div>
                    <h3 className='school__language__center'>{t('ecCard_title')}</h3>
                    <p className='school__country'>{t('ecCard_Mainlocation')}</p>
                    <p className='school__course'>{t('ecCard_course')}</p>
                    <hr className='schools__hr'/>
                    <ul className='schoolCard__ul'>
                        <li><CheckIcon className='schoolCard__icon' /> {t('ecCard_li1')}</li>
                        <li><AddTaskIcon className='schoolCard__icon' /> {t('ecCard_li2')}</li>
                        <li><AddTaskIcon className='schoolCard__icon' /> {t('ecCard_li3')}</li>
                        <li><AddTaskIcon className='schoolCard__icon' /> {t('ecCard_li4')}</li>
                    </ul>
                </div>
            </div>
        </Carousel>
    </div>
  )
}

export default SchoolCard