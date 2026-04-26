import React from 'react';
import Head from 'next/head';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import styles from '../styles/RequestService.module.css';
import { useRouter } from 'next/router';
import WelcomePageFooter from '../components/WelcomePageFooter';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18n from '../../i18n';
import { DEMO_MODE, DEMO_ALERT_MSG } from '../utils/demo';
import useFormState from '../hooks/useFormState';

function RequestService({ setAlert }) {

  const { t } = useTranslation();
  const navigate = useRouter();

  const { formData, onChange } = useFormState({ name: '', email: '', phone: '', request: '', message: '' });
  const { name, email, phone, request, message } = formData;
  const onSubmit = e => {
    e.preventDefault();

    if (DEMO_MODE) {
      setAlert(DEMO_ALERT_MSG, 'info');
      return;
    }

    const config = {
      headers: {
                'Content-Type': 'application/json'
      }
    };

    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/service-request/`, { name, email, phone, request, message }, config)
      .then(res => {
          navigate('/'); 
          setAlert('Request Sent Successfuly', 'success');
      })
      .catch(err => {
          setAlert('Error with Sending Request', 'error');
      })
  };

  return (
    <div className={styles.request__service}>
      <div className={styles.request__service__bx}>
        <Head>
           <title>Diploman - Request Service</title>
           <meta
               name='description'
               content='Request Service'
           />
        </Head>
        <div  className={styles.request__service__form}>
            <h1 className={styles.request__service__title}>{t('request_title')}</h1>
            <hr className={styles.request__service__hr}/>
            <form onSubmit={e => onSubmit(e)}>
              <div className={styles.input_grpp}>
                  <div className={styles.form__wrapp}>
                      <label className={styles.request__service__form__label} htmlFor='name'>Name</label>
                      <input 
                          className={styles.request__service__form__input} 
                          name='name' 
                          type='text' 
                          placeholder={t('Form_name')} 
                          onChange={e => onChange(e)} 
                          value={name} 
                          required 
                      />
                  </div>
                  <div className={styles.form__wrapp}>
                      <label className={styles.request__service__form__label} htmlFor='email'>Email</label>
                      <input 
                          className={styles.request__service__form__input} 
                          name='email' 
                          type='email' 
                          placeholder={t('Form_email')}
                          onChange={e => onChange(e)} 
                          value={email} 
                          required 
                      />
                  </div>
              </div>
              <div className={styles.input_grpp}>
                <div className={styles.form__wrapp}>
                    <label className={styles.request__service__form__label} htmlFor='request'>Request</label>
                    <input 
                        className={styles.request__service__form__input} 
                        name='request' 
                        type='text' 
                        placeholder={t('request_text')}
                        onChange={e => onChange(e)} 
                        value={request} 
                        required 
                    />
                </div>
                <div className={styles.form__wrapp}>
                    <label className={styles.request__service__form__label} htmlFor='phone'>Phone</label>
                    <input 
                        className={styles.request__service__form__input} 
                        name='phone' 
                        type='text' 
                        placeholder={t('Form_phone')} 
                        onChange={e => onChange(e)} 
                        value={phone} 
                    />
                </div>
              </div>
              <div className={styles.form__wrapp}>
                  <label className={styles['request__service__form__label']+' '+styles['textarea__bx']} htmlFor='message'>Message ;</label>
                  <textarea 
                      className={styles.request__service__form__textarea}
                      name='message'
                      cols='30'
                      rows='10'
                      placeholder={t('Form_message')}
                      onChange={e => onChange(e)} 
                      value={message} 
                  />
              </div>
              <button className={styles.request__service__form__button} htmltype='submit'>{t('Form_send')}</button>
            </form>
        </div>
      </div>
      <WelcomePageFooter/>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => (
  { props: {
    ...(await serverSideTranslations(locale ?? 'en',
      ['common'],
      i18n,
    )),
  } }
);

export default connect(null, { setAlert })(RequestService);
