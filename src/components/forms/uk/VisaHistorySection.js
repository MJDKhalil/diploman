import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from '../../../styles/ApplicationForm.module.css';

function VisaHistorySection({ formData, onChange, showRefusalSection, setShowRefusalSection }) {
    const { t } = useTranslation();
    const {
        visa_refusl,
        country_of_refusal,
        visa_refusal_date,
        visa_refusal_desc,
    } = formData;

    return (
        <>
            <hr className={styles.appform__hr}/>
            <p className={styles.ukForm__section__question}>{t('Form_visaRefusal')}</p>
            <div className={styles['input_wrap']+' '+styles['input__radio__group']}>
                <div className={styles['input_wrap']+' '+styles['passport__input__radio']}>
                    <ul className={styles.appform__ul}>
                        <li>
                            <label className={styles.radio_wrap}>
                                <input
                                    type="radio"
                                    name="visa_refusl"
                                    value='Yes'
                                    className={styles.input_radio}
                                    onChange={e => onChange(e)}
                                    checked={visa_refusl === 'Yes'}
                                    onClick={()=> setShowRefusalSection(true)}
                                />
                                <span>{t('Form_yes')}</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.radio_wrap}>
                                <input
                                    type="radio"
                                    name="visa_refusl"
                                    value='No'
                                    className={styles.input_radio}
                                    onChange={e => onChange(e)}
                                    onClick={()=> setShowRefusalSection(false)}
                                    checked={visa_refusl === 'No'}
                                />
                                <span>{t('Form_no')}</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            {showRefusalSection?
                <>
                    <div className={styles.input_grp}>
                        <div className={styles.input_wrap}>
                            <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='country_of_refusal'>{t('Form_visaRefusal_country')}</label>
                            <input
                                className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                type='text'
                                name='country_of_refusal'
                                value={country_of_refusal}
                                placeholder={t('Form_visaRefusal_countryEx')}
                                onChange={e => onChange(e)}
                            />
                        </div>
                        <div className={styles.input_wrap}>
                            <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='visa_refusal_date'>{t('Form_visaRefusal_date')}</label>
                            <input
                                className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                type='date'
                                name='visa_refusal_date'
                                value={visa_refusal_date}
                                onChange={e => onChange(e)}
                            />
                        </div>
                    </div>
                    <div className={styles.input_wrap}>
                        <label className={styles.ukForm__form__label} htmlFor='visa_refusal_desc'>{t('Form_visaRefusal_details')}</label>
                        <textarea
                            className={styles.applicationForm__form__textarea}
                            name='visa_refusal_desc'
                            cols='30'
                            rows='5'
                            placeholder={t('Form_visaRefusal_reason')}
                            onChange={e => onChange(e)}
                            value={visa_refusal_desc}
                        />
                    </div>
                </>
            :null}
        </>
    );
}

export default VisaHistorySection;
