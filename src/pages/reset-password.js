import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import { reset_password } from '../actions/auth';
import styles from '../styles/ResetPassword.module.css';
import { useTranslation } from 'next-i18next';
import useFormState from '../hooks/useFormState';
import { DEMO_MODE, DEMO_ALERT_MSG } from '../utils/demo';
import { setAlert } from '../actions/alert';

function ResetPassword({ reset_password, setAlert }) {
  const { t } = useTranslation();
  const navigate = useRouter();
  const [requestSent, setRequestSent] = useState(false);
  const { formData, onChange } = useFormState({ email: '' });
  const { email } = formData;

  const onSubmit = e => {
    e.preventDefault();
    if (DEMO_MODE) {
      setAlert(DEMO_ALERT_MSG, 'info');
      return;
    }
    reset_password(email);
    setRequestSent(true);
  };

  useEffect(() => { if (requestSent) navigate.replace('/'); }, [requestSent]);

  return (
    <div className={styles.resetPassword}>
      <h1 className='resetPassword__title'>{t('reset_pw')}</h1>
      <form className='resetPassword__form' onSubmit={onSubmit}>
        <div className='resetPassword__form__group'>
          <input
            className='resetPassword__form__input'
            type='email'
            placeholder={t('Form_email')}
            name='email'
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <Button className='resetPassword__button__primary' type='submit'>{t('reset_btn')}</Button>
      </form>
    </div>
  );
}

export default connect(null, { reset_password, setAlert })(ResetPassword);
