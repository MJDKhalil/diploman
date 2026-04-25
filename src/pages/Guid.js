import React from 'react';
import styles from '../styles/Guid.module.css';
import Widgets from '../components/Widgets';
// import GuidVisaQuestion from '../components/GuidVisaQuestion';
import VisaRequirments from '../components/VisaRequirments';
import VisaGuidProcess from '../components/VisaGuidProcess';
import WelcomePageFooter from '../components/WelcomePageFooter';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18n from '../../i18n';

function Guid() {
  return (
    <div className={styles.guidPage}>
      <div className={styles.guidPage__container}>
        <div className={styles.guidPage__left}>
          <VisaRequirments/>
        </div>
        <div className={styles.guidPage__center}>
          <VisaGuidProcess/>
          <div className={styles.guidPage__topCenter}>
            <VisaRequirments/>
          </div>
        </div>
        <div className={styles.guidPage__right}><Widgets /></div>
      </div>
      <WelcomePageFooter />
    </div>
  )
}; 

export const getStaticProps = async ({ locale }) => (
  { props: {
    ...(await serverSideTranslations(locale ?? 'en',
      ['common'],
      i18n,
    )),
  } }
);

export default Guid;