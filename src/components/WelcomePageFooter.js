import React from 'react';
import './WelcomePageFooter.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import { useTranslation } from "react-i18next";


function WelcomePageFooter() {

    const { t } = useTranslation();

  return (
      <div className='welcomePageFooter'>
        <footer>
            <div className="welcomePageFooter__container">
                <div className="welcomePageFooter__row">
                    <div className="welcomePageFooter__linksContainer">
                        <h3>{t('footer_services')}</h3>
                        <ul className='welcomePageFooter__ul'>
                            <li><Link className='welcomePageFooter__link' to='/admission'>{t('footer_admission')}</Link></li>
                            <li><Link className='welcomePageFooter__link' to='/visa-assist'>{t('footer_visaAssist')}</Link></li>
                            <li><Link className='welcomePageFooter__link' to='/guid'>{t('footer_prem')}</Link></li>
                            <li><Link className='welcomePageFooter__link' to='/guid'>{t('footer_guide')}</Link></li>
                        </ul>
                    </div>
                    <hr className='welcomePageFooter__hr'/>
                    <div className="welcomePageFooter__linksContainer">
                        <h3>{t('footer_links')}</h3>
                        <ul>
                            <li><Scroll offset={-220} className='welcomePageFooter__link' to='about'>{t('footer_about')}</Scroll></li>
                            <li><Link className='welcomePageFooter__link' to='/contact'>{t('footer_contact')}</Link></li>
                            <li><Scroll className='welcomePageFooter__link' offset={-100}  to='schoolCards'>{t('footer_partners')}</Scroll></li>
                            <li><Link className='welcomePageFooter__link' to='/terms'>{t('footer_terms')}</Link></li>
                        </ul>
                    </div>
                    <hr className='welcomePageFooter__hr'/>
                    <div className="welcomePageFooter__linksContainer welSmallBox">
                        <h3>{t('footer_diploman')}</h3>
                        <p className='welcomepageFooter__desc'>{t('footer_paragraph')}</p>
                    </div>
                    <hr className='welcomePageFooter__hr'/>
                </div>
                <ul className='social__icons'>
                        <li className='social__icons__li'>
                            <a href='https://www.facebook.com/Diploman-110754074994396/' target='_blank' rel='noreferrer'><FacebookIcon className='welcomePageFooter__incon'/></a>
                        </li>
                        <li className='social__icons__li'>
                            <a href='https://www.instagram.com/diploman_official/' target='_blank' rel='noreferrer'><InstagramIcon className='welcomePageFooter__incon'/></a>
                        </li>
                        <li className='social__icons__li'>
                            <a href='https://twitter.com/Diploman8/' target='_blank' rel='noreferrer'><TwitterIcon className='welcomePageFooter__incon'/></a>
                        </li>
                        <li className='social__icons__li'>
                            <a href='https://www.linkedin.com/company/diploman/?viewAsMember=true/' target='_blank' rel='noreferrer'><LinkedInIcon className='welcomePageFooter__incon'/></a>
                        </li>
                    </ul>
                <p className='copyright'>Diploman © 2022</p>
            </div>
        </footer>
    </div>
  )
}

export default WelcomePageFooter;