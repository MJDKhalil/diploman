import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from '../../../styles/ApplicationForm.module.css';

function ParentsSection({ formData, onChange }) {
    const { t } = useTranslation();
    const {
        father_first_name,
        father_last_name,
        father_dob,
        father_nationality,
        mother_first_name,
        mother_last_name,
        mother_dob,
        mother_nationality,
    } = formData;

    return (
        <>
            <hr className={styles.appform__hr}/>

            <div className={styles.input_grp}>
                <div className={styles.input_wrap}>
                    <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='father_first_name'>{t('Form_father_firstName')}</label>
                    <input
                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                        name='father_first_name'
                        type='text'
                        placeholder={t('Form_father_firstNameEx')}
                        onChange={e => onChange(e)}
                        value={father_first_name}
                    />
                </div>
                <div className={styles.input_wrap}>
                    <label className={styles.ukForm__form__label} htmlFor='father_last_name'>{t('Form_father_lastName')}</label>
                    <input
                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                        name='father_last_name'
                        type='text'
                        placeholder={t('Form_father_lastNameEx')}
                        onChange={e => onChange(e)}
                        value={father_last_name}
                    />
                </div>
            </div>

            <div className={styles.input_grp}>
                <div className={styles.form__wrap}>
                    <label className={styles.ukForm__form__label} htmlFor='father_dob'>{t('Form_father_dob')}</label>
                    <input
                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                        name='father_dob'
                        type='date'
                        onChange={e => onChange(e)}
                        value={father_dob}
                    />
                </div>
                <div className={styles.form__wrap}>
                    <label className={styles.ukForm__form__label} htmlFor='father_nationality'>{t('Form_father_nationality')}</label>
                    <input
                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                        name='father_nationality'
                        type='text'
                        placeholder={t('Form_father_nationalityEx')}
                        onChange={e => onChange(e)}
                        value={father_nationality}
                    />
                </div>
            </div>

            <hr className={styles.appform__hr}/>

            <div className={styles.input_grp}>
                <div className={styles.input_wrap}>
                    <label className={styles['ukForm__form__label']+' '+styles['appForm__subject']} htmlFor='mother_first_name'>{t('Form_mother_firstName')}</label>
                    <input
                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                        name='mother_first_name'
                        type='text'
                        placeholder={t('Form_mother_firstNameEx')}
                        onChange={e => onChange(e)}
                        value={mother_first_name}
                    />
                </div>
                <div className={styles.input_wrap}>
                    <label className={styles.ukForm__form__label} htmlFor='mother_last_name'>{t('Form_mother_lastName')}</label>
                    <input
                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                        name='mother_last_name'
                        type='text'
                        placeholder={t('Form_mother_lastNameEx')}
                        onChange={e => onChange(e)}
                        value={mother_last_name}
                    />
                </div>
            </div>

            <div className={styles.input_grp}>
                <div className={styles.form__wrap}>
                    <label className={styles.ukForm__form__label} htmlFor='dob'>{t('Form_mother_dob')}</label>
                    <input
                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                        name='mother_dob'
                        type='date'
                        onChange={e => onChange(e)}
                        value={mother_dob}
                    />
                </div>
                <div className={styles.form__wrap}>
                    <label className={styles.ukForm__form__label} htmlFor='place_of_birth'>{t('Form_mother_nationality')}</label>
                    <input
                        className={styles['applicationForm__form__input']+' '+styles['ukForm__input__for__two']}
                        name='mother_nationality'
                        type='text'
                        placeholder={t('Form_mother_nationalityEx')}
                        onChange={e => onChange(e)}
                        value={mother_nationality}
                    />
                </div>
            </div>
        </>
    );
}

export default ParentsSection;
