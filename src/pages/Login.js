import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import { login } from '../actions/auth';
import styles from '../styles/Login.module.css'
import WelcomePageFooter from '../components/WelcomePageFooter';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import useFormState from '../hooks/useFormState';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18n from '../../i18n';

function Login({ login, isAuthenticated }) {

  const { t } = useTranslation();
  const navigate = useRouter();

  const { formData, onChange } = useFormState({ email: '', password: '' });
  const { email, password } = formData;
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
          {t('login_text1')} <Link href='/signup' className={styles.login__link}>{t('login_register')}</Link>
        </p>
        <p className={styles.link__to__resetPassword}>
          {t('login_text2')} <Link href='/reset-password' className={styles.reset__password__link}>{t('login_reset')}</Link>
        </p>
      </div>
      <WelcomePageFooter/>
    </div>
  )
};

export const getStaticProps = async ({ locale }) => (
  { props: {
    ...(await serverSideTranslations(locale ?? 'en',
      ['common'],
      i18n,
    )),
  } }
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect (mapStateToProps, { login }) (Login);