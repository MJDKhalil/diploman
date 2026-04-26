import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from '../../../styles/UsaAppForm.module.css';

export default function USAVisitsSection({
    formData, onChange,
    showUsaTripsSection, setShowUsaTripsSection,
    showUsaIssuedVisa, setShowUsaIssuedVisa,
    showUsaVisit2, setShowUsaVisit2,
    showUsaVisit3, setShowUsaVisit3,
    showUsaVisit4, setShowUsaVisit4,
    showUsaVisit5, setShowUsaVisit5,
    showUsaVisit6, setShowUsaVisit6,
    showUsaVisit7, setShowUsaVisit7,
    showNoOfCompanions, setShowNoOfCompanions,
}) {
    const { t } = useTranslation();
    const {
        visited_usa, usa_driving_license, number_of_usa_visits,
        usa_visit_arrival_date, period_of_usa_stay,
        usa_visit_arrival_date2, period_of_usa_stay2,
        usa_visit_arrival_date3, period_of_usa_stay3,
        usa_visit_arrival_date4, period_of_usa_stay4,
        usa_visit_arrival_date5, period_of_usa_stay5,
        usa_visit_arrival_date6, period_of_usa_stay6,
        usa_visit_arrival_date7, period_of_usa_stay7,
        made_finger_prints, obtained_usa_visa, usa_visa_issue_date, usa_visa_no,
        visa_lost, visa_cancelled,
    } = formData;

    return (
        <>
            <hr className={styles.usaForm__hr}/>
            <p className={styles.usaForm__section__question}>{t('usaForm_travel_history')}</p>
            <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio__group']}>
                <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio']}>
                    <ul className={styles.usaForm__ul}>
                        <li>
                            <label className={styles.usaForm__radio__wrap}>
                                <input
                                    type='radio'
                                    name='visited_usa'
                                    value='Yes'
                                    className={styles.usaForm__input__radio}
                                    onChange={e => onChange(e)}
                                    checked={visited_usa === 'Yes'}
                                    onClick={() => setShowUsaTripsSection(true)}
                                />
                                <span>{t('Form_yes')}</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.usaForm__radio__wrap}>
                                <input
                                    type='radio'
                                    name='visited_usa'
                                    value='No'
                                    className={styles.usaForm__input__radio}
                                    onChange={e => onChange(e)}
                                    checked={visited_usa === 'No'}
                                    onClick={() => { setShowUsaTripsSection(false) }}
                                />
                                <span>{t('Form_no')}</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            {showUsaTripsSection?
                <>
                    <hr className={styles.usaForm__hr}/>
                    <p className={styles.usaForm__section__question}>{t('usaForm_drivingLC')}</p>
                    <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio__group']}>
                        <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio']}>
                            <ul className={styles.usaForm__ul}>
                                <li>
                                    <label className={styles.usaForm__radio__wrap}>
                                        <input
                                            type='radio'
                                            name='usa_driving_license'
                                            value='Yes'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={usa_driving_license === 'Yes'}
                                        />
                                        <span>{t('Form_yes')}</span>
                                    </label>
                                </li>
                                <li>
                                    <label className={styles.usaForm__radio__wrap}>
                                        <input
                                            type='radio'
                                            name='usa_driving_license'
                                            value='No'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={usa_driving_license === 'No'}
                                        />
                                        <span>{t('Form_no')}</span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr className={styles.usaForm__hr}/>
                    <p className={styles.usaForm__section__question}>{t('usaForm_tripsNo')}</p>
                    <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio__group']}>
                        <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio']}>
                            <ul className={styles.usaForm__ul}>
                                <li className={styles.usaForm__il}>
                                    <label className={styles.usaForm__radio__wrap}>
                                        <input
                                            type='radio'
                                            name='number_of_usa_visits'
                                            value='1'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={number_of_usa_visits === '1'}
                                            onClick={() => {
                                                setShowUsaVisit2(false)
                                                setShowUsaVisit3(false)
                                                setShowUsaVisit4(false)
                                                setShowUsaVisit5(false)
                                                setShowUsaVisit6(false)
                                                setShowUsaVisit7(false)
                                            }}
                                        />
                                        <span>1</span>
                                    </label>
                                </li>
                                <li>
                                    <label className={styles.usaForm__radio__wrap}>
                                        <input
                                            type='radio'
                                            name='number_of_usa_visits'
                                            value='2'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            onClick={() => {
                                                setShowUsaVisit2(true)
                                                setShowUsaVisit3(false)
                                                setShowUsaVisit4(false)
                                                setShowUsaVisit5(false)
                                                setShowUsaVisit6(false)
                                                setShowUsaVisit7(false)
                                            }}
                                            checked={number_of_usa_visits === '2'}
                                        />
                                        <span>2</span>
                                    </label>
                                </li>
                                <li>
                                    <label className={styles.usaForm__radio__wrap}>
                                        <input
                                            type='radio'
                                            name='number_of_usa_visits'
                                            value='3'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={number_of_usa_visits === '3'}
                                            onClick={() => {
                                                setShowUsaVisit2(true)
                                                setShowUsaVisit3(true)
                                                setShowUsaVisit4(false)
                                                setShowUsaVisit5(false)
                                                setShowUsaVisit6(false)
                                                setShowUsaVisit7(false)
                                            }}
                                        />
                                        <span>3</span>
                                    </label>
                                </li>
                                <li>
                                    <label className={styles.usaForm__radio__wrap}>
                                        <input
                                            type='radio'
                                            name='number_of_usa_visits'
                                            value='4'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={number_of_usa_visits === '4'}
                                            onClick={() => {
                                                setShowUsaVisit2(true)
                                                setShowUsaVisit3(true)
                                                setShowUsaVisit4(true)
                                                setShowUsaVisit5(false)
                                                setShowUsaVisit6(false)
                                                setShowUsaVisit7(false)
                                            }}
                                        />
                                        <span>4</span>
                                    </label>
                                </li>
                                <li>
                                    <label className={styles.usaForm__radio__wrap}>
                                        <input
                                            type='radio'
                                            name='number_of_usa_visits'
                                            value='5'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={number_of_usa_visits === '5'}
                                            onClick={() => {
                                                setShowUsaVisit2(true)
                                                setShowUsaVisit3(true)
                                                setShowUsaVisit4(true)
                                                setShowUsaVisit5(true)
                                                setShowUsaVisit6(false)
                                                setShowUsaVisit7(false)
                                            }}
                                        />
                                        <span>5</span>
                                    </label>
                                </li>
                                <li>
                                    <label className={styles.usaForm__radio__wrap}>
                                        <input
                                            type='radio'
                                            name='number_of_usa_visits'
                                            value='6'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={number_of_usa_visits === '6'}
                                            onClick={() => {
                                                setShowUsaVisit2(true)
                                                setShowUsaVisit3(true)
                                                setShowUsaVisit4(true)
                                                setShowUsaVisit5(true)
                                                setShowUsaVisit6(true)
                                                setShowUsaVisit7(false)
                                            }}
                                        />
                                        <span>6</span>
                                    </label>
                                </li>
                                <li>
                                    <label className={styles.usaForm__radio__wrap}>
                                        <input
                                            type='radio'
                                            name='number_of_usa_visits'
                                            value='7'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={number_of_usa_visits === '7'}
                                            onClick={() => {
                                                setShowUsaVisit2(true)
                                                setShowUsaVisit3(true)
                                                setShowUsaVisit4(true)
                                                setShowUsaVisit5(true)
                                                setShowUsaVisit6(true)
                                                setShowUsaVisit7(true)
                                            }}
                                        />
                                        <span>7</span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr className={styles.usaForm__hr}/>
                    <div className={styles.usaForm__input_grp}>
                        <div className={styles.usaForm__wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='Usa_visit_arrival_date'>{t('UsaForm_UsaVisit_date')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='usa_visit_arrival_date'
                                placeholder={t('UsaForm_visaIssue_dateEx')}
                                type='text'
                                onChange={e => onChange(e)}
                                value={usa_visit_arrival_date}
                            />
                        </div>
                        <div className={styles.usaForm__wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='period_of_Usa_stay'>{t('UsaForm_Usa_StudyPeriod')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='period_of_usa_stay'
                                type='text'
                                placeholder={t('UsaForm_Usa_StudyPeriodEx')}
                                onChange={e => onChange(e)}
                                value={period_of_usa_stay}
                            />
                        </div>
                    </div>

                    {showUsaVisit2?
                        <>
                            <hr className={styles.usaForm__hr}/>
                            <div className={styles.usaForm__input_grp}>
                                <div className={styles.usaForm__wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='Usa_visit_arrival_date2'>{t('UsaForm_UsaVisit_date')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='usa_visit_arrival_date2'
                                        placeholder={t('UsaForm_visaIssue_dateEx')}
                                        type='text'
                                        onChange={e => onChange(e)}
                                        value={usa_visit_arrival_date2}
                                    />
                                </div>
                                <div className={styles.usaForm__wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='period_of_Usa_stay2'>{t('UsaForm_Usa_StudyPeriod')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='period_of_usa_stay2'
                                        type='text'
                                        placeholder={t('UsaForm_Usa_StudyPeriodEx')}
                                        onChange={e => onChange(e)}
                                        value={period_of_usa_stay2}
                                    />
                                </div>
                            </div>
                        </>
                    :null}

                    {showUsaVisit3?
                        <>
                            <hr className={styles.usaForm__hr}/>
                            <div className={styles.usaForm__input_grp}>
                                <div className={styles.usaForm__wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='Usa_visit_arrival_date3'>{t('UsaForm_UsaVisit_date')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='usa_visit_arrival_date3'
                                        placeholder={t('UsaForm_visaIssue_dateEx')}
                                        type='text'
                                        onChange={e => onChange(e)}
                                        value={usa_visit_arrival_date3}
                                    />
                                </div>
                                <div className={styles.usaForm__wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='period_of_Usa_stay3'>{t('UsaForm_Usa_StudyPeriod')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='period_of_usa_stay3'
                                        type='text'
                                        placeholder={t('UsaForm_Usa_StudyPeriodEx')}
                                        onChange={e => onChange(e)}
                                        value={period_of_usa_stay3}
                                    />
                                </div>
                            </div>
                        </>
                    :null}

                    {showUsaVisit4?
                        <>
                            <hr className={styles.usaForm__hr}/>
                            <div className={styles.usaForm__input_grp}>
                                <div className={styles.usaForm__wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='Usa_visit_arrival_date4'>{t('UsaForm_UsaVisit_date')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='usa_visit_arrival_date4'
                                        placeholder={t('UsaForm_visaIssue_dateEx')}
                                        type='text'
                                        onChange={e => onChange(e)}
                                        value={usa_visit_arrival_date4}
                                    />
                                </div>
                                <div className={styles.usaForm__wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='period_of_Usa_stay4'>{t('UsaForm_Usa_StudyPeriod')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='period_of_usa_stay4'
                                        type='text'
                                        placeholder={t('UsaForm_Usa_StudyPeriodEx')}
                                        onChange={e => onChange(e)}
                                        value={period_of_usa_stay4}
                                    />
                                </div>
                            </div>
                        </>
                    :null}

                    {showUsaVisit5?
                        <>
                            <hr className={styles.usaForm__hr}/>
                            <div className={styles.usaForm__input_grp}>
                                <div className={styles.usaForm__wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='Usa_visit_arrival_date5'>{t('UsaForm_UsaVisit_date')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='usa_visit_arrival_date5'
                                        placeholder={t('UsaForm_visaIssue_dateEx')}
                                        type='text'
                                        onChange={e => onChange(e)}
                                        value={usa_visit_arrival_date5}
                                    />
                                </div>
                                <div className={styles.usaForm__wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='period_of_Usa_stay5'>{t('UsaForm_Usa_StudyPeriod')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='period_of_usa_stay5'
                                        type='text'
                                        placeholder={t('UsaForm_Usa_StudyPeriodEx')}
                                        onChange={e => onChange(e)}
                                        value={period_of_usa_stay5}
                                    />
                                </div>
                            </div>
                        </>
                    :null}

                    {showUsaVisit6?
                        <>
                            <hr className={styles.usaForm__hr}/>
                            <div className={styles.usaForm__input_grp}>
                                <div className={styles.usaForm__wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='Usa_visit_arrival_date6'>{t('UsaForm_UsaVisit_date')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='usa_visit_arrival_date6'
                                        placeholder={t('UsaForm_visaIssue_dateEx')}
                                        type='text'
                                        onChange={e => onChange(e)}
                                        value={usa_visit_arrival_date6}
                                    />
                                </div>
                                <div className={styles.usaForm__wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='period_of_Usa_stay6'>{t('UsaForm_Usa_StudyPeriod')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='period_of_usa_stay6'
                                        type='text'
                                        placeholder={t('UsaForm_Usa_StudyPeriodEx')}
                                        onChange={e => onChange(e)}
                                        value={period_of_usa_stay6}
                                    />
                                </div>
                            </div>
                        </>
                    :null}

                    {showUsaVisit7?
                        <>
                            <hr className={styles.usaForm__hr}/>
                            <div className={styles.usaForm__input_grp}>
                                <div className={styles.usaForm__wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='Usa_visit_arrival_date7'>{t('UsaForm_UsaVisit_date')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='usa_visit_arrival_date7'
                                        placeholder={t('UsaForm_visaIssue_dateEx')}
                                        type='text'
                                        onChange={e => onChange(e)}
                                        value={usa_visit_arrival_date7}
                                    />
                                </div>
                                <div className={styles.usaForm__wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='period_of_Usa_stay7'>{t('UsaForm_Usa_StudyPeriod')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='period_of_usa_stay7'
                                        type='text'
                                        placeholder={t('UsaForm_Usa_StudyPeriodEx')}
                                        onChange={e => onChange(e)}
                                        value={period_of_usa_stay7}
                                    />
                                </div>
                            </div>
                        </>
                    :null}
                </>
            :null}

            <hr className={styles.usaForm__hr}/>
            <div className={styles.usaForm__input_grp}>
                <p className={styles.usaForm__section__question} >{t('usaForm_fingerPrints')}</p>
                <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio']}>
                    <ul className={styles.usaForm__ul}>
                        <li className={styles.usaForm__il}>
                            <label className={styles.usaForm__radio__wrap}>
                                <input
                                    type='radio'
                                    name='made_finger_prints'
                                    value='Yes'
                                    className={styles.usaForm__input__radio}
                                    onChange={e => onChange(e)}
                                    checked={made_finger_prints === 'Yes'}
                                    onClick={() => setShowNoOfCompanions(true)}
                                />
                                <span>{t('Form_yes')}</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.usaForm__radio__wrap}>
                                <input
                                    type='radio'
                                    name='made_finger_prints'
                                    value='No'
                                    className={styles.usaForm__input__radio}
                                    onChange={e => onChange(e)}
                                    checked={made_finger_prints === 'No'}
                                    onClick={() => setShowNoOfCompanions(false)}
                                />
                                <span>{t('Form_no')}</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            <hr className={styles.usaForm__hr}/>
            <p className={styles.usaForm__section__question}>{t('usaForm_visaIssued')}</p>
            <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio__group']}>
                <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio']}>
                    <ul className={styles.usaForm__ul}>
                        <li>
                            <label className={styles.usaForm__radio__wrap}>
                                <input
                                    type='radio'
                                    name='obtained_usa_visa'
                                    value='Yes'
                                    className={styles.usaForm__input__radio}
                                    onChange={e => onChange(e)}
                                    checked={obtained_usa_visa === 'Yes'}
                                    onClick={() => { setShowUsaIssuedVisa(true) }}
                                />
                                <span>{t('Form_yes')}</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.usaForm__radio__wrap}>
                                <input
                                    type='radio'
                                    name='obtained_usa_visa'
                                    value='No'
                                    className={styles.usaForm__input__radio}
                                    onChange={e => onChange(e)}
                                    checked={obtained_usa_visa === 'No'}
                                    onClick={() => { setShowUsaIssuedVisa(false) }}
                                />
                                <span>{t('Form_no')}</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            {showUsaIssuedVisa?
                <>
                    <hr className={styles.usaForm__hr}/>
                    <div className={styles.usaForm__input_grp}>
                        <div className={styles.usaForm__wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='Usa_visit_arrival_date2'>{t('usaForm_visaIssue_date')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='usa_visa_issue_date'
                                placeholder={t('UsaForm_visaIssue_dateEx')}
                                type='text'
                                onChange={e => onChange(e)}
                                value={usa_visa_issue_date}
                            />
                        </div>
                        <div className={styles.usaForm__wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='usa_visa_no'>{t('usaForm_visaNumber')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='usa_visa_no'
                                type='text'
                                onChange={e => onChange(e)}
                                value={usa_visa_no}
                            />
                        </div>
                    </div>

                    <hr className={styles.usaForm__hr}/>
                    <p className={styles.usaForm__section__question}>{t('usaForm_visaLost')}</p>
                    <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio__group']}>
                        <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio']}>
                            <ul className={styles.usaForm__ul}>
                                <li>
                                    <label className={styles.usaForm__radio__wrap}>
                                        <input
                                            type='radio'
                                            name='visa_lost'
                                            value='Yes'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={visa_lost === 'Yes'}
                                        />
                                        <span>{t('Form_yes')}</span>
                                    </label>
                                </li>
                                <li>
                                    <label className={styles.usaForm__radio__wrap}>
                                        <input
                                            type='radio'
                                            name='visa_lost'
                                            value='No'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={visa_lost === 'No'}
                                        />
                                        <span>{t('Form_no')}</span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr className={styles.usaForm__hr}/>
                    <p className={styles.usaForm__section__question}>{t('usaForm_visaCancelled')}</p>
                    <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio__group']}>
                        <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio']}>
                            <ul className={styles.usaForm__ul}>
                                <li>
                                    <label className={styles.usaForm__radio__wrap}>
                                        <input
                                            type='radio'
                                            name='visa_cancelled'
                                            value='Yes'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={visa_cancelled === 'Yes'}
                                        />
                                        <span>{t('Form_yes')}</span>
                                    </label>
                                </li>
                                <li>
                                    <label className={styles.usaForm__radio__wrap}>
                                        <input
                                            type='radio'
                                            name='visa_cancelled'
                                            value='No'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={visa_cancelled === 'No'}
                                        />
                                        <span>{t('Form_no')}</span>
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
