import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import './Contact.css';
import { useNavigate } from 'react-router-dom';
import WelcomePageFooter from '../components/WelcomePageFooter';
import { useTranslation } from "react-i18next";


const Contact = ({ setAlert }) => {

    const { t } = useTranslation();
    const navigate=useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const { name, email, subject, message } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        axios.post(`${process.env.REACT_APP_API_URL}/api/contacts/`, { name, email, subject, message }, config)
        .then(res => {
            navigate('/'); 
            setAlert('Message Sent Successfuly', 'success');
        })
        .catch(err => {
            setAlert('Error with Sending Message', 'error');
        })
    };

    return (
        <div className='contact'>
            <div className='contact__bx'>
                <Helmet>
                    <title>Diploman - Contact</title>
                    <meta
                        name='description'
                        content='Contact us'
                    />
                </Helmet>
                <div  className='contact__form'>
                <h1 className='Contactus__title'>{t('contact_title')}</h1>
                <hr className='contact__hr'/>
                <form onSubmit={e => onSubmit(e)}>
                    <div className='input_grpp'>
                        <div className='form__wrapp'>
                            <label className='contact__form__label' htmlFor='name'>Name</label>
                            <input 
                                className='contact__form__input' 
                                name='name' 
                                type='text' 
                                placeholder={t('Form_name')}
                                onChange={e => onChange(e)} 
                                value={name} 
                                required 
                            />
                        </div>
                        <div className='form__wrapp'>
                            <label className='contact__form__label' htmlFor='email'>Email</label>
                            <input 
                                className='contact__form__input' 
                                name='email' 
                                type='email' 
                                placeholder={t('Form_email')} 
                                onChange={e => onChange(e)} 
                                value={email} 
                                required 
                            />
                        </div>
                    </div>
                    <div className='form__wrapp'>
                        <label className='contact__form__label' htmlFor='subject'>Subject</label>
                        <input 
                            className='contact__form__input subject__type' 
                            name='subject' 
                            type='text' 
                            placeholder={t('contact_subjct')}
                            onChange={e => onChange(e)} 
                            value={subject} 
                            required 
                        />
                    </div>
                    <div className='form__wrapp'>
                        <label className='contact__form__label textarea__bx' htmlFor='message'>Message ;</label>
                        <textarea 
                            className='contact__form__textarea'
                            name='message'
                            cols='30'
                            rows='10'
                            placeholder={t('Form_message')}
                            onChange={e => onChange(e)} 
                            value={message} 
                        />
                    </div>
                    <button className='contact__form__button' htmltype='submit'>{t('Form_send')}</button>
                </form>
                </div>
            </div>
            <WelcomePageFooter/>
        </div>
    );
};


export default connect(null, { setAlert })(Contact);