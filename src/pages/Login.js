import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import { login } from '../actions/auth';
import styles from '../styles/Login.module.css'
import WelcomePageFooter from '../components/WelcomePageFooter';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18n from '../../i18n';

function Login({ login, isAuthenticated }) {

  const { t } = useTranslation();
  const navigate = useRouter();

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
 
  useEffect(() => { if (isAuthenticated) navigate.replace('/'); }, [isAuthenticated]);

  return (
    <div>
      <div className={styles.login}>
        <Head>
          <title>Diploman - Login</title>
          <meta
            name='description'
            content='login page'
          />
        </Head>
        <h1 className={styles.login__title}>{t('login_title')}</h1>
        <p className={styles.login__lead}>{t('login_lead')}</p>
        <form className={styles.login__form} onSubmit={e => onSubmit(e)}>
          <div className={styles.login__form__group}>
            <input
              className={styles.login__form__input}
              type='email'
              placeholder={t('Form_email')}
              name='email'
              value={email}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className={styles.login__form__group}>
            <input
              className={styles.login__form__input}
              type='password'
              placeholder={t('Form_pw')}
              name='password'
              value={password}
              onChange={e => onChange(e)}
              minLength='8'
              required
            />
          </div>
          <Button className={styles.login__button__main} type='submit'>{t('login_title')}</Button>
        </form>
        <p className={styles.link__to__Signup}>
        {t('login_text1')} <Link legacyBehavior href='/signup'><a className={styles.login__link}>{t('login_register')}</a></Link>
        </p>
        <p className={styles.link__to__resetPassword}>
        {t('login_text2')} <Link legacyBehavior href='/reset-password'><a className={styles.reset__password__link}>{t('login_reset')}</a></Link>
        </p>
      </div>
      <WelcomePageFooter/>
    </div>
  )
};

export const getServerSideProps = async ({ locale }) => (
  { props: {
    ...(await serverSideTranslations(
      locale,
      ['common'],
      i18n,
    )),
  } }
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect (mapStateToProps, { login }) (Login);