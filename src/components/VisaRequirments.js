import React from 'react';
import styles from '../styles/VisaRequirments.module.css';
import { useTranslation } from 'next-i18next';

function VisaRequirments() {

    const { t } = useTranslation();

  return (
    <div className={styles.visaRequirments}>
        <h2 className={styles.visaRequirments__title}>{t('requiredDoc_title')}</h2>
        <div className={styles.visaRequirments__container}>
            <ul className={styles.visaResuirments__ul}>
                <li className={styles.visaResuirments__li}>{t('requiredDoc_li1')}</li>
                <li className={styles.visaResuirments__li}>{t('requiredDoc_li2')}</li>
                <li className={styles.visaResuirments__li}>{t('requiredDoc_li3')}</li>
                <li className={styles.visaResuirments__li}>{t('requiredDoc_li4')}</li>
                <li className={styles.visaResuirments__li}>{t('requiredDoc_li5')}</li>
                <li className={styles.visaResuirments__li}>{t('requiredDoc_li6')}
                    <li className={styles.visaResuirments__li__subSection}>{t('requiredDoc_li7')}</li>
                    <li className={styles.visaResuirments__li__subSection}>{t('requiredDoc_li8')}</li>
                </li>
                <li className={styles.visaResuirments__li}>{t('requiredDoc_li9')}
                    <li className={styles.visaResuirments__li__subSection}>{t('requiredDoc_li10')}</li>
                    <li className={styles.visaResuirments__li__subSection}>{t('requiredDoc_li11')}</li>
                </li>
                <li className={styles.visaResuirments__li}>{t('requiredDoc_li12')}
                    <li className={styles.visaResuirments__li__subSection}>{t('requiredDoc_li13')}</li>
                </li>
            </ul>
            <ul className={styles.visaResuirments__ul}>
                <li className={styles.visaResuirments__li}>{t('requiredDoc_li14')}</li>
                <li className={styles.visaResuirments__li}>{t('requiredDoc_li15')}</li>
                <li className={styles.visaResuirments__li}>{t('requiredDoc_li16')}</li>
                <li className={styles.visaResuirments__li}>{t('requiredDoc_li17')}</li>
                <li className={styles.visaResuirments__li}>{t('requiredDoc_li18')}</li>
            </ul>
            <ul className={styles.visaResuirments__ul}>
                <li className={styles.visaResuirments__li}>{t('requiredDoc_li19')}</li>
                <li className={styles.visaResuirments__li}>{t('requiredDoc_li20')}</li>
                <li className={styles.visaResuirments__li}>{t('requiredDoc_li21')}</li>
                <li className={styles.visaResuirments__li}>{t('requiredDoc_li22')}</li>
                <li className={styles.visaResuirments__li}>{t('requiredDoc_li23')}</li>
                <li className={styles.visaResuirments__li}>{t('requiredDoc_li16')}
                    <li className={styles.visaResuirments__li__subSection}>{t('requiredDoc_li17')}</li>
                    <li className={styles.visaResuirments__li__subSection}>{t('requiredDoc_li18')}</li>
                </li>
                <li className={styles.visaResuirments__li}>{t('requiredDoc_li24')}
                    <li className={styles.visaResuirments__li__subSection}>{t('requiredDoc_li25')}</li>
                    <li className={styles.visaResuirments__li__subSection}>{t('requiredDoc_li26')}</li>
                    <li className={styles.visaResuirments__li__subSection}>{t('requiredDoc_li27')}</li>
                </li>
            </ul>
        </div>
        <p className={styles.visaRequirments__note}>{t('requiredDoc_note')}</p>
    </div>
  )
};

export default VisaRequirments;