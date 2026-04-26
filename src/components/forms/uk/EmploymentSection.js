import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from '../../../styles/ApplicationForm.module.css';

export default function EmploymentSection({
    formData,
    onChange,
    showJobDetails,
    setShowJobDetails,
}) {
    const { t } = useTranslation();

    const {
        work_status,
        job_title,
        starting_date,
        company_name,
        company_phone,
        salary,
        job_address,
        monthly_living_expenses,
    } = formData;

    return (
        <>
            <p className={styles.appform__section__title}>{t('Form_employmentStatus')}</p>
            <div className={styles['input_wrap'] + ' ' + styles['input__radio__group']}>
                <div className={styles['input_wrap'] + ' ' + styles['passport__input__radio']}>
                    <ul className={styles.appform__ul}>
                        <li className={styles.appform__il}>
                            <label className={styles.radio_wrap}>
                                <input
                                    type='radio'
                                    name='work_status'
                                    value='Student'
                                    className={styles.input_radio}
                                    onChange={onChange}
                                    onClick={() => setShowJobDetails(false)}
                                    checked={work_status === 'Student'}
                                />
                                <span>{t('Form_workStatus1')}</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.radio_wrap}>
                                <input
                                    type='radio'
                                    name='work_status'
                                    value='S/Employee'
                                    className={styles.input_radio}
                                    onChange={onChange}
                                    checked={work_status === 'S/Employee'}
                                    onClick={() => setShowJobDetails(!showJobDetails)}
                                />
                                <span>{t('Form_workStatus2')}</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.radio_wrap}>
                                <input
                                    type='radio'
                                    name='work_status'
                                    value='Unemployed'
                                    className={styles.input_radio}
                                    onChange={onChange}
                                    onClick={() => setShowJobDetails(false)}
                                    checked={work_status === 'Unemployed'}
                                />
                                <span>{t('Form_workStatus3')}</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            {showJobDetails ? (
                <>
                    <div className={styles.input_grp}>
                        <div className={styles.input_wrap}>
                            <label className={styles['ukForm__form__label'] + ' ' + styles['appForm__subject']} htmlFor='job_title'>{t('Form_job')}</label>
                            <input
                                className={styles['applicationForm__form__input'] + ' ' + styles['ukForm__input__for__two']}
                                name='job_title'
                                type='text'
                                placeholder={t('Form_jobEx')}
                                onChange={onChange}
                                value={job_title}
                            />
                        </div>
                        <div className={styles.input_wrap}>
                            <label className={styles.ukForm__form__label} htmlFor='starting_date'>{t('Form_startDate')}</label>
                            <input
                                className={styles['applicationForm__form__input'] + ' ' + styles['ukForm__input__for__two']}
                                name='starting_date'
                                type='date'
                                onChange={onChange}
                                value={starting_date}
                            />
                        </div>
                    </div>

                    <div className={styles.input_grp}>
                        <div className={styles.input_wrap}>
                            <label className={styles['ukForm__form__label'] + ' ' + styles['appForm__subject']} htmlFor='company_name'>{t('Form_employerName')}</label>
                            <input
                                className={styles['applicationForm__form__input'] + ' ' + styles['ukForm__input__for__two']}
                                name='company_name'
                                type='text'
                                placeholder={t('Form_employerNameEx')}
                                onChange={onChange}
                                value={company_name}
                            />
                        </div>
                        <div className={styles.input_wrap}>
                            <label className={styles.ukForm__form__label} htmlFor='company_phone'>{t('Form_employerNamePhone')}</label>
                            <input
                                className={styles['applicationForm__form__input'] + ' ' + styles['ukForm__input__for__two']}
                                name='company_phone'
                                type='text'
                                onChange={onChange}
                                value={company_phone}
                            />
                        </div>
                    </div>

                    <div className={styles.input_grp}>
                        <div className={styles.input_wrap}>
                            <label className={styles['ukForm__form__label'] + ' ' + styles['appForm__subject']} htmlFor='salary'>{t('Form_jobIncome')}</label>
                            <input
                                className={styles['applicationForm__form__input'] + ' ' + styles['ukForm__input__for__two']}
                                name='salary'
                                type='text'
                                placeholder={t('Form_jobSalary')}
                                onChange={onChange}
                                value={salary}
                            />
                        </div>
                        <div className={styles.input_wrap}>
                            <label className={styles.ukForm__form__label} htmlFor='monthly_living_expenses'>{t('Form_livingExpenses')}</label>
                            <input
                                className={styles['applicationForm__form__input'] + ' ' + styles['ukForm__input__for__two']}
                                name='monthly_living_expenses'
                                type='text'
                                placeholder={t('Form_tripExpensesEx')}
                                onChange={onChange}
                                value={monthly_living_expenses}
                            />
                        </div>
                    </div>

                    <div className={styles.input_wrap}>
                        <label className={styles['ukForm__form__label'] + ' ' + styles['appForm__subject']} htmlFor='job_address'>{t('Form_employerAddress')}</label>
                        <input
                            className={styles['applicationForm__form__input'] + ' ' + styles['input__for__one']}
                            name='job_address'
                            type='text'
                            onChange={onChange}
                            value={job_address}
                        />
                    </div>
                </>
            ) : null}
        </>
    );
}
