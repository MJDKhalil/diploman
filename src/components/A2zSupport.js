import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import styles from '../styles/A2zSupport.module.css';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { DEMO_MODE, DEMO_ALERT_MSG } from '../utils/demo';
import useFormState from '../hooks/useFormState';

function A2zSupport({ setAlert }) {

  const { t } = useTranslation();
  const navigate=useRouter();
  const { formData, onChange } = useFormState({ name: '', email: '', phone: '', message: '' });
  const { name, email, phone, message } = formData;
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

    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/service-request/prem-request/`, { name, email, phone, message }, config)
      .then(res => {
          navigate('/'); 
          setAlert(t('alert_recquest_sent'), 'success');
      })
      .catch(err => {
          setAlert(t('alert_request_err'), 'error');
      })
  };

  return (
    <div className={styles.a2zSupport}>
      <div className={styles.a2zSupport__bx}>
        <div  className={styles.a2zSupport__form}>
          <h1 className={styles.a2zSupport__title}>{t('premform_title')}</h1>
          <hr className={styles.a2zSupport__hr}/>
          <form onSubmit={e => onSubmit(e)}>
              <div className={styles.input_grpp}>
                  <div className={styles.form__wrapp}>
                      <label className={styles.a2zSupport__form__label} htmlFor='name'>Name</label>
                      <input 
                          className={styles['a2zSupport__form__input']+' '+styles['input__for__two']} 
                          name='name' 
                          type='text' 
                          placeholder={t('Form_name')}
                          onChange={e => onChange(e)} 
                          value={name} 
                          required 
                      />
                  </div>
                  <div className={styles.form__wrapp}>
                    <label className={styles.a2zSupport__form__label} htmlFor='phone'>Phone</label>
                    <input 
                        className={styles['a2zSupport__form__input']+' '+styles['input__for__two']} 
                        name='phone' 
                        type='text' 
                        placeholder={t('Form_phone')}
                        onChange={e => onChange(e)} 
                        value={phone} 
                    />
                </div>
              </div>
              <div className={styles.form__wrapp}>
                <label className={styles.a2zSupport__form__label} htmlFor='email'>Email</label>
                <input 
                    className={styles['a2zSupport__form__input']+' '+styles['input__for__one']} 
                    name='email' 
                    type='email' 
                    placeholder={t('Form_email')}
                    onChange={e => onChange(e)} 
                    value={email} 
                    required 
                />
              </div>
              <div className={styles.form__wrapp}>
                  <label className={styles['a2zSupport__form__label']+' '+styles['textarea__bx']} htmlFor='message'>Message ;</label>
                  <textarea 
                      className={styles.a2zSupport__form__textarea}
                      name='message'
                      cols='30'
                      rows='5'
                      placeholder={t('Form_message')}
                      onChange={e => onChange(e)} 
                      value={message} 
                  />
              </div>
              <button className={styles.a2zSupport__form__button} htmltype='submit'>{t('Form_send')}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default connect(null, { setAlert })(A2zSupport);