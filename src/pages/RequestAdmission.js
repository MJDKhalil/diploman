import React from 'react';
import { Helmet } from 'react-helmet';
import './RequestAdmission.css';
import Admission from '../components/Admission';
import Widgets from '../components/Widgets';
import WelcomePageFooter from '../components/WelcomePageFooter';
// import GuidVisaQuestion from '../components/GuidVisaQuestion';
import AdmissionProcess from '../components/AdmissionProcess';

function RequestAdmission() {

  return (
    <div className='request__admission__home'>
      <Helmet>
        <title>Diploman - Request Addmission</title>
        <meta
          name='description'
          content='Request Admission'
        />
      </Helmet>
      <div className='request__admission__body'>
          <div className='request__admission__left__sectinon'>
            <AdmissionProcess/>
          </div>
          <div className='request__admission__middle'>
            <div className='ad__re__process'> <AdmissionProcess /></div>
              <Admission/>
          </div>
          <div className='request__admission__home__3rdbx'>
            <Widgets/>
          </div>
      </div>
      <WelcomePageFooter/>
    </div>
  )
}

export default RequestAdmission