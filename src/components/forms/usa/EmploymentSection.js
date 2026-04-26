import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from '../../../styles/UsaAppForm.module.css';

export default function EmploymentSection({ formData, onChange, showJobDetails, setShowJobDetails }) {
    const { t } = useTranslation();
    const {
        work_status, job_title, starting_date, company_name, company_phone,
        salary, job_address, job_desc,
    } = formData;

    return (
        <>
            <hr className={styles.usaForm__hr}/>
            <p className={styles.usaForm__2ndSection__title}>{t('Form_employmentStatus')}</p>
            <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio__group']}>
                <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio']}>
                    <ul className={styles.usaForm__ul}>
                        <li className={styles.usaForm__il}>
                            <label className={styles.usaForm__radio__wrap}>
                                <input
                                    type="radio"
                                    name="work_status"
                                    value='Student'
                                    className={styles.usaForm__input__radio}
                                    onChange={e => onChange(e)}
                                    onClick={() => setShowJobDetails(false)}
                                    checked={work_status === 'Student'}
                                />
                                <span>{t('Form_workStatus1')}</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.usaForm__radio__wrap}>
                                <input
                                    type="radio"
                                    name="work_status"
                                    value='S/Employee'
                                    className={styles.usaForm__input__radio}
                                    onChange={e => onChange(e)}
                                    checked={work_status === 'S/Employee'}
                                    onClick={() => setShowJobDetails(!showJobDetails)}
                                />
                                <span>{t('Form_workStatus2')}</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.usaForm__radio__wrap}>
                                <input
                                    type="radio"
                                    name="work_status"
                                    value='Unemployed'
                                    className={styles.usaForm__input__radio}
                                    onChange={e => onChange(e)}
                                    onClick={() => setShowJobDetails(false)}
                                    checked={work_status === 'Unemployed'}
                                />
                                <span>{t('Form_workStatus3')}</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            { showJobDetails?
                <>
                    <div className={styles.usaForm__input_grp}>
                        <div className={styles.usaForm__input_wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='first_name'>{t('Form_job')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='job_title'
                                type='text'
                                placeholder={t('Form_jobEx')}
                                onChange={e => onChange(e)}
                                value={job_title}
                            />
                        </div>
                        <div className={styles.usaForm__input_wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='last_name'>{t('Form_startDate')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='starting_date'
                                type='date'
                                onChange={e => onChange(e)}
                                value={starting_date}
                            />
                        </div>
                    </div>

                    <div className={styles.usaForm__input_grp}>
                        <div className={styles.usaForm__input_wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='company_name'>{t('Form_employerName')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='company_name'
                                type='text'
                                placeholder={t('Form_employerNameEx')}
                                onChange={e => onChange(e)}
                                value={company_name}
                            />
                        </div>
                        <div className={styles.usaForm__input_wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='company_phone'>{t('Form_employerNamePhone')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='company_phone'
                                type='text'
                                onChange={e => onChange(e)}
                                value={company_phone}
                            />
                        </div>
                    </div>

                    <div className={styles.usaForm__input_grp}>
                        <div className={styles.usaForm__input_wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='salary'>{t('Form_jobIncome')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='salary'
                                type='text'
                                placeholder={t('Form_jobSalary')}
                                onChange={e => onChange(e)}
                                value={salary}
                            />
                        </div>
                        <div className={styles.usaForm__input_wrap}>
                            <label className={styles.usaForm__form__label} htmlFor='salary'>{t('Form_employerAddress')}</label>
                            <input
                                className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                                name='job_address'
                                type='text'
                                onChange={e => onChange(e)}
                                value={job_address}
                            />
                        </div>
                    </div>
                    <div className={styles.usaForm__input_wrap}>
                        <label className={styles.usaForm__form__label} htmlFor='message'>{t('Form_jobDesc')}</label>
                        <textarea
                            className={styles.usaForm__form__textarea}
                            name='job_desc'
                            cols='30'
                            rows='2'
                            onChange={e => onChange(e)}
                            value={job_desc}
                        />
                    </div>
                </>
            :null}
        </>
    );
}
