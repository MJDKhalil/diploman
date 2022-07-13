import React from 'react';
import './VisaAssist.css';
import VisaAssistProcess from '../components/VisaAssistProcess';
import RequestVisaAssist from '../components/RequestVisaAssist';
import Widgets from '../components/Widgets';
import { Helmet } from 'react-helmet';
import WelcomePageFooter from '../components/WelcomePageFooter';

function VisaAssist() {

  return (
    <div className='visaAssist'>
      <div className='visaAssist__container'>
        <Helmet>
          <title>Diploman - Visa Assist</title>
          <meta
              name='description'
              content='Visa Assist '
          />
        </Helmet>
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