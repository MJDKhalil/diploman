import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from '../../../styles/ApplicationForm.module.css';

export default function AddressSection({ formData, onChange }) {
    const { t } = useTranslation();

    const { address, residence_since, address_ownership_status } = formData;

    return (
        <>
            <div className={styles['input_wrap'] + ' ' + styles['input_wrap__bt']}>
                <label className={styles.ukForm__form__label} htmlFor='address'>{t('Form_address')}</label>
                <input
                    className={styles.input__for__one}
                    name='address'
                    type='text'
                    placeholder={t('Form_addressEx')}
                    onChange={onChange}
                    value={address}
                />
            </div>

            <div className={styles.input_grp}>
                <div className={styles.input_wrap}>
                    <label className={styles['ukForm__form__label'] + ' ' + styles['appForm__subject']} htmlFor='residence_since'>{t('Form_addressSince')}</label>
                    <input
                        className={styles['applicationForm__form__input'] + ' ' + styles['ukForm__input__for__two']}
                        name='residence_since'
                        type='text'
                        placeholder={t('Form_addressSinceEx')}
                        onChange={onChange}
                        value={residence_since}
                    />
                </div>
                <div className={styles['input_wrap'] + ' ' + styles['passport__input__radio']}>
                    <ul className={styles.appform__ul}>
                        <li className={styles.appform__il}>
                            <label className={styles.radio_wrap}>
                                <input
                                    type='radio'
                                    name='address_ownership_status'
                                    value='Rent'
                                    className={styles.input_radio}
                                    onChange={onChange}
                                    checked={address_ownership_status === 'Rent'}
                                />
                                <span>{t('Form_addressRent')}</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.radio_wrap}>
                                <input
                                    type='radio'
                                    name='address_ownership_status'
                                    value='Owned'
                                    className={styles.input_radio}
                                    onChange={onChange}
                                    checked={address_ownership_status === 'Owned'}
                                />
                                <span>{t('Form_addressOwned')}</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
