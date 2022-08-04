import React, { Fragment, useEffect, useState } from 'react';
import './LoginHeader.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import SortIcon from '@mui/icons-material/Sort';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Alert from './Alert';
import Logo from '../assets/images/logoo.png';
import { useTranslation } from "react-i18next";
import { MenuItem } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { Link as Scroll } from 'react-scroll';

import i18next from 'i18next';
import cookies from 'js-cookie';

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
]

function LoginHeader({ logout, isAuthenticated }) {

  const [show, setShow] = useState (false);
  const currentLanguageCode = cookies.get('i18next') || 'en';
  const currentLanguage = languages.find(l => l.code === currentLanguageCode);
  useEffect (() => {
    document.body.dir = currentLanguage.dir || 'ltr'
    // document.title = t('app_title')
  },[currentLanguage]);

  const { t } = useTranslation()
  
  const guestLinks = () => (
    <Fragment>
      <div className='loginHeader__right'>
        <div className='middle__header__bx'>
          <div className='loginHeader__main__btns'>
            <Link className='loginHeader__loginButton' to='/login'><button>{t('header_login')}</button></Link>
            <Link className='loginHeader__signupButton' to='/signup'><button>{t('header_signup')}</button></Link>
          </div> 
        
          <div className='loginHeader__services__dropdown'>
            <Scroll offset={-100}  to='services'><button className='dropdown__btn dropdown__services'>{t('header_services')}<ExpandMoreIcon className='services__expand'/></button></Scroll>
            <div className='dropdown__content dropdown__services__content'>
              <Link className='loginHeader__menuItem' to='/admission'>{t('services_addmissionOffers')}</Link>
              <Link className='loginHeader__menuItem' to='/premuim-support'>{t('services_premium')}</Link>
              <Link className='loginHeader__menuItem' to='/forms'>{t('services_forms')}</Link>
              <Link className='loginHeader__menuItem' to='/visa-assist'>{t('services_visaAssist')}</Link>
            </div>
          </div>
          {/* start of lang box */}
          <div className='lang__select__box'>
            <div onClick={()=> setShow(!show)} className='lang__selected'><LanguageIcon /></div>
            { show?
              <>
                <div className='lang__container '>
                {languages.map(({code, name, country_code}) => 
                  <MenuItem
                    className='loginHeader__select__menu'
                    key={country_code}
                  >
                    <button 
                      onClick={() => {
                        i18next.changeLanguage(code)
                        setShow(false)
                      }}
                      className='loginHeader__lang__btn'
                    >
                    {name}
                    </button>
                  </MenuItem>
                )}
                    
                </div>
              </>
            :null}
          </div>
          {/* end of lang box */}
          </div>

          <div className='loginHeader__services__dropdown sortIcon__bx'>
            <SortIcon className='dropdown__btn loginHeader__sortIcon'/>
            <div className='dropdown__content sortIcon__dropdown'>
              <Link className='loginHeader__menuItem' to='/premuim-support'>{t('header_dropdown_prem')}</Link>
              <Link className='loginHeader__menuItem' to='/visa-assist'>{t('header_dropdown_visaAssist')}</Link>
              <Link className='loginHeader__menuItem' to='/admission'>{t('header_dropdown_admission')}</Link>
              <Link className='loginHeader__menuItem' to='/request-service'>{t('header_dropdown_requestService')}</Link>
              <Link className='loginHeader__menuItem' to='/forms'>{t('services_forms')}</Link>
              <Link className='loginHeader__menuItem' to='/contact'>{t('header_dropdown_contact')}</Link>
              <Link className='loginHeader__menuItem' to='/uk-application-form'>{t('forms_uk_application')}</Link>
              <Link className='loginHeader__menuItem' to='/usa-application-form'>{t('forms_us_application')}</Link>
              <Link className='loginHeader__menuItem' to='/signup'>{t('header_signup')}</Link>
              <Link className='loginHeader__menuItem' to='/login'>{t('header_login')}</Link>
              <Link className='loginHeader__menuItem' to='/guid'>{t('header_dropdown_guide')}</Link>
            </div>
          </div>
        
        
      </div>
    </Fragment>
  );

  const authLinks = () => (
    <Fragment>
      <div className='loginHeader__right'>
        <div className='middle__header__bx'>
            
            <div className='loginHeader__main__btns'>
              <Link className='loginHeader__loginButton' to='/login'><button>{t('header_login')}</button></Link>
              <Link className='loginHeader__signupButton' to='/signup'><button>{t('header_signup')}</button></Link>
            </div> 
          
            <div className='loginHeader__services__dropdown'>
              <Scroll offset={-100}  to='services'><button className='dropdown__btn dropdown__services'>{t('header_services')}<ExpandMoreIcon className='services__expand'/></button></Scroll>
              <div className='dropdown__content dropdown__services__content'>
                <Link className='loginHeader__menuItem' to='/admission'>{t('services_addmissionOffers')}</Link>
                <Link className='loginHeader__menuItem' to='/premuim-support'>{t('services_premium')}</Link>
                <Link className='loginHeader__menuItem' to='/forms'>{t('services_forms')}</Link>
                <Link className='loginHeader__menuItem' to='/visa-assist'>{t('services_visaAssist')}</Link>
              </div>
            </div>
          {/* start of lang box */}
          <div className='lang__select__box'>
            <div onClick={()=> setShow(!show)} className='lang__selected'><LanguageIcon /></div>
            { show?
              <>
                <div className='lang__container '>
                {languages.map(({code, name, country_code}) => 
                  <MenuItem
                    className='loginHeader__select__menu'
                    key={country_code}
                  >
                    <button 
                      onClick={() => {
                        i18next.changeLanguage(code)
                        setShow(false)
                      }}
                      className='loginHeader__lang__btn'
                    >
                    {name}
                    </button>
                  </MenuItem>
                )}
                    
                </div>
              </>
            :null}
          </div>
          {/* end of lang box */}
          </div>
          <div className='loginHeader__services__dropdown loggedin__icon__bx'>
            <button className='dropdown__btn'><SortIcon className='loginHeader__sortIcon logedin__sortIcon'/></button>
            <div className='dropdown__content logged__sortIcon__dropdown'>
              <Link className='loginHeader__menuItem' to='/premuim-support'>{t('header_dropdown_prem')}</Link>
              <Link className='loginHeader__menuItem' to='/admission'>{t('header_dropdown_admission')}</Link>
              <Link className='loginHeader__menuItem' to='/visa-assist'>{t('header_dropdown_visaAssist')}</Link>
              <Link className='loginHeader__menuItem' to='/request-service'>{t('header_dropdown_requestService')}</Link>
              <Link className='loginHeader__menuItem' to='/forms'>{t('services_forms')}</Link>
              <Link className='loginHeader__menuItem' to='/contact'>{t('header_dropdown_contact')}</Link>
              <Link className='loginHeader__menuItem' to='/uk-application-form'>{t('forms_uk_application')}</Link>
              <Link className='loginHeader__menuItem' to='/usa-application-form'>{t('forms_us_application')}</Link>
              <Link className='loginHeader__menuItem' to='/guid'>{t('header_dropdown_guide')}</Link>
              <button onClick={logout} className='logout__btn'>{t('header_logout')}</button>
            </div>
          </div>
        
      </div>
    </Fragment>
  );

  return (
    <div className='loginHeader'>
      <div className='loginHeader__left'>
        <Link className='logo__link' to='/'>
          <img className='logo' src={Logo} alt='logo'/>
          <p className='logo__text'>{t('logo_text')}</p>
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
