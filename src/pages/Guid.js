import React from 'react';
import './Guid.css';
import Widgets from '../components/Widgets';
// import GuidVisaQuestion from '../components/GuidVisaQuestion';
import VisaRequirments from '../components/VisaRequirments';
import VisaGuidProcess from '../components/VisaGuidProcess';
import WelcomePageFooter from '../components/WelcomePageFooter';

function Guid() {
  return (
    <div className='guidPage'>
      <div className='guidPage__container'>
        <div className='guidPage__left'>
          <VisaRequirments/>
        </div>
        <div className='guidPage__center'>
          <VisaGuidProcess/>
          <div className='guidPage__topCenter'>
            <VisaRequirments/>
          </div>
        </div>
        <div className='guidPage__right'><Widgets /></div>
      </div>
      <WelcomePageFooter />
    </div>
  )
}

export default Guid