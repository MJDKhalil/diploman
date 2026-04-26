import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from '../../../styles/ApplicationForm.module.css';

function UKStatusSection({
    formData,
    onChange,
    showUkIssuedVisa,
    setShowUkIssuedVisa,
    showUkRemainVisa,
    setShowUkRemainVisa,
}) {
    const { t } = useTranslation();
    const {
        uk_insurance_number,
        uk_driving_license,
        obtained_uk_visa,
        uk_visa_issue_date,
        uk_remain_visa,
        uk_remain_visa_date,
        uk_remain_visa_results,
    } = formData;

    return (
        <>
            <hr className={styles.appform__hr}/>
            <p className={styles.ukForm__section__question}>{t('ukForm_insuranceNo')}</p>
            <div className={styles['input_wrap']+' '+styles['input__radio__group']}>
                <div className={styles['input_wrap']+' '+styles['passport__input__radio']}>
                    <ul className={styles.appform__ul}>
                        <li>
                            <label className={styles.radio_wrap}>
                                <input
                                    type='radio'
                                    name='uk_insurance_number'
                                    value='Yes'
                                    className={styles.input_radio}
                                    onChange={e => onChange(e)}
                                    checked={uk_insurance_number === 'Yes'}
                                />
                                <span>{t('Form_yes')}</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.radio_wrap}>
                                <input
                                    type='radio'
                                    name='uk_insurance_number'
                                    value='No'
                                    className={styles.input_radio}
                                    onChange={e => onChange(e)}
                                    checked={uk_insurance_number === 'No'}
                                />
                                <span>{t('Form_no')}</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            <hr className={styles.appform__hr}/>
            <p className={styles.ukForm__section__question}>{t('ukForm_drivingLC')}</p>
            <div className={styles['input_wrap']+' '+styles['input__radio__group']}>
                <div className={styles['input_wrap']+' '+styles['passport__input__radio']}>
                    <ul className={styles.appform__ul}>
                        <li>
                            <label className={styles.radio_wrap}>
                                <input
                                    type='radio'
                                    name='uk_driving_license'
                                    value='Yes'
                                    className={styles.input_radio}
                                    onChange={e => onChange(e)}
                                    checked={uk_driving_license === 'Yes'}
                                />
                                <span>{t('Form_yes')}</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.radio_wrap}>
                                <input
                                    type='radio'
                                    name='uk_driving_license'
                                    value='No'
                                    className={styles.input_radio}
                                    onChange={e => onChange(e)}
                                    checked={uk_driving_license === 'No'}
                                />
                                <span>{t('Form_no')}</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            <hr className={styles.appform__hr}/>
            <p className={styles.ukForm__section__question}>{t('ukForm_visaIssued')}</p>
            <div className={styles['input_wrap']+' '+styles['input__radio__group']}>
                <div className={styles['input_wrap']+' '+styles['passport__input__radio']}>
                    <ul className={styles.appform__ul}>
                        <li>
                            <label className={styles.radio_wrap}>
                                <input
                                    type='radio'
                                    name='obtained_uk_visa'
                                    value='Yes'
                                    className={styles.input_radio}
                                    onChange={e => onChange(e)}
                                    checked={obtained_uk_visa === 'Yes'}
                                    onClick={()=> {
                                        setShowUkIssuedVisa(true)
                                    }}
                                />
                                <span>{t('Form_yes')}</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.radio_wrap}>
                                <input
                                    type='radio'
                                    name='obtained_uk_visa'
                                    value='No'
                                    className={styles.input_radio}
                                    onChange={e => onChange(e)}
                                    checked={obtained_uk_visa === 'No'}
                                    onClick={()=> {
                                        setShowUkIssuedVisa(false)
                                    }}
                                />
                                <span>{t('Form_no')}</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            {showUkIssuedVisa?
                <>
                    <hr className={styles.appform__hr}/>
                    <div className={styles.input_grp}>
                        <div className={styles.form__wrap}>
                            <label className={styles.ukForm__form__label} htmlFor='uk_visit_arrival_date2'>{t('ukForm_visaIssue_date')}</label>
                            <input
                                className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                name='uk_visa_issue_date'
                                placeholder={t('ukForm_visaIssue_dateEx')}
                                type='text'
                                onChange={e => onChange(e)}
                                value={uk_visa_issue_date}
                            />
                        </div>
                    </div>
                </>
            :null}

            <hr className={styles.appform__hr}/>
            <p className={styles.ukForm__section__question}>{t('ukForm_visa_extend')}</p>
            <div className={styles['input_wrap']+' '+styles['input__radio__group']}>
                <div className={styles['input_wrap']+' '+styles['passport__input__radio']}>
                    <ul className={styles.appform__ul}>
                        <li>
                            <label className={styles.radio_wrap}>
                                <input
                                    type='radio'
                                    name='uk_remain_visa'
                                    value='Yes'
                                    className={styles.input_radio}
                                    onChange={e => onChange(e)}
                                    checked={uk_remain_visa === 'Yes'}
                                    onClick={()=> {
                                        setShowUkRemainVisa(true)
                                    }}
                                />
                                <span>{t('Form_yes')}</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.radio_wrap}>
                                <input
                                    type='radio'
                                    name='uk_remain_visa'
                                    value='No'
                                    className={styles.input_radio}
                                    onChange={e => onChange(e)}
                                    checked={uk_remain_visa === 'No'}
                                    onClick={()=> {
                                        setShowUkRemainVisa(false)
                                    }}
                                />
                                <span>{t('Form_no')}</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            {showUkRemainVisa?
                <>
                    <hr className={styles.appform__hr}/>
                    <div className={styles.input_grp}>
                        <div className={styles.form__wrap}>
                            <label className={styles.ukForm__form__label} htmlFor='uk_remain_visa_date'>{t('ukForm_visa_extendDate')}</label>
                            <input
                                className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                name='uk_remain_visa_date'
                                placeholder={t('ukForm_visaIssue_dateEx')}
                                type='text'
                                onChange={e => onChange(e)}
                                value={uk_remain_visa_date}
                            />
                        </div>
                        <div className={styles['input_wrap']+' '+styles['passport__input__radio']}>
                            <ul className={styles.appform__ul}>
                                <li className={styles.appform__il}>
                                    <label className={styles.radio_wrap}>
                                        <input
                                            type="radio"
                                            name="uk_remain_visa_results"
                                            value='Approved'
                                            className={styles.input_radio}
                                            onChange={e => onChange(e)}
                                            checked={uk_remain_visa_results === 'Approved'}
                                        />
                                        <span>{t('ukForm_visaExtend_ok')}</span>
                                    </label>
                                </li>
                                <li>
                                    <label className={styles.radio_wrap}>
                                        <input
                                            type="radio"
                                            name="uk_remain_visa_results"
                                            value='Refused'
                                            className={styles.input_radio}
                                            onChange={e => onChange(e)}
                                            checked={uk_remain_visa_results === 'Refused'}
                                        />
                                        <span>{t('ukForm_visaExtend_refused')}</span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
            :null}
        </>
    );
}

export default UKStatusSection;
