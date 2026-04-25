import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'next-i18next';
import styles from '../../../styles/UsaAppForm.module.css';

export default function TripSection({
    formData, onChange, onFileChange,
    showPurpose, setShowPurpose,
    showSchoolDetails, setShowSchoolDetails,
    showInviterDetails, setShowInviterDetails,
    showMedicalDetails, setShowMedicalDetails,
    showOtherTripDetails, setShowOtherTripDetails,
}) {
    const { t } = useTranslation();
    const {
        person_paying_for_trip, purpose_of_trip,
        school_name, inviter_full_name, inviter_email, inviter_address,
        hospital_name, medical_details, other_travel_reason,
        arrive_date, length_of_stay, aditional_info,
    } = formData;

    const displayRadioValue = () => {
        var checkboxValue = document.querySelector('input[name="purpose_of_trip"]:checked').value;
        document.getElementById("myRadioCheck").innerHTML = checkboxValue;
    };

    return (
        <>
            <hr className={styles.usaForm__hr}/>
            <div className={styles.usaForm__input_grp}>
                <div className={styles.usaForm__wrap}>
                    <label className={styles.usaForm__form__label} htmlFor='person_paying_for_trip'>{t('Form_sponsor')}</label>
                    <input
                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                        name='person_paying_for_trip'
                        type='text'
                        placeholder={t('Form_sponsorEx')}
                        onChange={e => onChange(e)}
                        value={person_paying_for_trip}
                    />
                </div>

                <div className={styles.select__purpose}>
                    <h2 className={styles.usaForm__select__container}>{t('Form_tripPurpose')}</h2>
                    <div className={styles.usaForm__select__box}>
                        <div onClick={() => setShowPurpose(!showPurpose)} className={styles.usaForm__selected} id="myRadioCheck">
                            {t('Form_select')}<ExpandMoreIcon className={styles.usaForm__xpand__bt}/>
                        </div>
                        { showPurpose?
                        <>
                            <div className={styles.usaForm__option__container}>
                                <div className={styles.usaForm__option}>
                                    <label className={styles.usaForm__box__label}>
                                        <input
                                            type='radio'
                                            name='purpose_of_trip'
                                            value='Study'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={purpose_of_trip === 'Study'}
                                            onClick={() => {
                                                setShowPurpose(false)
                                                displayRadioValue()
                                                setShowSchoolDetails(true)
                                                setShowInviterDetails(false)
                                                setShowMedicalDetails(false)
                                                setShowOtherTripDetails(false)
                                            }}
                                        />
                                        <span>{t('Form_choice_study')}</span>
                                    </label>
                                </div>
                                <div className={styles.usaForm__option}>
                                    <label className={styles.usaForm__box__label}>
                                        <input
                                            type='radio'
                                            name='purpose_of_trip'
                                            value='Tourism / Visit'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={purpose_of_trip === 'Tourism / Visit'}
                                            onClick={() => {
                                                setShowPurpose(false)
                                                displayRadioValue()
                                                setShowSchoolDetails(false)
                                                setShowInviterDetails(true)
                                                setShowMedicalDetails(false)
                                                setShowOtherTripDetails(false)
                                            }}
                                        />
                                        <span>{t('Form_choice_tourism')}</span>
                                    </label>
                                </div>
                                <div className={styles.usaForm__option}>
                                    <label className={styles.usaForm__box__label}>
                                        <input
                                            type='radio'
                                            name='purpose_of_trip'
                                            value='Business'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={purpose_of_trip === 'Business'}
                                            onClick={() => {
                                                setShowPurpose(false)
                                                displayRadioValue()
                                                setShowSchoolDetails(false)
                                                setShowInviterDetails(true)
                                                setShowMedicalDetails(false)
                                                setShowOtherTripDetails(false)
                                            }}
                                        />
                                        <span>{t('Form_choice_business')}</span>
                                    </label>
                                </div>
                                <div className={styles.usaForm__option}>
                                    <label className={styles.usaForm__box__label}>
                                        <input
                                            type='radio'
                                            name='purpose_of_trip'
                                            value='Medical Treatment'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={purpose_of_trip === 'Medical Treatment'}
                                            onClick={() => {
                                                setShowPurpose(false)
                                                displayRadioValue()
                                                setShowSchoolDetails(false)
                                                setShowInviterDetails(false)
                                                setShowMedicalDetails(true)
                                                setShowOtherTripDetails(false)
                                            }}
                                        />
                                        <span>{t('Form_choice_medic')}</span>
                                    </label>
                                </div>
                                <div className={styles.usaForm__option}>
                                    <label className={styles.usaForm__box__label}>
                                        <input
                                            type='radio'
                                            name='purpose_of_trip'
                                            value='Other'
                                            className={styles.usaForm__input__radio}
                                            onChange={e => onChange(e)}
                                            checked={purpose_of_trip === 'Other'}
                                            onClick={() => {
                                                setShowPurpose(false)
                                                displayRadioValue()
                                                setShowSchoolDetails(false)
                                                setShowInviterDetails(false)
                                                setShowMedicalDetails(false)
                                                setShowOtherTripDetails(true)
                                            }}
                                        />
                                        <span>{t('Form_choice_other')}</span>
                                    </label>
                                </div>
                            </div>
                        </>
                        :null}
                    </div>
                </div>
            </div>

            { showSchoolDetails?
                <>
                    <div className={styles.usaForm__input_grp}>
                        <div className={styles.usaForm__input_wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='first_name'>{t('Form_instituteName')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='school_name'
                                type='text'
                                placeholder={t('Form_instituteEx')}
                                onChange={e => onChange(e)}
                                value={school_name}
                            />
                        </div>
                        <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input_wrap__bt']+' '+styles['usaForm__import__passport']}>
                            <label className={styles.usaForm__form__label} htmlFor='admission_offer_photo'>{t('Form_instituteAdmission')}</label>
                            <input
                                className={styles['usaForm__input__for__two']+' '+styles['usaForm__import__passport']}
                                name='admission_offer_photo'
                                type='file'
                                accept='image/*,.pdf'
                                onChange={onFileChange}
                            />
                        </div>
                    </div>
                </>
            :null}

            { showInviterDetails?
                <>
                    <div className={styles.usaForm__input_grp}>
                        <div className={styles.usaForm__input_wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='inviter_full_name'>{t('Form_inviter')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='inviter_full_name'
                                type='text'
                                placeholder={t('Form_inviterEx')}
                                onChange={e => onChange(e)}
                                value={inviter_full_name}
                            />
                        </div>
                        <div className={styles.usaForm__input_wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='inviter_email'>{t('Form_email')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='inviter_email'
                                type='text'
                                placeholder={t('Form_emailEx')}
                                onChange={e => onChange(e)}
                                value={inviter_email}
                            />
                        </div>
                    </div>

                    <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input_wrap__bt']}>
                        <label className={styles.usaForm__form__label} htmlFor='inviter_address'>{t('Form_address')}</label>
                        <input
                            className={styles.usaForm__input__for__one}
                            name='inviter_address'
                            type='text'
                            placeholder={t('Form_addressEx')}
                            onChange={e => onChange(e)}
                            value={inviter_address}
                        />
                    </div>
                </>
            :null}

            {showMedicalDetails?
                <>
                    <div className={styles.usaForm__input_grp}>
                        <div className={styles.usaForm__input_wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='hospital_name'>{t('Form_hospital')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='hospital_name'
                                type='text'
                                placeholder={t('Form_hospitalEx')}
                                onChange={e => onChange(e)}
                                value={hospital_name}
                            />
                        </div>
                        <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input_wrap__bt']+' '+styles['usaForm__import__passport']}>
                            <label className={styles.usaForm__form__label} htmlFor='medical_invitation_letter'>{t('Form_hospitalLetter')}</label>
                            <input
                                className={styles['usaForm__input__for__two']+' '+styles['usaForm__import__passport']}
                                name='medical_invitation_letter'
                                type='file'
                                accept='image/*,.pdf'
                                onChange={onFileChange}
                            />
                        </div>
                    </div>

                    <div className={styles.usaForm__input_wrap}>
                        <label className={styles.usaForm__form__label} htmlFor='medical_details'>{t('Form_additional')}</label>
                        <textarea
                            className={styles.usaForm__form__textarea}
                            name='medical_details'
                            cols='30'
                            rows='5'
                            placeholder={t('Form_additionalEx')}
                            onChange={e => onChange(e)}
                            value={medical_details}
                        />
                    </div>
                </>
            :null}

            {showOtherTripDetails?
                <>
                    <div className={styles.usaForm__input_wrap}>
                        <label className={styles.usaForm__form__label} htmlFor='other_travel_reason'>{t('Form_additional')}</label>
                        <textarea
                            className={styles.usaForm__form__textarea}
                            name='other_travel_reason'
                            cols='30'
                            rows='5'
                            placeholder={t('Form_additionalEx2')}
                            onChange={e => onChange(e)}
                            value={other_travel_reason}
                        />
                    </div>
                </>
            :null}

            <hr className={styles.usaForm__hr}/>
            <div className={styles.usaForm__input_grp}>
                <div className={styles.usaForm__wrap}>
                    <label className={styles.usaForm__form__label} htmlFor='arrive_date'>{t('Form_tripArrival')}</label>
                    <input
                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                        name='arrive_date'
                        type='date'
                        onChange={e => onChange(e)}
                        value={arrive_date}
                    />
                </div>
                <div className={styles.usaForm__wrap}>
                    <label className={styles.usaForm__form__label} htmlFor='length_of_stay'>{t('ukForm_uk_StudyPeriod')}</label>
                    <input
                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                        name='length_of_stay'
                        type='text'
                        placeholder={t('ukForm_uk_StudyPeriodEx')}
                        onChange={e => onChange(e)}
                        value={length_of_stay}
                    />
                </div>
            </div>
            <div className={styles.usaForm__input_grp}>
                { showInviterDetails?
                 <>
                    <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input_wrap__bt']+' '+styles['usaForm__import__passport']}>
                        <label className={styles.usaForm__form__label} htmlFor='invitation_letter'>{t('Form_invitation')}</label>
                        <input
                            className={styles['usaForm__input__for__two']+' '+styles['usaForm__import__passport']}
                            name='invitation_letter'
                            type='file'
                            accept='image/*,.pdf'
                            onChange={onFileChange}
                        />
                    </div>
                 </>
                 :null}
            </div>
        </>
    );
}
