import React from 'react';
import Head from 'next/head';
import styles from '../styles/RequestAdmission.module.css';
import Admission from '../components/Admission';
import Widgets from '../components/Widgets';
import WelcomePageFooter from '../components/WelcomePageFooter';
// import GuidVisaQuestion from '../components/GuidVisaQuestion';
import AdmissionProcess from '../components/AdmissionProcess';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18n from '../../i18n';

function RequestAdmission() {

  return (
    <div className={styles.request__admission__home}>
      <Head>
        <title>Diploman - Request Addmission</title>
        <meta
          name='description'
          content='Request Admission Offer'
        />
      </Head>
      <div className={styles.request__admission__body}>
          <div className={styles.request__admission__left__sectinon}>
            <AdmissionProcess/>
          </div>
          <div className={styles.request__admission__middle}>
            <div className={styles.ad__re__process}> <AdmissionProcess /></div>
              <Admission/>
          </div>
          <div className={styles.request__admission__home__3rdbx}>
            <Widgets/>
          </div>
      </div>
      <WelcomePageFooter/>
    </div>
  )
}

export const getServerSideProps = async ({ locale }) => (
  { props: {
    ...(await serverSideTranslations(
      locale,
      ['common'],
      i18n,
    )),
  } }
);

export default RequestAdmission