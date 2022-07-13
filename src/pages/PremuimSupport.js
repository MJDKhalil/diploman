import React from 'react';
import A2zSupport from '../components/A2zSupport';
import Widgets from '../components/Widgets';
import PremSideBar from '../components/PremSideBar';
// import GuidVisaQuestion from '../components/GuidVisaQuestion';
import './PremuimSupport.css';
import WelcomePageFooter from '../components/WelcomePageFooter';

function PremuimSupport() {

  return (
    <div className='premuimSupport'>
      <div className='premuimSupport__container'>
        <div className='premuimSupport__left__bx'>
          <PremSideBar/>
        </div>
        <div>
          <div className='premuimSupport__top__center'><PremSideBar/></div>
          <A2zSupport/>
        </div>
        <div className='premuimSupport__widgets'><Widgets/></div>
      </div> 
      <WelcomePageFooter />
    </div>
  )
}

export default PremuimSupport