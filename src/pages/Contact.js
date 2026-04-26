import React from 'react';
import Head from 'next/head';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import styles from '../styles/Contact.module.css';
import { useRouter } from 'next/router';
import WelcomePageFooter from '../components/WelcomePageFooter';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18n from '../../i18n';
import { DEMO_MODE, DEMO_ALERT_MSG } from '../utils/demo';
import useFormState from '../hooks/useFormState';


const Contact = ({ setAlert }) => {

    const { t } = useTranslation();
    const navigate = useRouter();

    const { formData, onChange } = useFormState({ name: '', email: '', subject: '', message: '' });
    const { name, email, subject, message } = formData;

    const onSubmit = e => {
        e.preventDefault();

        if (DEMO_MODE) {
            setAlert(DEMO_ALERT_MSG, 'info');
            return;
        }

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/contacts/`, { name, email, subject, message }, config)
        .then(res => {
            navigate('/'); 
            setAlert('Message Sent Successfuly', 'success');
        })
        .catch(err => {
            setAlert('Error with Sending Message', 'error');
        })
    };

    return (
        <div className={styles.contact}>
            <div className={styles.contact__bx}>
                <Head>
                    <title>Diploman - Contact</title>
                    <meta
                        name='description'
                        content='Contact us page'
                    />
                </Head>
                <div  className={styles.contact__form}>
                <h1 className={styles.contactus__title}>{t('contact_title')}</h1>
                <hr className={styles.contact__hr}/>
                <form onSubmit={e => onSubmit(e)}>
                    <div className={styles.input_grpp}>
                        <div className={styles.form__wrapp}>
                            <label className={styles.contact__form__label} htmlFor='name'>Name</label>
                            <input 
                                className={styles.contact__form__input} 
                                name='name' 
                                type='text' 
                                placeholder={t('Form_name')}
                                onChange={e => onChange(e)} 
                                value={name} 
                                required 
                            />
                        </div>
                        <div className={styles.form__wrapp}>
                            <label className={styles.contact__form__label} htmlFor='email'>Email</label>
                            <input 
                                className={styles.contact__form__input} 
                                name='email' 
                                type='email' 
                                placeholder={t('Form_email')} 
                                onChange={e => onChange(e)} 
                                value={email} 
                                required 
                            />
                        </div>
                    </div>
                    <div className={styles.form__wrapp}>
                        <label className={styles.contact__form__label} htmlFor='subject'>Subject</label>
                        <input 
                            className={styles['contact__form__input']+' '+styles['subject__type']} 
                            name='subject' 
                            type='text' 
                            placeholder={t('contact_subjct')}
                            onChange={e => onChange(e)} 
                            value={subject} 
                            required 
                        />
                    </div>
                    <div className={styles.form__wrapp}>
                        <label className={styles['contact__form__label']+' '+styles['textarea__bx']} htmlFor='message'>Message ;</label>
                        <textarea 
                            className={styles.contact__form__textarea}
                            name='message'
                            cols='30'
                            rows='10'
                            placeholder={t('Form_message')}
                            onChange={e => onChange(e)} 
                            value={message} 
                        />
                    </div>
                    <button className={styles.contact__form__button} htmltype='submit'>{t('Form_send')}</button>
                </form>
                </div>
            </div>
            <WelcomePageFooter/>
        </div>
    );
};

export const getStaticProps = async ({ locale }) => (
    { props: {
      ...(await serverSideTranslations(locale ?? 'en',
        ['common'],
        i18n,
      )),
    } }
  );

export default connect(null, { setAlert })(Contact);