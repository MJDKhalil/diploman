import React from 'react';
import './WelcomePage.css';
import { CssBaseline } from '@mui/material';
import WelcomePageHeader from '../components/WelcomePageHeader';
// import ObjectiveFeatures from '../components/ObjectiveFeatures';
import WelcomePageFooter from '../components/WelcomePageFooter';
import { Helmet } from 'react-helmet';
// import VisaGuid from '../components/VisaGuid';
import SchoolCard from '../components/SchoolCard';
import About from '../components/About';
import ServiceCard from '../components/ServiceCard';


function WelcomePage() {
    
  return (
    <div className='welcomePage'>
    <div  className='background__image'>
      <Helmet>
            <title>Diploman - Welcome Page</title>
            <meta
              name='description'
              content='welcome page'
            />
      </Helmet>

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