import React from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
import { useTranslation } from 'next-i18next';
import styles from '../../../styles/UsaAppForm.module.css';

export default function SpouseSection({
    formData, onChange, onFileChange,
    showMaritialSection,
    showSpousSection, setShowSpousSection,
}) {
    const { t } = useTranslation();
    const {
        spouse_first_name, spouse_last_name, spouse_pasport_number,
        spouse_nationality, spouse_dob, spouse_city_of_birth,
    } = formData;

    if (!showMaritialSection) return null;

    return (
        <>
            <p className={styles.usaForm__section__title}>{t('Form_wifePassport')}</p>
            <div className={styles.usaForm__input_grp}>
                <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input_wrap__bt']}>
                    <p className={styles.usaForm__text}>{t('Form_passport_info')}</p>
                    <IconButton onClick={() => setShowSpousSection(true)}>
                        <ExpandMoreIcon className={styles.usaForm__expandIcon}/>
                    </IconButton>
                    <IconButton onClick={() => setShowSpousSection(false)}>
                        <ExpandLessIcon className={styles.usaForm__condense}/>
                    </IconButton>
                </div>
                <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input_wrap__bt']+' '+styles['usaForm__import__passport']}>
                    <label className={styles.usaForm__form__label} htmlFor='spouse_passport_photo'>{t('Form_passport_import')}</label>
                    <input
                        className={styles['usaForm__input__for__two']+' '+styles['usaForm__import__passport']}
                        name='spouse_passport_photo'
                        type='file'
                        accept='image/*,.pdf'
                        placeholder='Import Passport'
                        onChange={onFileChange}
                    />
                </div>
            </div>

            { showSpousSection?
                <>
                    <div className={styles.usaForm__input_grp}>
                        <div className={styles.usaForm__input_wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='spouse_first_name'>{t('Form_wife_firstName')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='spouse_first_name'
                                type='text'
                                placeholder={t('Form_firstName')}
                                onChange={e => onChange(e)}
                                value={spouse_first_name}
                            />
                        </div>
                        <div className={styles.usaForm__input_wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='last_name'>{t('Form_wife_lastName')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='spouse_last_name'
                                type='text'
                                placeholder={t('Form_lastName')}
                                onChange={e => onChange(e)}
                                value={spouse_last_name}
                            />
                        </div>
                    </div>

                    <div className={styles.usaForm__input_grp}>
                        <div className={styles.usaForm__wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='spouse_pasport_number'>{t('Form_passportNo')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='spouse_pasport_number'
                                type='text'
                                placeholder={t('Form_passportNo')}
                                onChange={e => onChange(e)}
                                value={spouse_pasport_number}
                            />
                        </div>
                        <div className={styles.usaForm__wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='spouse_nationality'>{t('Form_nationality')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='spouse_nationality'
                                type='text'
                                placeholder={t('Form_nationalityEx')}
                                onChange={e => onChange(e)}
                                value={spouse_nationality}
                            />
                        </div>
                    </div>
                    <div className={styles.usaForm__input_grp}>
                        <div className={styles.usaForm__wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='spouse_dob'>{t('Form_dob')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='spouse_dob'
                                type='date'
                                onChange={e => onChange(e)}
                                value={spouse_dob}
                            />
                        </div>
                        <div className={styles.usaForm__wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='spouse_city_of_birth'>{t('Form_cob')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='spouse_city_of_birth'
                                type='text'
                                placeholder={t('Form_cobEx')}
                                onChange={e => onChange(e)}
                                value={spouse_city_of_birth}
                            />
                        </div>
                    </div>
                </>
            :null}
        </>
    );
}
