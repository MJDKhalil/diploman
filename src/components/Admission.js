import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import './Admission.css';
import { useNavigate } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from "react-i18next";

function Admission({ setAlert }) {

  const { t } = useTranslation();

  const navigate=useNavigate();
  const [showOtherSchool, setShowOtherSchool] = useState (false);
  const [showSchools, setShowSchools] = useState (false);

   //Display chosed school name
   const displaySchoolRadioValue = () => {
    var SchoolValue = document.querySelector('input[name="school"]:checked').value;
    document.getElementById("schoolRadio").innerHTML = SchoolValue;
    }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    school: '',
    other: '',
    destination: '',
    course_length: '',
    start_date: (null),
    message: ''
  });

  const { name, email, phone, school, other, destination, course_length, start_date, message } = formData;
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();

    let dataForm = new FormData();
      dataForm.append('name',name)
      dataForm.append('email',email)
      dataForm.append('phone',phone)
      dataForm.append('school',school)
      dataForm.append('other',other)
      dataForm.append('destination',destination)
      dataForm.append('course_length',course_length)
      dataForm.append('message',message)

      if(start_date !== null) {
        dataForm.append('start_date', start_date)
      }

    await axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_URL}/api/service-request/admission/`,
      data: dataForm,
      headers: {
          'Content-Type': 'multipart/form-data' 
      }
    })
    .then(res => {
          navigate('/'); 
          setAlert(t('alert_recquest_sent'), 'success');
    })
    .catch(err => {
        setAlert(t('alert_request_err'), 'error');
    })
  };

  return (
    <div className='request__admission'>
      <div className='request__admission__bx'>
        <div  className='request__admission__form'>
         <h1 className='request__admission__title'>{t('admissionForm_request')}</h1>
         <form onSubmit={e => onSubmit(e)}>
            <div className='request__admission__input_grpp'>
              <div className='form__wrapp'>
                  <label className='request__admission__form__label admission__label__to__hide' htmlFor='name'>Name</label>
                  <input 
                      className='request__admission__form__input' 
                      name='name' 
                      type='text' 
                      placeholder={t('Form_name')}
                      onChange={e => onChange(e)} 
                      value={name} 
                      required 
                  />
              </div>
              <div className='form__wrapp'>
                  <label className='request__admission__form__label admission__label__to__hide' htmlFor='email'>Email</label>
                  <input 
                      className='request__admission__form__input' 
                      name='email' 
                      type='email' 
                      placeholder={t('Form_email')} 
                      onChange={e => onChange(e)} 
                      value={email} 
                      required 
                  />
              </div>
            </div>

            <div className='request__admission__input_grpp'>
              <div className=''>
                <div className='request__admission__selectBx'>
                  <div onClick={()=> setShowSchools(!showSchools)} className='request__admission__selected' id="schoolRadio">{t('admissionForm_select')}<ExpandMoreIcon className='request__admission__expand'/></div>
                    { showSchools?<>
                      <div className='request__admission__option__container '>
                      <div className='request__admission__option'>
                            <label className='request__admission__box__label'>
                                <input
                                  type='radio'
                                  name='school' 
                                  value='France Langue (FR)' 
                                  className='request__admission__input__radio' 
                                  onChange={e => onChange(e)}
                                  checked={school === 'France Langue (FR)'}
                                  onClick={()=> {
                                    setShowSchools(false)
                                    displaySchoolRadioValue()
                                    setShowOtherSchool(false)
                                  }}
                                />
                                <span>France Langue (FR)</span>
                            </label>
                          </div>
                          <div className='request__admission__option'>
                            <label className='request__admission__box__label'>
                                <input
                                  type='radio'
                                  name='school' 
                                  value='ACE (Malta)' 
                                  className='request__admission__input__radio' 
                                  onChange={e => onChange(e)}
                                  checked={school === 'ACE (Malta)'}
                                  onClick={()=> {
                                    setShowSchools(false)
                                    displaySchoolRadioValue()
                                    setShowOtherSchool(false)
                                  }}
                                />
                                <span>ACE (Malta)</span>
                            </label>
                          </div>
                          <div className='request__admission__option'>
                            <label className='request__admission__box__label'>
                                <input
                                  type='radio'
                                  name='school' 
                                  value='GSE (Malta)' 
                                  className='request__admission__input__radio' 
                                  onChange={e => onChange(e)}
                                  checked={school === 'GSE (Malta)'}
                                  onClick={()=> {
                                    setShowSchools(false)
                                    displaySchoolRadioValue()
                                    setShowOtherSchool(false)
                                  }}
                                />
                                <span>GSE (Malta)</span>
                            </label>
                          </div>
                          <div className='request__admission__option'>
                            <label className='request__admission__box__label'>
                              <input 
                                type='radio'
                                name='school'
                                value='EC (USA & all)'
                                className='request__admission__input__radio'
                                onChange={e => onChange(e)}
                                checked={school === 'EC (USA & all)'}
                                onClick={()=> {
                                  setShowSchools(false)
                                  displaySchoolRadioValue()
                                  setShowOtherSchool(false)
                                }}
                              />
                              <span>EC (USA & all)</span>
                            </label>
                          </div>
                          <div className='request__admission__option'>
                            <label className='request__admission__box__label'>
                              <input
                                  type='radio'
                                  name='school'
                                  value='WCG (UK)'
                                  className='request__admission__input__radio'
                                  onChange={e => onChange(e)}
                                  checked={school === 'WCG (UK)'}
                                  onClick={()=> {
                                    setShowSchools(false)
                                    displaySchoolRadioValue()
                                    setShowOtherSchool(false)
                                  }}
                              />
                              <span>WCG (UK)</span>
                            </label>
                          </div>
                          <div className='request__admission__option'>
                            <label className='request__admission__box__label'>
                              <input
                                  type='radio'
                                  name='school'
                                  value='California Kl (MY)'
                                  className='request__admission__input__radio'
                                  onChange={e => onChange(e)}
                                  checked={school === 'California Kl (MY)'}
                                  onClick={()=> {
                                    setShowSchools(false)
                                    displaySchoolRadioValue()
                                    setShowOtherSchool(false)
                                  }}
                              />
                              <span>California Kl (MY)</span>
                            </label>
                          </div>
                          <div className='request__admission__option'>
                            <label className='request__admission__box__label'>
                              <input
                                  type='radio'
                                  name='school'
                                  value='Elec (MY)'
                                  className='request__admission__input__radio'
                                  onChange={e => onChange(e)}
                                  checked={school === 'Elec (Maylasia)'}
                                  onClick={()=> {
                                    setShowSchools(false)
                                    displaySchoolRadioValue()
                                    setShowOtherSchool(false)
                                  }}
                              />
                              <span>Elec (Maylasia)</span>
                            </label>
                          </div>
                          <div className='request__admission__option'>
                            <label className='request__admission__box__label'>
                              <input
                                  type='radio'
                                  name='school'
                                  value='Other'
                                  className='request__admission__input__radio'
                                  onChange={e => onChange(e)}
                                  checked={school === 'Other'}
                                  onClick={()=> {
                                    setShowSchools(false)
                                    displaySchoolRadioValue()
                                    setShowOtherSchool(true)
                                  }}
                              />
                              <span>{t('admissionForm_otherSchool')}</span>
                            </label>
                          </div>
                        </div>
                    </>:null}
                  </div>
              </div>

              
              <div className='form__wrapp'>
                  <label className='request__admission__form__label admission__label__to__hide' htmlFor='phone'>Phone</label>
                  <input 
                      className='request__admission__form__input' 
                      name='phone' 
                      type='text' 
                      placeholder={t('Form_phone')}
                      onChange={e => onChange(e)} 
                      value={phone} 
                      required 
                  />
              </div>
            </div>
            <div className='request__admission__input_grpp'>
              <div className='request__admission__form__wrapp'>
                  <label className='request__admission__form__label' htmlFor='course_length'>{t('admissionForm_CourseLength')}</label>
                  <input 
                      className='request__admission__form__input' 
                      name='course_length' 
                      type='text' 
                      placeholder={t('admissionForm_course')} 
                      onChange={e => onChange(e)} 
                      value={course_length} 
                  />
              </div>
              <div className='form__wrapp'>
                  <label className='request__admission__form__label' htmlFor='start_date'>{t('admissionForm_startDate')}</label>
                  <input 
                      className='request__admission__form__input' 
                      name='start_date' 
                      type='date' 
                      onChange={e => onChange(e)} 
                      value={start_date} 
                  />
              </div>
            </div>
            <div className='request__admission__input_grpp'>
              <div className='form__wrapp'>
                <label className='request__admission__form__label admission__label__to__hide' htmlFor='destination'>{t('admissionForm_destinstion')}</label>
                <input 
                  className='request__admission__form__input' 
                  name='destination' 
                  type='text' 
                  placeholder={t('Form_destinstion')}
                  onChange={e => onChange(e)} 
                  value={destination} 
                  required 
                />
              </div>
              { showOtherSchool? <>
                <div className='form__wrapp'>
                  <label className='request__admission__form__label admission__label__to__hide' htmlFor='destination'>Destination</label>
                  <input 
                    className='request__admission__form__input' 
                    name='other' 
                    type='text' 
                    placeholder={t('admissionForm_school')}
                    onChange={e => onChange(e)} 
                    value={other} 
                    required 
                  />
                </div>
              </> :null}
            </div>
            <div className='form__wrapp'>
              <label className='admission__label__to__hide' htmlFor='message'>Message ;</label>
              <textarea 
                  className='request__admission__form__textarea'
                  name='message'
                  cols='30'
                  rows='3'
                  placeholder={t('Form_message')}
                  onChange={e => onChange(e)} 
                  value={message} 
              />
            </div>
            <button className='request__admission__form__button' htmltype='submit'>{t('Form_send')}</button>
         </form>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { setAlert })(Admission); 
