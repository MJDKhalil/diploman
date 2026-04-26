import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from '../../../styles/UsaAppForm.module.css';

export default function ReferencesSection({ formData, onChange }) {
    const { t } = useTranslation();
    const {
        reference1_first_name, reference1_last_name, reference1_address, reference1_phone,
        reference2_first_name, reference2_last_name, reference2_address, reference2_phone,
    } = formData;

    return (
        <>
            <hr className={styles.usaForm__hr}/>
            <h3 className={styles.usaForm__education}>{t('usaForm_reference')}</h3>
            <p className={styles.usaForm__education__text1}>{t('usaForm_reference_note')}</p>

            <hr className={styles.usaForm__hr}/>
            <h3 className={styles.usaForm__reference__person}>{t('usaForm_reference1')}</h3>
            <div className={styles.usaForm__input_grp}>
                <div className={styles.usaForm__input_wrap}>
                    <label className={styles.usaForm__form__label} htmlFor='reference1_first_name'>{t('Form_firstName')}</label>
                    <input
                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                        name='reference1_first_name'
                        type='text'
                        onChange={e => onChange(e)}
                        value={reference1_first_name}
                    />
                </div>
                <div className={styles.usaForm__input_wrap}>
                    <label className={styles.usaForm__form__label} htmlFor='reference1_last_name'>{t('Form_lastName')}</label>
                    <input
                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                        name='reference1_last_name'
                        type='text'
                        onChange={e => onChange(e)}
                        value={reference1_last_name}
                    />
                </div>
            </div>

            <div className={styles.usaForm__input_grp}>
                <div className={styles.usaForm__wrap}>
                    <label className={styles.usaForm__form__label} htmlFor='reference1_phone'>{t('Form_phone')}</label>
                    <input
                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                        name='reference1_phone'
                        type='text'
                        onChange={e => onChange(e)}
                        value={reference1_phone}
                    />
                </div>
            </div>
            <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input_wrap__bt']}>
                <label className={styles.usaForm__form__label} htmlFor='reference1_address'>{t('Form_address')}</label>
                <input
                    className={styles.usaForm__input__for__one}
                    name='reference1_address'
                    type='text'
                    placeholder={t('Form_addressEx')}
                    onChange={e => onChange(e)}
                    value={reference1_address}
                />
            </div>

            <hr className={styles.usaForm__hr}/>
            <h3 className={styles.usaForm__reference__person}>{t('usaForm_reference2')}</h3>
            <div className={styles.usaForm__input_grp}>
                <div className={styles.usaForm__input_wrap}>
                    <label className={styles.usaForm__form__label} htmlFor='reference2_first_name'>{t('Form_firstName')}</label>
                    <input
                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                        name='reference2_first_name'
                        type='text'
                        onChange={e => onChange(e)}
                        value={reference2_first_name}
                    />
                </div>
                <div className={styles.usaForm__input_wrap}>
                    <label className={styles.usaForm__form__label} htmlFor='reference2_last_name'>{t('Form_lastName')}</label>
                    <input
                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                        name='reference2_last_name'
                        type='text'
                        onChange={e => onChange(e)}
                        value={reference2_last_name}
                    />
                </div>
            </div>

            <div className={styles.usaForm__input_grp}>
                <div className={styles.usaForm__wrap}>
                    <label className={styles.usaForm__form__label} htmlFor='reference2_phone'>{t('Form_phone')}</label>
                    <input
                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                        name='reference2_phone'
                        type='text'
                        onChange={e => onChange(e)}
                        value={reference2_phone}
                    />
                </div>
            </div>
            <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input_wrap__bt']}>
                <label className={styles.usaForm__form__label} htmlFor='reference2_address'>{t('Form_address')}</label>
                <input
                    className={styles.usaForm__input__for__one}
                    name='reference2_address'
                    type='text'
                    placeholder={t('Form_addressEx')}
                    onChange={e => onChange(e)}
                    value={reference2_address}
                />
            </div>
        </>
    );
}
