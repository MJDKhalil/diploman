import React from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
import { useTranslation } from 'next-i18next';
import styles from '../../../styles/UsaAppForm.module.css';

export default function PassportSection({ formData, onChange, onFileChange, show, setShow }) {
    const { t } = useTranslation();
    const {
        first_name, last_name, dob, place_of_birth, pasport_number, nationality,
        passport_issue_date, passport_expiry_date, lost_passport,
        permanent_resident_in_other_country, residency_country, national_identification_number,
        showCountryOfResidence, setShowCountryOfResidence,
    } = formData;

    // derive visibility from formData for residency_country
    const showResidency = permanent_resident_in_other_country === 'Yes';

    return (
        <>
            <p className={styles.usaForm__section__title}>{t('Form_main_passport')}</p>
            <div className={styles.usaForm__input_grp}>
                <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input_wrap__bt']}>
                    <p className={styles.usaForm__text}>{t('Form_passport_info')}</p>
                    <IconButton onClick={() => setShow(true)}>
                        <ExpandMoreIcon className={styles.usaForm__expandIcon}/>
                    </IconButton>
                    <IconButton onClick={() => setShow(false)}>
                        <ExpandLessIcon className={styles.usaForm__condense}/>
                    </IconButton>
                </div>
                <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input_wrap__bt']+' '+styles['usaForm__import__passport']}>
                    <label className={styles.usaForm__form__label} htmlFor='passport_photo'>{t('Form_passport_import')}</label>
                    <input
                        className={styles['usaForm__input__for__two']+' '+styles['usaForm__import__passport']}
                        name='passport_photo'
                        type='file'
                        accept='image/*,.pdf'
                        placeholder='Import Passport'
                        onChange={onFileChange}
                    />
                </div>
            </div>
            { show?
                <>
                    <div className={styles.usaForm__input_grp}>
                        <div className={styles.usaForm__input_wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='first_name'>{t('Form_firstName')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='first_name'
                                type='text'
                                placeholder={t('Form_firstName')}
                                onChange={e => onChange(e)}
                                value={first_name}
                            />
                        </div>
                        <div className={styles.usaForm__input_wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='last_name'>{t('Form_lastName')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='last_name'
                                type='text'
                                placeholder={t('Form_lastName')}
                                onChange={e => onChange(e)}
                                value={last_name}
                            />
                        </div>
                    </div>

                    <div className={styles.usaForm__input_grp}>
                        <div className={styles.usaForm__wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='dob'>{t('Form_dob')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='dob'
                                type='date'
                                onChange={e => onChange(e)}
                                value={dob}
                            />
                        </div>
                        <div className={styles.usaForm__wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='place_of_birth'>{t('Form_pob')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='place_of_birth'
                                type='text'
                                placeholder={t('Form_pobEx')}
                                onChange={e => onChange(e)}
                                value={place_of_birth}
                            />
                        </div>
                    </div>

                    <div className={styles.usaForm__input_grp}>
                        <div className={styles.usaForm__wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='pasport_number'>{t('Form_passportNo')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='pasport_number'
                                type='text'
                                placeholder={t('Form_passportNo')}
                                onChange={e => onChange(e)}
                                value={pasport_number}
                            />
                        </div>
                        <div className={styles.usaForm__wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='nationality'>{t('Form_nationality')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='nationality'
                                type='text'
                                placeholder={t('Form_nationalityEx')}
                                onChange={e => onChange(e)}
                                value={nationality}
                            />
                        </div>
                    </div>

                    <div className={styles.usaForm__input_grp}>
                        <div className={styles.usaForm__wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='passport_issue_date'>{t('Form_pass_issueDate')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='passport_issue_date'
                                type='date'
                                onChange={e => onChange(e)}
                                value={passport_issue_date}
                            />
                        </div>
                        <div className={styles.usaForm__wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='passport_issue_date'>{t('Form_pass_expiryDate')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='passport_expiry_date'
                                type='date'
                                onChange={e => onChange(e)}
                                value={passport_expiry_date}
                            />
                        </div>
                    </div>
                </>
            :null}

            <hr className={styles.usaForm__hr}/>
            <div className={styles.usaForm__input_grp}>
               <p className={styles.usaForm__section__question} >{t('usaForm_passportLoss')}</p>
               <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio']}>
                   <ul className={styles.usaForm__ul}>
                       <li className={styles.usaForm__il}>
                           <label className={styles.usaForm__radio__wrap}>
                               <input
                                   type='radio'
                                   name='lost_passport'
                                   value='Yes'
                                   className={styles.usaForm__input__radio}
                                   onChange={e => onChange(e)}
                                   checked={lost_passport === 'Yes'}
                               />
                               <span>{t('Form_yes')}</span>
                           </label>
                       </li>
                       <li>
                           <label className={styles.usaForm__radio__wrap}>
                               <input
                                   type='radio'
                                   name='lost_passport'
                                   value='No'
                                   className={styles.usaForm__input__radio}
                                   onChange={e => onChange(e)}
                                   checked={lost_passport === 'No'}
                                   />
                               <span>{t('Form_no')}</span>
                           </label>
                       </li>
                   </ul>
               </div>
            </div>

            <hr className={styles.usaForm__hr}/>
            <p className={styles.usaForm__section__question}>{t('usaForm_residency')}</p>
            <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio__group']}>
                <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio']}>
                    <ul className={styles.usaForm__ul}>
                        <li>
                            <label className={styles.usaForm__radio__wrap}>
                                <input
                                    type='radio'
                                    name='permanent_resident_in_other_country'
                                    value='Yes'
                                    className={styles.usaForm__input__radio}
                                    onChange={e => onChange(e)}
                                    checked={permanent_resident_in_other_country === 'Yes'}
                                />
                                <span>{t('Form_yes')}</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.usaForm__radio__wrap}>
                                <input
                                    type='radio'
                                    name='permanent_resident_in_other_country'
                                    value='No'
                                    className={styles.usaForm__input__radio}
                                    onChange={e => onChange(e)}
                                    checked={permanent_resident_in_other_country === 'No'}
                                />
                                <span>{t('Form_no')}</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            { showResidency?
            <>
                <div className={styles.usaForm__wrap}>
                    <label className={styles.usaForm__form__label} htmlFor='residency_country'>{t('Form_countryName')}</label>
                    <input
                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                        name='residency_country'
                        type='text'
                        placeholder={t('Form_countryEx')}
                        onChange={e => onChange(e)}
                        value={residency_country}
                    />
                </div>
            </>
            :null}

            <hr className={styles.usaForm__hr}/>
            <div className={styles.usaForm__input_grp}>
                <div className={styles.usaForm__wrap}>
                    <label className={styles.usaForm__form__label} htmlFor='national_identification_number'>{t('Form_nationalNumber')}</label>
                    <input
                        className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                        name='national_identification_number'
                        type='text'
                        placeholder={t('Form_nationalNumberEx')}
                        onChange={e => onChange(e)}
                        value={national_identification_number}
                    />
                </div>
            </div>
        </>
    );
}
