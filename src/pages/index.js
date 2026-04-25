import React from 'react';
import styles from '../styles/WelcomePage.module.css';
import { CssBaseline } from '@mui/material';
import WelcomePageHeader from '../components/WelcomePageHeader';
// import ObjectiveFeatures from '../components/ObjectiveFeatures';
import WelcomePageFooter from '../components/WelcomePageFooter';
import Head from 'next/head';
// import VisaGuid from '../components/VisaGuid';
import SchoolCard from '../components/SchoolCard';
import About from '../components/About';
import ServiceCard from '../components/ServiceCard';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18n from '../../i18n';

function WelcomePage() {

  const { t } = useTranslation();

  return (
    <main className={styles.welcomePage}>
      <Head>
        <title>Diploman - Welcome Page</title>
        <meta
          name='description'
          content='welcome page'
        />
      </Head>
      <div className={styles.WelcomePage}>
        <div className={styles.background__image}>
          <CssBaseline />
          <WelcomePageHeader />
        </div>
        <CssBaseline />
        <ServiceCard />
        <About />
        <SchoolCard/>
        <WelcomePageFooter />
      </div>
      
    </main>
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

export default WelcomePage;