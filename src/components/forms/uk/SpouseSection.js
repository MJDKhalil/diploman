import React from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
import { useTranslation } from 'next-i18next';
import styles from '../../../styles/ApplicationForm.module.css';

export default function SpouseSection({
    formData,
    onChange,
    onFileChange,
    showMaritialSection,
    showSpousSection,
    setShowSpousSection,
}) {
    const { t } = useTranslation();

    const {
        spouse_first_name,
        spouse_last_name,
        spouse_pasport_number,
        spouse_dob,
        spouse_nationality,
        spouse_live_with_you,
        spouse_travel_with_you,
    } = formData;

    if (!showMaritialSection) return null;

    return (
        <>
            <p className={styles.passport__section__title}>{t('Form_wifePassport')}</p>
            <div className={styles.input_grp}>
                <div className={styles['input_wrap'] + ' ' + styles['input_wrap__bt']}>
                    <p className={styles.ukForm__text}>{t('Form_passport_info')}</p>
                    <IconButton onClick={() => setShowSpousSection(true)}>
                        <ExpandMoreIcon className={styles.expand__bt} />
                    </IconButton>
                    <IconButton onClick={() => setShowSpousSection(false)}>
                        <ExpandLessIcon className={styles.expand__less__bt} />
                    </IconButton>
                </div>
                <div className={styles['input_wrap'] + ' ' + styles['input_wrap__bt'] + ' ' + styles['import__passport']}>
                    <label className={styles.ukForm__form__label} htmlFor='spouse_passport_photo'>{t('Form_passport_import')}</label>
                    <input
                        className={styles['ukForm__input__for__two'] + ' ' + styles['import__passport']}
                        name='spouse_passport_photo'
                        type='file'
                        accept='image/*,.pdf'
                        placeholder='Import Passport'
                        onChange={onFileChange}
                    />
                </div>
            </div>

            <div className={styles.input_grp}>
                <div className={styles['input_wrap'] + ' ' + styles['spouse__trip__bt']}>
                    <p className={styles.radion__title}>{t('Form_wifeAddress')}</p>
                    <ul className={styles.appform__ul}>
                        <li className={styles.appform__il}>
                            <label className={styles.radio_wrap}>
                                <input
                                    type='radio'
                                    name='spouse_live_with_you'
                                    value='Yes'
                                    className={styles.input_radio}
                                    onChange={onChange}
                                    checked={spouse_live_with_you === 'Yes'}
                                />
                                <span>{t('Form_yes')}</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.radio_wrap}>
                                <input
                                    type='radio'
                                    name='spouse_live_with_you'
                                    value='No'
                                    className={styles.input_radio}
                                    onChange={onChange}
                                    checked={spouse_live_with_you === 'No'}
                                />
                                <span>{t('Form_no')}</span>
                            </label>
                        </li>
                    </ul>
                </div>

                <div className={styles['input_wrap'] + ' ' + styles['spouse__trip__bt']}>
                    <p className={styles.radion__title}>{t('Form_wifeTravel')}</p>
                    <ul className={styles.appform__ul}>
                        <li className={styles.appform__il}>
                            <label className={styles.radio_wrap}>
                                <input
                                    type='radio'
                                    name='spouse_travel_with_you'
                                    value='Yes'
                                    className={styles.input_radio}
                                    onChange={onChange}
                                    checked={spouse_travel_with_you === 'Yes'}
                                />
                                <span>{t('Form_yes')}</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.radio_wrap}>
                                <input
                                    type='radio'
                                    name='spouse_travel_with_you'
                                    value='No'
                                    className={styles.input_radio}
                                    onChange={onChange}
                                    checked={spouse_travel_with_you === 'No'}
                                />
                                <span>{t('Form_no')}</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            {showSpousSection ? (
                <>
                    <div className={styles.input_grp}>
                        <div className={styles.input_wrap}>
                            <label className={styles['ukForm__form__label'] + ' ' + styles['appForm__subject']} htmlFor='spouse_first_name'>{t('Form_wife_firstName')}</label>
                            <input
                                className={styles['applicationForm__form__input'] + ' ' + styles['ukForm__input__for__two']}
                                name='spouse_first_name'
                                type='text'
                                placeholder={t('Form_firstName')}
                                onChange={onChange}
                                value={spouse_first_name}
                            />
                        </div>
                        <div className={styles.input_wrap}>
                            <label className={styles.ukForm__form__label} htmlFor='spouse_last_name'>{t('Form_wife_lastName')}</label>
                            <input
                                className={styles['applicationForm__form__input'] + ' ' + styles['ukForm__input__for__two']}
                                name='spouse_last_name'
                                type='text'
                                placeholder={t('Form_lastName')}
                                onChange={onChange}
                                value={spouse_last_name}
                            />
                        </div>
                    </div>

                    <div className={styles.input_grp}>
                        <div className={styles.form__wrap}>
                            <label className={styles.ukForm__form__label} htmlFor='spouse_pasport_number'>{t('Form_passportNo')}</label>
                            <input
                                className={styles['applicationForm__form__input'] + ' ' + styles['ukForm__input__for__two']}
                                name='spouse_pasport_number'
                                type='text'
                                placeholder={t('Form_passportNo')}
                                onChange={onChange}
                                value={spouse_pasport_number}
                            />
                        </div>
                        <div className={styles.form__wrap}>
                            <label className={styles.ukForm__form__label} htmlFor='spouse_nationality'>{t('Form_nationality')}</label>
                            <input
                                className={styles['applicationForm__form__input'] + ' ' + styles['ukForm__input__for__two']}
                                name='spouse_nationality'
                                type='text'
                                placeholder={t('Form_nationalityEx')}
                                onChange={onChange}
                                value={spouse_nationality}
                            />
                        </div>
                    </div>

                    <div className={styles.input_grp}>
                        <div className={styles.form__wrap}>
                            <label className={styles.ukForm__form__label} htmlFor='spouse_dob'>{t('Form_dob')}</label>
                            <input
                                className={styles['applicationForm__form__input'] + ' ' + styles['ukForm__input__for__two']}
                                name='spouse_dob'
                                type='date'
                                onChange={onChange}
                                value={spouse_dob}
                            />
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
}
