import React from 'react';
import './VisaRequirments.css';
import { useTranslation } from "react-i18next";

function VisaRequirments() {

    const { t } = useTranslation();

  return (
    <div className='visaRequirments'>
        <h2 className='visaRequirments__title'>{t('requiredDoc_title')}</h2>
        <div className='visaRequirments__container'>
            <ul>
                <li className='visaRequirments__ul__title'>{t('requiredDoc_li1')}</li>
                <li className='visaRequirments__li'>{t('requiredDoc_li2')}</li>
                <li className='visaRequirments__li'>{t('requiredDoc_li3')}</li>
                <li className='visaRequirments__li'>{t('requiredDoc_li4')}</li>
                <li className='visaRequirments__li'>{t('requiredDoc_li5')}</li>
                <li className='visaRequirments__li'>{t('requiredDoc_li6')}
                    <li className='visaRequirments__inline__li'>{t('requiredDoc_li7')}</li>
                    <li className='visaRequirments__inline__li'>{t('requiredDoc_li8')}</li>
                </li>
                <li className='visaRequirments__li'>{t('requiredDoc_li9')}
                    <li className='visaRequirments__inline__li'>{t('requiredDoc_li10')}</li>
                    <li className='visaRequirments__inline__li'>{t('requiredDoc_li11')}</li>
                </li>
                <li className='visaRequirments__li'>{t('requiredDoc_li12')}
                    <li className='visaRequirments__inline__li'>{t('requiredDoc_li13')}</li>
                </li>
            </ul>
            <ul>
                <li className='visaRequirments__ul__title'>{t('requiredDoc_li14')}</li>
            <li className='visaRequirments__li'>{t('requiredDoc_li15')}</li>
            <li className='visaRequirments__li'>{t('requiredDoc_li16')}</li>
            <li className='visaRequirments__li'>{t('requiredDoc_li17')}</li>
            <li className='visaRequirments__li'>{t('requiredDoc_li18')}</li>
            </ul>
            <ul>
                <li className='visaRequirments__ul__title'>{t('requiredDoc_li19')}</li>
                <li className='visaRequirments__li'>{t('requiredDoc_li20')}</li>
                <li className='visaRequirments__li'>{t('requiredDoc_li21')}</li>
                <li className='visaRequirments__li'>{t('requiredDoc_li22')}</li>
                <li className='visaRequirments__li'>{t('requiredDoc_li23')}</li>
                <li className='visaRequirments__li'>{t('requiredDoc_li16')}
                    <li className='visaRequirments__inline__li'>{t('requiredDoc_li17')}</li>
                    <li className='visaRequirments__inline__li'>{t('requiredDoc_li18')}</li>
                </li>
                <li className='visaRequirments__li'>{t('requiredDoc_li24')}
                    <li className='visaRequirments__inline__li'>{t('requiredDoc_li25')}</li>
                    <li className='visaRequirments__inline__li'>{t('requiredDoc_li26')}</li>
                    <li className='visaRequirments__inline__li'>{t('requiredDoc_li27')}</li>
                </li>
            </ul>
        </div>
        <p className='visaRequirments__note'>{t('requiredDoc_note')}</p>
    </div>
  )
}

export default VisaRequirments