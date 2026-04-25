import React from 'react';
import A2zSupport from '../components/A2zSupport';
import Widgets from '../components/Widgets';
import PremSideBar from '../components/PremSideBar';
import Head from 'next/head';
import styles from '../styles/PremuimSupport.module.css';
import WelcomePageFooter from '../components/WelcomePageFooter';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18n from '../../i18n';

function PremuimSupport() {

  return (
    <div className={styles.premuimSupport}>
      <Head>
        <title>Diploman - Request Premuim Support</title>
        <meta
          name='description'
          content='Premuim Support page'
        />
      </Head>
      <div className={styles.premuimSupport__container}>
        <div className={styles.premuimSupport__left__bx}>
          <PremSideBar/>
        </div>
        <div>
          <div className={styles.premuimSupport__top__center}><PremSideBar/></div>
          <A2zSupport/>
        </div>
        <div className={styles.premuimSupport__widgets}><Widgets/></div>
      </div> 
      <WelcomePageFooter />
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

export default PremuimSupport