import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import './RequestService.css';
import { useNavigate } from 'react-router-dom';
import WelcomePageFooter from '../components/WelcomePageFooter';
import { useTranslation } from "react-i18next";

function RequestService({ setAlert }) {

  const { t } = useTranslation();
  const navigate=useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    request: '',
    message: ''
  });

  const { name, email, phone, request, message } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();

    const config = {
      headers: {
                'Content-Type': 'application/json'
      }
    };

    axios.post(`${process.env.REACT_APP_API_URL}/api/service-request/`, { name, email, phone, request, message }, config)
      .then(res => {
          navigate('/'); 
          setAlert('Request Sent Successfuly', 'success');
      })
      .catch(err => {
          setAlert('Error with Sending Request', 'error');
      })
  };

  return (
    <div className='request__service'>
      <div className='request__service__bx'>
        <Helmet>
           <title>Diploman - Request Service</title>
           <meta
               name='description'
               content='Request Service'
           />
        </Helmet>
        <div  className='request__service__form'>
            <h1 className='request__service__title'>{t('request_title')}</h1>
            <hr className='request__service__hr'/>
            <form onSubmit={e => onSubmit(e)}>
              <div className='input_grpp'>
                  <div className='form__wrapp'>
                      <label className='request__service__form__label' htmlFor='name'>Name</label>
                      <input 
                          className='request__service__form__input' 
                          name='name' 
                          type='text' 
                          placeholder={t('Form_name')} 
                          onChange={e => onChange(e)} 
                          value={name} 
                          required 
                      />
                  </div>
                  <div className='form__wrapp'>
                      <label className='request__service__form__label' htmlFor='email'>Email</label>
                      <input 
                          className='request__service__form__input' 
                          name='email' 
                          type='email' 
                          placeholder={t('Form_email')}
                          onChange={e => onChange(e)} 
                          value={email} 
                          required 
                      />
                  </div>
              </div>
              <div className='input_grpp'>
                <div className='form__wrapp'>
                    <label className='request__service__form__label' htmlFor='request'>Request</label>
                    <input 
                        className='request__service__form__input' 
                        name='request' 
                        type='text' 
                        placeholder={t('request_text')}
                        onChange={e => onChange(e)} 
                        value={request} 
                        required 
                    />
                </div>
                <div className='form__wrapp'>
                    <label className='request__service__form__label' htmlFor='phone'>Phone</label>
                    <input 
                        className='request__service__form__input' 
                        name='phone' 
                        type='text' 
                        placeholder={t('Form_phone')} 
                        onChange={e => onChange(e)} 
                        value={phone} 
                    />
                </div>
              </div>
              <div className='form__wrapp'>
                  <label className='request__service__form__label textarea__bx' htmlFor='message'>Message ;</label>
                  <textarea 
                      className='request__service__form__textarea'
                      name='message'
                      cols='30'
                      rows='10'
                      placeholder={t('Form_message')}
                      onChange={e => onChange(e)} 
                      value={message} 
                  />
              </div>
              <button className='request__service__form__button' htmltype='submit'>{t('Form_send')}</button>
            </form>
        </div>
            </div>
            <WelcomePageFooter/>
    </div>
  );
};

export default connect(null, { setAlert })(RequestService);
