import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from '../../../styles/UsaAppForm.module.css';

export default function ParentsSection({ formData, onChange }) {
    const { t } = useTranslation();
    const {
        father_first_name, father_last_name, father_dob, father_nationality, father_city_of_birth,
        mother_first_name, mother_last_name, mother_dob, mother_nationality, mother_city_of_birth,
    } = formData;

    return (
        <>
            <hr className={styles.usaForm__hr}/>
            <div className={styles.usaForm__input_grp}>
                <div className={styles.usaForm__input_wrap}>
                    <label className={styles.usaForm__form__label} htmlFor='father_first_name'>{t('Form_father_firstName')}</label>
                    <input
                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                        name='father_first_name'
                        type='text'
                        placeholder={t('Form_father_firstNameEx')}
                        onChange={e => onChange(e)}
                        value={father_first_name}
                    />
                </div>
                <div className={styles.usaForm__input_wrap}>
                    <label className={styles.usaForm__form__label} htmlFor='father_last_name'>{t('Form_father_lastName')}</label>
                    <input
                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                        name='father_last_name'
                        type='text'
                        placeholder={t('Form_father_lastNameEx')}
                        onChange={e => onChange(e)}
                        value={father_last_name}
                    />
                </div>
            </div>

            <div className={styles.usaForm__input_grp}>
                <div className={styles.usaForm__wrap}>
                    <label className={styles.usaForm__form__label} htmlFor='father_dob'>{t('Form_father_dob')}</label>
                    <input
                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                        name='father_dob'
                        type='date'
                        onChange={e => onChange(e)}
                        value={father_dob}
                    />
                </div>
                <div className={styles.usaForm__wrap}>
                    <label className={styles.usaForm__form__label} htmlFor='father_nationality'>{t('Form_father_nationality')}</label>
                    <input
                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                        name='father_nationality'
                        type='text'
                        placeholder={t('Form_father_nationalityEx')}
                        onChange={e => onChange(e)}
                        value={father_nationality}
                    />
                </div>
            </div>
            <div className={styles.usaForm__input_grp}>
                <div className={styles.usaForm__wrap}>
                    <label className={styles.usaForm__form__label} htmlFor='father_city_of_birth'>{t('Form_father_cob')}</label>
                    <input
                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                        name='father_city_of_birth'
                        type='text'
                        placeholder={t('Form_cobEx')}
                        onChange={e => onChange(e)}
                        value={father_city_of_birth}
                    />
                </div>
            </div>

            <hr className={styles.usaForm__hr}/>
            <div className={styles.usaForm__input_grp}>
                <div className={styles.usaForm__input_wrap}>
                    <label className={styles.usaForm__form__label} htmlFor='mother_first_name'>{t('Form_mother_firstName')}</label>
                    <input
                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                        name='mother_first_name'
                        type='text'
                        placeholder={t('Form_mother_firstNameEx')}
                        onChange={e => onChange(e)}
                        value={mother_first_name}
                    />
                </div>
                <div className={styles.usaForm__input_wrap}>
                    <label className={styles.usaForm__form__label} htmlFor='mother_last_name'>{t('Form_mother_lastName')}</label>
                    <input
                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                        name='mother_last_name'
                        type='text'
                        placeholder={t('Form_mother_lastNameEx')}
                        onChange={e => onChange(e)}
                        value={mother_last_name}
                    />
                </div>
            </div>

            <div className={styles.usaForm__input_grp}>
                <div className={styles.usaForm__wrap}>
                    <label className={styles.usaForm__form__label} htmlFor='dob'>{t('Form_mother_dob')}</label>
                    <input
                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                        name='mother_dob'
                        type='date'
                        onChange={e => onChange(e)}
                        value={mother_dob}
                    />
                </div>
                <div className={styles.usaForm__wrap}>
                    <label className={styles.usaForm__form__label} htmlFor='place_of_birth'>{t('Form_mother_nationality')}</label>
                    <input
                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                        name='mother_nationality'
                        type='text'
                        placeholder={t('Form_mother_nationalityEx')}
                        onChange={e => onChange(e)}
                        value={mother_nationality}
                    />
                </div>
            </div>
            <div className={styles.usaForm__input_grp}>
                <div className={styles.usaForm__wrap}>
                    <label className={styles.usaForm__form__label} htmlFor='mother_city_of_birth'>{t('Form_mother_cob')}</label>
                    <input
                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                        name='mother_city_of_birth'
                        type='text'
                        placeholder={t('Form_cobEx')}
                        onChange={e => onChange(e)}
                        value={mother_city_of_birth}
                    />
                </div>
            </div>
        </>
    );
}
