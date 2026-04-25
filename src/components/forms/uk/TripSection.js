import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'next-i18next';
import styles from '../../../styles/ApplicationForm.module.css';

export default function TripSection({
    formData,
    onChange,
    onFileChange,
    showPurpose,
    setShowPurpose,
    showMaritialStatus,
    setShowMaritialStatus,
    setShowMaritialSection,
    showSchoolDetails,
    setShowSchoolDetails,
    showInviterDetails,
    setShowInviterDetails,
    showMedicalDetails,
    setShowMedicalDetails,
    showOtherTripDetails,
    setShowOtherTripDetails,
}) {
    const { t } = useTranslation();

    const {
        destination_country,
        maritial_status,
        purpose_of_trip,
        arrive_date,
        leave_date,
        trip_expenses,
        aditional_info,
        school_name,
        inviter_full_name,
        inviter_email,
        inviter_address,
        medical_details,
        hospital_name,
        other_travel_reason,
    } = formData;

    const displayRadioValue = () => {
        var checkboxValue = document.querySelector('input[name="purpose_of_trip"]:checked').value;
        document.getElementById('myRadioCheck').innerHTML = checkboxValue;
    };

    const displayMaritialRadioValue = () => {
        var MaritialStatusValue = document.querySelector('input[name="maritial_status"]:checked').value;
        document.getElementById('maritialStatusRadio').innerHTML = MaritialStatusValue;
    };

    return (
        <>
            <div className={styles.input_grp}>
                <div className={styles.select__purpose}>
                    <h2 className={styles.select__op__container}>{t('Form_maritial-status')}</h2>
                    <div className={styles.p__select__box}>
                        <div
                            onClick={() => setShowMaritialStatus(!showMaritialStatus)}
                            className={styles.ukForm__selected}
                            id='maritialStatusRadio'
                        >
                            {t('Form_select')}<ExpandMoreIcon className={styles.p__xpand__bt} />
                        </div>
                        {showMaritialStatus ? (
                            <div className={styles.p__option__container}>
                                <div className={styles.travel__p__option}>
                                    <label className={styles.p__box__label}>
                                        <input
                                            type='radio'
                                            name='maritial_status'
                                            value='Single'
                                            className={styles.p__input_radio}
                                            onChange={onChange}
                                            checked={maritial_status === 'Single'}
                                            onClick={() => {
                                                setShowMaritialStatus(false);
                                                displayMaritialRadioValue();
                                                setShowMaritialSection(false);
                                            }}
                                        />
                                        <span>{t('Form_single')}</span>
                                    </label>
                                </div>
                                <div className={styles.travel__p__option}>
                                    <label className={styles.p__box__label}>
                                        <input
                                            type='radio'
                                            name='maritial_status'
                                            value='Married'
                                            className={styles.p__input_radio}
                                            onChange={onChange}
                                            checked={maritial_status === 'Married'}
                                            onClick={() => {
                                                setShowMaritialStatus(false);
                                                displayMaritialRadioValue();
                                                setShowMaritialSection(true);
                                            }}
                                        />
                                        <span>{t('Form_married')}</span>
                                    </label>
                                </div>
                                <div className={styles.travel__p__option}>
                                    <label className={styles.p__box__label}>
                                        <input
                                            type='radio'
                                            name='maritial_status'
                                            value='Widowed'
                                            className={styles.p__input_radio}
                                            onChange={onChange}
                                            checked={maritial_status === 'Widowed'}
                                            onClick={() => {
                                                setShowMaritialStatus(false);
                                                displayMaritialRadioValue();
                                                setShowMaritialSection(false);
                                            }}
                                        />
                                        <span>{t('Form_Widowed')}</span>
                                    </label>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>

                <div className={styles.input_wrap}>
                    <label className={styles['ukForm__form__label'] + ' ' + styles['appForm__subject']} htmlFor='destination_country'>{t('Form_destination')}</label>
                    <input
                        className={styles['applicationForm__form__input'] + ' ' + styles['ukForm__input__for__two']}
                        name='destination_country'
                        type='text'
                        placeholder={t('Form_destinationEx')}
                        onChange={onChange}
                        value={destination_country}
                    />
                </div>
            </div>

            <div className={styles.input_grp}>
                <div className={styles.input_wrap}>
                    <label className={styles.ukForm__form__label} htmlFor='trip_expenses'>{t('Form_tripExpenses')}</label>
                    <input
                        className={styles['applicationForm__form__input'] + ' ' + styles['ukForm__input__for__two']}
                        name='trip_expenses'
                        type='text'
                        placeholder={t('Form_tripExpensesEx')}
                        onChange={onChange}
                        value={trip_expenses}
                    />
                </div>

                <div className={styles.select__purpose}>
                    <h2 className={styles.select__op__container}>{t('Form_tripPurpose')}</h2>
                    <div className={styles.p__select__box}>
                        <div
                            onClick={() => setShowPurpose(!showPurpose)}
                            className={styles.ukForm__selected}
                            id='myRadioCheck'
                        >
                            {t('Form_select')}<ExpandMoreIcon className={styles.p__xpand__bt} />
                        </div>
                        {showPurpose ? (
                            <div className={styles.p__option__container}>
                                <div className={styles.travel__p__option}>
                                    <label className={styles.p__box__label}>
                                        <input
                                            type='radio'
                                            name='purpose_of_trip'
                                            value='Study'
                                            className={styles.p__input_radio}
                                            onChange={onChange}
                                            checked={purpose_of_trip === 'Study'}
                                            onClick={() => {
                                                setShowPurpose(false);
                                                displayRadioValue();
                                                setShowSchoolDetails(true);
                                                setShowInviterDetails(false);
                                                setShowMedicalDetails(false);
                                                setShowOtherTripDetails(false);
                                            }}
                                        />
                                        <span>{t('Form_choice_study')}</span>
                                    </label>
                                </div>
                                <div className={styles.travel__p__option}>
                                    <label className={styles.p__box__label}>
                                        <input
                                            type='radio'
                                            name='purpose_of_trip'
                                            value='Tourism / Visit'
                                            className={styles.p__input_radio}
                                            onChange={onChange}
                                            checked={purpose_of_trip === 'Tourism / Visit'}
                                            onClick={() => {
                                                setShowPurpose(false);
                                                displayRadioValue();
                                                setShowSchoolDetails(false);
                                                setShowInviterDetails(true);
                                                setShowMedicalDetails(false);
                                                setShowOtherTripDetails(false);
                                            }}
                                        />
                                        <span>{t('Form_choice_tourism')}</span>
                                    </label>
                                </div>
                                <div className={styles.travel__p__option}>
                                    <label className={styles.p__box__label}>
                                        <input
                                            type='radio'
                                            name='purpose_of_trip'
                                            value='Business'
                                            className={styles.p__input_radio}
                                            onChange={onChange}
                                            checked={purpose_of_trip === 'Business'}
                                            onClick={() => {
                                                setShowPurpose(false);
                                                displayRadioValue();
                                                setShowSchoolDetails(false);
                                                setShowInviterDetails(true);
                                                setShowMedicalDetails(false);
                                                setShowOtherTripDetails(false);
                                            }}
                                        />
                                        <span>{t('Form_choice_business')}</span>
                                    </label>
                                </div>
                                <div className={styles.travel__p__option}>
                                    <label className={styles.p__box__label}>
                                        <input
                                            type='radio'
                                            name='purpose_of_trip'
                                            value='Medical'
                                            className={styles.p__input_radio}
                                            onChange={onChange}
                                            checked={purpose_of_trip === 'Medical Treatment'}
                                            onClick={() => {
                                                setShowPurpose(false);
                                                displayRadioValue();
                                                setShowSchoolDetails(false);
                                                setShowInviterDetails(false);
                                                setShowMedicalDetails(true);
                                                setShowOtherTripDetails(false);
                                            }}
                                        />
                                        <span>{t('Form_choice_medic')}</span>
                                    </label>
                                </div>
                                <div className={styles.travel__p__option}>
                                    <label className={styles.p__box__label}>
                                        <input
                                            type='radio'
                                            name='purpose_of_trip'
                                            value='Other'
                                            className={styles.p__input_radio}
                                            onChange={onChange}
                                            checked={purpose_of_trip === 'Other'}
                                            onClick={() => {
                                                setShowPurpose(false);
                                                displayRadioValue();
                                                setShowSchoolDetails(false);
                                                setShowInviterDetails(false);
                                                setShowMedicalDetails(false);
                                                setShowOtherTripDetails(true);
                                            }}
                                        />
                                        <span>{t('Form_choice_other')}</span>
                                    </label>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>

            {showSchoolDetails ? (
                <div className={styles.input_grp}>
                    <div className={styles.input_wrap}>
                        <label className={styles['ukForm__form__label'] + ' ' + styles['appForm__subject']} htmlFor='school_name'>{t('Form_instituteName')}</label>
                        <input
                            className={styles['applicationForm__form__input'] + ' ' + styles['ukForm__input__for__two']}
                            name='school_name'
                            type='text'
                            placeholder={t('Form_instituteEx')}
                            onChange={onChange}
                            value={school_name}
                        />
                    </div>
                    <div className={styles['input_wrap'] + ' ' + styles['input_wrap__bt'] + ' ' + styles['import__passport']}>
                        <label className={styles.ukForm__form__label} htmlFor='admission_offer_photo'>{t('Form_instituteAdmission')}</label>
                        <input
                            className={styles['ukForm__input__for__two'] + ' ' + styles['import__passport']}
                            name='admission_offer_photo'
                            type='file'
                            accept='image/*,.pdf'
                            onChange={onFileChange}
                        />
                    </div>
                </div>
            ) : null}

            {showInviterDetails ? (
                <>
                    <div className={styles.input_grp}>
                        <div className={styles.input_wrap}>
                            <label className={styles['ukForm__form__label'] + ' ' + styles['appForm__subject']} htmlFor='inviter_full_name'>{t('Form_inviter')}</label>
                            <input
                                className={styles['applicationForm__form__input'] + ' ' + styles['ukForm__input__for__two']}
                                name='inviter_full_name'
                                type='text'
                                placeholder={t('Form_inviterEx')}
                                onChange={onChange}
                                value={inviter_full_name}
                            />
                        </div>
                        <div className={styles.input_wrap}>
                            <label className={styles.ukForm__form__label} htmlFor='inviter_email'>{t('Form_email')}</label>
                            <input
                                className={styles['applicationForm__form__input'] + ' ' + styles['ukForm__input__for__two']}
                                name='inviter_email'
                                type='text'
                                placeholder={t('Form_emailEx')}
                                onChange={onChange}
                                value={inviter_email}
                            />
                        </div>
                    </div>
                    <div className={styles['input_wrap'] + ' ' + styles['input_wrap__bt']}>
                        <label className={styles.ukForm__form__label} htmlFor='inviter_address'>{t('Form_address')}</label>
                        <input
                            className={styles.input__for__one}
                            name='inviter_address'
                            type='text'
                            placeholder={t('Form_addressEx')}
                            onChange={onChange}
                            value={inviter_address}
                        />
                    </div>
                </>
            ) : null}

            {showMedicalDetails ? (
                <>
                    <div className={styles.input_grp}>
                        <div className={styles.input_wrap}>
                            <label className={styles['ukForm__form__label'] + ' ' + styles['appForm__subject']} htmlFor='hospital_name'>{t('Form_hospital')}</label>
                            <input
                                className={styles['applicationForm__form__input'] + ' ' + styles['ukForm__input__for__two']}
                                name='hospital_name'
                                type='text'
                                placeholder={t('Form_hospitalEx')}
                                onChange={onChange}
                                value={hospital_name}
                            />
                        </div>
                        <div className={styles['input_wrap'] + ' ' + styles['input_wrap__bt'] + ' ' + styles['import__passport']}>
                            <label className={styles.ukForm__form__label} htmlFor='medical_invitation_letter'>{t('Form_hospitalLetter')}</label>
                            <input
                                className={styles['ukForm__input__for__two'] + ' ' + styles['import__passport']}
                                name='medical_invitation_letter'
                                type='file'
                                accept='image/*,.pdf'
                                onChange={onFileChange}
                            />
                        </div>
                    </div>
                    <div className={styles.input_wrap}>
                        <label className={styles.ukForm__form__label} htmlFor='medical_details'>{t('Form_additional')}</label>
                        <textarea
                            className={styles.applicationForm__form__textarea}
                            name='medical_details'
                            cols='30'
                            rows='5'
                            placeholder={t('Form_additionalEx')}
                            onChange={onChange}
                            value={medical_details}
                        />
                    </div>
                </>
            ) : null}

            {showOtherTripDetails ? (
                <div className={styles.input_wrap}>
                    <label className={styles.ukForm__form__label} htmlFor='other_travel_reason'>{t('Form_additional')}</label>
                    <textarea
                        className={styles.applicationForm__form__textarea}
                        name='other_travel_reason'
                        cols='30'
                        rows='5'
                        placeholder={t('Form_additionalEx2')}
                        onChange={onChange}
                        value={other_travel_reason}
                    />
                </div>
            ) : null}

            <div className={styles.input_grp}>
                <div className={styles.form__wrap}>
                    <label className={styles.ukForm__form__label} htmlFor='arrive_date'>{t('Form_tripArrival')}</label>
                    <input
                        className={styles['applicationForm__form__input'] + ' ' + styles['ukForm__input__for__two']}
                        name='arrive_date'
                        type='date'
                        onChange={onChange}
                        value={arrive_date}
                    />
                </div>
                <div className={styles.form__wrap}>
                    <label className={styles.ukForm__form__label} htmlFor='leave_date'>{t('Form_tripDepature')}</label>
                    <input
                        className={styles['applicationForm__form__input'] + ' ' + styles['ukForm__input__for__two']}
                        name='leave_date'
                        type='date'
                        onChange={onChange}
                        value={leave_date}
                    />
                </div>
            </div>

            {showInviterDetails ? (
                <div className={styles.input_grp}>
                    <div className={styles['input_wrap'] + ' ' + styles['input_wrap__bt'] + ' ' + styles['import__passport']}>
                        <label className={styles.ukForm__form__label} htmlFor='invitation_letter'>{t('Form_invitation')}</label>
                        <input
                            className={styles['ukForm__input__for__two'] + ' ' + styles['import__passport']}
                            name='invitation_letter'
                            type='file'
                            accept='image/*,.pdf'
                            onChange={onFileChange}
                        />
                    </div>
                </div>
            ) : null}

            <div className={styles.input_wrap}>
                <label className={styles.ukForm__form__label} htmlFor='aditional_info'>{t('Form_additional')}</label>
                <textarea
                    className={styles.applicationForm__form__textarea}
                    name='aditional_info'
                    cols='30'
                    rows='5'
                    placeholder={t('Form_additionalEx')}
                    onChange={onChange}
                    value={aditional_info}
                />
            </div>
        </>
    );
}
