import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import styles from '../styles/RequestVisaAssist.module.css';
import { useTranslation } from 'next-i18next';
import { DEMO_MODE, DEMO_ALERT_MSG } from '../utils/demo';
import useFormState from '../hooks/useFormState';

function RequestVisaAssist({ setAlert }) {

  const { t } = useTranslation();
  const navigate = useRouter();

  const { formData, onChange } = useFormState({ name: '', email: '', phone: '', destination: '', message: '' });
  const { name, email, phone, destination, message } = formData;

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

        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/service-request/request-visa-assist/`, { name, email, phone, destination, message }, config)
        .then(res => {
            navigate('/'); 
            setAlert(t('alert_recquest_sent'), 'success');
        })
        .catch(err => {
            setAlert(t('alert_request_err'), 'error');
        })
    };

  return (
    <div className={styles.requestVisaAssist}>
      <div className={styles.requestVisaAssist__bx}>
        <div  className={styles.requestVisaAssist__form}>
         <h1 className={styles.requestVisaAssist__title}>{t('requestVA_title')}</h1>
         <form onSubmit={e => onSubmit(e)}>
            <div className={styles.requestVisaAssist__input_grpp}>
                <div className=''>
                    <label className={styles.requestVisaAssist__label__to__hide} htmlFor='name'>{t('Form_name')}</label>
                    <input 
                        className={styles.requestVisaAssist__form__input} 
                        name='name' 
                        type='text' 
                        placeholder={t('Form_name')}
                        onChange={e => onChange(e)} 
                        value={name} 
                        required 
                    />
                </div>
                <div className=''>
                    <label className={styles.requestVisaAssist__label__to__hide} htmlFor='email'>{t('Form_email')}</label>
                    <input 
                        className={styles.requestVisaAssist__form__input} 
                        name='email' 
                        type='email' 
                        placeholder={t('Form_email')} 
                        onChange={e => onChange(e)} 
                        value={email} 
                        required 
                    />
                </div>
            </div>
            <div className={styles.requestVisaAssist__input_grpp}>
              <div className=''>
                  <label className={styles.requestVisaAssist__label__to__hide} htmlFor='destination'>Destination</label>
                  <input 
                      className={styles.requestVisaAssist__form__input} 
                      name='destination' 
                      type='text' 
                      placeholder={t('Form_destinstion')} 
                      onChange={e => onChange(e)} 
                      value={destination} 
                      required 
                  />
              </div>
              <div className=''>
                  <label className={styles.requestVisaAssist__label__to__hide} htmlFor='phone'>Phone</label>
                  <input 
                      className={styles.requestVisaAssist__form__input} 
                      name='phone' 
                      type='text' 
                      placeholder={t('Form_phone')} 
                      onChange={e => onChange(e)} 
                      value={phone} 
                      required 
                  />
              </div>
            </div>
            
            <div className=''>
              <label className={styles.requestVisaAssist__label__to__hide} htmlFor='message'>Message ;</label>
              <textarea 
                  className={styles.requestVisaAssist__form__textarea}
                  name='message'
                  cols='30'
                  rows='8'
                  placeholder={t('Form_message')} 
                  onChange={e => onChange(e)} 
                  value={message} 
              />
            </div>
            <button className={styles.requestVisaAssist__form__button} htmltype='submit'>{t('Form_send')}</button>
         </form>
        </div>
      </div>
    </div>
  )
}

export default connect(null, { setAlert })(RequestVisaAssist); 

