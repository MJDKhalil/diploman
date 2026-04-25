import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from '../../../styles/UsaAppForm.module.css';

export default function OtherVisitsSection({
    formData, onChange,
    showTripsSection, setShowTripsSection,
    showCountryVisit2, setShowCountryVisit2,
    showCountryVisit3, setShowCountryVisit3,
    showCountryVisit4, setShowCountryVisit4,
    showCountryVisit5, setShowCountryVisit5,
    showCountryVisit6, setShowCountryVisit6,
    showCountryVisit7, setShowCountryVisit7,
}) {
    const { t } = useTranslation();
    const {
        visited_other_countries, number_of_visits,
        visted_country, visted_country2, visted_country3,
        visted_country4, visted_country5, visted_country6, visted_country7,
    } = formData;

    return (
        <>
            <hr className={styles.usaForm__hr}/>
            <p className={styles.usaForm__section__question}>{t('Form_otherTrips')}</p>
            <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio__group']}>
                <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio']}>
                    <ul className={styles.usaForm__ul}>
                        <li>
                            <label className={styles.usaForm__radio__wrap}>
                                <input
                                    type='radio'
                                    name='visited_other_countries'
                                    value='Yes'
                                    className={styles.usaForm__input__radio}
                                    onChange={e => onChange(e)}
                                    checked={visited_other_countries === 'Yes'}
                                    onClick={() => setShowTripsSection(true)}
                                />
                                <span>{t('Form_yes')}</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.usaForm__radio__wrap}>
                                <input
                                    type='radio'
                                    name='visited_other_countries'
                                    value='No'
                                    className={styles.usaForm__input__radio}
                                    onChange={e => onChange(e)}
                                    checked={visited_other_countries === 'No'}
                                    onClick={() => { setShowTripsSection(false) }}
                                />
                                <span>{t('Form_no')}</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            {showTripsSection?
                <>
                    <p className={styles.usaForm__section__question}>{t('Form_otherTripsNo')}</p>
                    <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio__group']}>
                        <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio']}>
                            <ul className={styles.usaForm__ul}>
                                <li className={styles.usaForm__il}>
                                    <label className={styles.usaForm__radio__wrap}>
                                        <input
                                            type='radio'
                                            name='number_of_visits'
                                            value='1'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={number_of_visits === '1'}
                                            onClick={() => {
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
                                    <label className={styles.usaForm__radio__wrap}>
                                        <input
                                            type='radio'
                                            name='number_of_visits'
                                            value='2'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            onClick={() => {
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
                                    <label className={styles.usaForm__radio__wrap}>
                                        <input
                                            type='radio'
                                            name='number_of_visits'
                                            value='3'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={number_of_visits === '3'}
                                            onClick={() => {
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
                                    <label className={styles.usaForm__radio__wrap}>
                                        <input
                                            type='radio'
                                            name='number_of_visits'
                                            value='4'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={number_of_visits === '4'}
                                            onClick={() => {
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
                                    <label className={styles.usaForm__radio__wrap}>
                                        <input
                                            type='radio'
                                            name='number_of_visits'
                                            value='5'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={number_of_visits === '5'}
                                            onClick={() => {
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
                                    <label className={styles.usaForm__radio__wrap}>
                                        <input
                                            type='radio'
                                            name='number_of_visits'
                                            value='6'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={number_of_visits === '6'}
                                            onClick={() => {
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
                                    <label className={styles.usaForm__radio__wrap}>
                                        <input
                                            type='radio'
                                            name='number_of_visits'
                                            value='7'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={number_of_visits === '7'}
                                            onClick={() => {
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

                    <hr className={styles.usaForm__hr}/>
                    <div className={styles.usaForm__input_grp}>
                        <div className={styles.usaForm__input_wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='visted_country'>{t('Form_countryName')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='visted_country'
                                type='text'
                                placeholder={t('Form_countryEx')}
                                onChange={e => onChange(e)}
                                value={visted_country}
                            />
                        </div>
                    </div>

                    {showCountryVisit2?
                        <>
                            <hr className={styles.usaForm__hr}/>
                            <div className={styles.usaForm__input_grp}>
                                <div className={styles.usaForm__input_wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='visted_country'>{t('Form_countryName')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='visted_country2'
                                        type='text'
                                        placeholder={t('Form_countryEx')}
                                        onChange={e => onChange(e)}
                                        value={visted_country2}
                                    />
                                </div>
                            </div>
                        </>
                    :null}

                    {showCountryVisit3?
                        <>
                            <hr className={styles.usaForm__hr}/>
                            <div className={styles.usaForm__input_grp}>
                                <div className={styles.usaForm__input_wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='visted_country3'>{t('Form_countryName')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='visted_country3'
                                        type='text'
                                        placeholder={t('Form_countryEx')}
                                        onChange={e => onChange(e)}
                                        value={visted_country3}
                                    />
                                </div>
                            </div>
                        </>
                    :null}

                    {showCountryVisit4?
                        <>
                            <hr className={styles.usaForm__hr}/>
                            <div className={styles.usaForm__input_grp}>
                                <div className={styles.usaForm__input_wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='visted_country4'>{t('Form_countryName')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='visted_country4'
                                        type='text'
                                        placeholder={t('Form_countryEx')}
                                        onChange={e => onChange(e)}
                                        value={visted_country4}
                                    />
                                </div>
                            </div>
                        </>
                    :null}

                    {showCountryVisit5?
                        <>
                            <hr className={styles.usaForm__hr}/>
                            <div className={styles.usaForm__input_grp}>
                                <div className={styles.usaForm__input_wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='visted_country5'>{t('Form_countryName')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='visted_country5'
                                        type='text'
                                        placeholder={t('Form_countryEx')}
                                        onChange={e => onChange(e)}
                                        value={visted_country5}
                                    />
                                </div>
                            </div>
                        </>
                    :null}

                    {showCountryVisit6?
                        <>
                            <hr className={styles.usaForm__hr}/>
                            <div className={styles.usaForm__input_grp}>
                                <div className={styles.usaForm__input_wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='visted_country6'>{t('Form_countryName')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='visted_country6'
                                        type='text'
                                        placeholder={t('Form_countryEx')}
                                        onChange={e => onChange(e)}
                                        value={visted_country6}
                                    />
                                </div>
                            </div>
                        </>
                    :null}

                    {showCountryVisit7?
                        <>
                            <hr className={styles.usaForm__hr}/>
                            <div className={styles.usaForm__input_grp}>
                                <div className={styles.usaForm__input_wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='visted_country7'>{t('Form_countryName')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='visted_country7'
                                        type='text'
                                        placeholder={t('Form_countryEx')}
                                        onChange={e => onChange(e)}
                                        value={visted_country7}
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
