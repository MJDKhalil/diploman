import React from 'react';
import styles from '../styles/VisaAssist.module.css';
import VisaAssistProcess from '../components/VisaAssistProcess';
import RequestVisaAssist from '../components/RequestVisaAssist';
import Widgets from '../components/Widgets';
import Head from 'next/head';
import WelcomePageFooter from '../components/WelcomePageFooter';

function VisaAssist() {

  return (
    <div className={styles.visaAssist}>
      <div className='visaAssist__container'>
        <Head>
          <title>Diploman - Visa Assist</title>
          <meta
              name='description'
              content='Visa Assist page'
          />
        </Head>
        <div className='visaAssist__left'>
          <VisaAssistProcess/>
        </div>
        <div className='visaAssist__center'>
          <div className='visaAssistProcess__top__centerBox'> <VisaAssistProcess /></div>
          <RequestVisaAssist/>
        </div>
        <div className='visaAssist__right'><Widgets/></div>
      </div>
      <WelcomePageFooter/>
    </div>
    
  )
}

export default VisaAssist