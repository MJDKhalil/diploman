import React from 'react';
import styles from '../styles/VisaAssist.module.css';
import VisaAssistProcess from '../components/VisaAssistProcess';
import RequestVisaAssist from '../components/RequestVisaAssist';
import Widgets from '../components/Widgets';
import Head from 'next/head';
import WelcomePageFooter from '../components/WelcomePageFooter';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18n from '../../i18n';

function VisaAssist() {

  return (
    <div className={styles.visaAssist}>
      <div className={styles.visaAssist__container}>
        <Head>
          <title>Diploman - Visa Assist</title>
          <meta
              name='description'
              content='Visa Assist page'
          />
        </Head>
        <div className={styles.visaAssist__left}>
          <VisaAssistProcess/>
        </div>
        <div className={styles.visaAssist__center}>
          <div className={styles.visaAssistProcess__top__centerBox}> <VisaAssistProcess /></div>
          <RequestVisaAssist/>
        </div>
        <div className={styles.visaAssist__right}><Widgets/></div>
      </div>
      <WelcomePageFooter/>
    </div>
    
  )
}

export const getStaticProps = async ({ locale }) => (
  { props: {
    ...(await serverSideTranslations(locale ?? 'en',
      ['common'],
      i18n,
    )),
  } }
);

export default VisaAssist