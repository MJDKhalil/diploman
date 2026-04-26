import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from '../../../styles/UsaAppForm.module.css';

export default function SocialMediaSection({ formData, onChange, showSocialMediaSection, setShowSocialMediaSection }) {
    const { t } = useTranslation();
    const { social_media_presence, social_media_identifier } = formData;

    return (
        <>
            <hr className={styles.usaForm__hr}/>
            <div className={styles.usaForm__input_grp}>
                <p className={styles.usaForm__section__question} >{t('usaForm_socialMedia')}</p>
                <div className={styles['usaForm__input_wrap']+' '+styles['usaForm__input__radio']}>
                    <ul className={styles.usaForm__ul}>
                        <li className={styles.usaForm__il}>
                            <label className={styles.usaForm__radio__wrap}>
                                <input
                                    type='radio'
                                    name='social_media_presence'
                                    value='Yes'
                                    className={styles.usaForm__input__radio}
                                    onChange={e => onChange(e)}
                                    checked={social_media_presence === 'Yes'}
                                    onClick={() => setShowSocialMediaSection(true)}
                                />
                                <span>{t('Form_yes')}</span>
                            </label>
                        </li>
                        <li>
                            <label className={styles.usaForm__radio__wrap}>
                                <input
                                    type='radio'
                                    name='social_media_presence'
                                    value='No'
                                    className={styles.usaForm__input__radio}
                                    onChange={e => onChange(e)}
                                    checked={social_media_presence === 'No'}
                                    onClick={() => setShowSocialMediaSection(false)}
                                />
                                <span>{t('Form_no')}</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            {showSocialMediaSection?<>
                <div className={styles.usaForm__input_grp}>
                    <div className={styles.usaForm__input_wrap}>
                        <label className={styles.usaForm__form__label} htmlFor='social_media_identifier'>{t('usaForm_socialMedia_identifier')}</label>
                        <input
                            className={styles['usaForm__form__input']+' '+styles['usaForm__input__for__two']}
                            name='social_media_identifier'
                            type='text'
                            onChange={e => onChange(e)}
                            value={social_media_identifier}
                        />
                    </div>
                </div>
            </>:null}
        </>
    );
}
