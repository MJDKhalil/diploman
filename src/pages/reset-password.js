import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import { reset_password } from '../actions/auth';
import styles from '../styles/ResetPassword.module.css';
import { useTranslation } from 'next-i18next';

function ResetPassword ({ reset_password }) {

  const { t } = useTranslation();
  const navigate = useRouter();
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    email: ''
  });

  const { email } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});
  const onSubmit = e => {
    e.preventDefault();

    reset_password (email);
    setRequestSent (true);
  };
 
  useEffect(() => { if (requestSent) navigate.replace('/'); }, [requestSent]);


  return (
    <div className={styles.resetPassword}>
      <h1 className='resetPassword__title'>{t('reset_pw')}</h1>
      <form className='resetPassword__form' onSubmit={e => onSubmit(e)}>
        <div className='resetPassword__form__group'>
          <input
            className='resetPassword__form__input'
            type='email'
            placeholder={t('Form_email')}
            name='email'
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        
        <Button className='resetPassword__button__primary' type='submit'>{t('reset_btn')}</Button>
      </form>

    </div>
  )
};

export default connect (null, { reset_password }) (ResetPassword);