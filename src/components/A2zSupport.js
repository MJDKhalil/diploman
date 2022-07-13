import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import './A2zSupport.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function A2zSupport({ setAlert }) {

  const { t } = useTranslation();

  const navigate=useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const { name, email, phone, message } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();

    const config = {
      headers: {
                'Content-Type': 'application/json'
      }
    };

    axios.post(`${process.env.REACT_APP_API_URL}/api/service-request/prem-request/`, { name, email, phone, message }, config)
      .then(res => {
          navigate('/'); 
          setAlert('Request Sent Successfuly', 'success');
      })
      .catch(err => {
          setAlert('Error with Sending Request', 'error');
      })
  };

  return (
    <div className='a2zSupport'>
      <div className='a2zSupport__bx'>
        <Helmet>
            <title>Diploman - Request Premuim Support</title>
            <meta
              name='description'
              content='premuim support'
            />
        </Helmet>
        <div  className='a2zSupport__form'>
          <h1 className='a2zSupport__title'>{t('premform_title')}</h1>
          <hr className='a2zSupport__hr'/>
          <form onSubmit={e => onSubmit(e)}>
              <div className='input_grpp'>
                  <div className='form__wrapp'>
                      <label className='a2zSupport__form__label' htmlFor='name'>Name</label>
                      <input 
                          className='a2zSupport__form__input input__for__two' 
                          name='name' 
                          type='text' 
                          placeholder={t('Form_name')}
                          onChange={e => onChange(e)} 
                          value={name} 
                          required 
                      />
                  </div>
                  <div className='form__wrapp'>
                    <label className='a2zSupport__form__label' htmlFor='phone'>Phone</label>
                    <input 
                        className='a2zSupport__form__input input__for__two' 
                        name='phone' 
                        type='text' 
                        placeholder={t('Form_phone')}
                        onChange={e => onChange(e)} 
                        value={phone} 
                    />
                </div>
              </div>
              <div className='form__wrapp'>
                <label className='a2zSupport__form__label' htmlFor='email'>Email</label>
                <input 
                    className='a2zSupport__form__input input__for__one' 
                    name='email' 
                    type='email' 
                    placeholder={t('Form_email')}
                    onChange={e => onChange(e)} 
                    value={email} 
                    required 
                />
              </div>
              <div className='form__wrapp'>
                  <label className='a2zSupport__form__label textarea__bx' htmlFor='message'>Message ;</label>
                  <textarea 
                      className='a2zSupport__form__textarea'
                      name='message'
                      cols='30'
                      rows='5'
                      placeholder={t('Form_message')}
                      onChange={e => onChange(e)} 
                      value={message} 
                  />
              </div>
              <button className='a2zSupport__form__button' htmltype='submit'>{t('Form_send')}</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default connect(null, { setAlert })(A2zSupport);