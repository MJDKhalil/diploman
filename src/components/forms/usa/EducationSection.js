import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from '../../../styles/UsaAppForm.module.css';

export default function EducationSection({
    formData, onChange,
    showEducation1Section, setShowEducation1Section,
    showEducation2Section, setShowEducation2Section,
}) {
    const { t } = useTranslation();
    const {
        secoondary_or_high_education1, institute_name1, institute_address1,
        course_name1, course_start_date1, course_end_date1,
        secoondary_or_high_education2, institute_name2, institute_address2,
        course_name2, course_start_date2, course_end_date2,
    } = formData;

    return (
        <>
            <hr className={styles.usaForm__hr}/>
            <h3 className={styles.usaForm__education}>{t('usaForm_education')}</h3>
            <p className={styles.usaForm__education__text}>{t('usaForm_education_text')}</p>

            <p className={styles.usaForm__section__question}>{t('usaForm_educationLevel1')}</p>
            <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio__group']}>
                <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio']}>
                    <ul className={styles.usaForm__ul}>
                        <li>
                            <label className={styles.usaForm__radio__wrap}>
                                <input
                                    type='radio'
                                    name='secoondary_or_high_education1'
                                    value='Yes'
                                    className={styles.usaForm__input__radio}
                                    onChange={e => onChange(e)}
                                    checked={secoondary_or_high_education1 === 'Yes'}
                                    onClick={() => setShowEducation1Section(true)}
                                />
                                <span>{t('Form_yes')}</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.usaForm__radio__wrap}>
                                <input
                                    type='radio'
                                    name='secoondary_or_high_education1'
                                    value='No'
                                    className={styles.usaForm__input__radio}
                                    onChange={e => onChange(e)}
                                    checked={secoondary_or_high_education1 === 'No'}
                                    onClick={() => setShowEducation1Section(false)}
                                />
                                <span>{t('Form_no')}</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            {showEducation1Section?<>
                <div className={styles.usaForm__input_grp}>
                    <div className={styles.usaForm__input_wrap}>
                        <label className={styles.usaForm__form__label} htmlFor='institute_name1'>{t('Form_edu_instituteName')}</label>
                        <input
                            className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                            name='institute_name1'
                            type='text'
                            placeholder={t('Form_edu_instituteNameEx')}
                            onChange={e => onChange(e)}
                            value={institute_name1}
                        />
                    </div>
                    <div className={styles.usaForm__input_wrap}>
                        <label className={styles.usaForm__form__label} htmlFor='course_name1'>{t('Form_edu_courseName')}</label>
                        <input
                            className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                            name='course_name1'
                            type='text'
                            placeholder={t('Form_edu_courseNameEx')}
                            onChange={e => onChange(e)}
                            value={course_name1}
                        />
                    </div>
                </div>

                <div className={styles.usaForm__input_grp}>
                    <div className={styles.usaForm__wrap}>
                        <label className={styles.usaForm__form__label} htmlFor='course_start_date1'>{t('Form_edu_startDate')}</label>
                        <input
                            className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                            name='course_start_date1'
                            type='date'
                            onChange={e => onChange(e)}
                            value={course_start_date1}
                        />
                    </div>
                    <div className={styles.usaForm__wrap}>
                        <label className={styles.usaForm__form__label} htmlFor='place_of_birth'>{t('Form_edu_endDate')}</label>
                        <input
                            className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                            name='course_end_date1'
                            type='date'
                            onChange={e => onChange(e)}
                            value={course_end_date1}
                        />
                    </div>
                </div>
                <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input_wrap__bt']}>
                    <label className={styles.usaForm__form__label} htmlFor='institute_address1'>{t('Form_address')}</label>
                    <input
                        className={styles.usaForm__input__for__one}
                        name='institute_address1'
                        type='text'
                        placeholder={t('Form_addressEx')}
                        onChange={e => onChange(e)}
                        value={institute_address1}
                    />
                </div>
            </>:null}

            <hr className={styles.usaForm__hr}/>
            <p className={styles.usaForm__section__question}>{t('usaForm_educationLevel2')}</p>
            <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio__group']}>
                <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio']}>
                    <ul className={styles.usaForm__ul}>
                        <li>
                            <label className={styles.usaForm__radio__wrap}>
                                <input
                                    type='radio'
                                    name='secoondary_or_high_education2'
                                    value='Yes'
                                    className={styles.usaForm__input__radio}
                                    onChange={e => onChange(e)}
                                    checked={secoondary_or_high_education2 === 'Yes'}
                                    onClick={() => setShowEducation2Section(true)}
                                />
                                <span>{t('Form_yes')}</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.usaForm__radio__wrap}>
                                <input
                                    type='radio'
                                    name='secoondary_or_high_education2'
                                    value='No'
                                    className={styles.usaForm__input__radio}
                                    onChange={e => onChange(e)}
                                    checked={secoondary_or_high_education2 === 'No'}
                                    onClick={() => setShowEducation2Section(false)}
                                />
                                <span>{t('Form_no')}</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            {showEducation2Section?<>
                <div className={styles.usaForm__input_grp}>
                    <div className={styles.usaForm__input_wrap}>
                        <label className={styles.usaForm__form__label} htmlFor='institute_name2'>{t('Form_edu_instituteName')}</label>
                        <input
                            className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                            name='institute_name2'
                            type='text'
                            placeholder={t('Form_edu_instituteNameEx')}
                            onChange={e => onChange(e)}
                            value={institute_name2}
                        />
                    </div>
                    <div className={styles.usaForm__input_wrap}>
                        <label className={styles.usaForm__form__label} htmlFor='course_name2'>{t('Form_edu_courseName')}</label>
                        <input
                            className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                            name='course_name2'
                            type='text'
                            placeholder={t('Form_edu_courseNameEx')}
                            onChange={e => onChange(e)}
                            value={course_name2}
                        />
                    </div>
                </div>

                <div className={styles.usaForm__input_grp}>
                    <div className={styles.usaForm__wrap}>
                        <label className={styles.usaForm__form__label} htmlFor='course_start_date2'>{t('Form_edu_startDate')}</label>
                        <input
                            className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                            name='course_start_date2'
                            type='date'
                            onChange={e => onChange(e)}
                            value={course_start_date2}
                        />
                    </div>
                    <div className={styles.usaForm__wrap}>
                        <label className={styles.usaForm__form__label} htmlFor='course_end_date2'>{t('Form_edu_endDate')}</label>
                        <input
                            className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                            name='course_end_date2'
                            type='date'
                            onChange={e => onChange(e)}
                            value={course_end_date2}
                        />
                    </div>
                </div>
                <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input_wrap__bt']}>
                    <label className={styles.usaForm__form__label} htmlFor='institute_address2'>{t('Form_address')}</label>
                    <input
                        className={styles.usaForm__input__for__one}
                        name='institute_address2'
                        type='text'
                        placeholder={t('Form_addressEx')}
                        onChange={e => onChange(e)}
                        value={institute_address2}
                    />
                </div>
            </>:null}
        </>
    );
}
