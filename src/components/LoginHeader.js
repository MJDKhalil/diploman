import React, { Fragment, useEffect, useState } from 'react';
import styles from '../styles/LoginHeader.module.css'
import Link from 'next/link';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import SortIcon from '@mui/icons-material/Sort';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Alert from './Alert';
import Logo from '../assets/images/logoo.png';
import { useTranslation } from 'next-i18next';
import { MenuItem } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { Link as Scroll } from 'react-scroll';
import Image from 'next/image';
import { useRouter } from 'next/router';

const languages = [
  {
    code: 'fr',
    name: 'Français',
    country_code: 'fr'
  },
  {
    code: 'en',
    name : 'English',
    country_code: 'en'
  },
  {
    code: 'ar',
    name: 'العربية',
    country_code: 'ly',
    dir: 'rtl'
  }
];

export function getServerSideProps({locale}) {
  return {
      locale
  }
};

function LoginHeader({ logout, isAuthenticated }) {

  const router = useRouter();
  const [show, setShow] = useState (false);
  const currentLanguageCode = router.locale;
  const currentLanguage = languages.find(l => l.code === currentLanguageCode);
  useEffect (() => {
    document.body.dir = currentLanguage.dir || 'ltr'
    // document.title = t('app_title')
  },[currentLanguage]);

  const { t } = useTranslation()
  
  const guestLinks = () => (
    <Fragment>
      <div className={styles.loginHeader__right}>
        <div className={styles.middle__header__bx}>
          <div className={styles.loginHeader__main__btns}>
            <Link legacyBehavior href='/login'><button className={styles.login__btn}>{t('header_login')}</button></Link>
            <Link legacyBehavior href='/signup'><button className={styles.signup__btn}>{t('header_signup')}</button></Link>
          </div> 
        
          <div className={styles.loginHeader__services__dropdown}>
            <Scroll offset={-100}  to='services'><button className={styles['dropdown__btn']+' '+styles['dropdown__services']}>{t('header_services')}<ExpandMoreIcon className={styles.services__expand}/></button></Scroll>
            <div className={styles['dropdown__content']+' '+styles['dropdown__services__content']}>
              <Link legacyBehavior href='/admission'><a className={styles.loginHeader__menuItem}>{t('services_addmissionOffers')}</a></Link>
              <Link legacyBehavior href='/premuim'><a className={styles.loginHeader__menuItem}>{t('services_premium')}</a></Link>
              <Link legacyBehavior href='/forms'><a className={styles.loginHeader__menuItem}>{t('services_forms')}</a></Link>
              <Link legacyBehavior href='/visa-assist'><a className={styles.loginHeader__menuItem}>{t('services_visaAssist')}</a></Link>
            </div>
          </div>
          {/* start of lang box */}
          <div className={styles.lang__select__box}>
            <div onClick={()=> setShow(!show)} className={styles.lang__selected}><LanguageIcon /></div>
            { show?
              <>
                <div className={styles.lang__container}>
                {languages.map(({code, name, country_code}) => 
                  <MenuItem
                    className={styles.loginHeader__select__menu}
                    key={country_code}
                  >
                    <Link legacyBehavior href={router.asPath} locale={code}>
                          <a onClick={()=> setShow(!show)} className={styles.loginHeader__lang__btn}>{name}</a>
                    </Link>
                  </MenuItem>
                )}
                </div>
              </>
            :null}
          </div>
          {/* end of lang box */}
          </div>

          <div className={styles['loginHeader__services__dropdown']+' '+styles['sortIcon__bx']}>
            <SortIcon className={styles['dropdown__btn']+' '+styles['loginHeader__sortIcon']}/>
            <div className={styles['dropdown__content']+' '+styles['sortIcon__dropdown']}>
              <Link legacyBehavior href='/premuim'><a className={styles.loginHeader__menuItem}>{t('header_dropdown_prem')}</a></Link>
              <Link legacyBehavior href='/visa-assist'><a className={styles.loginHeader__menuItem}>{t('header_dropdown_visaAssist')}</a></Link>
              <Link legacyBehavior href='/admission'><a className={styles.loginHeader__menuItem}>{t('header_dropdown_admission')}</a></Link>
              <Link legacyBehavior href='/request-service'><a className={styles.loginHeader__menuItem}>{t('header_dropdown_requestService')}</a></Link>
              <Link legacyBehavior href='/contact'><a className={styles.loginHeader__menuItem}>{t('header_dropdown_contact')}</a></Link>
              <Link legacyBehavior href='/usa-application-form'><a className={styles.loginHeader__menuItem}>{t('usaForm_barTitle')}</a></Link>
              <Link legacyBehavior href='/uk-application-form'><a className={styles.loginHeader__menuItem}>{t('ukForm_barTitle')}</a></Link>
              <Link legacyBehavior href='/signup'><a className={styles.loginHeader__menuItem}>{t('header_signup')}</a></Link>
              <Link legacyBehavior href='/login'><a className={styles.loginHeader__menuItem}>{t('header_login')}</a></Link>
              <Link legacyBehavior href='/guid'><a className={styles.loginHeader__menuItem}>{t('header_dropdown_guide')}</a></Link>
            </div>
          </div>
      </div>
    </Fragment>
  );

  const authLinks = () => (
    <Fragment>
      <div className={styles.loginHeader__right}>
        <div className={styles.middle__header__bx}>
            
            <div className={styles.loginHeader__main__btns}>
              <Link legacyBehavior href='/login'><button className={styles.login__btn}>{t('header_login')}</button></Link>
              <Link legacyBehavior href='/signup'><button className={styles.signup__btn}>{t('header_signup')}</button></Link>
            </div> 
          
            <div className={styles.loginHeader__services__dropdown}>
              <Scroll offset={-100}  to='services'><button className={styles['dropdown__btn']+' '+styles['dropdown__services']}>{t('header_services')}<ExpandMoreIcon className={styles.services__expand}/></button></Scroll>
              <div className={styles['dropdown__content']+' '+styles['dropdown__services__content']}>
                <Link legacyBehavior href='/admission'><a className={styles.loginHeader__menuItem}>{t('services_addmissionOffers')}</a></Link>
                <Link legacyBehavior href='/premuim-support'><a className={styles.loginHeader__menuItem}>{t('services_premium')}</a></Link>
                <Link legacyBehavior href='/forms'><a className={styles.loginHeader__menuItem}>{t('services_forms')}</a></Link>
                <Link legacyBehavior href='/visa-assist'><a className={styles.loginHeader__menuItem}>{t('services_visaAssist')}</a></Link>
              </div>
            </div>
          {/* start of lang box */}
          <div className={styles.lang__select__box}>
            <div onClick={()=> setShow(!show)} className={styles.lang__selected}><LanguageIcon /></div>
            { show?
              <>
                <div className={styles.lang__container}>
                {languages.map(({code, name, country_code}) => 
                  <MenuItem
                    className={styles.loginHeader__select__menu}
                    key={country_code}
                  >
                    <Link legacyBehavior href={router.asPath} locale={code}>
                          <a className={styles.loginHeader__lang__btn}>{name}</a>
                    </Link>
                  </MenuItem>
                )}
                </div>
              </>
            :null}
          </div>
          {/* end of lang box */}
          </div>
          <div className={styles['loginHeader__services__dropdown']+' '+styles['loggedin__icon__bx']}>
            <button className={styles.dropdown__btn}><SortIcon className={styles['loginHeader__sortIcon']+' '+styles['logedin__sortIcon']}/></button>
            <div className={styles['dropdown__content']+' '+styles['logged__sortIcon__dropdown']}>
              <Link legacyBehavior href='/premuim-support'><a className={styles.loginHeader__menuItem}>{t('header_dropdown_prem')}</a></Link>
              <Link legacyBehavior href='/admission'><a className={styles.loginHeader__menuItem}>{t('header_dropdown_admission')}</a></Link>
              <Link legacyBehavior href='/visa-assist'><a className={styles.loginHeader__menuItem}>{t('header_dropdown_visaAssist')}</a></Link>
              <Link legacyBehavior href='/request-service'><a className={styles.loginHeader__menuItem}>{t('header_dropdown_requestService')}</a></Link>
              <Link legacyBehavior href='/contact'><a className={styles.loginHeader__menuItem}>{t('header_dropdown_contact')}</a></Link>
              <Link legacyBehavior href='/usa-application-form'><a className={styles.loginHeader__menuItem}>{t('usaForm_barTitle')}</a></Link>
              <Link legacyBehavior href='/uk-application-form'><a className={styles.loginHeader__menuItem}>{t('ukForm_barTitle')}</a></Link>
              <Link legacyBehavior href='/guid'><a className={styles.loginHeader__menuItem}>{t('header_dropdown_guide')}</a></Link>
              <button onClick={logout} className={styles.logout__btn}>{t('header_logout')}</button>
            </div>
          </div>
        
      </div>
    </Fragment>
  );

  return (
    <div className={styles.loginHeader}>
      <div className={styles.loginHeader__left}>
        <Link legacyBehavior href='/'>
          <a className={styles.logo__link}>
            <Image className={styles.logo} src={Logo} alt='logo'/>
            <p className={styles.logo__text}>{t('logo_text')}</p>
          </a>
        </Link>  
      </div>
      {isAuthenticated ? authLinks() : guestLinks()}
      <Alert/>
    </div>
  )
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout }) (LoginHeader);
