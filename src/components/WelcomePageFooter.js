import React from 'react';
import styles from '../styles/WelcomePageFooter.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
import { Link as Scroll } from 'react-scroll';
import { useTranslation } from 'next-i18next';


function WelcomePageFooter() {

    const { t } = useTranslation();

  return (
      <div className={styles.welcomePageFooter}>
        <footer>
            <div className={styles.welcomePageFooter__container}>
                <div className={styles.welcomePageFooter__row}>
                    <div className={styles.welcomePageFooter__linksContainer}>
                        <h3 className={styles.footer__header}>{t('footer_services')}</h3>
                        <ul className={styles.welcomePageFooter__ul}>
                            <li><Link legacyBehavior href='/admission'><a className={styles.welcomePageFooter__link}>{t('footer_admission')}</a></Link></li>
                            <li><Link legacyBehavior href='/visa-assist'><a className={styles.welcomePageFooter__link}>{t('footer_visaAssist')}</a></Link></li>
                            <li><Link legacyBehavior href='/guid'><a className={styles.welcomePageFooter__link}>{t('footer_prem')}</a></Link></li>
                            <li><Link legacyBehavior href='/guid'><a className={styles.welcomePageFooter__link}>{t('footer_guide')}</a></Link></li>
                        </ul>
                    </div>
                    <hr className={styles.welcomePageFooter__hr}/>
                    <div className={styles.welcomePageFooter__linksContainer}>
                        <h3 className={styles.footer__header}>{t('footer_links')}</h3>
                        <ul className={styles.footer__list}>
                            <li><Scroll offset={-220} className={styles.welcomePageFooter__link} to='about'>{t('footer_about')}</Scroll></li>
                            <li><Link legacyBehavior href='/contact'><a className={styles.welcomePageFooter__link}>{t('footer_contact')}</a></Link></li>
                            <li><Scroll className={styles.welcomePageFooter__link} offset={-100}  to='schoolCards'>{t('footer_partners')}</Scroll></li>
                            <li><Link legacyBehavior href='/terms'><a className={styles.welcomePageFooter__link}>{t('footer_terms')}</a></Link></li>
                        </ul>
                    </div>
                    <hr className={styles.welcomePageFooter__hr}/>
                    <div className={styles['welcomePageFooter__linksContainer']+' '+styles['welSmallBox']}>
                        <h3 className={styles.footer__header}>{t('footer_diploman')}</h3>
                        <p className={styles.welcomepageFooter__desc}>{t('footer_paragraph')}</p>
                    </div>
                    <hr className={styles.welcomePageFooter__hr}/>
                </div>
                <ul className={styles.social__icons}>
                        <li className={styles.social__icons__li}>
                            <a href='https://www.facebook.com/Diploman-110754074994396/' target='_blank' rel='noreferrer'><FacebookIcon className={styles.welcomePageFooter__incon}/></a>
                        </li>
                        <li className={styles.social__icons__li}>
                            <a href='https://www.instagram.com/diploman_official/' target='_blank' rel='noreferrer'><InstagramIcon className={styles.welcomePageFooter__incon}/></a>
                        </li>
                        <li className={styles.social__icons__li}>
                            <a href='https://twitter.com/DIPL0MAN' target='_blank' rel='noreferrer'><TwitterIcon className={styles.welcomePageFooter__incon}/></a>
                        </li>
                        <li className={styles.social__icons__li}>
                            <a href='https://www.linkedin.com/company/diploman/' target='_blank' rel='noreferrer'><LinkedInIcon className={styles.welcomePageFooter__incon}/></a>
                        </li>
                    </ul>
                <p className={styles.copyright}>Diploman © 2022</p>
            </div>
        </footer>
    </div>
  )
}

export default WelcomePageFooter;