import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from '../../../styles/ApplicationForm.module.css';

function UKVisitsSection({
    formData,
    onChange,
    showUkTripsSection,
    setShowUkTripsSection,
    showUkIssuedVisa,
    setShowUkIssuedVisa,
    showUkRemainVisa,
    setShowUkRemainVisa,
    showUkVisit2,
    setShowUkVisit2,
    showUkVisit3,
    setShowUkVisit3,
    showUkVisit4,
    setShowUkVisit4,
    showUkVisit5,
    setShowUkVisit5,
    showUkVisit6,
    setShowUkVisit6,
    showUkVisit7,
    setShowUkVisit7,
}) {
    const { t } = useTranslation();
    const {
        did_visit_uk,
        medical_treatment_uk,
        uk_insurance_number,
        uk_driving_license,
        obtained_uk_visa,
        uk_visa_issue_date,
        uk_remain_visa,
        uk_remain_visa_date,
        uk_remain_visa_results,
        number_of_uk_visits,
        purpose_of_uk_visit,
        uk_visit_arrival_date,
        period_of_uk_stay,
        purpose_of_uk_visit2,
        uk_visit_arrival_date2,
        period_of_uk_stay2,
        purpose_of_uk_visit3,
        uk_visit_arrival_date3,
        period_of_uk_stay3,
        purpose_of_uk_visit4,
        uk_visit_arrival_date4,
        period_of_uk_stay4,
        purpose_of_uk_visit5,
        uk_visit_arrival_date5,
        period_of_uk_stay5,
        purpose_of_uk_visit6,
        uk_visit_arrival_date6,
        period_of_uk_stay6,
        purpose_of_uk_visit7,
        uk_visit_arrival_date7,
        period_of_uk_stay7,
    } = formData;

    return (
        <>
            <hr className={styles.appform__hr}/>
            <p className={styles.ukForm__section__question}>{t('Form_travel_history')}</p>
            <div className={styles['input_wrap']+' '+styles['input__radio__group']}>
                <div className={styles['input_wrap']+' '+styles['passport__input__radio']}>
                    <ul className={styles.appform__ul}>
                        <li>
                            <label className={styles.radio_wrap}>
                                <input
                                    type='radio'
                                    name='did_visit_uk'
                                    value='Yes'
                                    className={styles.input_radio}
                                    onChange={e => onChange(e)}
                                    checked={did_visit_uk === 'Yes'}
                                    onClick={()=> setShowUkTripsSection(true)}
                                />
                                <span>{t('Form_yes')}</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.radio_wrap}>
                                <input
                                    type='radio'
                                    name='did_visit_uk'
                                    value='No'
                                    className={styles.input_radio}
                                    onChange={e => onChange(e)}
                                    checked={did_visit_uk === 'No'}
                                    onClick={()=> {
                                        setShowUkTripsSection(false)
                                    }}
                                />
                                <span>{t('Form_no')}</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            {showUkTripsSection?
                <>
                    <hr className={styles.appform__hr}/>
                    <p className={styles.ukForm__section__question}>{t('ukForm_medical')}</p>
                    <div className={styles['input_wrap']+' '+styles['input__radio__group']}>
                        <div className={styles['input_wrap']+' '+styles['passport__input__radio']}>
                            <ul className={styles.appform__ul}>
                                <li>
                                    <label className={styles.radio_wrap}>
                                        <input
                                            type='radio'
                                            name='medical_treatment_uk'
                                            value='Yes'
                                            className={styles.input_radio}
                                            onChange={e => onChange(e)}
                                            checked={medical_treatment_uk === 'Yes'}
                                        />
                                        <span>{t('Form_yes')}</span>
                                    </label>
                                </li>
                                <li>
                                    <label className={styles.radio_wrap}>
                                        <input
                                            type='radio'
                                            name='medical_treatment_uk'
                                            value='No'
                                            className={styles.input_radio}
                                            onChange={e => onChange(e)}
                                            checked={medical_treatment_uk === 'No'}
                                        />
                                        <span>{t('Form_no')}</span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>

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

                    <hr className={styles.appform__hr}/>
                    <p className={styles.ukForm__section__question}>{t('ukForm_tripsNo')}</p>
                    <div className={styles['input_wrap']+' '+styles['input__radio__group']}>
                            <div className={styles['input_wrap']+' '+styles['passport__input__radio']}>
                                <ul className={styles.appform__ul}>
                                    <li className={styles.appform__il}>
                                        <label className={styles.radio_wrap}>
                                            <input
                                                type='radio'
                                                name='number_of_uk_visits'
                                                value='1'
                                                className={styles.input_radio}
                                                onChange={e => onChange(e)}
                                                checked={number_of_uk_visits === '1'}
                                                onClick={()=> {
                                                    setShowUkVisit2(false)
                                                    setShowUkVisit3(false)
                                                    setShowUkVisit4(false)
                                                    setShowUkVisit5(false)
                                                    setShowUkVisit6(false)
                                                    setShowUkVisit7(false)
                                                }}
                                            />
                                            <span>1</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className={styles.radio_wrap}>
                                            <input
                                                type='radio'
                                                name='number_of_uk_visits'
                                                value='2'
                                                className={styles.input_radio}
                                                onChange={e => onChange(e)}
                                                onClick={()=> {
                                                    setShowUkVisit2(true)
                                                    setShowUkVisit3(false)
                                                    setShowUkVisit4(false)
                                                    setShowUkVisit5(false)
                                                    setShowUkVisit6(false)
                                                    setShowUkVisit7(false)
                                                }}
                                                checked={number_of_uk_visits === '2'}
                                            />
                                            <span>2</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className={styles.radio_wrap}>
                                            <input
                                                type='radio'
                                                name='number_of_uk_visits'
                                                value='3'
                                                className={styles.input_radio}
                                                onChange={e => onChange(e)}
                                                checked={number_of_uk_visits === '3'}
                                                onClick={()=> {
                                                    setShowUkVisit2(true)
                                                    setShowUkVisit3(true)
                                                    setShowUkVisit4(false)
                                                    setShowUkVisit5(false)
                                                    setShowUkVisit6(false)
                                                    setShowUkVisit7(false)
                                                }}
                                            />
                                            <span>3</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className={styles.radio_wrap}>
                                            <input
                                                type='radio'
                                                name='number_of_uk_visits'
                                                value='4'
                                                className={styles.input_radio}
                                                onChange={e => onChange(e)}
                                                checked={number_of_uk_visits === '4'}
                                                onClick={()=> {
                                                    setShowUkVisit2(true)
                                                    setShowUkVisit3(true)
                                                    setShowUkVisit4(true)
                                                    setShowUkVisit5(false)
                                                    setShowUkVisit6(false)
                                                    setShowUkVisit7(false)
                                                }}
                                            />
                                            <span>4</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className={styles.radio_wrap}>
                                            <input
                                                type='radio'
                                                name='number_of_uk_visits'
                                                value='5'
                                                className={styles.input_radio}
                                                onChange={e => onChange(e)}
                                                checked={number_of_uk_visits === '5'}
                                                onClick={()=> {
                                                    setShowUkVisit2(true)
                                                    setShowUkVisit3(true)
                                                    setShowUkVisit4(true)
                                                    setShowUkVisit5(true)
                                                    setShowUkVisit6(false)
                                                    setShowUkVisit7(false)
                                                }}
                                            />
                                            <span>5</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className={styles.radio_wrap}>
                                            <input
                                                type='radio'
                                                name='number_of_uk_visits'
                                                value='6'
                                                className={styles.input_radio}
                                                onChange={e => onChange(e)}
                                                checked={number_of_uk_visits === '6'}
                                                onClick={()=> {
                                                    setShowUkVisit2(true)
                                                    setShowUkVisit3(true)
                                                    setShowUkVisit4(true)
                                                    setShowUkVisit5(true)
                                                    setShowUkVisit6(true)
                                                    setShowUkVisit7(false)
                                                }}
                                            />
                                            <span>6</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className={styles.radio_wrap}>
                                            <input
                                                type='radio'
                                                name='number_of_uk_visits'
                                                value='7'
                                                className={styles.input_radio}
                                                onChange={e => onChange(e)}
                                                checked={number_of_uk_visits === '7'}
                                                onClick={()=> {
                                                    setShowUkVisit2(true)
                                                    setShowUkVisit3(true)
                                                    setShowUkVisit4(true)
                                                    setShowUkVisit5(true)
                                                    setShowUkVisit6(true)
                                                    setShowUkVisit7(true)
                                                }}
                                            />
                                            <span>7</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>

                            <hr className={styles.appform__hr}/>
                            <div className={styles.input_grp}>
                                <div className={styles.input_wrap}>
                                    <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='purpose_of_uk_visit'>{t('ukForm_visaPurpose')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='purpose_of_uk_visit'
                                        type='text'
                                        placeholder={t('ukForm_visaPurposeEx')}
                                        onChange={e => onChange(e)}
                                        value={purpose_of_uk_visit}
                                    />
                                </div>
                            </div>

                            <div className={styles.input_grp}>
                                <div className={styles.form__wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='uk_visit_arrival_date'>{t('ukForm_ukVisit_date')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='uk_visit_arrival_date'
                                        placeholder={t('ukForm_visaIssue_dateEx')}
                                        type='text'
                                        onChange={e => onChange(e)}
                                        value={uk_visit_arrival_date}
                                    />
                                </div>
                                <div className={styles.form__wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='period_of_uk_stay'>{t('ukForm_uk_StudyPeriod')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='period_of_uk_stay'
                                        type='text'
                                        placeholder={t('ukForm_uk_StudyPeriodEx')}
                                        onChange={e => onChange(e)}
                                        value={period_of_uk_stay}
                                    />
                                </div>
                            </div>

                    {showUkVisit2?
                        <>
                            <hr className={styles.appform__hr}/>
                            <div className={styles.input_grp}>
                                <div className={styles.input_wrap}>
                                    <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='purpose_of_uk_visit2'>{t('ukForm_visaPurpose')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='purpose_of_uk_visit2'
                                        type='text'
                                        placeholder={t('ukForm_visaPurposeEx')}
                                        onChange={e => onChange(e)}
                                        value={purpose_of_uk_visit2}
                                    />
                                </div>
                            </div>

                            <div className={styles.input_grp}>
                                <div className={styles.form__wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='uk_visit_arrival_date2'>{t('ukForm_ukVisit_date')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='uk_visit_arrival_date2'
                                        placeholder={t('ukForm_visaIssue_dateEx')}
                                        type='text'
                                        onChange={e => onChange(e)}
                                        value={uk_visit_arrival_date2}
                                    />
                                </div>
                                <div className={styles.form__wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='period_of_uk_stay2'>{t('ukForm_uk_StudyPeriod')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='period_of_uk_stay2'
                                        type='text'
                                        placeholder={t('ukForm_uk_StudyPeriodEx')}
                                        onChange={e => onChange(e)}
                                        value={period_of_uk_stay2}
                                    />
                                </div>
                            </div>
                        </>
                    :null}

                    {showUkVisit3?
                        <>
                            <hr className={styles.appform__hr}/>
                            <div className={styles.input_grp}>
                                <div className={styles.input_wrap}>
                                    <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='purpose_of_uk_visit3'>{t('ukForm_visaPurpose')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='purpose_of_uk_visit3'
                                        type='text'
                                        placeholder={t('ukForm_visaPurposeEx')}
                                        onChange={e => onChange(e)}
                                        value={purpose_of_uk_visit3}
                                    />
                                </div>
                            </div>

                            <div className={styles.input_grp}>
                                <div className={styles.form__wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='uk_visit_arrival_date3'>{t('ukForm_ukVisit_date')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='uk_visit_arrival_date3'
                                        placeholder={t('ukForm_visaIssue_dateEx')}
                                        type='text'
                                        onChange={e => onChange(e)}
                                        value={uk_visit_arrival_date3}
                                    />
                                </div>
                                <div className={styles.form__wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='period_of_uk_stay3'>{t('ukForm_uk_StudyPeriod')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='period_of_uk_stay3'
                                        type='text'
                                        placeholder={t('ukForm_uk_StudyPeriodEx')}
                                        onChange={e => onChange(e)}
                                        value={period_of_uk_stay3}
                                    />
                                </div>
                            </div>
                        </>
                    :null}
                    {showUkVisit4?
                        <>
                            <hr className={styles.appform__hr}/>
                            <div className={styles.input_grp}>
                                <div className={styles.input_wrap}>
                                    <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='purpose_of_uk_visit4'>{t('ukForm_visaPurpose')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='purpose_of_uk_visit4'
                                        type='text'
                                        placeholder={t('ukForm_visaPurposeEx')}
                                        onChange={e => onChange(e)}
                                        value={purpose_of_uk_visit4}
                                    />
                                </div>
                            </div>

                            <div className={styles.input_grp}>
                                <div className={styles.form__wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='uk_visit_arrival_date4'>{t('ukForm_ukVisit_date')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='uk_visit_arrival_date4'
                                        placeholder={t('ukForm_visaIssue_dateEx')}
                                        type='text'
                                        onChange={e => onChange(e)}
                                        value={uk_visit_arrival_date4}
                                    />
                                </div>
                                <div className={styles.form__wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='period_of_uk_stay4'>{t('ukForm_uk_StudyPeriod')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='period_of_uk_stay4'
                                        type='text'
                                        placeholder={t('ukForm_uk_StudyPeriodEx')}
                                        onChange={e => onChange(e)}
                                        value={period_of_uk_stay4}
                                    />
                                </div>
                            </div>
                        </>
                    :null}
                    {showUkVisit5?
                        <>
                            <hr className={styles.appform__hr}/>
                            <div className={styles.input_grp}>
                                <div className={styles.input_wrap}>
                                    <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='purpose_of_uk_visit5'>{t('ukForm_visaPurpose')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='purpose_of_uk_visit5'
                                        type='text'
                                        placeholder={t('ukForm_visaPurposeEx')}
                                        onChange={e => onChange(e)}
                                        value={purpose_of_uk_visit5}
                                    />
                                </div>
                            </div>

                            <div className={styles.input_grp}>
                                <div className={styles.form__wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='uk_visit_arrival_date5'>{t('ukForm_ukVisit_date')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='uk_visit_arrival_date5'
                                        placeholder={t('ukForm_visaIssue_dateEx')}
                                        type='text'
                                        onChange={e => onChange(e)}
                                        value={uk_visit_arrival_date5}
                                    />
                                </div>
                                <div className={styles.form__wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='period_of_uk_stay5'>{t('ukForm_uk_StudyPeriod')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='period_of_uk_stay5'
                                        type='text'
                                        placeholder={t('ukForm_uk_StudyPeriodEx')}
                                        onChange={e => onChange(e)}
                                        value={period_of_uk_stay5}
                                    />
                                </div>
                            </div>
                        </>
                    :null}
                    {showUkVisit6?
                        <>
                            <hr className={styles.appform__hr}/>
                            <div className={styles.input_grp}>
                                <div className={styles.input_wrap}>
                                    <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='purpose_of_uk_visit6'>{t('ukForm_visaPurpose')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='purpose_of_uk_visit6'
                                        type='text'
                                        placeholder={t('ukForm_visaPurposeEx')}
                                        onChange={e => onChange(e)}
                                        value={purpose_of_uk_visit6}
                                    />
                                </div>
                            </div>

                            <div className={styles.input_grp}>
                                <div className={styles.form__wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='uk_visit_arrival_date6'>{t('ukForm_ukVisit_date')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='uk_visit_arrival_date6'
                                        placeholder={t('ukForm_visaIssue_dateEx')}
                                        type='text'
                                        onChange={e => onChange(e)}
                                        value={uk_visit_arrival_date6}
                                    />
                                </div>
                                <div className={styles.form__wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='period_of_uk_stay6'>{t('ukForm_uk_StudyPeriod')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='period_of_uk_stay6'
                                        type='text'
                                        placeholder={t('ukForm_uk_StudyPeriodEx')}
                                        onChange={e => onChange(e)}
                                        value={period_of_uk_stay6}
                                    />
                                </div>
                            </div>
                        </>
                    :null}
                    {showUkVisit7?
                        <>
                            <hr className={styles.appform__hr}/>
                            <div className={styles.input_grp}>
                                <div className={styles.input_wrap}>
                                    <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='purpose_of_uk_visit7'>{t('ukForm_visaPurpose')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='purpose_of_uk_visit7'
                                        type='text'
                                        placeholder={t('ukForm_visaPurposeEx')}
                                        onChange={e => onChange(e)}
                                        value={purpose_of_uk_visit7}
                                    />
                                </div>
                            </div>

                            <div className={styles.input_grp}>
                                <div className={styles.form__wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='uk_visit_arrival_date7'>{t('ukForm_ukVisit_date')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='uk_visit_arrival_date7'
                                        placeholder={t('ukForm_visaIssue_dateEx')}
                                        type='text'
                                        onChange={e => onChange(e)}
                                        value={uk_visit_arrival_date7}
                                    />
                                </div>
                                <div className={styles.form__wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='period_of_uk_stay7'>{t('ukForm_uk_StudyPeriod')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='period_of_uk_stay7'
                                        type='text'
                                        placeholder={t('ukForm_uk_StudyPeriodEx')}
                                        onChange={e => onChange(e)}
                                        value={period_of_uk_stay7}
                                    />
                                </div>
                            </div>
                        </>
                    :null}
                </>
            :null}
        </>
    );
}

export default UKVisitsSection;
