import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import { signup } from '../actions/auth';
import './Signup.css';
import { Helmet } from 'react-helmet';
import { setAlert } from '../actions/alert';
import PasswordStrengthMeter from '../components/PasswordStrengthMeter';
import WelcomePageFooter from '../components/WelcomePageFooter';
import { useTranslation } from "react-i18next";

function Signup({setAlert, signup, isAuthenticated }) {

  const { t } = useTranslation();

  const [ strongpassword, setStrongpassword ] = useState('s');

  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    re_password: ''
  });

  const { name, email, password, re_password } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});
  const onSubmit = e => {
    e.preventDefault();

    if (password !== re_password)
            setAlert('Passwords do not match', 'error');

    if (password === re_password) {
      signup (name, email, password, re_password);
      setAccountCreated(true);
    }
  };
 
  if (isAuthenticated) {
    return <Navigate to='/' />
  }
  if (accountCreated) {
    return <Navigate to='/login' />
  }

  return (
    <div>
      <div className='signup'>
        <Helmet>
          <title>Diploman - Sign Up</title>
          <meta 
            name='description'
            content='sign up page'
          />
        </Helmet>
        <h1 className='signup__title'>{t('signin_title')}</h1>
        <p className='signup__lead'>{t('signin_lead')}</p>
        <form className='signup__form' onSubmit={e => onSubmit(e)}>
          <div className='signup__form__group'>
            <input
              className='signup__form__input'
              type='text'
              placeholder={t('Form_name')}
              name='name'
              value={name}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className='signup__form__group'>
            <input
              className='signup__form__input'
              type='email'
              placeholder={t('Form_email')}
              name='email'
              value={email}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className='signup__form__group__password'>
            <p className='signup__password__validation'>{t('signin_text2')}</p>
            <input
              className='signup__form__input'
              type='password'
              placeholder={t('Form_pw')}
              name='password'
              value={password}
              onChange={e => {onChange(e); setStrongpassword(e.target.value)}}
              pattern='((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@@#$%&?])(?!.*[;]).{8,32})'
              title={t('signin_text3')}
              required
            />
          </div>
          <PasswordStrengthMeter strongpassword={strongpassword} />
          <div className='signup__form__group'>
            <input
              className='signup__form__input'
              type='password'
              placeholder={t('Form_rePw')}
              name='re_password'
              value={re_password}
              onChange={e => onChange(e)}
              pattern='((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@@#$%&?])(?!.*[;]).{8,32})'
              required
            />
          </div>
          <p className='signup__terms'>{t('signin_terms')} <Link className='signup__termsBtn' to='/terms'> {t('signin_termsBtn')}</Link></p>
          <Button className='signup__button__main' type='submit'>{t('login_register')}</Button>
        </form>
        <p className='signup__authtext'>
        {t('signin_text1')} <Link to='/login' className='signup__link'>{t('signin_toLogin')}</Link>
        </p>
        
      </div>
      <WelcomePageFooter/>
    </div>
  )
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect (mapStateToProps, { setAlert, signup }) (Signup);