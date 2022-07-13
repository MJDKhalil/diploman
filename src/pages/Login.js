import React, { useState } from 'react';
import { Link, Navigate, useLocation  } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import { login } from '../actions/auth';
import './Login.css';
import { Helmet } from 'react-helmet';
import WelcomePageFooter from '../components/WelcomePageFooter';
import { useTranslation } from "react-i18next";

function Login({ login, isAuthenticated }) {

  const { t } = useTranslation();

  const { state } = useLocation();
  const { from } = state || {};

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});
  const onSubmit = e => {
    e.preventDefault();

    login (email, password)
  };
 
  if (isAuthenticated) {
    return (
      <Navigate
        to={from || '/'}
        replace
        state={from}
      />
    );
  }

  return (
    <div>
      <div className='login'>
        <Helmet>
          <title>Diploman - Login</title>
          <meta
            name='description'
            content='login page'
          />
        </Helmet>
        <h1 className='login__title'>{t('login_title')}</h1>
        <p className='login__lead'>{t('login_lead')}</p>
        <form className='login__form' onSubmit={e => onSubmit(e)}>
          <div className='login__form__group'>
            <input
              className='login__form__input'
              type='email'
              placeholder={t('Form_email')}
              name='email'
              value={email}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className='login__form__group'>
            <input
              className='login__form__input'
              type='password'
              placeholder={t('Form_pw')}
              name='password'
              value={password}
              onChange={e => onChange(e)}
              minLength='8'
              required
            />
          </div>
          <Button className='login__button__main' type='submit'>{t('login_title')}</Button>
        </form>
        <p className='link__to__Signup'>
        {t('login_text1')} <Link to='/signup' className='login__link'>{t('login_register')}</Link>
        </p>
        <p className='link__to__resetPassword'>
        {t('login_text2')} <Link to='/reset-password' className='reset__password__link'>{t('login_reset')}</Link>
        </p>
      </div>
      <WelcomePageFooter/>
    </div>
  )
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect (mapStateToProps, { login }) (Login);