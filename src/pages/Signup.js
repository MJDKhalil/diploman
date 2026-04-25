import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import { signup } from '../actions/auth';
import styles from '../styles/Signup.module.css';
import Head from 'next/head';
import useFormState from '../hooks/useFormState';
import { setAlert } from '../actions/alert';
import PasswordStrengthMeter from '../components/PasswordStrengthMeter';
import WelcomePageFooter from '../components/WelcomePageFooter';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18n from '../../i18n';

function Signup({setAlert, signup, isAuthenticated }) {

  const { t } = useTranslation();
  const navigate = useRouter();
  const [ strongpassword, setStrongpassword ] = useState('s');

  const [accountCreated, setAccountCreated] = useState(false);
  const { formData, onChange } = useFormState({ name: '', email: '', password: '', re_password: '' });
  const { name, email, password, re_password } = formData;
  const onSubmit = e => {
    e.preventDefault();

    if (password !== re_password)
            setAlert('Passwords do not match', 'error');

    if (password === re_password) {
      signup (name, email, password, re_password);
      setAccountCreated(true);
    }
  };
 
  useEffect(() => {
     if (isAuthenticated) navigate.replace('/'); 
    }, [isAuthenticated]);

  if (accountCreated) {
    navigate.push({
    pathname: '/login',
    // query: { name: 'Someone' }
  }, '/login');
  }

  return (
    <div>
      <div className={styles.signup}>
        <Head>
          <title>Diploman - Sign Up</title>
          <meta 
            name='description'
            content='sign-up page'
          />
        </Head>
        <h1 className={styles.signup__title}>{t('signin_title')}</h1>
        <p className={styles.signup__lead}>{t('signin_lead')}</p>
        <form className={styles.signup__form} onSubmit={e => onSubmit(e)}>
          <div className={styles.signup__form__group}>
            <input
              className={styles.signup__form__input}
              type='text'
              placeholder={t('Form_name')}
              name='name'
              value={name}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className={styles.signup__form__group}>
            <input
              className={styles.signup__form__input}
              type='email'
              placeholder={t('Form_email')}
              name='email'
              value={email}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className={styles.signup__form__group__password}>
            <p className={styles.signup__password__validation}>{t('signin_text2')}</p>
            <input
              className={styles.signup__form__input}
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
          <div className={styles.signup__form__group}>
            <input
              className={styles.signup__form__input}
              type='password'
              placeholder={t('Form_rePw')}
              name='re_password'
              value={re_password}
              onChange={e => onChange(e)}
              pattern='((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@@#$%&?])(?!.*[;]).{8,32})'
              required
            />
          </div>
          <p className={styles.signup__terms}>{t('signin_terms')} <Link href='/terms' className={styles.signup__termsBtn}>{t('signin_termsBtn')}</Link></p>
          <Button className={styles.signup__button__main} type='submit'>{t('login_register')}</Button>
        </form>
        <p className={styles.signup__authtext}>
          {t('signin_text1')} <Link href='/login' className={styles.signup__link}>{t('signin_toLogin')}</Link>
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

export default connect (mapStateToProps, { setAlert, signup }) (Signup);