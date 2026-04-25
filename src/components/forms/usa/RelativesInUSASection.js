import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from '../../../styles/UsaAppForm.module.css';

export default function RelativesInUSASection({
    formData, onChange,
    showFamilyAbroadSection, setShowFamilyAbroadSection,
    showRelativeAbroad2, setShowRelativeAbroad2,
    showRelativeAbroad3, setShowRelativeAbroad3,
    showRelativeAbroad4, setShowRelativeAbroad4,
    showRelativeAbroad5, setShowRelativeAbroad5,
}) {
    const { t } = useTranslation();
    const {
        family_in_usa, number_of_relatives,
        relative1_first_name, relative1_last_name, relative1_status, relative1_relationship,
        relative2_first_name, relative2_last_name, relative2_status, relative2_relationship,
        relative3_first_name, relative3_last_name, relative3_status, relative3_relationship,
        relative4_first_name, relative4_last_name, relative4_status, relative4_relationship,
        relative5_first_name, relative5_last_name, relative5_status, relative5_relationship,
    } = formData;

    return (
        <>
            <hr className={styles.usaForm__hr}/>
            <p className={styles.usaForm__section__question}>{t('usaForm_Family')}</p>
            <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio__group']}>
                <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio']}>
                    <ul className={styles.usaForm__ul}>
                        <li>
                            <label className={styles.usaForm__radio__wrap}>
                                <input
                                    type='radio'
                                    name='family_in_usa'
                                    value='Yes'
                                    className={styles.usaForm__input__radio}
                                    onChange={e => onChange(e)}
                                    checked={family_in_usa === 'Yes'}
                                    onClick={() => setShowFamilyAbroadSection(true)}
                                />
                                <span>{t('Form_yes')}</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.usaForm__radio__wrap}>
                                <input
                                    type='radio'
                                    name='family_in_usa'
                                    value='No'
                                    className={styles.usaForm__input__radio}
                                    onChange={e => onChange(e)}
                                    checked={family_in_usa === 'No'}
                                    onClick={() => setShowFamilyAbroadSection(false)}
                                />
                                <span>{t('Form_no')}</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            {showFamilyAbroadSection?
                <>
                    <p className={styles.usaForm__section__question}>{t('Form_howMany')}</p>
                    <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio__group']}>
                        <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio']}>
                            <ul className={styles.usaForm__ul}>
                                <li className={styles.usaForm__il}>
                                    <label className={styles.usaForm__radio__wrap}>
                                        <input
                                            type='radio'
                                            name='number_of_relatives'
                                            value='1'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={number_of_relatives === '1'}
                                            onClick={() => {
                                                setShowRelativeAbroad2(false)
                                                setShowRelativeAbroad3(false)
                                                setShowRelativeAbroad4(false)
                                                setShowRelativeAbroad5(false)
                                            }}
                                        />
                                        <span>1</span>
                                    </label>
                                </li>
                                <li>
                                    <label className={styles.usaForm__radio__wrap}>
                                        <input
                                            type='radio'
                                            name='number_of_relatives'
                                            value='2'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            onClick={() => {
                                                setShowRelativeAbroad2(true)
                                                setShowRelativeAbroad3(false)
                                                setShowRelativeAbroad4(false)
                                                setShowRelativeAbroad5(false)
                                            }}
                                            checked={number_of_relatives === '2'}
                                        />
                                        <span>2</span>
                                    </label>
                                </li>
                                <li>
                                    <label className={styles.usaForm__radio__wrap}>
                                        <input
                                            type='radio'
                                            name='number_of_relatives'
                                            value='3'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={number_of_relatives === '3'}
                                            onClick={() => {
                                                setShowRelativeAbroad2(true)
                                                setShowRelativeAbroad3(true)
                                                setShowRelativeAbroad4(false)
                                                setShowRelativeAbroad5(false)
                                            }}
                                        />
                                        <span>3</span>
                                    </label>
                                </li>
                                <li>
                                    <label className={styles.usaForm__radio__wrap}>
                                        <input
                                            type='radio'
                                            name='number_of_relatives'
                                            value='4'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={number_of_relatives === '4'}
                                            onClick={() => {
                                                setShowRelativeAbroad2(true)
                                                setShowRelativeAbroad3(true)
                                                setShowRelativeAbroad4(true)
                                                setShowRelativeAbroad5(false)
                                            }}
                                        />
                                        <span>4</span>
                                    </label>
                                </li>
                                <li>
                                    <label className={styles.usaForm__radio__wrap}>
                                        <input
                                            type='radio'
                                            name='number_of_relatives'
                                            value='5'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={number_of_relatives === '5'}
                                            onClick={() => {
                                                setShowRelativeAbroad2(true)
                                                setShowRelativeAbroad3(true)
                                                setShowRelativeAbroad4(true)
                                                setShowRelativeAbroad5(true)
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
                            <label className={styles.usaForm__form__label} htmlFor='relative1_first_name'>{t('Form_relative_firstName')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='relative1_first_name'
                                type='text'
                                placeholder={t('Form_firstName')}
                                onChange={e => onChange(e)}
                                value={relative1_first_name}
                            />
                        </div>
                        <div className={styles.usaForm__input_wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='relative1_last_name'>{t('Form_relative_lastName')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='relative1_last_name'
                                type='text'
                                placeholder={t('Form_lastName')}
                                onChange={e => onChange(e)}
                                value={relative1_last_name}
                            />
                        </div>
                    </div>

                    <div className={styles.usaForm__input_grp}>
                        <div className={styles.usaForm__input_wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='relative1_nationality'>{t('Form_nationality')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='relative1_status'
                                type='text'
                                placeholder={t('Form_nationalityEx')}
                                onChange={e => onChange(e)}
                                value={relative1_status}
                            />
                        </div>
                        <div className={styles.usaForm__input_wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='relative1_relationship'>{t('Form_relationship')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='relative1_relationship'
                                type='text'
                                placeholder={t('Form_relationshipEx')}
                                onChange={e => onChange(e)}
                                value={relative1_relationship}
                            />
                        </div>
                    </div>

                    {showRelativeAbroad2?
                        <>
                            <hr className={styles.usaForm__hr}/>
                            <div className={styles.usaForm__input_grp}>
                                <div className={styles.usaForm__input_wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='relative2_first_name'>{t('Form_relative_firstName')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='relative2_first_name'
                                        type='text'
                                        placeholder={t('Form_firstName')}
                                        onChange={e => onChange(e)}
                                        value={relative2_first_name}
                                    />
                                </div>
                                <div className={styles.usaForm__input_wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='relative1_last_name'>{t('Form_relative_lastName')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='relative2_last_name'
                                        type='text'
                                        placeholder={t('Form_lastName')}
                                        onChange={e => onChange(e)}
                                        value={relative2_last_name}
                                    />
                                </div>
                            </div>

                            <div className={styles.usaForm__input_grp}>
                                <div className={styles.usaForm__input_wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='relative2_nationality'>{t('Form_nationality')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='relative2_status'
                                        type='text'
                                        placeholder={t('Form_nationalityEx')}
                                        onChange={e => onChange(e)}
                                        value={relative2_status}
                                    />
                                </div>
                                <div className={styles.usaForm__input_wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='relative2_relationship'>{t('Form_relationship')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='relative2_relationship'
                                        type='text'
                                        placeholder={t('Form_relationshipEx')}
                                        onChange={e => onChange(e)}
                                        value={relative2_relationship}
                                    />
                                </div>
                            </div>
                        </>
                    :null}

                    {showRelativeAbroad3?
                        <>
                            <hr className={styles.usaForm__hr}/>
                            <div className={styles.usaForm__input_grp}>
                                <div className={styles.usaForm__input_wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='relative3_first_name'>{t('Form_relative_firstName')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='relative3_first_name'
                                        type='text'
                                        placeholder={t('Form_firstName')}
                                        onChange={e => onChange(e)}
                                        value={relative3_first_name}
                                    />
                                </div>
                                <div className={styles.usaForm__input_wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='relative3_last_name'>{t('Form_relative_lastName')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='relative3_last_name'
                                        type='text'
                                        placeholder={t('Form_lastName')}
                                        onChange={e => onChange(e)}
                                        value={relative3_last_name}
                                    />
                                </div>
                            </div>

                            <div className={styles.usaForm__input_grp}>
                                <div className={styles.usaForm__input_wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='relative3_nationality'>{t('Form_nationality')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='relative3_status'
                                        type='text'
                                        placeholder={t('Form_nationalityEx')}
                                        onChange={e => onChange(e)}
                                        value={relative3_status}
                                    />
                                </div>
                                <div className={styles.usaForm__input_wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='relative3_relationship'>{t('Form_relationship')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='relative3_relationship'
                                        type='text'
                                        placeholder={t('Form_relationshipEx')}
                                        onChange={e => onChange(e)}
                                        value={relative3_relationship}
                                    />
                                </div>
                            </div>
                        </>
                    :null}

                    {showRelativeAbroad4?
                        <>
                            <hr className={styles.usaForm__hr}/>
                            <div className={styles.usaForm__input_grp}>
                                <div className={styles.usaForm__input_wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='relative4_first_name'>{t('Form_relative_firstName')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='relative4_first_name'
                                        type='text'
                                        placeholder={t('Form_firstName')}
                                        onChange={e => onChange(e)}
                                        value={relative4_first_name}
                                    />
                                </div>
                                <div className={styles.usaForm__input_wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='relative4_last_name'>{t('Form_relative_lastName')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='relative4_last_name'
                                        type='text'
                                        placeholder={t('Form_lastName')}
                                        onChange={e => onChange(e)}
                                        value={relative4_last_name}
                                    />
                                </div>
                            </div>

                            <div className={styles.usaForm__input_grp}>
                                <div className={styles.usaForm__input_wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='relative4_nationality'>{t('Form_nationality')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='relative4_status'
                                        type='text'
                                        placeholder={t('Form_nationalityEx')}
                                        onChange={e => onChange(e)}
                                        value={relative4_status}
                                    />
                                </div>
                                <div className={styles.usaForm__input_wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='relative4_relationship'>{t('Form_relationship')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='relative4_relationship'
                                        type='text'
                                        placeholder={t('Form_relationshipEx')}
                                        onChange={e => onChange(e)}
                                        value={relative4_relationship}
                                    />
                                </div>
                            </div>
                        </>
                    :null}

                    {showRelativeAbroad5?
                        <>
                            <hr className={styles.usaForm__hr}/>
                            <div className={styles.usaForm__input_grp}>
                                <div className={styles.usaForm__input_wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='relative5_first_name'>{t('Form_relative_firstName')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='relative5_first_name'
                                        type='text'
                                        placeholder={t('Form_firstName')}
                                        onChange={e => onChange(e)}
                                        value={relative5_first_name}
                                    />
                                </div>
                                <div className={styles.usaForm__input_wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='relative5_last_name'>{t('Form_relative_lastName')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='relative5_last_name'
                                        type='text'
                                        placeholder={t('Form_lastName')}
                                        onChange={e => onChange(e)}
                                        value={relative5_last_name}
                                    />
                                </div>
                            </div>

                            <div className={styles.usaForm__input_grp}>
                                <div className={styles.usaForm__input_wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='relative5_nationality'>{t('Form_nationality')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='relative5_status'
                                        type='text'
                                        placeholder={t('Form_nationalityEx')}
                                        onChange={e => onChange(e)}
                                        value={relative5_status}
                                    />
                                </div>
                                <div className={styles.usaForm__input_wrap}>
                                    <label className={styles.usaForm__form__label} htmlFor='relative5_relationship'>{t('Form_relationship')}</label>
                                    <input
                                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                        name='relative5_relationship'
                                        type='text'
                                        placeholder={t('Form_relationshipEx')}
                                        onChange={e => onChange(e)}
                                        value={relative5_relationship}
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
