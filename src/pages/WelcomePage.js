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


function WelcomePage() {
    
  return (
    <div className={styles.welcomePage}>
    <div  className={styles.background__image}>
      <Head>
            <title>Diploman</title>
            <meta
              name='description'
              content='home page'
            />
      </Head>

      <CssBaseline />
      <WelcomePageHeader />
      </div>
      <ServiceCard />
      <About />
      <SchoolCard/>
      <WelcomePageFooter />
    </div>
  )
}

export default WelcomePage;