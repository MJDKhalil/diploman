import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from '@mui/material';
import { verify } from '../../../actions/auth';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18n from '../../../../i18n';

function Activate({ verify }) {
  const { t } = useTranslation();
  const router = useRouter();
  const [verified, setVerified] = useState(false);

  const verify_account = () => {
    const { uid, token } = router.query;
    const tokenStr = Array.isArray(token) ? token[0] : token;
    verify(uid, tokenStr);
    setVerified(true);
  };

  if (verified) {
    router.replace('/');
    return null;
  }

  return (
    <div className='activation'>
      <div className='activation__title'>
        <h1 className='activation__lead'>{t('activate_title')}</h1>
        <Button className='activation__button__primary' onClick={verify_account} type='submit'>
          {t('activate_btn')}
        </Button>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => ({ paths: [], fallback: true });

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'], i18n)),
  },
});

export default connect(null, { verify })(Activate);
