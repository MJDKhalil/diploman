import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import './RequestVisaAssist.css';
import { useTranslation } from "react-i18next";

function RequestVisaAssist({ setAlert }) {

  const { t } = useTranslation();
  const navigate=useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: ''
  });

  const { name, email, phone, destination, message } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

      const onSubmit = e => {
        e.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        axios.post(`${process.env.REACT_APP_API_URL}/api/service-request/request-visa-assist/`, { name, email, phone, destination, message }, config)
        .then(res => {
            navigate('/'); 
            setAlert('Request Sent Successfuly', 'success');
        })
        .catch(err => {
            setAlert('Error with Sending Request', 'error');
        })
    };

  return (
    <div className='requestVisaAssist'>
      <div className='requestVisaAssist__bx'>
        <div  className='requestVisaAssist__form'>
         <h1 className='requestVisaAssist__title'>{t('requestVA_title')}</h1>
         <form onSubmit={e => onSubmit(e)}>
            <div className='requestVisaAssist__input_grpp'>
                <div className=''>
                    <label className='requestVisaAssist__label__to__hide' htmlFor='name'>{t('Form_name')}</label>
                    <input 
                        className='requestVisaAssist__form__input' 
                        name='name' 
                        type='text' 
                        placeholder={t('Form_name')}
                        onChange={e => onChange(e)} 
                        value={name} 
                        required 
                    />
                </div>
                <div className=''>
                    <label className='requestVisaAssist__label__to__hide' htmlFor='email'>{t('Form_email')}</label>
                    <input 
                        className='requestVisaAssist__form__input' 
                        name='email' 
                        type='email' 
                        placeholder={t('Form_email')} 
                        onChange={e => onChange(e)} 
                        value={email} 
                        required 
                    />
                </div>
            </div>
            <div className='requestVisaAssist__input_grpp'>
              <div className=''>
                  <label className='requestVisaAssist__label__to__hide' htmlFor='destination'>Destination</label>
                  <input 
                      className='requestVisaAssist__form__input' 
                      name='destination' 
                      type='text' 
                      placeholder={t('Form_destinstion')} 
                      onChange={e => onChange(e)} 
                      value={destination} 
                      required 
                  />
              </div>
              <div className=''>
                  <label className='requestVisaAssist__label__to__hide' htmlFor='phone'>Phone</label>
                  <input 
                      className='requestVisaAssist__form__input' 
                      name='phone' 
                      type='text' 
                      placeholder={t('Form_phone')} 
                      onChange={e => onChange(e)} 
                      value={phone} 
                      required 
                  />
              </div>
            </div>
            
            <div className=''>
              <label className='requestVisaAssist__label__to__hide' htmlFor='message'>Message ;</label>
              <textarea 
                  className='requestVisaAssist__form__textarea'
                  name='message'
                  cols='30'
                  rows='8'
                  placeholder={t('Form_message')} 
                  onChange={e => onChange(e)} 
                  value={message} 
              />
            </div>
            <button className='requestVisaAssist__form__button' htmltype='submit'>{t('Form_send')}</button>
         </form>
        </div>
      </div>
    </div>
  )
}

export default connect(null, { setAlert })(RequestVisaAssist); 

