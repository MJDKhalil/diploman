import React from 'react';
import './Forms.css';
import { useTranslation } from "react-i18next";
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function Forms() {

  const { t } = useTranslation();

  return (
    <div className='forms'>

        <Helmet>
          <title>Diploman - Forms</title>
          <meta 
            name='description'
            content='application forms'
          />
        </Helmet>

      <Link className='forms__link' to='/usa-application-form'>
        <div className='formsCard'>
            <div className='forms__display'>
                <img className='forms__img' src="data:image/png;base64,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" alt='school logo' />
            </div>
            <h3 className='forms__subhead'>{t('forms_us_application')}</h3>
        </div>
      </Link>

      <Link className='forms__link' to='/uk-application-form'>
        <div className='formsCard'>
            <div className='forms__display'>
                <img className='forms__img' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAbFBMVEX////IEC4BIWnFABjrvcEAAF8AHmjICSvKKD3EAADHACahprwAB2HGACCprsIAGWfeiZH13N799vfTWmfEAAkAF2aaoLgAAFXFABPtxcjJITgAE2Xe4OfVZHDgk5vSU2Lz1tnRSVr67e7bfIeRPeizAAAFEElEQVR4nO3dbVcaMRAF4Fi76PpS38CqVEX9//+xWo9lgQWS3Htn4jlzP/UDbiYPsJTdMEmPV2lvTmfd5IcuZ6fLoY6PDnbk6HhQ1JmwpEk3HxR1/TRW1Un/vEgn/U0G4K8LIWBzfJNu9muAdzk9H8P75/b/H36AjfFNuotcvA8+d8Cm+IrwPvmcARviK8T74ssGnAgAm+ErxlvyOQI2wleBN+RzA2yCrwpvlc8JsAG+Srx1PhdAd75qvE0+B0BnPgAvpfOSB68Csv4b48oH4VX8AR/QkQ/EawLQjY+A1wCgEx8Jzx3QhY+I5wzowEfGcwU05yPizUkHAgCN+Qouhu6b8yytH6y3BzTl4843UZ+NOkBDPvaLJY0d1BjQjI8/z/R1YNbJtALQiE8xx6Q8eEt8mvkl9QBt8KnmlkSDlFzOkvPpXhhJNlA+oJhP+a5KwsFyAaV82lPSBp8DoJBPfT4f4TMHlPHp5zHKZ/wpLOKzeBFs4TMFlPDZvIO28hkCCvisTj87+MwA6Xx25+6dfEaAZD7LD749fCaAVD7br557+QwKIvJZf2/P4JMXReOzv+iRxSe+oEri87jom8nHv8zN5vO5Z5PNJ3x2CXxeN7wK+GSAMJ/fvZoiPtHJGeTzvE9TyCd5piE+15tc5XyCggE+X7wqPvrXomo+b7xKPjJgV8fXueNV81EBu9savtvOHQ/gYwL+qeEb/JHf2kSAT7LIMJ+Pgwf+vALiEwAW83niwXx0wEI+718FpA7P7+G5//rybiR9/7Lg872+9f3IYNMcvNP3svFkzckwFee+yDLBByX4oAQflOCDEnxQgg9K8EEJPijfje9nU7l/2M33cO9d4WrSYVvZqffu513fWkYakUTyE3xQgg9K8EEJPijBByX4oAQflOCDEnxQgg9K8EEJPijBByX4oAQflOCDEnxQgg9K8EEJPijBByX4oAQflOCDEnxQgg9K8EEJPiixwgpKrO+D4r06cz3fbXVpYwk+KMEHJfigBB+U4IMSfFCCD0rwQflufIR2EiudNLbl6mY62mHj7XXlYRS+xctoh427y+vlY0idNLh9XLbj9SebGufT4YR4fHnjUfq4NIVHfPNmAfp2EaLjUc99FoC0DmrIJNAOahCgTwc1Hh6jf58XIKV7JFQ8qXukDyChdymIR+td6gEId84lFE3rnGsPCPZtphRM7NtsDQh1DScVS+0abgsI9KwvLLTfWii5Zz2tLi6frEj6jgl2gJX7dVALFOzXYQVYtVsMuTjJbjE2gBV7FRUWtv/kLNqryAKweKcsOp5wpyxBraV8BgUJ92lTAxbtEigqRrpLIFQztkug0TMp3qNSCZi9Q6oMz2CHVB1g5v68QjyT/XlVgFm7Q0vxjHaH1gBm7E2uGVjPZzGPET5jPCGf/l20wWeOJ+VTAybZYPm3AKV8WsAkGqjk/qmYTwmYLAbx5tPNLS0HoN/DaIhPBZi0z047fJo5ps8De90rsORTzDO54xny8eea3PFM+diAae6NZ8xHBZztP45+mZcxH/OeiD+eA59kYacTngufCaDRAmsXPjmg1ep0Lz4poBmeI58M0BDPlQ8EPPTHc+bDAGvx4B+UDOLMhwD64zXAVw/oj9cEXy2gP14jfHWA/njN8NUAluHxPm2HaYavHNAfrym+UkB/vMb4ygC347Euhu5PY3wlF1TT4nkM7+Doafi7/5kQr0G+D8D5oKitgI9/ASzsca5ETv80AAAAAElFTkSuQmCC" alt='school logo' />
            </div>
            <h3 className='forms__subhead'>{t('forms_uk_application')}</h3>
        </div>
      </Link>
    </div>
  )
}

export default Forms;