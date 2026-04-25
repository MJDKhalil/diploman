import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from '../../../styles/ApplicationForm.module.css';

function RelativesInUKSection({
    formData,
    onChange,
    showFamilyAbroadSection,
    setShowFamilyAbroadSection,
    showRelativeAbroad2,
    setShowRelativeAbroad2,
    showRelativeAbroad3,
    setShowRelativeAbroad3,
    showRelativeAbroad4,
    setShowRelativeAbroad4,
    showRelativeAbroad5,
    setShowRelativeAbroad5,
}) {
    const { t } = useTranslation();
    const {
        family_in_uk,
        number_of_relatives,
        relative1_first_name, relative1_last_name, relative1_nationality, relative1_relationship, relative1_passport_no,
        relative2_first_name, relative2_last_name, relative2_nationality, relative2_relationship, relative2_passport_no,
        relative3_first_name, relative3_last_name, relative3_nationality, relative3_relationship, relative3_passport_no,
        relative4_first_name, relative4_last_name, relative4_nationality, relative4_relationship, relative4_passport_no,
        relative5_first_name, relative5_last_name, relative5_nationality, relative5_relationship, relative5_passport_no,
    } = formData;

    return (
        <>
            <hr className={styles.appform__hr}/>
            <p className={styles.ukForm__section__question}>{t('ukForm_ukFamily')}</p>
            <div className={styles['input_wrap']+' '+styles['input__radio__group']}>
                <div className={styles['input_wrap']+' '+styles['passport__input__radio']}>
                    <ul className={styles.appform__ul}>
                        <li>
                            <label className={styles.radio_wrap}>
                                <input
                                    type='radio'
                                    name='family_in_uk'
                                    value='Yes'
                                    className={styles.input_radio}
                                    onChange={e => onChange(e)}
                                    checked={family_in_uk === 'Yes'}
                                    onClick={()=> setShowFamilyAbroadSection(true)}
                                />
                                <span>{t('Form_yes')}</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.radio_wrap}>
                                <input
                                    type='radio'
                                    name='family_in_uk'
                                    value='No'
                                    className={styles.input_radio}
                                    onChange={e => onChange(e)}
                                    checked={family_in_uk === 'No'}
                                    onClick={()=> setShowFamilyAbroadSection(false)}
                                />
                                <span>{t('Form_no')}</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            {showFamilyAbroadSection?
                <>
                    <p className={styles.ukForm__section__question}>{t('Form_howMany')}</p>
                    <div className={styles['input_wrap']+' '+styles['input__radio__group']}>
                            <div className={styles['input_wrap']+' '+styles['passport__input__radio']}>
                                <ul className={styles.appform__ul}>
                                    <li className={styles.appform__il}>
                                        <label className={styles.radio_wrap}>
                                            <input
                                                type='radio'
                                                name='number_of_relatives'
                                                value='1'
                                                className={styles.input_radio}
                                                onChange={e => onChange(e)}
                                                checked={number_of_relatives === '1'}
                                                onClick={()=> {
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
                                        <label className={styles.radio_wrap}>
                                            <input
                                                type='radio'
                                                name='number_of_relatives'
                                                value='2'
                                                className={styles.input_radio}
                                                onChange={e => onChange(e)}
                                                onClick={()=> {
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
                                        <label className={styles.radio_wrap}>
                                            <input
                                                type='radio'
                                                name='number_of_relatives'
                                                value='3'
                                                className={styles.input_radio}
                                                onChange={e => onChange(e)}
                                                checked={number_of_relatives === '3'}
                                                onClick={()=> {
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
                                        <label className={styles.radio_wrap}>
                                            <input
                                                type='radio'
                                                name='number_of_relatives'
                                                value='4'
                                                className={styles.input_radio}
                                                onChange={e => onChange(e)}
                                                checked={number_of_relatives === '4'}
                                                onClick={()=> {
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
                                        <label className={styles.radio_wrap}>
                                            <input
                                                type='radio'
                                                name='number_of_relatives'
                                                value='5'
                                                className={styles.input_radio}
                                                onChange={e => onChange(e)}
                                                checked={number_of_relatives === '5'}
                                                onClick={()=> {
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

                        <hr className={styles.appform__hr}/>
                        <div className={styles.input_grp}>
                            <div className={styles.input_wrap}>
                                <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='relative1_first_name'>{t('Form_relative_firstName')}</label>
                                <input
                                    className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                    name='relative1_first_name'
                                    type='text'
                                    placeholder={t('Form_firstName')}
                                    onChange={e => onChange(e)}
                                    value={relative1_first_name}
                                />
                            </div>
                            <div className={styles.input_wrap}>
                                <label className={styles.ukForm__form__label} htmlFor='relative1_last_name'>{t('Form_relative_lastName')}</label>
                                <input
                                    className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                    name='relative1_last_name'
                                    type='text'
                                    placeholder={t('Form_lastName')}
                                    onChange={e => onChange(e)}
                                    value={relative1_last_name}
                                />
                            </div>
                        </div>

                        <div className={styles.input_grp}>
                            <div className={styles.input_wrap}>
                                <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='relative1_nationality'>{t('Form_nationality')}</label>
                                <input
                                    className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                    name='relative1_nationality'
                                    type='text'
                                    placeholder={t('Form_nationalityEx')}
                                    onChange={e => onChange(e)}
                                    value={relative1_nationality}
                                />
                            </div>
                            <div className={styles.input_wrap}>
                                <label className={styles.ukForm__form__label} htmlFor='relative1_relationship'>{t('Form_relationship')}</label>
                                <input
                                    className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                    name='relative1_relationship'
                                    type='text'
                                    placeholder={t('Form_relationshipEx')}
                                    onChange={e => onChange(e)}
                                    value={relative1_relationship}
                                />
                            </div>
                        </div>

                        <div className={styles.input_grp}>
                            <div className={styles.input_wrap}>
                                <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='relative1_passport_no'>{t('Form_relative_PassportNo')}</label>
                                <input
                                    className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                    name='relative1_passport_no'
                                    type='text'
                                    placeholder={t('Form_relative_PassportNoEx')}
                                    onChange={e => onChange(e)}
                                    value={relative1_passport_no}
                                />
                            </div>
                        </div>

                        {showRelativeAbroad2?
                            <>
                                <hr className={styles.appform__hr}/>
                                <div className={styles.input_grp}>
                                    <div className={styles.input_wrap}>
                                        <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='relative2_first_name'>{t('Form_relative_firstName')}</label>
                                        <input
                                            className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                            name='relative2_first_name'
                                            type='text'
                                            placeholder={t('Form_firstName')}
                                            onChange={e => onChange(e)}
                                            value={relative2_first_name}
                                        />
                                    </div>
                                    <div className={styles.input_wrap}>
                                        <label className={styles.ukForm__form__label} htmlFor='relative1_last_name'>{t('Form_relative_lastName')}</label>
                                        <input
                                            className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                            name='relative2_last_name'
                                            type='text'
                                            placeholder={t('Form_lastName')}
                                            onChange={e => onChange(e)}
                                            value={relative2_last_name}
                                        />
                                    </div>
                                </div>

                                <div className={styles.input_grp}>
                                    <div className={styles.input_wrap}>
                                        <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='relative2_nationality'>{t('Form_nationality')}</label>
                                        <input
                                            className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                            name='relative2_nationality'
                                            type='text'
                                            placeholder={t('Form_nationalityEx')}
                                            onChange={e => onChange(e)}
                                            value={relative2_nationality}
                                        />
                                    </div>
                                    <div className={styles.input_wrap}>
                                        <label className={styles.ukForm__form__label} htmlFor='relative2_relationship'>{t('Form_relationship')}</label>
                                        <input
                                            className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                            name='relative2_relationship'
                                            type='text'
                                            placeholder={t('Form_relationshipEx')}
                                            onChange={e => onChange(e)}
                                            value={relative2_relationship}
                                        />
                                    </div>
                                </div>

                                <div className={styles.input_grp}>
                                    <div className={styles.input_wrap}>
                                        <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='relative2_passport_no'>{t('Form_relative_PassportNo')}</label>
                                        <input
                                            className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                            name='relative2_passport_no'
                                            type='text'
                                            placeholder={t('Form_relative_PassportNoEx')}
                                            onChange={e => onChange(e)}
                                            value={relative2_passport_no}
                                        />
                                    </div>
                                </div>
                            </>
                        :null}
                        {showRelativeAbroad3?
                            <>
                                <hr className={styles.appform__hr}/>
                                <div className={styles.input_grp}>
                                    <div className={styles.input_wrap}>
                                        <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='relative3_first_name'>{t('Form_relative_firstName')}</label>
                                        <input
                                            className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                            name='relative3_first_name'
                                            type='text'
                                            placeholder={t('Form_firstName')}
                                            onChange={e => onChange(e)}
                                            value={relative3_first_name}
                                        />
                                    </div>
                                    <div className={styles.input_wrap}>
                                        <label className={styles.ukForm__form__label} htmlFor='relative3_last_name'>{t('Form_relative_lastName')}</label>
                                        <input
                                            className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                            name='relative3_last_name'
                                            type='text'
                                            placeholder={t('Form_lastName')}
                                            onChange={e => onChange(e)}
                                            value={relative3_last_name}
                                        />
                                    </div>
                                </div>

                                <div className={styles.input_grp}>
                                    <div className={styles.input_wrap}>
                                        <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='relative3_nationality'>{t('Form_nationality')}</label>
                                        <input
                                            className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                            name='relative3_nationality'
                                            type='text'
                                            placeholder={t('Form_nationalityEx')}
                                            onChange={e => onChange(e)}
                                            value={relative3_nationality}
                                        />
                                    </div>
                                    <div className={styles.input_wrap}>
                                        <label className={styles.ukForm__form__label} htmlFor='relative3_relationship'>{t('Form_relationship')}</label>
                                        <input
                                            className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                            name='relative3_relationship'
                                            type='text'
                                            placeholder={t('Form_relationshipEx')}
                                            onChange={e => onChange(e)}
                                            value={relative3_relationship}
                                        />
                                    </div>
                                </div>

                                <div className={styles.input_grp}>
                                    <div className={styles.input_wrap}>
                                        <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='relative3_passport_no'>{t('Form_relative_PassportNo')}</label>
                                        <input
                                            className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                            name='relative3_passport_no'
                                            type='text'
                                            placeholder={t('Form_relative_PassportNoEx')}
                                            onChange={e => onChange(e)}
                                            value={relative3_passport_no}
                                        />
                                    </div>
                                </div>
                            </>
                        :null}
                        {showRelativeAbroad4?
                            <>
                                <hr className={styles.appform__hr}/>
                                <div className={styles.input_grp}>
                                    <div className={styles.input_wrap}>
                                        <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='relative4_first_name'>{t('Form_relative_firstName')}</label>
                                        <input
                                            className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                            name='relative4_first_name'
                                            type='text'
                                            placeholder={t('Form_firstName')}
                                            onChange={e => onChange(e)}
                                            value={relative4_first_name}
                                        />
                                    </div>
                                    <div className={styles.input_wrap}>
                                        <label className={styles.ukForm__form__label} htmlFor='relative4_last_name'>{t('Form_relative_lastName')}</label>
                                        <input
                                            className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                            name='relative4_last_name'
                                            type='text'
                                            placeholder={t('Form_lastName')}
                                            onChange={e => onChange(e)}
                                            value={relative4_last_name}
                                        />
                                    </div>
                                </div>

                                <div className={styles.input_grp}>
                                    <div className={styles.input_wrap}>
                                        <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='relative4_nationality'>{t('Form_nationality')}</label>
                                        <input
                                            className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                            name='relative4_nationality'
                                            type='text'
                                            placeholder={t('Form_nationalityEx')}
                                            onChange={e => onChange(e)}
                                            value={relative4_nationality}
                                        />
                                    </div>
                                    <div className={styles.input_wrap}>
                                        <label className={styles.ukForm__form__label} htmlFor='relative4_relationship'>{t('Form_relationship')}</label>
                                        <input
                                            className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                            name='relative4_relationship'
                                            type='text'
                                            placeholder={t('Form_relationshipEx')}
                                            onChange={e => onChange(e)}
                                            value={relative4_relationship}
                                        />
                                    </div>
                                </div>

                                <div className={styles.input_grp}>
                                    <div className={styles.input_wrap}>
                                        <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='relative4_passport_no'>{t('Form_relative_PassportNo')}</label>
                                        <input
                                            className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                            name='relative4_passport_no'
                                            type='text'
                                            placeholder={t('Form_relative_PassportNoEx')}
                                            onChange={e => onChange(e)}
                                            value={relative4_passport_no}
                                        />
                                    </div>
                                </div>
                            </>
                        :null}
                        {showRelativeAbroad5?
                            <>
                                <hr className={styles.appform__hr}/>
                                <div className={styles.input_grp}>
                                    <div className={styles.input_wrap}>
                                        <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='relative5_first_name'>{t('Form_relative_firstName')}</label>
                                        <input
                                            className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                            name='relative5_first_name'
                                            type='text'
                                            placeholder={t('Form_firstName')}
                                            onChange={e => onChange(e)}
                                            value={relative5_first_name}
                                        />
                                    </div>
                                    <div className={styles.input_wrap}>
                                        <label className={styles.ukForm__form__label} htmlFor='relative5_last_name'>{t('Form_relative_lastName')}</label>
                                        <input
                                            className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                            name='relative5_last_name'
                                            type='text'
                                            placeholder={t('Form_lastName')}
                                            onChange={e => onChange(e)}
                                            value={relative5_last_name}
                                        />
                                    </div>
                                </div>

                                <div className={styles.input_grp}>
                                    <div className={styles.input_wrap}>
                                        <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='relative5_nationality'>{t('Form_nationality')}</label>
                                        <input
                                            className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                            name='relative5_nationality'
                                            type='text'
                                            placeholder={t('Form_nationalityEx')}
                                            onChange={e => onChange(e)}
                                            value={relative5_nationality}
                                        />
                                    </div>
                                    <div className={styles.input_wrap}>
                                        <label className={styles.ukForm__form__label} htmlFor='relative5_relationship'>{t('Form_relationship')}</label>
                                        <input
                                            className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                            name='relative5_relationship'
                                            type='text'
                                            placeholder={t('Form_relationshipEx')}
                                            onChange={e => onChange(e)}
                                            value={relative5_relationship}
                                        />
                                    </div>
                                </div>

                                <div className={styles.input_grp}>
                                    <div className={styles.input_wrap}>
                                        <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='relative5_passport_no'>{t('Form_relative_PassportNo')}</label>
                                        <input
                                            className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                                            name='relative5_passport_no'
                                            type='text'
                                            placeholder={t('Form_relative_PassportNoEx')}
                                            onChange={e => onChange(e)}
                                            value={relative5_passport_no}
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

export default RelativesInUKSection;
