import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import { reset_password_confirm } from '../../../../../actions/auth';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18n from '../../../../../../i18n';

function ResetPasswordConfirm({ reset_password_confirm }) {
  const router = useRouter();
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    new_password: '',
    re_new_password: ''
  });

  const { new_password, re_new_password } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    const { uid, token } = router.query;
    const tokenStr = Array.isArray(token) ? token[0] : token;
    reset_password_confirm(uid, tokenStr, new_password, re_new_password);
    setRequestSent(true);
  };

  if (requestSent) {
    router.replace('/');
    return null;
  }

  return (
    <div className='resetPasswordConfirm'>
      <form className='resetPasswordConfirm__form' onSubmit={onSubmit}>
        <div className='resetPasswordConfirm__form__group'>
          <input
            className='resetPasswordConfirm__form__input'
            type='password'
            placeholder='New Password *'
            name='new_password'
            value={new_password}
            onChange={onChange}
            minLength='8'
            required
          />
        </div>
        <div className='resetPasswordConfirm__form__group'>
          <input
            className='resetPasswordConfirm__form__input'
            type='password'
            placeholder='Confirm New Password *'
            name='re_new_password'
            value={re_new_password}
            onChange={onChange}
            minLength='8'
            required
          />
        </div>
        <Button className='resetPasswordConfirm__button__primary' type='submit'>
          Reset Password
        </Button>
      </form>
    </div>
  );
}

export const getStaticPaths = async () => ({ paths: [], fallback: true });

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'], i18n)),
  },
});

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);
