import React from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
import { useTranslation } from 'next-i18next';
import styles from '../../../styles/ApplicationForm.module.css';

export default function PassportSection({ formData, onChange, onFileChange, show, setShow }) {
    const { t } = useTranslation();

    const {
        first_name,
        last_name,
        dob,
        place_of_birth,
        pasport_number,
        nationality,
        passport_issue_date,
        passport_expiry_date,
    } = formData;

    return (
        <>
            <p className={styles.passport__section__title}>{t('Form_main_passport')}</p>
            <div className={styles.input_grp}>
                <div className={styles['input_wrap'] + ' ' + styles['input_wrap__bt']}>
                    <p className={styles.ukForm__text}>{t('Form_passport_info')}</p>
                    <IconButton onClick={() => setShow(true)}>
                        <ExpandMoreIcon className={styles.expand__bt} />
                    </IconButton>
                    <IconButton onClick={() => setShow(false)}>
                        <ExpandLessIcon className={styles.expand__less__bt} />
                    </IconButton>
                </div>
                <div className={styles['input_wrap'] + ' ' + styles['input_wrap__bt'] + ' ' + styles['import__passport']}>
                    <label className={styles.ukForm__form__label} htmlFor='passport_photo'>{t('Form_passport_import')}</label>
                    <input
                        className={styles['ukForm__input__for__two'] + ' ' + styles['import__passport']}
                        name='passport_photo'
                        type='file'
                        accept='image/*,.pdf'
                        placeholder='Import Passport'
                        onChange={onFileChange}
                    />
                </div>
            </div>

            {show ? (
                <>
                    <div className={styles.input_grp}>
                        <div className={styles.input_wrap}>
                            <label className={styles['ukForm__form__label'] + ' ' + styles['appForm__subject']} htmlFor='first_name'>{t('Form_firstName')}</label>
                            <input
                                className={styles['applicationForm__form__input'] + ' ' + styles['ukForm__input__for__two']}
                                name='first_name'
                                type='text'
                                placeholder={t('Form_firstName')}
                                onChange={onChange}
                                value={first_name}
                            />
                        </div>
                        <div className={styles.input_wrap}>
                            <label className={styles.ukForm__form__label} htmlFor='last_name'>{t('Form_lastName')}</label>
                            <input
                                className={styles['applicationForm__form__input'] + ' ' + styles['ukForm__input__for__two']}
                                name='last_name'
                                type='text'
                                placeholder={t('Form_lastName')}
                                onChange={onChange}
                                value={last_name}
                            />
                        </div>
                    </div>

                    <div className={styles.input_grp}>
                        <div className={styles.form__wrap}>
                            <label className={styles.ukForm__form__label} htmlFor='dob'>{t('Form_dob')}</label>
                            <input
                                className={styles['applicationForm__form__input'] + ' ' + styles['ukForm__input__for__two']}
                                name='dob'
                                type='date'
                                onChange={onChange}
                                value={dob}
                            />
                        </div>
                        <div className={styles.form__wrap}>
                            <label className={styles.ukForm__form__label} htmlFor='place_of_birth'>{t('Form_pob')}</label>
                            <input
                                className={styles['applicationForm__form__input'] + ' ' + styles['ukForm__input__for__two']}
                                name='place_of_birth'
                                type='text'
                                placeholder={t('Form_pobEx')}
                                onChange={onChange}
                                value={place_of_birth}
                            />
                        </div>
                    </div>

                    <div className={styles.input_grp}>
                        <div className={styles.form__wrap}>
                            <label className={styles.ukForm__form__label} htmlFor='pasport_number'>{t('Form_passportNo')}</label>
                            <input
                                className={styles['applicationForm__form__input'] + ' ' + styles['ukForm__input__for__two']}
                                name='pasport_number'
                                type='text'
                                placeholder={t('Form_passportNo')}
                                onChange={onChange}
                                value={pasport_number}
                            />
                        </div>
                        <div className={styles.form__wrap}>
                            <label className={styles.ukForm__form__label} htmlFor='nationality'>{t('Form_nationality')}</label>
                            <input
                                className={styles['applicationForm__form__input'] + ' ' + styles['ukForm__input__for__two']}
                                name='nationality'
                                type='text'
                                placeholder={t('Form_nationalityEx')}
                                onChange={onChange}
                                value={nationality}
                            />
                        </div>
                    </div>

                    <div className={styles.input_grp}>
                        <div className={styles.form__wrap}>
                            <label className={styles.ukForm__form__label} htmlFor='passport_issue_date'>{t('Form_pass_issueDate')}</label>
                            <input
                                className={styles['applicationForm__form__input'] + ' ' + styles['ukForm__input__for__two']}
                                name='passport_issue_date'
                                type='date'
                                onChange={onChange}
                                value={passport_issue_date}
                            />
                        </div>
                        <div className={styles.form__wrap}>
                            <label className={styles.ukForm__form__label} htmlFor='passport_issue_date'>{t('Form_pass_expiryDate')}</label>
                            <input
                                className={styles['applicationForm__form__input'] + ' ' + styles['ukForm__input__for__two']}
                                name='passport_expiry_date'
                                type='date'
                                onChange={onChange}
                                value={passport_expiry_date}
                            />
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
}
