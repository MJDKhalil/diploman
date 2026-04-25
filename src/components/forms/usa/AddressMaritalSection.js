import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'next-i18next';
import styles from '../../../styles/UsaAppForm.module.css';

export default function AddressMaritalSection({
    formData, onChange,
    showMaritialStatus, setShowMaritialStatus,
    showMaritialSection, setShowMaritialSection,
}) {
    const { t } = useTranslation();
    const { address, maritial_status } = formData;

    const displayMaritialRadioValue = () => {
        var MaritialStatusValue = document.querySelector('input[name="maritial_status"]:checked').value;
        document.getElementById("maritialStatusRadio").innerHTML = MaritialStatusValue;
    };

    return (
        <>
            <hr className={styles.usaForm__hr}/>
            <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input_wrap__bt']}>
                <label className={styles.usaForm__form__label} htmlFor='address'>{t('Form_address')}</label>
                <input
                    className={styles.usaForm__input__for__one}
                    name='address'
                    type='text'
                    placeholder={t('Form_addressEx')}
                    onChange={e => onChange(e)}
                    value={address}
                />
            </div>

            <hr className={styles.usaForm__hr}/>
            <div className={styles.usaForm__input_grp}>
                <div className={styles.usaForm__wrap}>
                    {/* national_identification_number rendered here in parent */}
                </div>
                <div className={styles.select__purpose}>
                    <h2 className={styles.usaForm__select__container}>{t('Form_maritial-status')}</h2>
                    <div className={styles.usaForm__select__box}>
                        <div onClick={() => setShowMaritialStatus(!showMaritialStatus)} className={styles.usaForm__selected} id="maritialStatusRadio">
                            {t('Form_select')}<ExpandMoreIcon className={styles.usaForm__xpand__bt}/>
                        </div>
                        { showMaritialStatus?
                        <>
                            <div className={styles.usaForm__option__container}>
                                <div className={styles.usaForm__option}>
                                    <label className={styles.usaForm__box__label}>
                                        <input
                                            type='radio'
                                            name='maritial_status'
                                            value='Single'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={maritial_status === 'Single'}
                                            onClick={() => {
                                                setShowMaritialStatus(false)
                                                displayMaritialRadioValue()
                                                setShowMaritialSection(false)
                                            }}
                                        />
                                        <span>{t('Form_single')}</span>
                                    </label>
                                </div>
                                <div className={styles.usaForm__option}>
                                    <label className={styles.usaForm__box__label}>
                                        <input
                                            type='radio'
                                            name='maritial_status'
                                            value='Married'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={maritial_status === 'Married'}
                                            onClick={() => {
                                                setShowMaritialStatus(false)
                                                displayMaritialRadioValue()
                                                setShowMaritialSection(true)
                                            }}
                                        />
                                        <span>{t('Form_married')}</span>
                                    </label>
                                </div>
                                <div className={styles.usaForm__option}>
                                    <label className={styles.usaForm__box__label}>
                                        <input
                                            type='radio'
                                            name='maritial_status'
                                            value='Widowed'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={maritial_status === 'Widowed'}
                                            onClick={() => {
                                                setShowMaritialStatus(false)
                                                displayMaritialRadioValue()
                                                setShowMaritialSection(false)
                                            }}
                                        />
                                        <span>{t('Form_Widowed')}</span>
                                    </label>
                                </div>
                            </div>
                        </>
                        :null}
                    </div>
                </div>
            </div>
        </>
    );
}
