import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from '../../../styles/ApplicationForm.module.css';

function PreviousTripsSection({
    formData,
    onChange,
    showTripsSection,
    setShowTripsSection,
    showCountryVisit2,
    setShowCountryVisit2,
    showCountryVisit3,
    setShowCountryVisit3,
    showCountryVisit4,
    setShowCountryVisit4,
    showCountryVisit5,
    setShowCountryVisit5,
    showCountryVisit6,
    setShowCountryVisit6,
    showCountryVisit7,
    setShowCountryVisit7,
}) {
    const { t } = useTranslation();
    const {
        did_visit_countries,
        number_of_visits,
        visted_country,
        purpose_of_visit,
        visit_arrival_date,
        visit_departure_date,
        visted_country2,
        purpose_of_visit2,
        visit_arrival_date2,
        visit_departure_date2,
        visted_country3,
        purpose_of_visit3,
        visit_arrival_date3,
        visit_departure_date3,
        visted_country4,
        purpose_of_visit4,
        visit_arrival_date4,
        visit_departure_date4,
        visted_country5,
        purpose_of_visit5,
        visit_arrival_date5,
        visit_departure_date5,
        visted_country6,
        purpose_of_visit6,
        visit_arrival_date6,
        visit_departure_date6,
        visted_country7,
        purpose_of_visit7,
        visit_arrival_date7,
        visit_departure_date7,
    } = formData;

    return (
        <>
            <hr className={styles.appform__hr}/>
            <p className={styles.ukForm__section__question}>{t('Form_otherTrips')}</p>
            <div className={styles['input_wrap']+' '+styles['input__radio__group']}>
                <div className={styles['input_wrap']+' '+styles['passport__input__radio']}>
                    <ul className={styles.appform__ul}>
                        <li>
                            <label className={styles.radio_wrap}>
                                <input
                                    type='radio'
                                    name='did_visit_countries'
                                    value='Yes'
                                    className={styles.input_radio}
                                    onChange={e => onChange(e)}
                                    checked={did_visit_countries === 'Yes'}
                                    onClick={()=> setShowTripsSection(true)}
                                />
                                <span>{t('Form_yes')}</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.radio_wrap}>
                                <input
                                    type='radio'
                                    name='did_visit_countries'
                                    value='No'
                                    className={styles.input_radio}
                                    onChange={e => onChange(e)}
                                    checked={did_visit_countries === 'No'}
                                    onClick={()=> {
                                        setShowTripsSection(false)
                                    }}
                                />
                                <span>{t('Form_no')}</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            {showTripsSection?
                <>
                    <p className={styles.ukForm__section__question}>{t('Form_otherTripsNo')}</p>
                    <div className={styles['input_wrap']+' '+styles['input__radio__group']}>
                            <div className={styles['input_wrap']+' '+styles['passport__input__radio']}>
                                <ul className={styles.appform__ul}>
                                    <li className={styles.appform__il}>
                                        <label className={styles.radio_wrap}>
                                            <input
                                                type='radio'
                                                name='number_of_visits'
                                                value='1'
                                                className={styles.input_radio}
                                                onChange={e => onChange(e)}
                                                checked={number_of_visits === '1'}
                                                onClick={()=> {
                                                    setShowCountryVisit2(false)
                                                    setShowCountryVisit3(false)
                                                    setShowCountryVisit4(false)
                                                    setShowCountryVisit5(false)
                                                    setShowCountryVisit6(false)
                                                    setShowCountryVisit7(false)
                                                }}
                                            />
                                            <span>1</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className={styles.radio_wrap}>
                                            <input
                                                type='radio'
                                                name='number_of_visits'
                                                value='2'
                                                className={styles.input_radio}
                                                onChange={e => onChange(e)}
                                                onClick={()=> {
                                                    setShowCountryVisit2(true)
                                                    setShowCountryVisit3(false)
                                                    setShowCountryVisit4(false)
                                                    setShowCountryVisit5(false)
                                                    setShowCountryVisit6(false)
                                                    setShowCountryVisit7(false)
                                                }}
                                                checked={number_of_visits === '2'}
                                            />
                                            <span>2</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className={styles.radio_wrap}>
                                            <input
                                                type='radio'
                                                name='number_of_visits'
                                                value='3'
                                                className={styles.input_radio}
                                                onChange={e => onChange(e)}
                                                checked={number_of_visits === '3'}
                                                onClick={()=> {
                                                    setShowCountryVisit2(true)
                                                    setShowCountryVisit3(true)
                                                    setShowCountryVisit4(false)
                                                    setShowCountryVisit5(false)
                                                    setShowCountryVisit6(false)
                                                    setShowCountryVisit7(false)
                                                }}
                                            />
                                            <span>3</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className={styles.radio_wrap}>
                                            <input
                                                type='radio'
                                                name='number_of_visits'
                                                value='4'
                                                className={styles.input_radio}
                                                onChange={e => onChange(e)}
                                                checked={number_of_visits === '4'}
                                                onClick={()=> {
                                                    setShowCountryVisit2(true)
                                                    setShowCountryVisit3(true)
                                                    setShowCountryVisit4(true)
                                                    setShowCountryVisit5(false)
                                                    setShowCountryVisit6(false)
                                                    setShowCountryVisit7(false)
                                                }}
                                            />
                                            <span>4</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className={styles.radio_wrap}>
                                            <input
                                                type='radio'
                                                name='number_of_visits'
                                                value='5'
                                                className={styles.input_radio}
                                                onChange={e => onChange(e)}
                                                checked={number_of_visits === '5'}
                                                onClick={()=> {
                                                    setShowCountryVisit2(true)
                                                    setShowCountryVisit3(true)
                                                    setShowCountryVisit4(true)
                                                    setShowCountryVisit5(true)
                                                    setShowCountryVisit6(false)
                                                    setShowCountryVisit7(false)
                                                }}
                                            />
                                            <span>5</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className={styles.radio_wrap}>
                                            <input
                                                type='radio'
                                                name='number_of_visits'
                                                value='6'
                                                className={styles.input_radio}
                                                onChange={e => onChange(e)}
                                                checked={number_of_visits === '6'}
                                                onClick={()=> {
                                                    setShowCountryVisit2(true)
                                                    setShowCountryVisit3(true)
                                                    setShowCountryVisit4(true)
                                                    setShowCountryVisit5(true)
                                                    setShowCountryVisit6(true)
                                                    setShowCountryVisit7(false)
                                                }}
                                            />
                                            <span>6</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className={styles.radio_wrap}>
                                            <input
                                                type='radio'
                                                name='number_of_visits'
                                                value='7'
                                                className={styles.input_radio}
                                                onChange={e => onChange(e)}
                                                checked={number_of_visits === '7'}
                                                onClick={()=> {
                                                    setShowCountryVisit2(true)
                                                    setShowCountryVisit3(true)
                                                    setShowCountryVisit4(true)
                                                    setShowCountryVisit5(true)
                                                    setShowCountryVisit6(true)
                                                    setShowCountryVisit7(true)
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
                                    <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='visted_country'>{t('Form_countryName')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='visted_country'
                                        type='text'
                                        placeholder={t('Form_countryEx')}
                                        onChange={e => onChange(e)}
                                        value={visted_country}
                                    />
                                </div>
                                <div className={styles.input_wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='purpose_of_visit'>{t('ukForm_visaPurpose')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='purpose_of_visit'
                                        type='text'
                                        placeholder={t('Form_visitPurpose')}
                                        onChange={e => onChange(e)}
                                        value={purpose_of_visit}
                                    />
                                </div>
                            </div>

                            <div className={styles.input_grp}>
                                <div className={styles.form__wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='visit_arrival_date'>{t('Form_visit_entry')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='visit_arrival_date'
                                        type='date'
                                        onChange={e => onChange(e)}
                                        value={visit_arrival_date}
                                    />
                                </div>
                                <div className={styles.form__wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='visit_departure_date'>{t('Form_visit_depature')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='visit_departure_date'
                                        type='date'
                                        onChange={e => onChange(e)}
                                        value={visit_departure_date}
                                    />
                                </div>
                            </div>

                    {showCountryVisit2?
                        <>
                            <hr className={styles.appform__hr}/>
                            <div className={styles.input_grp}>
                                <div className={styles.input_wrap}>
                                    <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='visted_country'>{t('Form_countryName')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='visted_country2'
                                        type='text'
                                        placeholder={t('Form_countryEx')}
                                        onChange={e => onChange(e)}
                                        value={visted_country2}
                                    />
                                </div>
                                <div className={styles.input_wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='last_name'>{t('ukForm_visaPurpose')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='purpose_of_visit2'
                                        type='text'
                                        placeholder={t('Form_visitPurpose')}
                                        onChange={e => onChange(e)}
                                        value={purpose_of_visit2}
                                    />
                                </div>
                            </div>

                            <div className={styles.input_grp}>
                                <div className={styles.form__wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='passport_issue_date'>{t('Form_visit_entry')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='visit_arrival_date2'
                                        type='date'
                                        onChange={e => onChange(e)}
                                        value={visit_arrival_date2}
                                    />
                                </div>
                                <div className={styles.form__wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='passport_issue_date'>{t('Form_visit_depature')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='visit_departure_date2'
                                        type='date'
                                        onChange={e => onChange(e)}
                                        value={visit_departure_date2}
                                    />
                                </div>
                            </div>

                        </>
                    :null}

                    {showCountryVisit3?
                        <>
                            <hr className={styles.appform__hr}/>
                            <div className={styles.input_grp}>
                                <div className={styles.input_wrap}>
                                    <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='visted_country3'>{t('Form_countryName')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='visted_country3'
                                        type='text'
                                        placeholder={t('Form_countryEx')}
                                        onChange={e => onChange(e)}
                                        value={visted_country3}
                                    />
                                </div>
                                <div className={styles.input_wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='purpose_of_visit3'>{t('ukForm_visaPurpose')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='purpose_of_visit3'
                                        type='text'
                                        placeholder={t('Form_visitPurpose')}
                                        onChange={e => onChange(e)}
                                        value={purpose_of_visit3}
                                    />
                                </div>
                            </div>

                            <div className={styles.input_grp}>
                                <div className={styles.form__wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='visit_arrival_date3'>{t('Form_visit_entry')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='visit_arrival_date3'
                                        type='date'
                                        onChange={e => onChange(e)}
                                        value={visit_arrival_date3}
                                    />
                                </div>
                                <div className={styles.form__wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='visit_departure_date3'>{t('Form_visit_depature')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='visit_departure_date3'
                                        type='date'
                                        onChange={e => onChange(e)}
                                        value={visit_departure_date3}
                                    />
                                </div>
                            </div>

                        </>
                    :null}

                    {showCountryVisit4?
                        <>
                            <hr className={styles.appform__hr}/>
                            <div className={styles.input_grp}>
                                <div className={styles.input_wrap}>
                                    <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='visted_country4'>{t('Form_countryName')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='visted_country4'
                                        type='text'
                                        placeholder={t('Form_countryEx')}
                                        onChange={e => onChange(e)}
                                        value={visted_country4}
                                    />
                                </div>
                                <div className={styles.input_wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='purpose_of_visit4'>{t('ukForm_visaPurpose')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='purpose_of_visit4'
                                        type='text'
                                        placeholder={t('Form_visitPurpose')}
                                        onChange={e => onChange(e)}
                                        value={purpose_of_visit4}
                                    />
                                </div>
                            </div>

                            <div className={styles.input_grp}>
                                <div className={styles.form__wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='visit_arrival_date4'>{t('Form_visit_entry')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='visit_arrival_date4'
                                        type='date'
                                        onChange={e => onChange(e)}
                                        value={visit_arrival_date4}
                                    />
                                </div>
                                <div className={styles.form__wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='visit_departure_date4'>{t('Form_visit_depature')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='visit_departure_date4'
                                        type='date'
                                        onChange={e => onChange(e)}
                                        value={visit_departure_date4}
                                    />
                                </div>
                            </div>

                        </>
                    :null}

                    {showCountryVisit5?
                        <>
                            <hr className={styles.appform__hr}/>
                            <div className={styles.input_grp}>
                                <div className={styles.input_wrap}>
                                    <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='visted_country5'>{t('Form_countryName')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='visted_country5'
                                        type='text'
                                        placeholder={t('Form_countryEx')}
                                        onChange={e => onChange(e)}
                                        value={visted_country5}
                                    />
                                </div>
                                <div className={styles.input_wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='purpose_of_visit5'>{t('ukForm_visaPurpose')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='purpose_of_visit5'
                                        type='text'
                                        placeholder={t('Form_visitPurpose')}
                                        onChange={e => onChange(e)}
                                        value={purpose_of_visit5}
                                    />
                                </div>
                            </div>

                            <div className={styles.input_grp}>
                                <div className={styles.form__wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='visit_arrival_date5'>{t('Form_visit_entry')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='visit_arrival_date5'
                                        type='date'
                                        onChange={e => onChange(e)}
                                        value={visit_arrival_date5}
                                    />
                                </div>
                                <div className={styles.form__wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='visit_departure_date5'>{t('Form_visit_depature')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='visit_departure_date5'
                                        type='date'
                                        onChange={e => onChange(e)}
                                        value={visit_departure_date5}
                                    />
                                </div>
                            </div>
                        </>
                    :null}

                    {showCountryVisit6?
                        <>
                            <hr className={styles.appform__hr}/>
                            <div className={styles.input_grp}>
                                <div className={styles.input_wrap}>
                                    <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='visted_country6'>{t('Form_countryName')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='visted_country6'
                                        type='text'
                                        placeholder={t('Form_countryEx')}
                                        onChange={e => onChange(e)}
                                        value={visted_country6}
                                    />
                                </div>
                                <div className={styles.input_wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='purpose_of_visit6'>{t('ukForm_visaPurpose')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='purpose_of_visit6'
                                        type='text'
                                        placeholder={t('Form_visitPurpose')}
                                        onChange={e => onChange(e)}
                                        value={purpose_of_visit6}
                                    />
                                </div>
                            </div>

                            <div className={styles.input_grp}>
                                <div className={styles.form__wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='visit_arrival_date6'>{t('Form_visit_entry')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='visit_arrival_date6'
                                        type='date'
                                        onChange={e => onChange(e)}
                                        value={visit_arrival_date6}
                                    />
                                </div>
                                <div className={styles.form__wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='visit_departure_date6'>{t('Form_visit_depature')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='visit_departure_date6'
                                        type='date'
                                        onChange={e => onChange(e)}
                                        value={visit_departure_date6}
                                    />
                                </div>
                            </div>
                        </>
                    :null}

                    {showCountryVisit7?
                        <>
                            <hr className={styles.appform__hr}/>
                            <div className={styles.input_grp}>
                                <div className={styles.input_wrap}>
                                    <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='visted_country7'>{t('Form_countryName')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='visted_country7'
                                        type='text'
                                        placeholder={t('Form_countryEx')}
                                        onChange={e => onChange(e)}
                                        value={visted_country7}
                                    />
                                </div>
                                <div className={styles.input_wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='purpose_of_visit7'>{t('ukForm_visaPurpose')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='purpose_of_visit7'
                                        type='text'
                                        placeholder={t('Form_visitPurpose')}
                                        onChange={e => onChange(e)}
                                        value={purpose_of_visit7}
                                    />
                                </div>
                            </div>

                            <div className={styles.input_grp}>
                                <div className={styles.form__wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='visit_arrival_date7'>{t('Form_visit_entry')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='visit_arrival_date7'
                                        type='date'
                                        onChange={e => onChange(e)}
                                        value={visit_arrival_date7}
                                    />
                                </div>
                                <div className={styles.form__wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='visit_departure_date7'>{t('Form_visit_depature')}</label>
                                    <input
                                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                        name='visit_departure_date7'
                                        type='date'
                                        onChange={e => onChange(e)}
                                        value={visit_departure_date7}
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

export default PreviousTripsSection;
