import React from 'react';
import './TermsAndConditions.css';
import { useTranslation } from "react-i18next";

function TermsAndConditions() {

    const { t } = useTranslation();

  return (
    <div className='termsAndConditions'>
        <div>
            <h2 className='termsAndConditions__title'>{t('terms_title')}</h2>
            <h4>{t('terms_subTitle1')}</h4>
            <p>{t('terms_p1')}</p>
            <p>{t('terms_p2')}</p>
        </div>

        <div>
            <h4>{t('terms_subTitle2')}</h4>
            <p>{t('terms_p3')}</p>
        </div>

        <div>
            <h4>{t('terms_subTitle3')}</h4>
            <ul>
                <li>{t('terms_li1')}</li>
                <li>{t('terms_li2')}</li>
                <li>{t('terms_li3')}</li>
            </ul>
        </div>

        <div>
            <h4>{t('terms_subTitle4')}</h4>
            <p>{t('terms_p4')}</p>
            <ul>
                <li>{t('terms_li4')}</li>
                <li>{t('terms_li5')}</li>
                <li>{t('terms_li6')}</li>
                <li>{t('terms_li7')}</li>
                <li>{t('terms_li8')}</li>
                <li>{t('terms_li9')}</li>
                <li>{t('terms_li10')}</li>
            </ul>
        </div>

        <div>
            <h4>{t('terms_subTitle5')}</h4>
            <ul>
                <li>{t('terms_li11')}</li>
                <li>{t('terms_li12')}</li>
                <li>{t('terms_li13')}</li>
            </ul>
        </div>

        <div>
            <h4>{t('terms_subTitle6')}</h4>
            <ul>
                <li>{t('terms_li14')}</li>
                <li>{t('terms_li15')}</li>
                <li>{t('terms_li16')}</li>
                <li>{t('terms_li17')}</li>
                <li>{t('terms_li18')}</li>
            </ul>
        </div>

        <div>
            <h4>{t('terms_subTitle7')}</h4>
            <ul>
                <li>{t('terms_li19')}</li>
                <li>{t('terms_li20')}</li>
            </ul>
        </div>

        <div>
            <h4>{t('terms_subTitle8')}</h4>
            <ul>
                <li>{t('terms_li21')}</li>
                <li>{t('terms_li22')}</li>
                <li>{t('terms_li23')}</li>
                <li>{t('terms_li24')}</li>
                <li>{t('terms_li25')}</li>
            </ul>
        </div>

        <div>
            <h4>{t('terms_subTitle9')}</h4>
            <p>{t('terms_p5')}</p>
            <p>{t('terms_p6')}</p>
        </div>

        <div>
            <h4>{t('terms_subTitle10')}</h4>
            <ul>
                <li>{t('terms_li26')}</li>
                <li>{t('terms_li27')}</li>
                <li>{t('terms_li28')}</li>
            </ul>
        </div>

        <div>
            <h4>{t('terms_subTitle11')}</h4>
            <p>{t('terms_p7')}</p>
            <ol>
                <li>{t('terms_li29')}</li>
                <li>{t('terms_li30')}</li>
                <li>{t('terms_li31')}</li>
            </ol>
        </div>

        <div>
            <h4>{t('terms_subTitle12')}</h4>
            <p>{t('terms_p8')}</p>
            <p>{t('terms_p9')}</p>
        </div>

        <div>
            <h4>{t('terms_subTitle13')}</h4>
            <p>{t('terms_p10')}</p>
            <p>{t('terms_p11')}</p>
        </div>
        
    </div>
  )
}

export default TermsAndConditions