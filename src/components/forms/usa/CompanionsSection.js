import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from '../../../styles/UsaAppForm.module.css';

export default function CompanionsSection({
    formData, onChange,
    showNoOfCompanions, setShowNoOfCompanions,
    showCompanionSection2, setShowCompanionSection2,
    showCompanionSection3, setShowCompanionSection3,
    showCompanionSection4, setShowCompanionSection4,
    showCompanionSection5, setShowCompanionSection5,
}) {
    const { t } = useTranslation();
    const {
        travelling_alone, number_of_companions,
        companion1_first_name, companion1_last_name, companion1_relationship,
        companion2_first_name, companion2_last_name, companion2_relationship,
        companion3_first_name, companion3_last_name, companion3_relationship,
        companion4_first_name, companion4_last_name, companion4_relationship,
        companion5_first_name, companion5_last_name, companion5_relationship,
    } = formData;

    return (
        <>
            <hr className={styles.usaForm__hr}/>
            <div className={styles.usaForm__input_grp}>
                <p className={styles.usaForm__section__question} >{t('usaForm_companions')}</p>
                <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio']}>
                    <ul className={styles.usaForm__ul}>
                        <li className={styles.usaForm__il}>
                            <label className={styles.usaForm__radio__wrap}>
                                <input
                                    type='radio'
                                    name='travelling_alone'
                                    value='Yes'
                                    className={styles.usaForm__input__radio}
                                    onChange={e => onChange(e)}
                                    checked={travelling_alone === 'Yes'}
                                    onClick={() => setShowNoOfCompanions(true)}
                                />
                                <span>{t('Form_yes')}</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.usaForm__radio__wrap}>
                                <input
                                    type='radio'
                                    name='travelling_alone'
                                    value='No'
                                    className={styles.usaForm__input__radio}
                                    onChange={e => onChange(e)}
                                    checked={travelling_alone === 'No'}
                                    onClick={() => setShowNoOfCompanions(false)}
                                />
                                <span>{t('Form_no')}</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            { showNoOfCompanions?
                <>
                    <p className={styles.usaForm__section__question}>{t('usaForm_NoOfCompanions')}</p>
                    <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio__group']}>
                        <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio']}>
                            <ul className={styles.usaForm__ul}>
                                <li className={styles.usaForm__il}>
                                    <label className={styles.usaForm__radio__wrap}>
                                        <input
                                            type='radio'
                                            name='number_of_companions'
                                            value='1'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={number_of_companions === '1'}
                                            onClick={() => {
                                                setShowCompanionSection2(false)
                                                setShowCompanionSection3(false)
                                                setShowCompanionSection4(false)
                                                setShowCompanionSection5(false)
                                            }}
                                        />
                                        <span>1</span>
                                    </label>
                                </li>
                                <li>
                                    <label className={styles.usaForm__radio__wrap}>
                                        <input
                                            type='radio'
                                            name='number_of_companions'
                                            value='2'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            onClick={() => {
                                                setShowCompanionSection2(true)
                                                setShowCompanionSection3(false)
                                                setShowCompanionSection4(false)
                                                setShowCompanionSection5(false)
                                            }}
                                            checked={number_of_companions === '2'}
                                        />
                                        <span>2</span>
                                    </label>
                                </li>
                                <li>
                                    <label className={styles.usaForm__radio__wrap}>
                                        <input
                                            type='radio'
                                            name='number_of_companions'
                                            value='3'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={number_of_companions === '3'}
                                            onClick={() => {
                                                setShowCompanionSection2(true)
                                                setShowCompanionSection3(true)
                                                setShowCompanionSection4(false)
                                                setShowCompanionSection5(false)
                                            }}
                                        />
                                        <span>3</span>
                                    </label>
                                </li>
                                <li>
                                    <label className={styles.usaForm__radio__wrap}>
                                        <input
                                            type='radio'
                                            name='number_of_companions'
                                            value='4'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={number_of_companions === '4'}
                                            onClick={() => {
                                                setShowCompanionSection2(true)
                                                setShowCompanionSection3(true)
                                                setShowCompanionSection4(true)
                                                setShowCompanionSection5(false)
                                            }}
                                        />
                                        <span>4</span>
                                    </label>
                                </li>
                                <li>
                                    <label className={styles.usaForm__radio__wrap}>
                                        <input
                                            type='radio'
                                            name='number_of_companions'
                                            value='5'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={number_of_companions === '5'}
                                            onClick={() => {
                                                setShowCompanionSection2(true)
                                                setShowCompanionSection3(true)
                                                setShowCompanionSection4(true)
                                                setShowCompanionSection5(true)
                                            }}
                                        />
                                        <span>5</span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr className={styles.usaForm__hr}/>
                    <div className={styles.usaForm__input_grp}>
                        <div className={styles.usaForm__input_wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='companion1_first_name'>{t('Form_firstName')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='companion1_first_name'
                                type='text'
                                placeholder={t('Form_firstName')}
                                onChange={e => onChange(e)}
                                value={companion1_first_name}
                            />
                        </div>
                        <div className={styles.usaForm__input_wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='companion1_last_name'>{t('Form_lastName')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='companion1_last_name'
                                type='text'
                                placeholder={t('Form_lastName')}
                                onChange={e => onChange(e)}
                                value={companion1_last_name}
                            />
                        </div>
                    </div>

                    <div className={styles.usaForm__input_grp}>
                        <div className={styles.usaForm__input_wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='companion1_relationship'>{t('Form_relationship')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='companion1_relationship'
                                type='text'
                                placeholder={t('Form_relationshipEx')}
                                onChange={e => onChange(e)}
                                value={companion1_relationship}
                            />
                        </div>
                    </div>

                    {showCompanionSection2?<>
                        <hr className={styles.usaForm__hr}/>
                        <div className={styles.usaForm__input_grp}>
                            <div className={styles.usaForm__input_wrap}>
                                <label className={styles.usaForm__form__label} htmlFor='companion2_first_name'>{t('Form_firstName')}</label>
                                <input
                                    className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                    name='companion2_first_name'
                                    type='text'
                                    placeholder={t('Form_firstName')}
                                    onChange={e => onChange(e)}
                                    value={companion2_first_name}
                                />
                            </div>
                            <div className={styles.usaForm__input_wrap}>
                                <label className={styles.usaForm__form__label} htmlFor='companion2_last_name'>{t('Form_lastName')}</label>
                                <input
                                    className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                    name='companion2_last_name'
                                    type='text'
                                    placeholder={t('Form_lastName')}
                                    onChange={e => onChange(e)}
                                    value={companion2_last_name}
                                />
                            </div>
                        </div>

                        <div className={styles.usaForm__input_grp}>
                            <div className={styles.usaForm__input_wrap}>
                                <label className={styles.usaForm__form__label} htmlFor='companion2_relationship'>{t('Form_relationship')}</label>
                                <input
                                    className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                    name='companion2_relationship'
                                    type='text'
                                    placeholder={t('Form_relationshipEx')}
                                    onChange={e => onChange(e)}
                                    value={companion2_relationship}
                                />
                            </div>
                        </div>
                    </>:null}

                    {showCompanionSection3?<>
                        <hr className={styles.usaForm__hr}/>
                        <div className={styles.usaForm__input_grp}>
                            <div className={styles.usaForm__input_wrap}>
                                <label className={styles.usaForm__form__label} htmlFor='companion3_first_name'>{t('Form_firstName')}</label>
                                <input
                                    className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                    name='companion3_first_name'
                                    type='text'
                                    placeholder={t('Form_firstName')}
                                    onChange={e => onChange(e)}
                                    value={companion3_first_name}
                                />
                            </div>
                            <div className={styles.usaForm__input_wrap}>
                                <label className={styles.usaForm__form__label} htmlFor='companion3_last_name'>{t('Form_lastName')}</label>
                                <input
                                    className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                    name='companion3_last_name'
                                    type='text'
                                    placeholder={t('Form_lastName')}
                                    onChange={e => onChange(e)}
                                    value={companion3_last_name}
                                />
                            </div>
                        </div>

                        <div className={styles.usaForm__input_grp}>
                            <div className={styles.usaForm__input_wrap}>
                                <label className={styles.usaForm__form__label} htmlFor='companion3_relationship'>{t('Form_relationship')}</label>
                                <input
                                    className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                    name='companion3_relationship'
                                    type='text'
                                    placeholder={t('Form_relationshipEx')}
                                    onChange={e => onChange(e)}
                                    value={companion3_relationship}
                                />
                            </div>
                        </div>
                    </>:null}

                    {showCompanionSection4?<>
                        <hr className={styles.usaForm__hr}/>
                        <div className={styles.usaForm__input_grp}>
                            <div className={styles.usaForm__input_wrap}>
                                <label className={styles.usaForm__form__label} htmlFor='companion4_first_name'>{t('Form_firstName')}</label>
                                <input
                                    className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                    name='companion4_first_name'
                                    type='text'
                                    placeholder={t('Form_firstName')}
                                    onChange={e => onChange(e)}
                                    value={companion4_first_name}
                                />
                            </div>
                            <div className={styles.usaForm__input_wrap}>
                                <label className={styles.usaForm__form__label} htmlFor='companion4_last_name'>{t('Form_lastName')}</label>
                                <input
                                    className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                    name='companion4_last_name'
                                    type='text'
                                    placeholder={t('Form_lastName')}
                                    onChange={e => onChange(e)}
                                    value={companion4_last_name}
                                />
                            </div>
                        </div>

                        <div className={styles.usaForm__input_grp}>
                            <div className={styles.usaForm__input_wrap}>
                                <label className={styles.usaForm__form__label} htmlFor='companion4_relationship'>{t('Form_relationship')}</label>
                                <input
                                    className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                    name='companion4_relationship'
                                    type='text'
                                    placeholder={t('Form_relationshipEx')}
                                    onChange={e => onChange(e)}
                                    value={companion4_relationship}
                                />
                            </div>
                        </div>
                    </>:null}

                    {showCompanionSection5?<>
                        <hr className={styles.usaForm__hr}/>
                        <div className={styles.usaForm__input_grp}>
                            <div className={styles.usaForm__input_wrap}>
                                <label className={styles.usaForm__form__label} htmlFor='companion5_first_name'>{t('Form_firstName')}</label>
                                <input
                                    className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                    name='companion5_first_name'
                                    type='text'
                                    placeholder={t('Form_firstName')}
                                    onChange={e => onChange(e)}
                                    value={companion5_first_name}
                                />
                            </div>
                            <div className={styles.usaForm__input_wrap}>
                                <label className={styles.usaForm__form__label} htmlFor='companion5_last_name'>{t('Form_lastName')}</label>
                                <input
                                    className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                    name='companion5_last_name'
                                    type='text'
                                    placeholder={t('Form_lastName')}
                                    onChange={e => onChange(e)}
                                    value={companion5_last_name}
                                />
                            </div>
                        </div>

                        <div className={styles.usaForm__input_grp}>
                            <div className={styles.usaForm__input_wrap}>
                                <label className={styles.usaForm__form__label} htmlFor='companion5_relationship'>{t('Form_relationship')}</label>
                                <input
                                    className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                    name='companion5_relationship'
                                    type='text'
                                    placeholder={t('Form_relationshipEx')}
                                    onChange={e => onChange(e)}
                                    value={companion5_relationship}
                                />
                            </div>
                        </div>
                    </>:null}
                </>
            :null}
        </>
    );
}
