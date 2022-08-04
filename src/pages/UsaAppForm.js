import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import './UsaAppForm.css';
import { useNavigate } from 'react-router-dom';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
import { useTranslation } from "react-i18next";

function UsaAppForm({ setAlert }) {
    const { t } = useTranslation();
    const [show, setShow] = useState (false);
    const [showJobDetails, setShowJobDetails] = useState (false);
    const [showPurpose, setShowPurpose] = useState (false);
    const [showMaritialStatus, setShowMaritialStatus] = useState (false);
    const [showMaritialSection, setShowMaritialSection] = useState (false);
    const [showSpousSection, setShowSpousSection] = useState (false);
    const [showSchoolDetails, setShowSchoolDetails] = useState (false);
    const [showInviterDetails, setShowInviterDetails] = useState (false);
    const [showMedicalDetails, setShowMedicalDetails] = useState (false);
    const [showOtherTripDetails, setShowOtherTripDetails] = useState (false);
 
    const [showRefusalSection, setShowRefusalSection] = useState (false);
    const [showTripsSection, setShowTripsSection] = useState (false);
    const [showUsaTripsSection, setShowUsaTripsSection] = useState (false);
    const [showUsaIssuedVisa, setShowUsaIssuedVisa] = useState (false);
    const [showCountryOfResidence, setShowCountryOfResidencea] = useState (false);

    const [showUsaVisit2, setShowUsaVisit2] = useState (false);
    const [showUsaVisit3, setShowUsaVisit3] = useState (false);
    const [showUsaVisit4, setShowUsaVisit4] = useState (false);
    const [showUsaVisit5, setShowUsaVisit5] = useState (false);
    const [showUsaVisit6, setShowUsaVisit6] = useState (false);
    const [showUsaVisit7, setShowUsaVisit7] = useState (false);

    const [showCountryVisit2, setShowCountryVisit2] = useState (false);
    const [showCountryVisit3, setShowCountryVisit3] = useState (false);
    const [showCountryVisit4, setShowCountryVisit4] = useState (false);
    const [showCountryVisit5, setShowCountryVisit5] = useState (false);
    const [showCountryVisit6, setShowCountryVisit6] = useState (false);
    const [showCountryVisit7, setShowCountryVisit7] = useState (false);

    const [showFamilyAbroadSection, setShowFamilyAbroadSection] = useState (false);
    const [showRelativeAbroad2, setShowRelativeAbroad2] = useState (false);
    const [showRelativeAbroad3, setShowRelativeAbroad3] = useState (false);
    const [showRelativeAbroad4, setShowRelativeAbroad4] = useState (false);
    const [showRelativeAbroad5, setShowRelativeAbroad5] = useState (false);

    const [showNoOfCompanions, setShowNoOfCompanions] = useState (false);
    const [showCompanionSection2, setShowCompanionSection2] = useState (false);
    const [showCompanionSection3, setShowCompanionSection3] = useState (false);
    const [showCompanionSection4, setShowCompanionSection4] = useState (false);
    const [showCompanionSection5, setShowCompanionSection5] = useState (false);

    const [showSocialMediaSection, setShowSocialMediaSection] = useState (false);
    const [showEducation1Section, setShowEducation1Section] = useState (false);
    const [showEducation2Section, setShowEducation2Section] = useState (false);

    //get the value of radion and display in div
    const displayRadioValue = () => {
    var checkboxValue = document.querySelector('input[name="purpose_of_trip"]:checked').value;
    document.getElementById("myRadioCheck").innerHTML = checkboxValue;
    }
    //get the value of radion and display in div

    //Maritial Status display
    const displayMaritialRadioValue = () => {
        var MaritialStatusValue = document.querySelector('input[name="maritial_status"]:checked').value;
        document.getElementById("maritialStatusRadio").innerHTML = MaritialStatusValue;
        }
    //End of Maritial Status display

    const navigate=useNavigate();

    const [formData, setFormData] = useState({
        email: '', pasport_number: '', first_name: '', last_name: '', dob: (null), place_of_birth: '', phone: '', nationality: '', passport_issue_date: (null), passport_expiry_date: (null), address: '', passport_photo: (null), lost_passport: 'No', permanent_resident_in_other_country: 'No', residency_country: '', national_identification_number: '', person_paying_for_trip: '', aditional_info: '', purpose_of_trip: '', work_status: 'Student', job_title: '', job_address: '', starting_date: (null), company_name: '', company_phone: '', salary: '', job_desc: '', arrive_date: (null), length_of_stay: '', companion1_first_name: '', companion1_last_name: '', companion1_relationship: '', companion2_first_name: '', companion2_last_name: '', companion2_relationship: '', companion3_first_name: '', companion3_last_name: '', companion3_relationship: '', companion4_first_name: '', companion4_last_name: '', companion4_relationship: '', companion5_first_name: '', companion5_last_name: '', companion5_relationship: '', maritial_status: '', spouse_first_name: '', spouse_last_name: '', spouse_dob: (null), spouse_nationality: '', spouse_passport_photo: (null), spouse_pasport_number: '', spouse_city_of_birth: '', school_name: '', admission_offer_photo: (null), inviter_full_name: '', inviter_email: '', inviter_address: '', invitation_letter: (null), medical_invitation_letter: (null), medical_details: '', hospital_name: '', other_travel_reason: '', father_first_name: '', father_last_name: '', father_dob: (null), father_nationality: '', father_city_of_birth: '', mother_first_name: '', mother_last_name: '', mother_dob: (null), mother_nationality: '', mother_city_of_birth: '', visa_lost: 'No', visa_cancelled: 'No', visa_refusl: 'No', country_of_refusal: '', visa_refusal_date: (null), visa_refusal_desc: '', visited_other_countries: 'No', visted_country: '', number_of_visits: '1', visted_country2: '', visted_country3: '', visted_country4: '', visted_country5: '', visted_country6: '', visted_country7: '', visited_usa: 'No', number_of_usa_visits: '1', usa_visit_arrival_date: '', period_of_usa_stay: '', usa_visit_arrival_date2: '', period_of_usa_stay2: '', usa_visit_arrival_date3: '', period_of_usa_stay3: '', usa_visit_arrival_date4: '', period_of_usa_stay4: '', usa_visit_arrival_date5: '', period_of_usa_stay5: '', usa_visit_arrival_date6: '', period_of_usa_stay6: '', usa_visit_arrival_date7: '', period_of_usa_stay7: '', usa_driving_license: 'No', obtained_usa_visa: 'No', made_finger_prints: 'No', usa_visa_issue_date: '', usa_visa_no: '', family_in_usa: 'No', number_of_relatives: '1', relative1_first_name: '', relative1_last_name: '', relative1_status: '', relative1_relationship: '', relative2_first_name: '', relative2_last_name: '', relative2_status: '', relative2_relationship: '', relative3_first_name: '', relative3_last_name: '', relative3_status: '', relative3_relationship: '',relative4_first_name: '', relative4_last_name: '', relative4_status: '', relative4_relationship: '', relative5_first_name: '', relative5_last_name: '', relative5_status: '', relative5_relationship: '', social_media_presence: 'No', social_media_identifier: '', secoondary_or_high_education1: 'No', institute_name1: '', institute_address1: '', course_name1: '', course_start_date1: (null), course_end_date1: (null), secoondary_or_high_education2: 'No', institute_name2: '', institute_address2: '', course_name2: '', course_start_date2: (null), course_end_date2: (null), travelling_alone: 'No', number_of_companions: '1', reference1_first_name: '', reference1_last_name: '', reference1_address: '', reference1_phone: '', reference2_first_name: '', reference2_last_name: '', reference2_address: '', reference2_phone: ''
    });

    const { email, pasport_number, first_name, last_name, dob, place_of_birth, phone, nationality, passport_issue_date, passport_expiry_date, address, passport_photo, lost_passport, permanent_resident_in_other_country, residency_country, national_identification_number, person_paying_for_trip, aditional_info, purpose_of_trip, work_status, job_title, job_address, starting_date, company_name, company_phone, salary, job_desc, arrive_date, length_of_stay, companion1_first_name, companion1_last_name, companion1_relationship, companion2_first_name, companion2_last_name, companion2_relationship, companion3_first_name, companion3_last_name, companion3_relationship, companion4_first_name, companion4_last_name, companion4_relationship, companion5_first_name, companion5_last_name, companion5_relationship, maritial_status, spouse_first_name, spouse_last_name, spouse_dob, spouse_nationality, spouse_passport_photo, spouse_pasport_number, spouse_city_of_birth, school_name, admission_offer_photo, inviter_full_name, inviter_email, inviter_address, invitation_letter, medical_invitation_letter, medical_details, hospital_name, other_travel_reason, father_first_name, father_last_name, father_dob, father_nationality, father_city_of_birth, mother_first_name, mother_last_name, mother_dob, mother_nationality, mother_city_of_birth, visa_lost, visa_cancelled, visa_refusl, country_of_refusal, visa_refusal_date, visa_refusal_desc, visited_other_countries, visted_country, number_of_visits, visted_country2, visted_country3, visted_country4, visted_country5, visted_country6, visted_country7, visited_usa, number_of_usa_visits, usa_visit_arrival_date, period_of_usa_stay, usa_visit_arrival_date2, period_of_usa_stay2, usa_visit_arrival_date3, period_of_usa_stay3, usa_visit_arrival_date4, period_of_usa_stay4, usa_visit_arrival_date5, period_of_usa_stay5, usa_visit_arrival_date6, period_of_usa_stay6, usa_visit_arrival_date7, period_of_usa_stay7, usa_driving_license, obtained_usa_visa, made_finger_prints, usa_visa_issue_date, usa_visa_no, family_in_usa, number_of_relatives, relative1_first_name, relative1_last_name, relative1_status, relative1_relationship, relative2_first_name, relative2_last_name, relative2_status, relative2_relationship, relative3_first_name, relative3_last_name, relative3_status, relative3_relationship, relative4_first_name, relative4_last_name, relative4_status, relative4_relationship, relative5_first_name, relative5_last_name, relative5_status, relative5_relationship, social_media_presence, social_media_identifier, secoondary_or_high_education1, institute_name1, institute_address1, course_name1, course_start_date1, course_end_date1, secoondary_or_high_education2, institute_name2, institute_address2, course_name2, course_start_date2, course_end_date2, travelling_alone, number_of_companions, reference1_first_name, reference1_last_name, reference1_address, reference1_phone, reference2_first_name, reference2_last_name, reference2_address, reference2_phone } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();

      let dataForm = new FormData();

        dataForm.append('pasport_number',pasport_number)
        dataForm.append('email',email)
        dataForm.append('first_name',first_name)
        dataForm.append('last_name',last_name)
        dataForm.append('place_of_birth',place_of_birth)
        dataForm.append('phone',phone)
        dataForm.append('nationality',nationality)
        dataForm.append('address',address)
        dataForm.append('national_identification_number',national_identification_number)
        dataForm.append('aditional_info',aditional_info)  
        dataForm.append('purpose_of_trip',purpose_of_trip)
        dataForm.append('person_paying_for_trip',person_paying_for_trip)
        dataForm.append('work_status',work_status)
        dataForm.append('job_title',job_title)
        dataForm.append('job_address',job_address)
        dataForm.append('company_name',company_name)
        dataForm.append('company_phone',company_phone)
        dataForm.append('salary',salary)
        dataForm.append('job_desc',job_desc)
        dataForm.append('maritial_status',maritial_status)
        dataForm.append('spouse_first_name',spouse_first_name)
        dataForm.append('spouse_last_name',spouse_last_name)
        dataForm.append('spouse_nationality',spouse_nationality)
        dataForm.append('spouse_pasport_number',spouse_pasport_number)
        dataForm.append('spouse_city_of_birth',spouse_city_of_birth)
        dataForm.append('school_name',school_name)
        dataForm.append('inviter_full_name',inviter_full_name)
        dataForm.append('inviter_email',inviter_email)
        dataForm.append('inviter_address',inviter_address)
        dataForm.append('medical_details',medical_details)
        dataForm.append('hospital_name',hospital_name)
        dataForm.append('other_travel_reason', other_travel_reason)
        dataForm.append('father_first_name',father_first_name)
        dataForm.append('father_last_name',father_last_name)
        dataForm.append('father_nationality',father_nationality)
        dataForm.append('father_city_of_birth',father_city_of_birth)
        dataForm.append('mother_first_name',mother_first_name)
        dataForm.append('mother_last_name',mother_last_name)
        dataForm.append('mother_nationality',mother_nationality)
        dataForm.append('mother_city_of_birth',mother_city_of_birth)

        dataForm.append('lost_passport',lost_passport)
        dataForm.append('permanent_resident_in_other_country',permanent_resident_in_other_country)
        dataForm.append('residency_country',residency_country)

        dataForm.append('visited_other_countries',visited_other_countries)
        dataForm.append('visted_country',visted_country)
        dataForm.append('visted_country2',visted_country2)
        dataForm.append('visted_country3',visted_country)
        dataForm.append('visted_country4',visted_country)
        dataForm.append('visted_country5',visted_country)
        dataForm.append('visted_country6',visted_country)
        dataForm.append('visted_country7',visted_country)

        dataForm.append('visa_refusl',visa_refusl)
        dataForm.append('country_of_refusal',country_of_refusal)
        dataForm.append('visa_refusal_desc',visa_refusal_desc)

        dataForm.append('visited_usa',visited_usa)
        dataForm.append('number_of_usa_visits',number_of_usa_visits)
        dataForm.append('usa_driving_license',usa_driving_license)
        dataForm.append('obtained_usa_visa',obtained_usa_visa)
        dataForm.append('made_finger_prints',made_finger_prints)
        dataForm.append('visa_lost',visa_lost)
        dataForm.append('usa_visa_no',usa_visa_no)
        dataForm.append('visa_cancelled',visa_cancelled)
        dataForm.append('usa_visa_issue_date',usa_visa_issue_date)

        dataForm.append('length_of_stay',length_of_stay)

        dataForm.append('usa_visit_arrival_date',usa_visit_arrival_date)
        dataForm.append('period_of_usa_stay',period_of_usa_stay)

        dataForm.append('usa_visit_arrival_date2',usa_visit_arrival_date2)
        dataForm.append('period_of_usa_stay2',period_of_usa_stay2)

        dataForm.append('usa_visit_arrival_date3',usa_visit_arrival_date3)
        dataForm.append('period_of_usa_stay3',period_of_usa_stay3)

        dataForm.append('usa_visit_arrival_date4',usa_visit_arrival_date4)
        dataForm.append('period_of_usa_stay4',period_of_usa_stay4)

        dataForm.append('usa_visit_arrival_date5',usa_visit_arrival_date5)
        dataForm.append('period_of_usa_stay5',period_of_usa_stay5)

        dataForm.append('usa_visit_arrival_date6',usa_visit_arrival_date6)
        dataForm.append('period_of_usa_stay6',period_of_usa_stay6)

        dataForm.append('usa_visit_arrival_date7',usa_visit_arrival_date7)
        dataForm.append('period_of_usa_stay7',period_of_usa_stay7)

        dataForm.append('family_in_usa',family_in_usa)
        dataForm.append('number_of_relatives',number_of_relatives)

        dataForm.append('relative1_first_name',relative1_first_name)
        dataForm.append('relative1_last_name',relative1_last_name)
        dataForm.append('relative1_status',relative1_status)
        dataForm.append('relative1_relationship',relative1_relationship)

        dataForm.append('relative2_first_name',relative2_first_name)
        dataForm.append('relative2_last_name',relative2_last_name)
        dataForm.append('relative2_status',relative2_status)
        dataForm.append('relative2_relationship',relative2_relationship)

        dataForm.append('relative3_first_name',relative3_first_name)
        dataForm.append('relative3_last_name',relative3_last_name)
        dataForm.append('relative3_status',relative3_status)
        dataForm.append('relative3_relationship',relative3_relationship)

        dataForm.append('relative4_first_name',relative4_first_name)
        dataForm.append('relative4_last_name',relative4_last_name)
        dataForm.append('relative4_status',relative4_status)
        dataForm.append('relative4_relationship',relative4_relationship)

        dataForm.append('relative5_first_name',relative5_first_name)
        dataForm.append('relative5_last_name',relative5_last_name)
        dataForm.append('relative5_status',relative5_status)
        dataForm.append('relative5_relationship',relative5_relationship)

        dataForm.append('travelling_alone',travelling_alone)
        dataForm.append('number_of_companions',number_of_companions)
        dataForm.append('companion1_first_name',companion1_first_name)
        dataForm.append('companion1_last_name',companion1_last_name)
        dataForm.append('companion1_relationship',companion1_relationship)

        dataForm.append('companion2_first_name',companion2_first_name)
        dataForm.append('companion2_last_name',companion2_last_name)
        dataForm.append('companion2_relationship',companion2_relationship)

        dataForm.append('companion3_first_name',companion3_first_name)
        dataForm.append('companion3_last_name',companion3_last_name)
        dataForm.append('companion3_relationship',companion3_relationship)

        dataForm.append('companion4_first_name',companion4_first_name)
        dataForm.append('companion4_last_name',companion4_last_name)
        dataForm.append('companion4_relationship',companion4_relationship)

        dataForm.append('companion5_first_name',companion5_first_name)
        dataForm.append('companion5_last_name',companion5_last_name)
        dataForm.append('companion5_relationship',companion5_relationship)

        dataForm.append('social_media_presence',social_media_presence)
        dataForm.append('social_media_identifier',social_media_identifier)

        dataForm.append('secoondary_or_high_education1',secoondary_or_high_education1)
        dataForm.append('institute_name1',institute_name1)
        dataForm.append('institute_address1',institute_address1)
        dataForm.append('course_name1',course_name1)

        dataForm.append('secoondary_or_high_education2',secoondary_or_high_education2)
        dataForm.append('institute_name2',institute_name2)
        dataForm.append('institute_address2',institute_address2)
        dataForm.append('course_name2',course_name2)

        
        if(passport_photo !== null) {
            dataForm.append('passport_photo', passport_photo)
        }
        if(dob !== null) {
            dataForm.append('dob', dob)
        }
        if(passport_issue_date !== null) {
            dataForm.append('passport_issue_date', passport_issue_date)
        }
        if(passport_expiry_date !== null) {
            dataForm.append('passport_expiry_date', passport_expiry_date)
        }
        if(starting_date !== null) {
            dataForm.append('starting_date', starting_date)
        }
        if(arrive_date !== null) {
            dataForm.append('arrive_date', arrive_date)
        }
        if(spouse_dob !== null) {
            dataForm.append('spouse_dob', spouse_dob)
        }
        if(spouse_passport_photo !== null) {
            dataForm.append('spouse_passport_photo', spouse_passport_photo)
        }
        if(admission_offer_photo !== null) {
            dataForm.append('admission_offer_photo', admission_offer_photo)
        }
        if(invitation_letter !== null) {
            dataForm.append('invitation_letter', invitation_letter)
        }
        if(medical_invitation_letter !== null) {
            dataForm.append('medical_invitation_letter', medical_invitation_letter)
        }
        if(father_dob !== null) {
            dataForm.append('father_dob', father_dob)
        }
        if(mother_dob !== null) {
            dataForm.append('mother_dob', mother_dob)
        }
        if(visa_refusal_date !== null) {
            dataForm.append('visa_refusal_date', visa_refusal_date)
        }
        if(passport_photo !== null) {
            dataForm.append('course_start_date1', course_start_date1)
        }
        if(passport_photo !== null) {
            dataForm.append('course_end_date1', course_end_date1)
        }
        if(passport_photo !== null) {
            dataForm.append('course_start_date2', course_start_date2)
        }
        if(passport_photo !== null) {
            dataForm.append('course_end_date2', course_end_date2)
        }


    await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/api/application-form/usa-form/`,
        data: dataForm,
        headers: {
            'Content-Type': 'multipart/form-data' 
        }

    })
      .then(res => {
            navigate('/'); 
            setAlert(t('alert_form_sent'), 'success');
      })
      .catch(err => {
          setAlert(t('alert_form_err'), 'error');
      })
  };

  return (
        <div className='usaForm'>
            <div className='usaForm__wrapper'>
                <Helmet>
                    <title>Diploman - USA Form</title>
                    <meta
                        name='description'
                        content='USA Form page'
                    />
                </Helmet>
                <div className='usaForm__inner__wrapper'>
                    <h1 className='usaForm__title'>{t('usaForm_title')}</h1>
                    <hr className='usaForm__hr'/>
                    <form className='usaForm__form' onSubmit={e => onSubmit(e)}>
                        <div className='usaForm__wrap'>
                            <div className='usaForm__input_grp'>
                                <div className='usaForm__wrap'>
                                    <label className='usaForm__form__label' htmlFor='email'>{t('Form_email')}</label>
                                    <input 
                                        className='usaForm__form__input usaForm__input__for__two' 
                                        name='email' 
                                        type='email' 
                                        placeholder='example@gmail.com' 
                                        onChange={e => onChange(e)} 
                                        value={email} 
                                        required
                                    />
                                </div>
                                <div className='usaForm__wrap'>
                                    <label className='usaForm__form__label' htmlFor='phone'>{t('Form_phone')}</label>
                                    <input 
                                        className='usaForm__form__input usaForm__input__for__two' 
                                        name='phone' 
                                        type='text' 
                                        onChange={e => onChange(e)} 
                                        value={phone} 
                                    />
                                </div>
                            </div>
                            <hr className='usaForm__hr'/>

                            <p className='usaForm__section__title'>{t('Form_main_passport')}</p>
                            <div className='usaForm__input_grp'>
                                <div className='usaForm__input_wrap usaForm__input_wrap__bt'>
                                    <p className='usaForm__text'>{t('Form_passport_info')}</p>
                                    <IconButton onClick={()=> setShow(true)}>
                                        <ExpandMoreIcon className='usaForm__expandIcon'/>
                                    </IconButton>
                                    <IconButton onClick={()=> setShow(false)}>
                                        <ExpandLessIcon className='usaForm__condense'/>
                                    </IconButton>
                                </div>
                                <div className='usaForm__input_wrap usaForm__input_wrap__bt usaForm__import__passport'>
                                    <label className='usaForm__form__label' htmlFor='passport_photo'>{t('Form_passport_import')}</label>
                                    <input 
                                        className='usaForm__input__for__two usaForm__import__passport' 
                                        name='passport_photo' 
                                        type='file' 
                                        accept='image/*,.pdf'
                                        placeholder='Import Passport' 
                                        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.files[0] })}
                                    />
                                </div>
                            </div>
                            { show?
                                <>
                                    <div className='usaForm__input_grp'>
                                        <div className='usaForm__input_wrap'>
                                            <label className='usaForm__form__label' htmlFor='first_name'>{t('Form_firstName')}</label>
                                            <input 
                                                className='usaForm__form__input usaForm__input__for__two' 
                                                name='first_name' 
                                                type='text' 
                                                placeholder={t('Form_firstName')} 
                                                onChange={e => onChange(e)} 
                                                value={first_name} 
                                            />
                                        </div>
                                        <div className='usaForm__input_wrap'>
                                            <label className='usaForm__form__label' htmlFor='last_name'>{t('Form_lastName')}</label>
                                            <input 
                                                className='usaForm__form__input usaForm__input__for__two' 
                                                name='last_name' 
                                                type='text' 
                                                placeholder={t('Form_lastName')} 
                                                onChange={e => onChange(e)} 
                                                value={last_name} 
                                            />
                                        </div>
                                    </div>


                                    <div className='usaForm__input_grp'>
                                        <div className='usaForm__wrap'>
                                            <label className='usaForm__form__label' htmlFor='dob'>{t('Form_dob')}</label>
                                            <input 
                                                className='usaForm__form__input usaForm__input__for__two' 
                                                name='dob' 
                                                type='date' 
                                                onChange={e => onChange(e)} 
                                                value={dob} 
                                            />
                                        </div>
                                        <div className='usaForm__wrap'>
                                            <label className='usaForm__form__label' htmlFor='place_of_birth'>{t('Form_pob')}</label>
                                            <input 
                                                className='usaForm__form__input usaForm__input__for__two' 
                                                name='place_of_birth' 
                                                type='text' 
                                                placeholder={t('Form_pobEx')} 
                                                onChange={e => onChange(e)} 
                                                value={place_of_birth} 
                                            />
                                        </div>
                                    </div>

                                    <div className='usaForm__input_grp'>
                                        <div className='usaForm__wrap'>
                                            <label className='usaForm__form__label' htmlFor='pasport_number'>{t('Form_passportNo')}</label>
                                            <input 
                                                className='usaForm__form__input usaForm__input__for__two' 
                                                name='pasport_number' 
                                                type='text' 
                                                placeholder={t('Form_passportNo')}
                                                onChange={e => onChange(e)} 
                                                value={pasport_number} 
                                            />
                                        </div>
                                        <div className='usaForm__wrap'>
                                            <label className='usaForm__form__label' htmlFor='nationality'>{t('Form_nationality')}</label>
                                            <input 
                                                className='usaForm__form__input usaForm__input__for__two' 
                                                name='nationality' 
                                                type='text' 
                                                placeholder={t('Form_nationalityEx')}
                                                onChange={e => onChange(e)} 
                                                value={nationality} 
                                            />
                                        </div>
                                    </div>

                                    <div className='usaForm__input_grp'>
                                        <div className='usaForm__wrap'>
                                            <label className='usaForm__form__label' htmlFor='passport_issue_date'>{t('Form_pass_issueDate')}</label>
                                            <input 
                                                className='usaForm__form__input usaForm__input__for__two' 
                                                name='passport_issue_date' 
                                                type='date' 
                                                onChange={e => onChange(e)} 
                                                value={passport_issue_date} 
                                            />
                                        </div>
                                        <div className='usaForm__wrap'>
                                            <label className='usaForm__form__label' htmlFor='passport_issue_date'>{t('Form_pass_expiryDate')}</label>
                                            <input 
                                                className='usaForm__form__input usaForm__input__for__two' 
                                                name='passport_expiry_date' 
                                                type='date' 
                                                onChange={e => onChange(e)} 
                                                value={passport_expiry_date} 
                                            />
                                        </div>
                                    </div>
                                </>
                                :null}

                                <hr className='usaForm__hr'/>
                                <div className='usaForm__input_grp'>
                                   <p className='usaForm__section__question' >{t('usaForm_passportLoss')}</p>
                                   <div className='usaForm__input_wrap usaForm__input__radio'>
                                       <ul className='usaForm__ul'>
                                           <li className='usaForm__il'>
                                               <label className='usaForm__radio__wrap'>
                                                   <input 
                                                       type='radio' 
                                                       name='lost_passport'
                                                       value='Yes' 
                                                       className='usaForm__input__radio'
                                                       onChange={e => onChange(e)}
                                                       checked={lost_passport === 'Yes'}
                                                   />
                                                   <span>{t('Form_yes')}</span>
                                               </label>
                                           </li>
                                           <li>
                                               <label className='usaForm__radio__wrap'>
                                                   <input 
                                                       type='radio'
                                                       name='lost_passport'
                                                       value='No'
                                                       className='usaForm__input__radio'
                                                       onChange={e => onChange(e)}
                                                       checked={lost_passport === 'No'}
                                                       />
                                                   <span>{t('Form_no')}</span>
                                               </label>
                                           </li>
                                       </ul>
                                   </div>
                                </div>

                                <hr className='usaForm__hr'/>
                                <div className='usaForm__input_wrap usaForm__input_wrap__bt'>
                                    <label className='usaForm__form__label' htmlFor='address'>{t('Form_address')}</label>
                                    <input 
                                        className='usaForm__input__for__one' 
                                        name='address' 
                                        type='text' 
                                        placeholder={t('Form_addressEx')} 
                                        onChange={e => onChange(e)} 
                                        value={address} 
                                    />
                                </div>

                                <hr className='usaForm__hr'/>
                                <p className='usaForm__section__question'>{t('usaForm_residency')}</p>
                                <div className='usaForm__input_wrap usaForm__input__radio__group'>
                                    <div className='usaForm__input_wrap usaForm__input__radio'>
                                        <ul className='usaForm__ul'>
                                            <li>
                                                <label className='usaForm__radio__wrap'>
                                                    <input 
                                                        type='radio' 
                                                        name='permanent_resident_in_other_country'
                                                        value='Yes'
                                                        className='usaForm__input__radio'
                                                        onChange={e => onChange(e)}
                                                        checked={permanent_resident_in_other_country === 'Yes'}
                                                        onClick={()=> setShowCountryOfResidencea(true)}
                                                    />
                                                    <span>{t('Form_yes')}</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className='usaForm__radio__wrap'>
                                                    <input 
                                                        type='radio'
                                                        name='permanent_resident_in_other_country'
                                                        value='No'
                                                        className='usaForm__input__radio'
                                                        onChange={e => onChange(e)}
                                                        checked={permanent_resident_in_other_country === 'No'}
                                                        onClick={()=> setShowCountryOfResidencea(false)}
                                                    />
                                                    <span>{t('Form_no')}</span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                { showCountryOfResidence?
                                <>
                                    <div className='usaForm__wrap'>
                                        <label className='usaForm__form__label' htmlFor='residency_country'>{t('Form_countryName')}</label>
                                        <input 
                                            className='usaForm__form__input usaForm__input__for__two' 
                                            name='residency_country' 
                                            type='text' 
                                            placeholder={t('Form_countryEx')}
                                            onChange={e => onChange(e)} 
                                            value={residency_country} 
                                        />
                                    </div>
                                </>
                                :null}

                                <hr className='usaForm__hr'/>
                                <div className='usaForm__input_grp'> 
                                    <div className='usaForm__wrap'>
                                        <label className='usaForm__form__label' htmlFor='national_identification_number'>{t('Form_nationalNumber')}</label>
                                        <input 
                                            className='usaForm__form__input usaForm__input__for__two' 
                                            name='national_identification_number' 
                                            type='text' 
                                            placeholder={t('Form_nationalNumberEx')}
                                            onChange={e => onChange(e)} 
                                            value={national_identification_number} 
                                        />
                                    </div>
                                    
                                    <div className='select__purpose'>
                                        <h2 className='usaForm__select__container'>{t('Form_maritial-status')}</h2>
                                        <div className='usaForm__select__box'>
                                            <div onClick={()=> setShowMaritialStatus(!showMaritialStatus)} className='usaForm__selected' id="maritialStatusRadio">{t('Form_select')}<ExpandMoreIcon className='usaForm__xpand__bt'/></div>
                                            { showMaritialStatus?
                                            <>
                                                <div className='usaForm__option__container '>
                                                    <div className='usaForm__option'>
                                                        <label className='usaForm__box__label'>
                                                            <input
                                                                type='radio'
                                                                name='maritial_status' 
                                                                value='Single' 
                                                                className='usaForm__input__radio' 
                                                                onChange={e => onChange(e)}
                                                                checked={maritial_status === 'Single'}
                                                                onClick={()=> {
                                                                    setShowMaritialStatus(false)
                                                                    displayMaritialRadioValue()
                                                                    setShowMaritialSection(false)
                                                                }}
                                                            />
                                                            <span>{t('Form_single')}</span>
                                                        </label>
                                                    </div>
                                                    <div className='usaForm__option'>
                                                        <label className='usaForm__box__label'>
                                                            <input 
                                                                type='radio'
                                                                name='maritial_status'
                                                                value='Married'
                                                                className='usaForm__input__radio'
                                                                onChange={e => onChange(e)}
                                                                checked={maritial_status === 'Married'}
                                                                onClick={()=> {
                                                                    setShowMaritialStatus(false)
                                                                    displayMaritialRadioValue()
                                                                    setShowMaritialSection(true)
                                                                }}
                                                                />
                                                            <span>{t('Form_married')}</span>
                                                        </label>
                                                    </div>
                                                    <div className='usaForm__option'>
                                                        <label className='usaForm__box__label'>
                                                            <input
                                                                type='radio'
                                                                name='maritial_status'
                                                                value='Widowed'
                                                                className='usaForm__input__radio'
                                                                onChange={e => onChange(e)}
                                                                checked={maritial_status === 'Widowed'}
                                                                onClick={()=> {
                                                                    setShowMaritialStatus(false)
                                                                    displayMaritialRadioValue()
                                                                    setShowMaritialSection(false)
                                                                }}
                                                                />
                                                            <span>{t('Form_Widowed')}</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </>
                                            :null}

                                        </div>
                                    </div>

                                </div>

                                    
                            {showMaritialSection?
                                <>
                                    <p className='usaForm__section__title'>{t('Form_wifePassport')}</p>
                                    <div className='usaForm__input_grp'>
                                        <div className='usaForm__input_wrap usaForm__input_wrap__bt'>
                                            <p className='usaForm__text'>{t('Form_passport_info')}</p>
                                            <IconButton onClick={()=> setShowSpousSection(true)}>
                                                <ExpandMoreIcon className='usaForm__expandIcon'/>
                                            </IconButton>
                                            <IconButton onClick={()=> setShowSpousSection(false)}>
                                                <ExpandLessIcon className='usaForm__condense'/>
                                            </IconButton>
                                        </div>
                                        <div className='usaForm__input_wrap usaForm__input_wrap__bt usaForm__import__passport'>
                                            <label className='usaForm__form__label' htmlFor='spouse_passport_photo'>{t('Form_passport_import')}</label>
                                            <input 
                                                className='usaForm__input__for__two usaForm__import__passport' 
                                                name='spouse_passport_photo' 
                                                type='file' 
                                                accept='image/*,.pdf'
                                                placeholder='Import Passport' 
                                                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.files[0] })}
                                            />
                                        </div>
                                    </div>
                                    
                                    { showSpousSection?
                                        <>
                                            <div className='usaForm__input_grp'>
                                                <div className='usaForm__input_wrap'>
                                                    <label className='usaForm__form__label' htmlFor='spouse_first_name'>{t('Form_wife_firstName')}</label>
                                                    <input 
                                                        className='usaForm__form__input usaForm__input__for__two' 
                                                        name='spouse_first_name' 
                                                        type='text' 
                                                        placeholder={t('Form_firstName')} 
                                                        onChange={e => onChange(e)} 
                                                        value={spouse_first_name} 
                                                    />
                                                </div>
                                                <div className='usaForm__input_wrap'>
                                                    <label className='usaForm__form__label' htmlFor='last_name'>{t('Form_wife_lastName')}</label>
                                                    <input 
                                                        className='usaForm__form__input usaForm__input__for__two' 
                                                        name='spouse_last_name' 
                                                        type='text' 
                                                        placeholder={t('Form_lastName')} 
                                                        onChange={e => onChange(e)} 
                                                        value={spouse_last_name} 
                                                    />
                                                </div>
                                            </div>

                                            <div className='usaForm__input_grp'>
                                                <div className='usaForm__wrap'>
                                                    <label className='usaForm__form__label' htmlFor='spouse_pasport_number'>{t('Form_passportNo')}</label>
                                                    <input 
                                                        className='usaForm__form__input usaForm__input__for__two' 
                                                        name='spouse_pasport_number' 
                                                        type='text' 
                                                        placeholder={t('Form_passportNo')}
                                                        onChange={e => onChange(e)} 
                                                        value={spouse_pasport_number} 
                                                    />
                                                </div>
                                                <div className='usaForm__wrap'>
                                                    <label className='usaForm__form__label' htmlFor='spouse_nationality'>{t('Form_nationality')}</label>
                                                    <input 
                                                        className='usaForm__form__input usaForm__input__for__two' 
                                                        name='spouse_nationality' 
                                                        type='text' 
                                                        placeholder={t('Form_nationalityEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={spouse_nationality} 
                                                    />
                                                </div>
                                            </div>
                                            <div className='usaForm__input_grp'>
                                                <div className='usaForm__wrap'>
                                                    <label className='usaForm__form__label' htmlFor='spouse_dob'>{t('Form_dob')}</label>
                                                    <input 
                                                        className='usaForm__form__input usaForm__input__for__two' 
                                                        name='spouse_dob' 
                                                        type='date' 
                                                        onChange={e => onChange(e)} 
                                                        value={spouse_dob} 
                                                    />
                                                </div>
                                                <div className='usaForm__wrap'>
                                                    <label className='usaForm__form__label' htmlFor='spouse_city_of_birth'>{t('Form_cob')}</label>
                                                    <input 
                                                        className='usaForm__form__input usaForm__input__for__two' 
                                                        name='spouse_city_of_birth' 
                                                        type='text' 
                                                        placeholder={t('Form_cobEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={spouse_city_of_birth} 
                                                    />
                                                </div>
                                            </div>

                                        </>
                                    :null}
                                </>
                            :null}

                            <hr className='usaForm__hr'/>
                            <div className='usaForm__input_grp'>
                                <div className='usaForm__wrap'>
                                    <label className='usaForm__form__label' htmlFor='person_paying_for_trip'>{t('Form_sponsor')}</label>
                                    <input 
                                        className='usaForm__form__input usaForm__input__for__two' 
                                        name='person_paying_for_trip' 
                                        type='text' 
                                        placeholder={t('Form_sponsorEx')}
                                        onChange={e => onChange(e)} 
                                        value={person_paying_for_trip} 
                                    />
                                </div>
                                
                                <div className='select__purpose'>
                                    <h2 className='usaForm__select__container'>{t('Form_tripPurpose')}</h2>
                                    <div className='usaForm__select__box'>
                                        <div onClick={()=> setShowPurpose(!showPurpose)} className='usaForm__selected' id="myRadioCheck">{t('Form_select')}<ExpandMoreIcon className='usaForm__xpand__bt'/></div>
                                        { showPurpose?
                                        <>
                                            <div className='usaForm__option__container '>
                                                <div className='usaForm__option'>
                                                    <label className='usaForm__box__label'>
                                                        <input
                                                            type='radio'
                                                            name='purpose_of_trip' 
                                                            value='Study' 
                                                            className='usaForm__input__radio' 
                                                            onChange={e => onChange(e)}
                                                            checked={purpose_of_trip === 'Study'}
                                                            onClick={()=> {
                                                                setShowPurpose(false)
                                                                displayRadioValue()
                                                                setShowSchoolDetails(true)
                                                                setShowInviterDetails(false)
                                                                setShowMedicalDetails(false)
                                                                setShowOtherTripDetails(false)
                                                            }}
                                                        />
                                                        <span>{t('Form_choice_study')}</span>
                                                    </label>
                                                </div>
                                                <div className='usaForm__option'>
                                                    <label className='usaForm__box__label'>
                                                        <input 
                                                            type='radio'
                                                            name='purpose_of_trip'
                                                            value='Tourism / Visit'
                                                            className='usaForm__input__radio'
                                                            onChange={e => onChange(e)}
                                                            checked={purpose_of_trip === 'Tourism / Visit'}
                                                            onClick={()=> {
                                                                setShowPurpose(false)
                                                                displayRadioValue()
                                                                setShowSchoolDetails(false)
                                                                setShowInviterDetails(true)
                                                                setShowMedicalDetails(false)
                                                                setShowOtherTripDetails(false)
                                                            }}
                                                            />
                                                        <span>{t('Form_choice_tourism')}</span>
                                                    </label>
                                                </div>
                                                <div className='usaForm__option'>
                                                    <label className='usaForm__box__label'>
                                                        <input
                                                            type='radio'
                                                            name='purpose_of_trip'
                                                            value='Business'
                                                            className='usaForm__input__radio'
                                                            onChange={e => onChange(e)}
                                                            checked={purpose_of_trip === 'Business'}
                                                            onClick={()=> {
                                                                setShowPurpose(false)
                                                                displayRadioValue()
                                                                setShowSchoolDetails(false)
                                                                setShowInviterDetails(true)
                                                                setShowMedicalDetails(false)
                                                                setShowOtherTripDetails(false)
                                                            }}
                                                            />
                                                        <span>{t('Form_choice_business')}</span>
                                                    </label>
                                                </div>
                                                <div className='usaForm__option'>
                                                    <label className='usaForm__box__label'>
                                                        <input 
                                                            type='radio'
                                                            name='purpose_of_trip'
                                                            value='Medical Treatment'
                                                            className='usaForm__input__radio'
                                                            onChange={e => onChange(e)}
                                                            checked={purpose_of_trip === 'Medical Treatment'}
                                                            onClick={()=> {
                                                                setShowPurpose(false)
                                                                displayRadioValue()
                                                                setShowSchoolDetails(false)
                                                                setShowInviterDetails(false)
                                                                setShowMedicalDetails(true)
                                                                setShowOtherTripDetails(false)
                                                            }}
                                                            />
                                                        <span>{t('Form_choice_medic')}</span>
                                                    </label>
                                                </div>
                                                <div className='usaForm__option'>
                                                    <label className='usaForm__box__label'>
                                                        <input 
                                                            type='radio'
                                                            name='purpose_of_trip'
                                                            value='Other'
                                                            className='usaForm__input__radio'
                                                            onChange={e => onChange(e)}
                                                            checked={purpose_of_trip === 'Other'}
                                                            onClick={()=> {
                                                                setShowPurpose(false)
                                                                displayRadioValue()
                                                                setShowSchoolDetails(false)
                                                                setShowInviterDetails(false)
                                                                setShowMedicalDetails(false)
                                                                setShowOtherTripDetails(true)
                                                            }}
                                                            />
                                                        <span>{t('Form_choice_other')}</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </>
                                        :null}
                                    </div>
                                </div>
                            </div>
                            
                            { showSchoolDetails?
                                <>
                                    <div className='usaForm__input_grp'>
                                        <div className='usaForm__input_wrap'>
                                            <label className='usaForm__form__label' htmlFor='first_name'>{t('Form_instituteName')}</label>
                                            <input 
                                                className='usaForm__form__input usaForm__input__for__two' 
                                                name='school_name' 
                                                type='text' 
                                                placeholder={t('Form_instituteEx')}
                                                onChange={e => onChange(e)} 
                                                value={school_name} 
                                            />
                                        </div>
                                        <div className='usaForm__input_wrap usaForm__input_wrap__bt usaForm__import__passport'>
                                            <label className='usaForm__form__label' htmlFor='admission_offer_photo'>{t('Form_instituteAdmission')}</label>
                                            <input 
                                                className='usaForm__input__for__two usaForm__import__passport' 
                                                name='admission_offer_photo' 
                                                type='file' 
                                                accept='image/*,.pdf'
                                                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.files[0] })}
                                            />
                                        </div>
                                    </div>
                                </>
                            :null}

                            { showInviterDetails?
                                <>
                                    <div className='usaForm__input_grp'>
                                        <div className='usaForm__input_wrap'>
                                            <label className='usaForm__form__label' htmlFor='inviter_full_name'>{t('Form_inviter')}</label>
                                            <input 
                                                className='usaForm__form__input usaForm__input__for__two' 
                                                name='inviter_full_name' 
                                                type='text' 
                                                placeholder={t('Form_inviterEx')} 
                                                onChange={e => onChange(e)} 
                                                value={inviter_full_name} 
                                            />
                                        </div>
                                        <div className='usaForm__input_wrap'>
                                            <label className='usaForm__form__label' htmlFor='inviter_email'>{t('Form_email')}</label>
                                            <input 
                                                className='usaForm__form__input usaForm__input__for__two' 
                                                name='inviter_email' 
                                                type='text' 
                                                placeholder={t('Form_emailEx')}
                                                onChange={e => onChange(e)} 
                                                value={inviter_email} 
                                            />
                                        </div>
                                    </div>

                                    <div className='usaForm__input_wrap usaForm__input_wrap__bt'>
                                        <label className='usaForm__form__label' htmlFor='inviter_address'>{t('Form_address')}</label>
                                        <input 
                                            className='usaForm__input__for__one' 
                                            name='inviter_address' 
                                            type='text' 
                                            placeholder={t('Form_addressEx')}
                                            onChange={e => onChange(e)} 
                                            value={inviter_address} 
                                        />
                                    </div>

                                </>
                            :null}

                            {showMedicalDetails?
                                <>
                                    <div className='usaForm__input_grp'>
                                        <div className='usaForm__input_wrap'>
                                            <label className='usaForm__form__label' htmlFor='hospital_name'>{t('Form_hospital')}</label>
                                            <input 
                                                className='usaForm__form__input usaForm__input__for__two' 
                                                name='hospital_name' 
                                                type='text' 
                                                placeholder={t('Form_hospitalEx')}
                                                onChange={e => onChange(e)} 
                                                value={hospital_name} 
                                            />
                                        </div>
                                        <div className='usaForm__input_wrap usaForm__input_wrap__bt usaForm__import__passport'>
                                            <label className='usaForm__form__label' htmlFor='medical_invitation_letter'>{t('Form_hospitalLetter')}</label>
                                            <input 
                                                className='usaForm__input__for__two usaForm__import__passport' 
                                                name='medical_invitation_letter' 
                                                type='file' 
                                                accept='image/*,.pdf'
                                                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.files[0] })}
                                            />
                                        </div>
                                    </div>

                                    <div className='usaForm__input_wrap'>
                                        <label className='usaForm__form__label' htmlFor='medical_details'>{t('Form_additional')}</label>
                                        <textarea 
                                            className='usaForm__form__textarea'
                                            name='medical_details'
                                            cols='30'
                                            rows='5'
                                            placeholder={t('Form_additionalEx')}
                                            onChange={e => onChange(e)} 
                                            value={medical_details} 
                                        />
                                    </div>
                                </>
                            :null}

                            {showOtherTripDetails?
                                <>
                                    <div className='usaForm__input_wrap'>
                                        <label className='usaForm__form__label' htmlFor='other_travel_reason'>{t('Form_additional')}</label>
                                        <textarea 
                                            className='usaForm__form__textarea'
                                            name='other_travel_reason'
                                            cols='30'
                                            rows='5'
                                            placeholder={t('Form_additionalEx2')}
                                            onChange={e => onChange(e)} 
                                            value={other_travel_reason} 
                                        />
                                    </div>
                                </>
                            :null}

                            <hr className='usaForm__hr'/>
                            <div className='usaForm__input_grp'>
                                <div className='usaForm__wrap'>
                                    <label className='usaForm__form__label' htmlFor='arrive_date'>{t('Form_tripArrival')}</label>
                                    <input 
                                        className='usaForm__form__input usaForm__input__for__two' 
                                        name='arrive_date' 
                                        type='date' 
                                        onChange={e => onChange(e)} 
                                        value={arrive_date} 
                                    />
                                </div>
                                <div className='usaForm__wrap'>
                                    <label className='usaForm__form__label' htmlFor='length_of_stay'>{t('ukForm_uk_StudyPeriod')}</label>
                                    <input 
                                        className='usaForm__form__input usaForm__input__for__two' 
                                        name='length_of_stay' 
                                        type='text' 
                                        placeholder={t('ukForm_uk_StudyPeriodEx')}
                                        onChange={e => onChange(e)} 
                                        value={length_of_stay} 
                                    />
                                </div>
                            </div>
                            <div className='usaForm__input_grp'>
                                

                                { showInviterDetails?
                                 <>
                                    <div className='usaForm__input_wrap usaForm__input_wrap__bt usaForm__import__passport'>
                                        <label className='usaForm__form__label' htmlFor='invitation_letter'>{t('Form_invitation')}</label>
                                        <input 
                                            className='usaForm__input__for__two usaForm__import__passport' 
                                            name='invitation_letter' 
                                            type='file' 
                                            accept='image/*,.pdf'
                                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.files[0] })}
                                        />
                                    </div>
                                 </>
                                 :null}
                            </div>

                                <hr className='usaForm__hr'/>
                                <p className='usaForm__2ndSection__title'>{t('Form_employmentStatus')}</p>
                                <div className='usaForm__input_wrap usaForm__input__radio__group'>
                                    <div className='usaForm__input_wrap usaForm__input__radio'>
                                        <ul className='usaForm__ul'>
                                            <li className='usaForm__il'>
                                                <label className="usaForm__radio__wrap">
                                                    <input 
                                                        type="radio" 
                                                        name="work_status" 
                                                        value='Student' 
                                                        className="usaForm__input__radio" 
                                                        onChange={e => onChange(e)}
                                                        onClick={()=> setShowJobDetails(false)}
                                                        checked={work_status === 'Student'}
                                                    />
                                                    <span>{t('Form_workStatus1')}</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="usaForm__radio__wrap">
                                                    <input 
                                                        type="radio" 
                                                        name="work_status" 
                                                        value='S/Employee'
                                                        className="usaForm__input__radio"
                                                        onChange={e => onChange(e)}
                                                        checked={work_status === 'S/Employee'}
                                                        onClick={()=> setShowJobDetails(!showJobDetails)}
                                                        />
                                                    <span>{t('Form_workStatus2')}</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="usaForm__radio__wrap">
                                                    <input 
                                                        type="radio" 
                                                        name="work_status" 
                                                        value='Unemployed'
                                                        className="usaForm__input__radio"
                                                        onChange={e => onChange(e)}
                                                        onClick={()=> setShowJobDetails(false)}
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
                                    <div className='usaForm__input_grp'>
                                        <div className='usaForm__input_wrap'>
                                            <label className='usaForm__form__label' htmlFor='first_name'>{t('Form_job')}</label>
                                            <input 
                                                className='usaForm__form__input usaForm__input__for__two' 
                                                name='job_title' 
                                                type='text' 
                                                placeholder={t('Form_jobEx')}
                                                onChange={e => onChange(e)} 
                                                value={job_title} 
                                            />
                                        </div>
                                        <div className='usaForm__input_wrap'>
                                            <label className='usaForm__form__label' htmlFor='last_name'>{t('Form_startDate')}</label>
                                            <input 
                                                className='usaForm__form__input usaForm__input__for__two' 
                                                name='starting_date' 
                                                type='date' 
                                                onChange={e => onChange(e)} 
                                                value={starting_date} 
                                            />
                                        </div>
                                    </div>

                                    <div className='usaForm__input_grp'>
                                        <div className='usaForm__input_wrap'>
                                            <label className='usaForm__form__label' htmlFor='company_name'>{t('Form_employerName')}</label>
                                            <input 
                                                className='usaForm__form__input usaForm__input__for__two' 
                                                name='company_name' 
                                                type='text' 
                                                placeholder={t('Form_employerNameEx')}
                                                onChange={e => onChange(e)} 
                                                value={company_name} 
                                            />
                                        </div>
                                        <div className='usaForm__input_wrap'>
                                            <label className='usaForm__form__label' htmlFor='company_phone'>{t('Form_employerNamePhone')}</label>
                                            <input 
                                                className='usaForm__form__input usaForm__input__for__two' 
                                                name='company_phone' 
                                                type='text' 
                                                onChange={e => onChange(e)} 
                                                value={company_phone} 
                                            />
                                        </div>
                                    </div>

                                    <div className='usaForm__input_grp'>
                                        <div className='usaForm__input_wrap'>
                                            <label className='usaForm__form__label' htmlFor='salary'>{t('Form_jobIncome')}</label>
                                            <input 
                                                className='usaForm__form__input usaForm__input__for__two' 
                                                name='salary' 
                                                type='text' 
                                                placeholder={t('Form_jobSalary')} 
                                                onChange={e => onChange(e)} 
                                                value={salary} 
                                            />
                                        </div>
                                        <div className='usaForm__input_wrap'>
                                            <label className='usaForm__form__label' htmlFor='salary'>{t('Form_employerAddress')}</label>
                                            <input 
                                                className='usaForm__form__input usaForm__input__for__two' 
                                                name='job_address' 
                                                type='text' 
                                                onChange={e => onChange(e)} 
                                                value={job_address} 
                                            />
                                        </div>
                                    </div>
                                    <div className='usaForm__input_wrap'>
                                        <label className='usaForm__form__label' htmlFor='message'>{t('Form_jobDesc')}</label>
                                        <textarea 
                                            className='usaForm__form__textarea'
                                            name='job_desc'
                                            cols='30'
                                            rows='2'
                                            onChange={e => onChange(e)} 
                                            value={job_desc} 
                                        />
                                    </div>
                                </>
                            :null}
                            <hr className='usaForm__hr'/>

                            <div className='usaForm__input_grp'>
                                <div className='usaForm__input_wrap'>
                                    <label className='usaForm__form__label' htmlFor='father_first_name'>{t('Form_father_firstName')}</label>
                                    <input 
                                        className='usaForm__form__input usaForm__input__for__two' 
                                        name='father_first_name' 
                                        type='text' 
                                        placeholder={t('Form_father_firstNameEx')}
                                        onChange={e => onChange(e)} 
                                        value={father_first_name} 
                                    />
                                </div>
                                <div className='usaForm__input_wrap'>
                                    <label className='usaForm__form__label' htmlFor='father_last_name'>{t('Form_father_lastName')}</label>
                                    <input 
                                        className='usaForm__form__input usaForm__input__for__two' 
                                        name='father_last_name' 
                                        type='text' 
                                        placeholder={t('Form_father_lastNameEx')}
                                        onChange={e => onChange(e)} 
                                        value={father_last_name} 
                                    />
                                </div>
                            </div>

                            <div className='usaForm__input_grp'>
                                <div className='usaForm__wrap'>
                                    <label className='usaForm__form__label' htmlFor='father_dob'>{t('Form_father_dob')}</label>
                                    <input 
                                        className='usaForm__form__input usaForm__input__for__two' 
                                        name='father_dob' 
                                        type='date' 
                                        onChange={e => onChange(e)} 
                                        value={father_dob} 
                                    />
                                </div>
                                <div className='usaForm__wrap'>
                                    <label className='usaForm__form__label' htmlFor='father_nationality'>{t('Form_father_nationality')}</label>
                                    <input 
                                        className='usaForm__form__input usaForm__input__for__two' 
                                        name='father_nationality' 
                                        type='text' 
                                        placeholder={t('Form_father_nationalityEx')}
                                        onChange={e => onChange(e)} 
                                        value={father_nationality} 
                                    />
                                </div>
                            </div>
                            <div className='usaForm__input_grp'>
                                <div className='usaForm__wrap'>
                                    <label className='usaForm__form__label' htmlFor='father_city_of_birth'>{t('Form_father_cob')}</label>
                                    <input 
                                        className='usaForm__form__input usaForm__input__for__two' 
                                        name='father_city_of_birth' 
                                        type='text' 
                                        placeholder={t('Form_cobEx')}
                                        onChange={e => onChange(e)} 
                                        value={father_city_of_birth} 
                                    />
                                </div>
                            </div>

                            <hr className='usaForm__hr'/>
                            <div className='usaForm__input_grp'>
                                <div className='usaForm__input_wrap'>
                                    <label className='usaForm__form__label' htmlFor='mother_first_name'>{t('Form_mother_firstName')}</label>
                                    <input 
                                        className='usaForm__form__input usaForm__input__for__two' 
                                        name='mother_first_name' 
                                        type='text' 
                                        placeholder={t('Form_mother_firstNameEx')}
                                        onChange={e => onChange(e)} 
                                        value={mother_first_name} 
                                    />
                                </div>
                                <div className='usaForm__input_wrap'>
                                    <label className='usaForm__form__label' htmlFor='mother_last_name'>{t('Form_mother_lastName')}</label>
                                    <input 
                                        className='usaForm__form__input usaForm__input__for__two' 
                                        name='mother_last_name' 
                                        type='text' 
                                        placeholder={t('Form_mother_lastNameEx')}
                                        onChange={e => onChange(e)} 
                                        value={mother_last_name} 
                                    />
                                </div>
                            </div>

                            <div className='usaForm__input_grp'>
                                <div className='usaForm__wrap'>
                                    <label className='usaForm__form__label' htmlFor='dob'>{t('Form_mother_dob')}</label>
                                    <input 
                                        className='usaForm__form__input usaForm__input__for__two' 
                                        name='mother_dob' 
                                        type='date' 
                                        onChange={e => onChange(e)} 
                                        value={mother_dob} 
                                    />
                                </div>
                                <div className='usaForm__wrap'>
                                    <label className='usaForm__form__label' htmlFor='place_of_birth'>{t('Form_mother_nationality')}</label>
                                    <input 
                                        className='usaForm__form__input usaForm__input__for__two' 
                                        name='mother_nationality' 
                                        type='text' 
                                        placeholder={t('Form_mother_nationalityEx')}
                                        onChange={e => onChange(e)} 
                                        value={mother_nationality} 
                                    />
                                </div>
                            </div>
                            <div className='usaForm__input_grp'>
                                <div className='usaForm__wrap'>
                                    <label className='usaForm__form__label' htmlFor='mother_city_of_birth'>{t('Form_mother_cob')}</label>
                                    <input 
                                        className='usaForm__form__input usaForm__input__for__two' 
                                        name='mother_city_of_birth' 
                                        type='text' 
                                        placeholder={t('Form_cobEx')}
                                        onChange={e => onChange(e)} 
                                        value={mother_city_of_birth} 
                                    />
                                </div>
                            </div>

                            <hr className='usaForm__hr'/> 
                            <div className='usaForm__input_grp'>
                                <p className='usaForm__section__question' >{t('usaForm_companions')}</p>
                                <div className='usaForm__input_wrap usaForm__input__radio'>
                                    <ul className='usaForm__ul'>
                                        <li className='usaForm__il'>
                                            <label className='usaForm__radio__wrap'>
                                                <input 
                                                    type='radio' 
                                                    name='travelling_alone'
                                                    value='Yes' 
                                                    className='usaForm__input__radio'
                                                    onChange={e => onChange(e)}
                                                    checked={travelling_alone === 'Yes'}
                                                    onClick={()=> setShowNoOfCompanions(true)}
                                                />
                                                <span>{t('Form_yes')}</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className='usaForm__radio__wrap'>
                                                <input 
                                                    type='radio'
                                                    name='travelling_alone'
                                                    value='No'
                                                    className='usaForm__input__radio'
                                                    onChange={e => onChange(e)}
                                                    checked={travelling_alone === 'No'}
                                                    onClick={()=> setShowNoOfCompanions(false)}
                                                    />
                                                <span>{t('Form_no')}</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            { showNoOfCompanions?
                                <>
                                    <p className='usaForm__section__question'>{t('usaForm_NoOfCompanions')}</p>
                                    <div className='usaForm__input_wrap usaForm__input__radio__group'>
                                        <div className='usaForm__input_wrap usaForm__input__radio'>
                                            <ul className='usaForm__ul'>
                                                <li className='usaForm__il'>
                                                    <label className='usaForm__radio__wrap'>
                                                        <input 
                                                            type='radio' 
                                                            name='number_of_companions'
                                                            value='1' 
                                                            className='usaForm__input__radio'
                                                            onChange={e => onChange(e)}
                                                            checked={number_of_companions === '1'}
                                                            onClick={()=> {
                                                                setShowCompanionSection2(false)
                                                                setShowCompanionSection3(false)
                                                                setShowCompanionSection4(false)
                                                                setShowCompanionSection5(false)
                                                            }}
                                                        />
                                                        <span>1</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className='usaForm__radio__wrap'>
                                                        <input 
                                                            type='radio'
                                                            name='number_of_companions'
                                                            value='2'
                                                            className='usaForm__input__radio'
                                                            onChange={e => onChange(e)}
                                                            onClick={()=> {
                                                                setShowCompanionSection2(true)
                                                                setShowCompanionSection3(false)
                                                                setShowCompanionSection4(false)
                                                                setShowCompanionSection5(false)
                                                            }}
                                                            checked={number_of_companions === '2'}
                                                            />
                                                        <span>2</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className='usaForm__radio__wrap'>
                                                        <input 
                                                            type='radio' 
                                                            name='number_of_companions'
                                                            value='3'
                                                            className='usaForm__input__radio'
                                                            onChange={e => onChange(e)}
                                                            checked={number_of_companions === '3'}
                                                            onClick={()=> {
                                                                setShowCompanionSection2(true)
                                                                setShowCompanionSection3(true)
                                                                setShowCompanionSection4(false)
                                                                setShowCompanionSection5(false)
                                                            }}
                                                            />
                                                        <span>3</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className='usaForm__radio__wrap'>
                                                        <input 
                                                            type='radio' 
                                                            name='number_of_companions'
                                                            value='4'
                                                            className='usaForm__input__radio'
                                                            onChange={e => onChange(e)}
                                                            checked={number_of_companions === '4'}
                                                            onClick={()=> {
                                                                setShowCompanionSection2(true)
                                                                setShowCompanionSection3(true)
                                                                setShowCompanionSection4(true)
                                                                setShowCompanionSection5(false)
                                                            }}
                                                            />
                                                        <span>4</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className='usaForm__radio__wrap'>
                                                        <input 
                                                            type='radio' 
                                                            name='number_of_companions'
                                                            value='5'
                                                            className='usaForm__input__radio'
                                                            onChange={e => onChange(e)}
                                                            checked={number_of_companions === '5'}
                                                            onClick={()=> {
                                                                setShowCompanionSection2(true)
                                                                setShowCompanionSection3(true)
                                                                setShowCompanionSection4(true)
                                                                setShowCompanionSection5(true)
                                                            }}
                                                            />
                                                        <span>5</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <hr className='usaForm__hr'/>
                                    <div className='usaForm__input_grp'>
                                        <div className='usaForm__input_wrap'>
                                            <label className='usaForm__form__label' htmlFor='companion1_first_name'>{t('Form_firstName')}</label>
                                            <input 
                                                className='usaForm__form__input usaForm__input__for__two' 
                                                name='companion1_first_name' 
                                                type='text' 
                                                placeholder={t('Form_firstName')}
                                                onChange={e => onChange(e)} 
                                                value={companion1_first_name} 
                                            />
                                        </div>
                                        <div className='usaForm__input_wrap'>
                                            <label className='usaForm__form__label' htmlFor='companion1_last_name'>{t('Form_lastName')}</label>
                                            <input 
                                                className='usaForm__form__input usaForm__input__for__two' 
                                                name='companion1_last_name' 
                                                type='text' 
                                                placeholder={t('Form_lastName')}
                                                onChange={e => onChange(e)} 
                                                value={companion1_last_name} 
                                            />
                                        </div>
                                    </div>

                                    <div className='usaForm__input_grp'>
                                        <div className='usaForm__input_wrap'>
                                            <label className='usaForm__form__label' htmlFor='companion1_relationship'>{t('Form_relationship')}</label>
                                            <input 
                                                className='usaForm__form__input usaForm__input__for__two' 
                                                name='companion1_relationship' 
                                                type='text' 
                                                placeholder={t('Form_relationshipEx')}
                                                onChange={e => onChange(e)} 
                                                value={companion1_relationship} 
                                            />
                                        </div>
                                    </div>

                                    {showCompanionSection2?<>
                                        <hr className='usaForm__hr'/>
                                        <div className='usaForm__input_grp'>
                                            <div className='usaForm__input_wrap'>
                                                <label className='usaForm__form__label' htmlFor='companion2_first_name'>{t('Form_firstName')}</label>
                                                <input 
                                                    className='usaForm__form__input usaForm__input__for__two' 
                                                    name='companion2_first_name' 
                                                    type='text' 
                                                    placeholder={t('Form_firstName')}
                                                    onChange={e => onChange(e)} 
                                                    value={companion2_first_name} 
                                                />
                                            </div>
                                            <div className='usaForm__input_wrap'>
                                                <label className='usaForm__form__label' htmlFor='companion2_last_name'>{t('Form_lastName')}</label>
                                                <input 
                                                    className='usaForm__form__input usaForm__input__for__two' 
                                                    name='companion2_last_name' 
                                                    type='text' 
                                                    placeholder={t('Form_lastName')}
                                                    onChange={e => onChange(e)} 
                                                    value={companion2_last_name} 
                                                />
                                            </div>
                                        </div>

                                        <div className='usaForm__input_grp'>
                                            <div className='usaForm__input_wrap'>
                                                <label className='usaForm__form__label' htmlFor='companion2_relationship'>{t('Form_relationship')}</label>
                                                <input 
                                                    className='usaForm__form__input usaForm__input__for__two' 
                                                    name='companion2_relationship' 
                                                    type='text' 
                                                    placeholder={t('Form_relationshipEx')}
                                                    onChange={e => onChange(e)} 
                                                    value={companion2_relationship} 
                                                />
                                            </div>
                                        </div>
                                    </>:null}
                                    
                                    {showCompanionSection3?<>
                                        <hr className='usaForm__hr'/>
                                        <div className='usaForm__input_grp'>
                                            <div className='usaForm__input_wrap'>
                                                <label className='usaForm__form__label' htmlFor='companion3_first_name'>{t('Form_firstName')}</label>
                                                <input 
                                                    className='usaForm__form__input usaForm__input__for__two' 
                                                    name='companion3_first_name' 
                                                    type='text' 
                                                    placeholder={t('Form_firstName')}
                                                    onChange={e => onChange(e)} 
                                                    value={companion3_first_name} 
                                                />
                                            </div>
                                            <div className='usaForm__input_wrap'>
                                                <label className='usaForm__form__label' htmlFor='companion3_last_name'>{t('Form_lastName')}</label>
                                                <input 
                                                    className='usaForm__form__input usaForm__input__for__two' 
                                                    name='companion3_last_name' 
                                                    type='text' 
                                                    placeholder={t('Form_lastName')}
                                                    onChange={e => onChange(e)} 
                                                    value={companion3_last_name} 
                                                />
                                            </div>
                                        </div>

                                        <div className='usaForm__input_grp'>
                                            <div className='usaForm__input_wrap'>
                                                <label className='usaForm__form__label' htmlFor='companion3_relationship'>{t('Form_relationship')}</label>
                                                <input 
                                                    className='usaForm__form__input usaForm__input__for__two' 
                                                    name='companion3_relationship' 
                                                    type='text' 
                                                    placeholder={t('Form_relationshipEx')}
                                                    onChange={e => onChange(e)} 
                                                    value={companion3_relationship} 
                                                />
                                            </div>
                                        </div>
                                    </>:null}

                                    {showCompanionSection4?<>
                                        <hr className='usaForm__hr'/>
                                        <div className='usaForm__input_grp'>
                                            <div className='usaForm__input_wrap'>
                                                <label className='usaForm__form__label' htmlFor='companion4_first_name'>{t('Form_firstName')}</label>
                                                <input 
                                                    className='usaForm__form__input usaForm__input__for__two' 
                                                    name='companion4_first_name' 
                                                    type='text' 
                                                    placeholder={t('Form_firstName')}
                                                    onChange={e => onChange(e)} 
                                                    value={companion4_first_name} 
                                                />
                                            </div>
                                            <div className='usaForm__input_wrap'>
                                                <label className='usaForm__form__label' htmlFor='companion4_last_name'>{t('Form_lastName')}</label>
                                                <input 
                                                    className='usaForm__form__input usaForm__input__for__two' 
                                                    name='companion4_last_name' 
                                                    type='text' 
                                                    placeholder={t('Form_lastName')}
                                                    onChange={e => onChange(e)} 
                                                    value={companion4_last_name} 
                                                />
                                            </div>
                                        </div>

                                        <div className='usaForm__input_grp'>
                                            <div className='usaForm__input_wrap'>
                                                <label className='usaForm__form__label' htmlFor='companion4_relationship'>{t('Form_relationship')}</label>
                                                <input 
                                                    className='usaForm__form__input usaForm__input__for__two' 
                                                    name='companion4_relationship' 
                                                    type='text' 
                                                    placeholder={t('Form_relationshipEx')}
                                                    onChange={e => onChange(e)} 
                                                    value={companion4_relationship} 
                                                />
                                            </div>
                                        </div>
                                    </>:null}

                                    {showCompanionSection5?<>
                                        <hr className='usaForm__hr'/>
                                        <div className='usaForm__input_grp'>
                                            <div className='usaForm__input_wrap'>
                                                <label className='usaForm__form__label' htmlFor='companion5_first_name'>{t('Form_firstName')}</label>
                                                <input 
                                                    className='usaForm__form__input usaForm__input__for__two' 
                                                    name='companion5_first_name' 
                                                    type='text' 
                                                    placeholder={t('Form_firstName')}
                                                    onChange={e => onChange(e)} 
                                                    value={companion5_first_name} 
                                                />
                                            </div>
                                            <div className='usaForm__input_wrap'>
                                                <label className='usaForm__form__label' htmlFor='companion5_last_name'>{t('Form_lastName')}</label>
                                                <input 
                                                    className='usaForm__form__input usaForm__input__for__two' 
                                                    name='companion5_last_name' 
                                                    type='text' 
                                                    placeholder={t('Form_lastName')}
                                                    onChange={e => onChange(e)} 
                                                    value={companion5_last_name} 
                                                />
                                            </div>
                                        </div>

                                        <div className='usaForm__input_grp'>
                                            <div className='usaForm__input_wrap'>
                                                <label className='usaForm__form__label' htmlFor='companion5_relationship'>{t('Form_relationship')}</label>
                                                <input 
                                                    className='usaForm__form__input usaForm__input__for__two' 
                                                    name='companion5_relationship' 
                                                    type='text' 
                                                    placeholder={t('Form_relationshipEx')}
                                                    onChange={e => onChange(e)} 
                                                    value={companion5_relationship} 
                                                />
                                            </div>
                                        </div>
                                    </>:null}   

                                </>
                            :null}

                            <hr className='usaForm__hr'/>
                            <p className='usaForm__section__question'>{t('usaForm_visaRefusal')}</p>
                            <div className='usaForm__input_wrap usaForm__input__radio__group'>
                                <div className='usaForm__input_wrap usaForm__input__radio'>
                                    <ul className='usaForm__ul'>
                                        <li>
                                            <label className="usaForm__radio__wrap">
                                                <input 
                                                    type="radio" 
                                                    name="visa_refusl" 
                                                    value='Yes'
                                                    className="usaForm__input__radio"
                                                    onChange={e => onChange(e)}
                                                    checked={visa_refusl === 'Yes'}
                                                    onClick={()=> setShowRefusalSection(true)}
                                                />
                                                <span>{t('Form_yes')}</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="usaForm__radio__wrap">
                                                <input 
                                                    type="radio" 
                                                    name="visa_refusl" 
                                                    value='No'
                                                    className="usaForm__input__radio"
                                                    onChange={e => onChange(e)}
                                                    onClick={()=> setShowRefusalSection(false)}
                                                    checked={visa_refusl === 'No'}
                                                />
                                                <span>{t('Form_no')}</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {showRefusalSection?
                                <>
                                    <div className='usaForm__input_grp'>
                                        <div className='usaForm__input_wrap'>
                                            <label className='usaForm__form__label' htmlFor='country_of_refusal'>{t('Form_visaRefusal_country')}</label>
                                            <input 
                                                className='usaForm__form__input usaForm__input__for__two'
                                                type='text'
                                                name='country_of_refusal' 
                                                value={country_of_refusal} 
                                                placeholder={t('Form_visaRefusal_countryEx')}
                                                onChange={e => onChange(e)}
                                            />
                                        </div>
                                        <div className='usaForm__input_wrap'>
                                            <label className='usaForm__form__label' htmlFor='visa_refusal_date'>{t('Form_visaRefusal_date')}</label>
                                            <input 
                                                className='usaForm__form__input usaForm__input__for__two'
                                                type='date'
                                                name='visa_refusal_date' 
                                                value={visa_refusal_date} 
                                                onChange={e => onChange(e)}
                                            />
                                        </div>
                                    </div>
                                    <div className='usaForm__input_wrap'>
                                        <label className='usaForm__form__label' htmlFor='visa_refusal_desc'>{t('Form_visaRefusal_details')}</label>
                                        <textarea 
                                            className='usaForm__form__textarea'
                                            name='visa_refusal_desc'
                                            cols='30'
                                            rows='5'
                                            placeholder={t('Form_visaRefusal_reason')}
                                            onChange={e => onChange(e)} 
                                            value={visa_refusal_desc} 
                                        />
                                    </div>
                                </>
                            :null}

                            <hr className='usaForm__hr'/>
                            <p className='usaForm__section__question'>{t('usaForm_travel_history')}</p>
                            <div className='usaForm__input_wrap usaForm__input__radio__group'>
                                <div className='usaForm__input_wrap usaForm__input__radio'>
                                    <ul className='usaForm__ul'>
                                        <li>
                                            <label className='usaForm__radio__wrap'>
                                                <input 
                                                    type='radio' 
                                                    name='visited_usa'
                                                    value='Yes'
                                                    className='usaForm__input__radio'
                                                    onChange={e => onChange(e)}
                                                    checked={visited_usa === 'Yes'}
                                                    onClick={()=> setShowUsaTripsSection(true)}
                                                />
                                                <span>{t('Form_yes')}</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className='usaForm__radio__wrap'>
                                                <input 
                                                    type='radio'
                                                    name='visited_usa'
                                                    value='No'
                                                    className='usaForm__input__radio'
                                                    onChange={e => onChange(e)}
                                                    checked={visited_usa === 'No'}
                                                    onClick={()=> {
                                                        setShowUsaTripsSection(false)
                                                    }}
                                                />
                                                <span>{t('Form_no')}</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {showUsaTripsSection?
                                <>

                                    <hr className='usaForm__hr'/>
                                    <p className='usaForm__section__question'>{t('usaForm_drivingLC')}</p>
                                    <div className='usaForm__input_wrap usaForm__input__radio__group'>
                                        <div className='usaForm__input_wrap usaForm__input__radio'>
                                            <ul className='usaForm__ul'>
                                                <li>
                                                    <label className='usaForm__radio__wrap'>
                                                        <input 
                                                            type='radio' 
                                                            name='usa_driving_license'
                                                            value='Yes'
                                                            className='usaForm__input__radio'
                                                            onChange={e => onChange(e)}
                                                            checked={usa_driving_license === 'Yes'}
                                                        />
                                                        <span>{t('Form_yes')}</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className='usaForm__radio__wrap'>
                                                        <input 
                                                            type='radio'
                                                            name='usa_driving_license'
                                                            value='No'
                                                            className='usaForm__input__radio'
                                                            onChange={e => onChange(e)}
                                                            checked={usa_driving_license === 'No'}
                                                        />
                                                        <span>{t('Form_no')}</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <hr className='usaForm__hr'/>
                                    <p className='usaForm__section__question'>{t('usaForm_tripsNo')}</p>
                                    <div className='usaForm__input_wrap usaForm__input__radio__group'>
                                            <div className='usaForm__input_wrap usaForm__input__radio'>
                                                <ul className='usaForm__ul'>
                                                    <li className='usaForm__il'>
                                                        <label className='usaForm__radio__wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_usa_visits'
                                                                value='1' 
                                                                className='usaForm__input__radio'
                                                                onChange={e => onChange(e)}
                                                                checked={number_of_usa_visits === '1'}
                                                                onClick={()=> {
                                                                    setShowUsaVisit2(false)
                                                                    setShowUsaVisit3(false)
                                                                    setShowUsaVisit4(false)
                                                                    setShowUsaVisit5(false)
                                                                    setShowUsaVisit6(false)
                                                                    setShowUsaVisit7(false)                                        
                                                                }}
                                                            />
                                                            <span>1</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className='usaForm__radio__wrap'>
                                                            <input 
                                                                type='radio'
                                                                name='number_of_usa_visits'
                                                                value='2'
                                                                className='usaForm__input__radio'
                                                                onChange={e => onChange(e)}
                                                                onClick={()=> {
                                                                    setShowUsaVisit2(true)
                                                                    setShowUsaVisit3(false)
                                                                    setShowUsaVisit4(false)
                                                                    setShowUsaVisit5(false)
                                                                    setShowUsaVisit6(false)
                                                                    setShowUsaVisit7(false)                                        
                                                                }}
                                                                checked={number_of_usa_visits === '2'}
                                                                />
                                                            <span>2</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className='usaForm__radio__wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_usa_visits'
                                                                value='3'
                                                                className='usaForm__input__radio'
                                                                onChange={e => onChange(e)}
                                                                checked={number_of_usa_visits === '3'}
                                                                onClick={()=> {
                                                                    setShowUsaVisit2(true)
                                                                    setShowUsaVisit3(true)
                                                                    setShowUsaVisit4(false)
                                                                    setShowUsaVisit5(false)
                                                                    setShowUsaVisit6(false)
                                                                    setShowUsaVisit7(false)                                        
                                                                }}
                                                                />
                                                            <span>3</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className='usaForm__radio__wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_usa_visits'
                                                                value='4'
                                                                className='usaForm__input__radio'
                                                                onChange={e => onChange(e)}
                                                                checked={number_of_usa_visits === '4'}
                                                                onClick={()=> {
                                                                    setShowUsaVisit2(true)
                                                                    setShowUsaVisit3(true)
                                                                    setShowUsaVisit4(true)
                                                                    setShowUsaVisit5(false)
                                                                    setShowUsaVisit6(false)
                                                                    setShowUsaVisit7(false)                                        
                                                                }}
                                                                />
                                                            <span>4</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className='usaForm__radio__wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_usa_visits'
                                                                value='5'
                                                                className='usaForm__input__radio'
                                                                onChange={e => onChange(e)}
                                                                checked={number_of_usa_visits === '5'}
                                                                onClick={()=> {
                                                                    setShowUsaVisit2(true)
                                                                    setShowUsaVisit3(true)
                                                                    setShowUsaVisit4(true)
                                                                    setShowUsaVisit5(true)
                                                                    setShowUsaVisit6(false)
                                                                    setShowUsaVisit7(false)                                        
                                                                }}
                                                                />
                                                            <span>5</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className='usaForm__radio__wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_usa_visits'
                                                                value='6'
                                                                className='usaForm__input__radio'
                                                                onChange={e => onChange(e)}
                                                                checked={number_of_usa_visits === '6'}
                                                                onClick={()=> {
                                                                    setShowUsaVisit2(true)
                                                                    setShowUsaVisit3(true)
                                                                    setShowUsaVisit4(true)
                                                                    setShowUsaVisit5(true)
                                                                    setShowUsaVisit6(true)
                                                                    setShowUsaVisit7(false)                                        
                                                                }}
                                                                />
                                                            <span>6</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className='usaForm__radio__wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_usa_visits'
                                                                value='7'
                                                                className='usaForm__input__radio'
                                                                onChange={e => onChange(e)}
                                                                checked={number_of_usa_visits === '7'}
                                                                onClick={()=> {
                                                                    setShowUsaVisit2(true)
                                                                    setShowUsaVisit3(true)
                                                                    setShowUsaVisit4(true)
                                                                    setShowUsaVisit5(true)
                                                                    setShowUsaVisit6(true)
                                                                    setShowUsaVisit7(true)                                        
                                                                }}
                                                                />
                                                            <span>7</span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                            
                                            <hr className='usaForm__hr'/>

                                            <div className='usaForm__input_grp'>
                                                <div className='usaForm__wrap'>
                                                    <label className='usaForm__form__label' htmlFor='Usa_visit_arrival_date'>{t('UsaForm_UsaVisit_date')}</label>
                                                    <input 
                                                        className='usaForm__form__input usaForm__input__for__two' 
                                                        name='usa_visit_arrival_date' 
                                                        placeholder={t('UsaForm_visaIssue_dateEx')}
                                                        type='text' 
                                                        onChange={e => onChange(e)} 
                                                        value={usa_visit_arrival_date} 
                                                    />
                                                </div>
                                                <div className='usaForm__wrap'>
                                                    <label className='usaForm__form__label' htmlFor='period_of_Usa_stay'>{t('UsaForm_Usa_StudyPeriod')}</label>
                                                    <input 
                                                        className='usaForm__form__input usaForm__input__for__two' 
                                                        name='period_of_usa_stay' 
                                                        type='text' 
                                                        placeholder={t('UsaForm_Usa_StudyPeriodEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={period_of_usa_stay} 
                                                    />
                                                </div>
                                            </div>

                                    {showUsaVisit2?
                                        <>
                                            <hr className='usaForm__hr'/>

                                            <div className='usaForm__input_grp'>
                                                <div className='usaForm__wrap'>
                                                    <label className='usaForm__form__label' htmlFor='Usa_visit_arrival_date2'>{t('UsaForm_UsaVisit_date')}</label>
                                                    <input 
                                                        className='usaForm__form__input usaForm__input__for__two' 
                                                        name='usa_visit_arrival_date2' 
                                                        placeholder={t('UsaForm_visaIssue_dateEx')}
                                                        type='text' 
                                                        onChange={e => onChange(e)} 
                                                        value={usa_visit_arrival_date2} 
                                                    />
                                                </div>
                                                <div className='usaForm__wrap'>
                                                    <label className='usaForm__form__label' htmlFor='period_of_Usa_stay2'>{t('UsaForm_Usa_StudyPeriod')}</label>
                                                    <input 
                                                        className='usaForm__form__input usaForm__input__for__two' 
                                                        name='period_of_usa_stay2' 
                                                        type='text' 
                                                        placeholder={t('UsaForm_Usa_StudyPeriodEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={period_of_usa_stay2} 
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    :null}

                                    {showUsaVisit3?
                                        <>
                                            <hr className='usaForm__hr'/>

                                            <div className='usaForm__input_grp'>
                                                <div className='usaForm__wrap'>
                                                    <label className='usaForm__form__label' htmlFor='Usa_visit_arrival_date3'>{t('UsaForm_UsaVisit_date')}</label>
                                                    <input 
                                                        className='usaForm__form__input usaForm__input__for__two' 
                                                        name='usa_visit_arrival_date3' 
                                                        placeholder={t('UsaForm_visaIssue_dateEx')}
                                                        type='text' 
                                                        onChange={e => onChange(e)} 
                                                        value={usa_visit_arrival_date3} 
                                                    />
                                                </div>
                                                <div className='usaForm__wrap'>
                                                    <label className='usaForm__form__label' htmlFor='period_of_Usa_stay3'>{t('UsaForm_Usa_StudyPeriod')}</label>
                                                    <input 
                                                        className='usaForm__form__input usaForm__input__for__two' 
                                                        name='period_of_usa_stay3' 
                                                        type='text' 
                                                        placeholder={t('UsaForm_Usa_StudyPeriodEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={period_of_usa_stay3} 
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    :null}
                                    {showUsaVisit4?
                                        <>
                                            <hr className='usaForm__hr'/>

                                            <div className='usaForm__input_grp'>
                                                <div className='usaForm__wrap'>
                                                    <label className='usaForm__form__label' htmlFor='Usa_visit_arrival_date4'>{t('UsaForm_UsaVisit_date')}</label>
                                                    <input 
                                                        className='usaForm__form__input usaForm__input__for__two' 
                                                        name='usa_visit_arrival_date4' 
                                                        placeholder={t('UsaForm_visaIssue_dateEx')}
                                                        type='text' 
                                                        onChange={e => onChange(e)} 
                                                        value={usa_visit_arrival_date4} 
                                                    />
                                                </div>
                                                <div className='usaForm__wrap'>
                                                    <label className='usaForm__form__label' htmlFor='period_of_Usa_stay4'>{t('UsaForm_Usa_StudyPeriod')}</label>
                                                    <input 
                                                        className='usaForm__form__input usaForm__input__for__two' 
                                                        name='period_of_usa_stay4' 
                                                        type='text' 
                                                        placeholder={t('UsaForm_Usa_StudyPeriodEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={period_of_usa_stay4} 
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    :null}
                                    {showUsaVisit5?
                                        <>
                                            <hr className='usaForm__hr'/>

                                            <div className='usaForm__input_grp'>
                                                <div className='usaForm__wrap'>
                                                    <label className='usaForm__form__label' htmlFor='Usa_visit_arrival_date5'>{t('UsaForm_UsaVisit_date')}</label>
                                                    <input 
                                                        className='usaForm__form__input usaForm__input__for__two' 
                                                        name='usa_visit_arrival_date5' 
                                                        placeholder={t('UsaForm_visaIssue_dateEx')}
                                                        type='text' 
                                                        onChange={e => onChange(e)} 
                                                        value={usa_visit_arrival_date5} 
                                                    />
                                                </div>
                                                <div className='usaForm__wrap'>
                                                    <label className='usaForm__form__label' htmlFor='period_of_Usa_stay5'>{t('UsaForm_Usa_StudyPeriod')}</label>
                                                    <input 
                                                        className='usaForm__form__input usaForm__input__for__two' 
                                                        name='period_of_usa_stay5' 
                                                        type='text' 
                                                        placeholder={t('UsaForm_Usa_StudyPeriodEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={period_of_usa_stay5} 
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    :null}
                                    {showUsaVisit6?
                                        <>
                                            <hr className='usaForm__hr'/>

                                            <div className='usaForm__input_grp'>
                                                <div className='usaForm__wrap'>
                                                    <label className='usaForm__form__label' htmlFor='Usa_visit_arrival_date6'>{t('UsaForm_UsaVisit_date')}</label>
                                                    <input 
                                                        className='usaForm__form__input usaForm__input__for__two' 
                                                        name='usa_visit_arrival_date6' 
                                                        placeholder={t('UsaForm_visaIssue_dateEx')}
                                                        type='text' 
                                                        onChange={e => onChange(e)} 
                                                        value={usa_visit_arrival_date6} 
                                                    />
                                                </div>
                                                <div className='usaForm__wrap'>
                                                    <label className='usaForm__form__label' htmlFor='period_of_Usa_stay6'>{t('UsaForm_Usa_StudyPeriod')}</label>
                                                    <input 
                                                        className='usaForm__form__input usaForm__input__for__two' 
                                                        name='period_of_usa_stay6' 
                                                        type='text' 
                                                        placeholder={t('UsaForm_Usa_StudyPeriodEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={period_of_usa_stay6} 
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    :null}
                                    {showUsaVisit7?
                                        <>
                                            <hr className='usaForm__hr'/>

                                            <div className='usaForm__input_grp'>
                                                <div className='usaForm__wrap'>
                                                    <label className='usaForm__form__label' htmlFor='Usa_visit_arrival_date7'>{t('UsaForm_UsaVisit_date')}</label>
                                                    <input 
                                                        className='usaForm__form__input usaForm__input__for__two' 
                                                        name='usa_visit_arrival_date7' 
                                                        placeholder={t('UsaForm_visaIssue_dateEx')}
                                                        type='text' 
                                                        onChange={e => onChange(e)} 
                                                        value={usa_visit_arrival_date7} 
                                                    />
                                                </div>
                                                <div className='usaForm__wrap'>
                                                    <label className='usaForm__form__label' htmlFor='period_of_Usa_stay7'>{t('UsaForm_Usa_StudyPeriod')}</label>
                                                    <input 
                                                        className='usaForm__form__input usaForm__input__for__two' 
                                                        name='period_of_usa_stay7' 
                                                        type='text' 
                                                        placeholder={t('UsaForm_Usa_StudyPeriodEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={period_of_usa_stay7} 
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    :null}
                                </>
                            :null}

                            <hr className='usaForm__hr'/> 
                            <div className='usaForm__input_grp'>
                                <p className='usaForm__section__question' >{t('usaForm_fingerPrints')}</p>
                                <div className='usaForm__input_wrap usaForm__input__radio'>
                                    <ul className='usaForm__ul'>
                                        <li className='usaForm__il'>
                                            <label className='usaForm__radio__wrap'>
                                                <input 
                                                    type='radio' 
                                                    name='made_finger_prints'
                                                    value='Yes' 
                                                    className='usaForm__input__radio'
                                                    onChange={e => onChange(e)}
                                                    checked={made_finger_prints === 'Yes'}
                                                    onClick={()=> setShowNoOfCompanions(true)}
                                                />
                                                <span>{t('Form_yes')}</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className='usaForm__radio__wrap'>
                                                <input 
                                                    type='radio'
                                                    name='made_finger_prints'
                                                    value='No'
                                                    className='usaForm__input__radio'
                                                    onChange={e => onChange(e)}
                                                    checked={made_finger_prints === 'No'}
                                                    onClick={()=> setShowNoOfCompanions(false)}
                                                    />
                                                <span>{t('Form_no')}</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <hr className='usaForm__hr'/>
                            <p className='usaForm__section__question'>{t('usaForm_visaIssued')}</p>
                            <div className='usaForm__input_wrap usaForm__input__radio__group'>
                                <div className='usaForm__input_wrap usaForm__input__radio'>
                                    <ul className='usaForm__ul'>
                                        <li>
                                            <label className='usaForm__radio__wrap'>
                                                <input 
                                                    type='radio' 
                                                    name='obtained_usa_visa'
                                                    value='Yes'
                                                    className='usaForm__input__radio'
                                                    onChange={e => onChange(e)}
                                                    checked={obtained_usa_visa === 'Yes'}
                                                    onClick={()=> {
                                                        setShowUsaIssuedVisa(true)
                                                    }}
                                                />
                                                <span>{t('Form_yes')}</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className='usaForm__radio__wrap'>
                                                <input 
                                                    type='radio'
                                                    name='obtained_usa_visa'
                                                    value='No'
                                                    className='usaForm__input__radio'
                                                    onChange={e => onChange(e)}
                                                    checked={obtained_usa_visa === 'No'}
                                                    onClick={()=> {
                                                        setShowUsaIssuedVisa(false)
                                                    }}
                                                />
                                                <span>{t('Form_no')}</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {showUsaIssuedVisa?
                                <>
                                    <hr className='usaForm__hr'/>
                                    <div className='usaForm__input_grp'>
                                        <div className='usaForm__wrap'>
                                            <label className='usaForm__form__label' htmlFor='Usa_visit_arrival_date2'>{t('usaForm_visaIssue_date')}</label>
                                            <input 
                                                className='usaForm__form__input usaForm__input__for__two' 
                                                name='usa_visa_issue_date' 
                                                placeholder={t('UsaForm_visaIssue_dateEx')}
                                                type='text' 
                                                onChange={e => onChange(e)} 
                                                value={usa_visa_issue_date} 
                                            />
                                        </div>
                                        <div className='usaForm__wrap'>
                                            <label className='usaForm__form__label' htmlFor='usa_visa_no'>{t('usaForm_visaNumber')}</label>
                                            <input 
                                                className='usaForm__form__input usaForm__input__for__two' 
                                                name='usa_visa_no' 
                                                type='text' 
                                                onChange={e => onChange(e)} 
                                                value={usa_visa_no} 
                                            />
                                        </div>
                                    </div>

                                    <hr className='usaForm__hr'/>
                                    <p className='usaForm__section__question'>{t('usaForm_visaLost')}</p>
                                    <div className='usaForm__input_wrap usaForm__input__radio__group'>
                                        <div className='usaForm__input_wrap usaForm__input__radio'>
                                            <ul className='usaForm__ul'>
                                                <li>
                                                    <label className='usaForm__radio__wrap'>
                                                        <input 
                                                            type='radio' 
                                                            name='visa_lost'
                                                            value='Yes'
                                                            className='usaForm__input__radio'
                                                            onChange={e => onChange(e)}
                                                            checked={visa_lost === 'Yes'}
                                                        />
                                                        <span>{t('Form_yes')}</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className='usaForm__radio__wrap'>
                                                        <input 
                                                            type='radio'
                                                            name='visa_lost'
                                                            value='No'
                                                            className='usaForm__input__radio'
                                                            onChange={e => onChange(e)}
                                                            checked={visa_lost === 'No'}
                                                        />
                                                        <span>{t('Form_no')}</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <hr className='usaForm__hr'/>
                                    <p className='usaForm__section__question'>{t('usaForm_visaCancelled')}</p>
                                    <div className='usaForm__input_wrap usaForm__input__radio__group'>
                                        <div className='usaForm__input_wrap usaForm__input__radio'>
                                            <ul className='usaForm__ul'>
                                                <li>
                                                    <label className='usaForm__radio__wrap'>
                                                        <input 
                                                            type='radio' 
                                                            name='visa_cancelled'
                                                            value='Yes'
                                                            className='usaForm__input__radio'
                                                            onChange={e => onChange(e)}
                                                            checked={visa_cancelled === 'Yes'}
                                                        />
                                                        <span>{t('Form_yes')}</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className='usaForm__radio__wrap'>
                                                        <input 
                                                            type='radio'
                                                            name='visa_cancelled'
                                                            value='No'
                                                            className='usaForm__input__radio'
                                                            onChange={e => onChange(e)}
                                                            checked={visa_cancelled === 'No'}
                                                        />
                                                        <span>{t('Form_no')}</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            :null}   

                            <hr className='usaForm__hr'/>
                            <p className='usaForm__section__question'>{t('Form_otherTrips')}</p>
                            <div className='usaForm__input_wrap usaForm__input__radio__group'>
                                <div className='usaForm__input_wrap usaForm__input__radio'>
                                    <ul className='usaForm__ul'>
                                        <li>
                                            <label className='usaForm__radio__wrap'>
                                                <input 
                                                    type='radio' 
                                                    name='visited_other_countries'
                                                    value='Yes'
                                                    className='usaForm__input__radio'
                                                    onChange={e => onChange(e)}
                                                    checked={visited_other_countries === 'Yes'}
                                                    onClick={()=> setShowTripsSection(true)}
                                                />
                                                <span>{t('Form_yes')}</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className='usaForm__radio__wrap'>
                                                <input 
                                                    type='radio'
                                                    name='visited_other_countries'
                                                    value='No'
                                                    className='usaForm__input__radio'
                                                    onChange={e => onChange(e)}
                                                    checked={visited_other_countries === 'No'}
                                                    onClick={()=> {
                                                        setShowTripsSection(false)
                                                    }}
                                                />
                                                <span>{t('Form_no')}</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {showTripsSection?
                                <>
                                    <p className='usaForm__section__question'>{t('Form_otherTripsNo')}</p>
                                    <div className='usaForm__input_wrap usaForm__input__radio__group'>
                                            <div className='usaForm__input_wrap usaForm__input__radio'>
                                                <ul className='usaForm__ul'>
                                                    <li className='usaForm__il'>
                                                        <label className='usaForm__radio__wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_visits'
                                                                value='1' 
                                                                className='usaForm__input__radio'
                                                                onChange={e => onChange(e)}
                                                                checked={number_of_visits === '1'}
                                                                onClick={()=> {
                                                                    setShowCountryVisit2(false)
                                                                    setShowCountryVisit3(false)
                                                                    setShowCountryVisit4(false)
                                                                    setShowCountryVisit5(false)
                                                                    setShowCountryVisit6(false)
                                                                    setShowCountryVisit7(false)
                                                                }}
                                                            />
                                                            <span>1</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className='usaForm__radio__wrap'>
                                                            <input 
                                                                type='radio'
                                                                name='number_of_visits'
                                                                value='2'
                                                                className='usaForm__input__radio'
                                                                onChange={e => onChange(e)}
                                                                onClick={()=> {
                                                                    setShowCountryVisit2(true)
                                                                    setShowCountryVisit3(false)
                                                                    setShowCountryVisit4(false)
                                                                    setShowCountryVisit5(false)
                                                                    setShowCountryVisit6(false)
                                                                    setShowCountryVisit7(false)
                                                                }}
                                                                checked={number_of_visits === '2'}
                                                                />
                                                            <span>2</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className='usaForm__radio__wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_visits'
                                                                value='3'
                                                                className='usaForm__input__radio'
                                                                onChange={e => onChange(e)}
                                                                checked={number_of_visits === '3'}
                                                                onClick={()=> {
                                                                    setShowCountryVisit2(true)
                                                                    setShowCountryVisit3(true)
                                                                    setShowCountryVisit4(false)
                                                                    setShowCountryVisit5(false)
                                                                    setShowCountryVisit6(false)
                                                                    setShowCountryVisit7(false)
                                                                }}
                                                                />
                                                            <span>3</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className='usaForm__radio__wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_visits'
                                                                value='4'
                                                                className='usaForm__input__radio'
                                                                onChange={e => onChange(e)}
                                                                checked={number_of_visits === '4'}
                                                                onClick={()=> {
                                                                    setShowCountryVisit2(true)
                                                                    setShowCountryVisit3(true)
                                                                    setShowCountryVisit4(true)
                                                                    setShowCountryVisit5(false)
                                                                    setShowCountryVisit6(false)
                                                                    setShowCountryVisit7(false)
                                                                }}
                                                                />
                                                            <span>4</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className='usaForm__radio__wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_visits'
                                                                value='5'
                                                                className='usaForm__input__radio'
                                                                onChange={e => onChange(e)}
                                                                checked={number_of_visits === '5'}
                                                                onClick={()=> {
                                                                    setShowCountryVisit2(true)
                                                                    setShowCountryVisit3(true)
                                                                    setShowCountryVisit4(true)
                                                                    setShowCountryVisit5(true)
                                                                    setShowCountryVisit6(false)
                                                                    setShowCountryVisit7(false)
                                                                }}
                                                                />
                                                            <span>5</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className='usaForm__radio__wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_visits'
                                                                value='6'
                                                                className='usaForm__input__radio'
                                                                onChange={e => onChange(e)}
                                                                checked={number_of_visits === '6'}
                                                                onClick={()=> {
                                                                    setShowCountryVisit2(true)
                                                                    setShowCountryVisit3(true)
                                                                    setShowCountryVisit4(true)
                                                                    setShowCountryVisit5(true)
                                                                    setShowCountryVisit6(true)
                                                                    setShowCountryVisit7(false)
                                                                }}
                                                                />
                                                            <span>6</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className='usaForm__radio__wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_visits'
                                                                value='7'
                                                                className='usaForm__input__radio'
                                                                onChange={e => onChange(e)}
                                                                checked={number_of_visits === '7'}
                                                                onClick={()=> {
                                                                    setShowCountryVisit2(true)
                                                                    setShowCountryVisit3(true)
                                                                    setShowCountryVisit4(true)
                                                                    setShowCountryVisit5(true)
                                                                    setShowCountryVisit6(true)
                                                                    setShowCountryVisit7(true)
                                                                }}
                                                                />
                                                            <span>7</span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                            <hr className='usaForm__hr'/>
                                            <div className='usaForm__input_grp'>
                                                <div className='usaForm__input_wrap'>
                                                    <label className='usaForm__form__label' htmlFor='visted_country'>{t('Form_countryName')}</label>
                                                    <input 
                                                        className='usaForm__form__input usaForm__input__for__two' 
                                                        name='visted_country' 
                                                        type='text' 
                                                        placeholder={t('Form_countryEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={visted_country} 
                                                    />
                                                </div>

                                            </div>
                                    {showCountryVisit2?
                                        <>
                                            <hr className='usaForm__hr'/>
                                            <div className='usaForm__input_grp'>
                                                <div className='usaForm__input_wrap'>
                                                    <label className='usaForm__form__label' htmlFor='visted_country'>{t('Form_countryName')}</label>
                                                    <input 
                                                        className='usaForm__form__input usaForm__input__for__two' 
                                                        name='visted_country2' 
                                                        type='text' 
                                                        placeholder={t('Form_countryEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={visted_country2} 
                                                    />
                                                </div>

                                            </div>

                                        </>
                                    :null}

                                    {showCountryVisit3?
                                        <>
                                            <hr className='usaForm__hr'/>
                                            <div className='usaForm__input_grp'>
                                                <div className='usaForm__input_wrap'>
                                                    <label className='usaForm__form__label' htmlFor='visted_country3'>{t('Form_countryName')}</label>
                                                    <input 
                                                        className='usaForm__form__input usaForm__input__for__two' 
                                                        name='visted_country3' 
                                                        type='text' 
                                                        placeholder={t('Form_countryEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={visted_country3} 
                                                    />
                                                </div>

                                            </div>


                                        </>
                                    :null}

                                    {showCountryVisit4?
                                        <>
                                            <hr className='usaForm__hr'/>
                                            <div className='usaForm__input_grp'>
                                                <div className='usaForm__input_wrap'>
                                                    <label className='usaForm__form__label' htmlFor='visted_country4'>{t('Form_countryName')}</label>
                                                    <input 
                                                        className='usaForm__form__input usaForm__input__for__two' 
                                                        name='visted_country4' 
                                                        type='text' 
                                                        placeholder={t('Form_countryEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={visted_country4} 
                                                    />
                                                </div>

                                            </div>


                                        </>
                                    :null}

                                    {showCountryVisit5?
                                        <>
                                            <hr className='usaForm__hr'/>
                                            <div className='usaForm__input_grp'>
                                                <div className='usaForm__input_wrap'>
                                                    <label className='usaForm__form__label' htmlFor='visted_country5'>{t('Form_countryName')}</label>
                                                    <input 
                                                        className='usaForm__form__input usaForm__input__for__two' 
                                                        name='visted_country5' 
                                                        type='text' 
                                                        placeholder={t('Form_countryEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={visted_country5} 
                                                    />
                                                </div>

                                            </div>

                                        </>
                                    :null}

                                    {showCountryVisit6?
                                        <>
                                            <hr className='usaForm__hr'/>
                                            <div className='usaForm__input_grp'>
                                                <div className='usaForm__input_wrap'>
                                                    <label className='usaForm__form__label' htmlFor='visted_country6'>{t('Form_countryName')}</label>
                                                    <input 
                                                        className='usaForm__form__input usaForm__input__for__two' 
                                                        name='visted_country6' 
                                                        type='text' 
                                                        placeholder={t('Form_countryEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={visted_country6} 
                                                    />
                                                </div>

                                            </div>

                                        </>
                                    :null}

                                    {showCountryVisit7?
                                        <>
                                            <hr className='usaForm__hr'/>
                                            <div className='usaForm__input_grp'>
                                                <div className='usaForm__input_wrap'>
                                                    <label className='usaForm__form__label' htmlFor='visted_country7'>{t('Form_countryName')}</label>
                                                    <input 
                                                        className='usaForm__form__input usaForm__input__for__two' 
                                                        name='visted_country7' 
                                                        type='text' 
                                                        placeholder={t('Form_countryEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={visted_country7} 
                                                    />
                                                </div>

                                            </div>

                                        </>
                                    :null}
                                </>
                            :null}

                            <hr className='usaForm__hr'/>
                            <p className='usaForm__section__question'>{t('usaForm_Family')}</p>
                            <div className='usaForm__input_wrap usaForm__input__radio__group'>
                                <div className='usaForm__input_wrap usaForm__input__radio'>
                                    <ul className='usaForm__ul'>
                                        <li>
                                            <label className='usaForm__radio__wrap'>
                                                <input 
                                                    type='radio' 
                                                    name='family_in_usa'
                                                    value='Yes'
                                                    className='usaForm__input__radio'
                                                    onChange={e => onChange(e)}
                                                    checked={family_in_usa === 'Yes'}
                                                    onClick={()=> setShowFamilyAbroadSection(true)}
                                                />
                                                <span>{t('Form_yes')}</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className='usaForm__radio__wrap'>
                                                <input 
                                                    type='radio'
                                                    name='family_in_usa'
                                                    value='No'
                                                    className='usaForm__input__radio'
                                                    onChange={e => onChange(e)}
                                                    checked={family_in_usa === 'No'}
                                                    onClick={()=> setShowFamilyAbroadSection(false)}
                                                />
                                                <span>{t('Form_no')}</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {showFamilyAbroadSection?
                                <>
                                    <p className='usaForm__section__question'>{t('Form_howMany')}</p>
                                    <div className='usaForm__input_wrap usaForm__input__radio__group'>
                                            <div className='usaForm__input_wrap usaForm__input__radio'>
                                                <ul className='usaForm__ul'>
                                                    <li className='usaForm__il'>
                                                        <label className='usaForm__radio__wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_relatives'
                                                                value='1' 
                                                                className='usaForm__input__radio'
                                                                onChange={e => onChange(e)}
                                                                checked={number_of_relatives === '1'}
                                                                onClick={()=> {
                                                                    setShowRelativeAbroad2(false)
                                                                    setShowRelativeAbroad3(false)
                                                                    setShowRelativeAbroad4(false)
                                                                    setShowRelativeAbroad5(false)
                                                                }}
                                                            />
                                                            <span>1</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className='usaForm__radio__wrap'>
                                                            <input 
                                                                type='radio'
                                                                name='number_of_relatives'
                                                                value='2'
                                                                className='usaForm__input__radio'
                                                                onChange={e => onChange(e)}
                                                                onClick={()=> {
                                                                    setShowRelativeAbroad2(true)
                                                                    setShowRelativeAbroad3(false)
                                                                    setShowRelativeAbroad4(false)
                                                                    setShowRelativeAbroad5(false)
                                                                }}
                                                                checked={number_of_relatives === '2'}
                                                                />
                                                            <span>2</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className='usaForm__radio__wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_relatives'
                                                                value='3'
                                                                className='usaForm__input__radio'
                                                                onChange={e => onChange(e)}
                                                                checked={number_of_relatives === '3'}
                                                                onClick={()=> {
                                                                    setShowRelativeAbroad2(true)
                                                                    setShowRelativeAbroad3(true)
                                                                    setShowRelativeAbroad4(false)
                                                                    setShowRelativeAbroad5(false)
                                                                }}
                                                                />
                                                            <span>3</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className='usaForm__radio__wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_relatives'
                                                                value='4'
                                                                className='usaForm__input__radio'
                                                                onChange={e => onChange(e)}
                                                                checked={number_of_relatives === '4'}
                                                                onClick={()=> {
                                                                    setShowRelativeAbroad2(true)
                                                                    setShowRelativeAbroad3(true)
                                                                    setShowRelativeAbroad4(true)
                                                                    setShowRelativeAbroad5(false)
                                                                }}
                                                                />
                                                            <span>4</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className='usaForm__radio__wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_relatives'
                                                                value='5'
                                                                className='usaForm__input__radio'
                                                                onChange={e => onChange(e)}
                                                                checked={number_of_relatives === '5'}
                                                                onClick={()=> {
                                                                    setShowRelativeAbroad2(true)
                                                                    setShowRelativeAbroad3(true)
                                                                    setShowRelativeAbroad4(true)
                                                                    setShowRelativeAbroad5(true)
                                                                }}
                                                                />
                                                            <span>5</span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                            
                                        <hr className='usaForm__hr'/>
                                        <div className='usaForm__input_grp'>
                                            <div className='usaForm__input_wrap'>
                                                <label className='usaForm__form__label' htmlFor='relative1_first_name'>{t('Form_relative_firstName')}</label>
                                                <input 
                                                    className='usaForm__form__input usaForm__input__for__two' 
                                                    name='relative1_first_name' 
                                                    type='text' 
                                                    placeholder={t('Form_firstName')}
                                                    onChange={e => onChange(e)} 
                                                    value={relative1_first_name} 
                                                />
                                            </div>
                                            <div className='usaForm__input_wrap'>
                                                <label className='usaForm__form__label' htmlFor='relative1_last_name'>{t('Form_relative_lastName')}</label>
                                                <input 
                                                    className='usaForm__form__input usaForm__input__for__two' 
                                                    name='relative1_last_name' 
                                                    type='text' 
                                                    placeholder={t('Form_lastName')}
                                                    onChange={e => onChange(e)} 
                                                    value={relative1_last_name} 
                                                />
                                            </div>
                                        </div>

                                        <div className='usaForm__input_grp'>
                                            <div className='usaForm__input_wrap'>
                                                <label className='usaForm__form__label' htmlFor='relative1_nationality'>{t('Form_nationality')}</label>
                                                <input 
                                                    className='usaForm__form__input usaForm__input__for__two' 
                                                    name='relative1_status' 
                                                    type='text' 
                                                    placeholder={t('Form_nationalityEx')}
                                                    onChange={e => onChange(e)} 
                                                    value={relative1_status} 
                                                />
                                            </div>
                                            <div className='usaForm__input_wrap'>
                                                <label className='usaForm__form__label' htmlFor='relative1_relationship'>{t('Form_relationship')}</label>
                                                <input 
                                                    className='usaForm__form__input usaForm__input__for__two' 
                                                    name='relative1_relationship' 
                                                    type='text' 
                                                    placeholder={t('Form_relationshipEx')}
                                                    onChange={e => onChange(e)} 
                                                    value={relative1_relationship} 
                                                />
                                            </div>
                                        </div>

                                        {showRelativeAbroad2?
                                            <>
                                                <hr className='usaForm__hr'/>
                                                <div className='usaForm__input_grp'>
                                                    <div className='usaForm__input_wrap'>
                                                        <label className='usaForm__form__label' htmlFor='relative2_first_name'>{t('Form_relative_firstName')}</label>
                                                        <input 
                                                            className='usaForm__form__input usaForm__input__for__two' 
                                                            name='relative2_first_name' 
                                                            type='text' 
                                                            placeholder={t('Form_firstName')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative2_first_name} 
                                                        />
                                                    </div>
                                                    <div className='usaForm__input_wrap'>
                                                        <label className='usaForm__form__label' htmlFor='relative1_last_name'>{t('Form_relative_lastName')}</label>
                                                        <input 
                                                            className='usaForm__form__input usaForm__input__for__two' 
                                                            name='relative2_last_name' 
                                                            type='text' 
                                                            placeholder={t('Form_lastName')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative2_last_name} 
                                                        />
                                                    </div>
                                                </div>

                                                <div className='usaForm__input_grp'>
                                                    <div className='usaForm__input_wrap'>
                                                        <label className='usaForm__form__label' htmlFor='relative2_nationality'>{t('Form_nationality')}</label>
                                                        <input 
                                                            className='usaForm__form__input usaForm__input__for__two' 
                                                            name='relative2_status' 
                                                            type='text' 
                                                            placeholder={t('Form_nationalityEx')} 
                                                            onChange={e => onChange(e)} 
                                                            value={relative2_status} 
                                                        />
                                                    </div>
                                                    <div className='usaForm__input_wrap'>
                                                        <label className='usaForm__form__label' htmlFor='relative2_relationship'>{t('Form_relationship')}</label>
                                                        <input 
                                                            className='usaForm__form__input usaForm__input__for__two' 
                                                            name='relative2_relationship' 
                                                            type='text' 
                                                            placeholder={t('Form_relationshipEx')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative2_relationship} 
                                                        />
                                                    </div>
                                                </div>

                                            </>
                                        :null}
                                        {showRelativeAbroad3?
                                            <>
                                                <hr className='usaForm__hr'/>
                                                <div className='usaForm__input_grp'>
                                                    <div className='usaForm__input_wrap'>
                                                        <label className='usaForm__form__label' htmlFor='relative3_first_name'>{t('Form_relative_firstName')}</label>
                                                        <input 
                                                            className='usaForm__form__input usaForm__input__for__two' 
                                                            name='relative3_first_name' 
                                                            type='text' 
                                                            placeholder={t('Form_firstName')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative3_first_name} 
                                                        />
                                                    </div>
                                                    <div className='usaForm__input_wrap'>
                                                        <label className='usaForm__form__label' htmlFor='relative3_last_name'>{t('Form_relative_lastName')}</label>
                                                        <input 
                                                            className='usaForm__form__input usaForm__input__for__two' 
                                                            name='relative3_last_name' 
                                                            type='text' 
                                                            placeholder={t('Form_lastName')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative3_last_name} 
                                                        />
                                                    </div>
                                                </div>

                                                <div className='usaForm__input_grp'>
                                                    <div className='usaForm__input_wrap'>
                                                        <label className='usaForm__form__label' htmlFor='relative3_nationality'>{t('Form_nationality')}</label>
                                                        <input 
                                                            className='usaForm__form__input usaForm__input__for__two' 
                                                            name='relative3_status' 
                                                            type='text' 
                                                            placeholder={t('Form_nationalityEx')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative3_status} 
                                                        />
                                                    </div>
                                                    <div className='usaForm__input_wrap'>
                                                        <label className='usaForm__form__label' htmlFor='relative3_relationship'>{t('Form_relationship')}</label>
                                                        <input 
                                                            className='usaForm__form__input usaForm__input__for__two' 
                                                            name='relative3_relationship' 
                                                            type='text' 
                                                            placeholder={t('Form_relationshipEx')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative3_relationship} 
                                                        />
                                                    </div>
                                                </div>

                                            </>
                                        :null}
                                        {showRelativeAbroad4?
                                            <>
                                                <hr className='usaForm__hr'/>
                                                <div className='usaForm__input_grp'>
                                                    <div className='usaForm__input_wrap'>
                                                        <label className='usaForm__form__label' htmlFor='relative4_first_name'>{t('Form_relative_firstName')}</label>
                                                        <input 
                                                            className='usaForm__form__input usaForm__input__for__two' 
                                                            name='relative4_first_name' 
                                                            type='text' 
                                                            placeholder={t('Form_firstName')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative4_first_name} 
                                                        />
                                                    </div>
                                                    <div className='usaForm__input_wrap'>
                                                        <label className='usaForm__form__label' htmlFor='relative4_last_name'>{t('Form_relative_lastName')}</label>
                                                        <input 
                                                            className='usaForm__form__input usaForm__input__for__two' 
                                                            name='relative4_last_name' 
                                                            type='text' 
                                                            placeholder={t('Form_lastName')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative4_last_name} 
                                                        />
                                                    </div>
                                                </div>

                                                <div className='usaForm__input_grp'>
                                                    <div className='usaForm__input_wrap'>
                                                        <label className='usaForm__form__label' htmlFor='relative4_nationality'>{t('Form_nationality')}</label>
                                                        <input 
                                                            className='usaForm__form__input usaForm__input__for__two' 
                                                            name='relative4_status' 
                                                            type='text' 
                                                            placeholder={t('Form_nationalityEx')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative4_status} 
                                                        />
                                                    </div>
                                                    <div className='usaForm__input_wrap'>
                                                        <label className='usaForm__form__label' htmlFor='relative4_relationship'>{t('Form_relationship')}</label>
                                                        <input 
                                                            className='usaForm__form__input usaForm__input__for__two' 
                                                            name='relative4_relationship' 
                                                            type='text' 
                                                            placeholder={t('Form_relationshipEx')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative4_relationship} 
                                                        />
                                                    </div>
                                                </div>

                                            </>
                                        :null}
                                        {showRelativeAbroad5?
                                            <>
                                                <hr className='usaForm__hr'/>
                                                <div className='usaForm__input_grp'>
                                                    <div className='usaForm__input_wrap'>
                                                        <label className='usaForm__form__label' htmlFor='relative5_first_name'>{t('Form_relative_firstName')}</label>
                                                        <input 
                                                            className='usaForm__form__input usaForm__input__for__two' 
                                                            name='relative5_first_name' 
                                                            type='text' 
                                                            placeholder={t('Form_firstName')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative5_first_name} 
                                                        />
                                                    </div>
                                                    <div className='usaForm__input_wrap'>
                                                        <label className='usaForm__form__label' htmlFor='relative5_last_name'>{t('Form_relative_lastName')}</label>
                                                        <input 
                                                            className='usaForm__form__input usaForm__input__for__two' 
                                                            name='relative5_last_name' 
                                                            type='text' 
                                                            placeholder={t('Form_lastName')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative5_last_name} 
                                                        />
                                                    </div>
                                                </div>

                                                <div className='usaForm__input_grp'>
                                                    <div className='usaForm__input_wrap'>
                                                        <label className='usaForm__form__label' htmlFor='relative5_nationality'>{t('Form_nationality')}</label>
                                                        <input 
                                                            className='usaForm__form__input usaForm__input__for__two' 
                                                            name='relative5_status' 
                                                            type='text' 
                                                            placeholder={t('Form_nationalityEx')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative5_status} 
                                                        />
                                                    </div>
                                                    <div className='usaForm__input_wrap'>
                                                        <label className='usaForm__form__label' htmlFor='relative5_relationship'>{t('Form_relationship')}</label>
                                                        <input 
                                                            className='usaForm__form__input usaForm__input__for__two' 
                                                            name='relative5_relationship' 
                                                            type='text' 
                                                            placeholder={t('Form_relationshipEx')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative5_relationship} 
                                                        />
                                                    </div>
                                                </div>

                                            </>
                                        :null}
                                </>
                            :null}

                            <hr className='usaForm__hr'/> 
                            <div className='usaForm__input_grp'>
                                <p className='usaForm__section__question' >{t('usaForm_socialMedia')}</p>
                                <div className='usaForm__input_wrap usaForm__input__radio'>
                                    <ul className='usaForm__ul'>
                                        <li className='usaForm__il'>
                                            <label className='usaForm__radio__wrap'>
                                                <input 
                                                    type='radio' 
                                                    name='social_media_presence'
                                                    value='Yes' 
                                                    className='usaForm__input__radio'
                                                    onChange={e => onChange(e)}
                                                    checked={social_media_presence === 'Yes'}
                                                    onClick={()=> setShowSocialMediaSection(true)}
                                                />
                                                <span>{t('Form_yes')}</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className='usaForm__radio__wrap'>
                                                <input 
                                                    type='radio'
                                                    name='social_media_presence'
                                                    value='No'
                                                    className='usaForm__input__radio'
                                                    onChange={e => onChange(e)}
                                                    checked={social_media_presence === 'No'}
                                                    onClick={()=> setShowSocialMediaSection(false)}
                                                    />
                                                <span>{t('Form_no')}</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>   

                            {showSocialMediaSection?<> 
                                <div className='usaForm__input_grp'>
                                    <div className='usaForm__input_wrap'>
                                        <label className='usaForm__form__label' htmlFor='social_media_identifier'>{t('usaForm_socialMedia_identifier')}</label>
                                        <input 
                                            className='usaForm__form__input usaForm__input__for__two' 
                                            name='social_media_identifier' 
                                            type='text' 
                                            onChange={e => onChange(e)} 
                                            value={social_media_identifier} 
                                        />
                                    </div>
                                </div>
                            </>:null}   

                            <hr className='usaForm__hr'/>
                            <h3 className='usaForm__education'>{t('usaForm_education')}</h3>
                            <p className='usaForm__education__text'>{t('usaForm_education_text')}</p>
                            
                            <p className='usaForm__section__question'>{t('usaForm_educationLevel1')}</p>
                            <div className='usaForm__input_wrap usaForm__input__radio__group'>
                                <div className='usaForm__input_wrap usaForm__input__radio'>
                                    <ul className='usaForm__ul'>
                                        <li>
                                            <label className='usaForm__radio__wrap'>
                                                <input 
                                                    type='radio' 
                                                    name='secoondary_or_high_education1'
                                                    value='Yes'
                                                    className='usaForm__input__radio'
                                                    onChange={e => onChange(e)}
                                                    checked={secoondary_or_high_education1 === 'Yes'}
                                                    onClick={()=> setShowEducation1Section(true)}
                                                />
                                                <span>{t('Form_yes')}</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className='usaForm__radio__wrap'>
                                                <input 
                                                    type='radio'
                                                    name='secoondary_or_high_education1'
                                                    value='No'
                                                    className='usaForm__input__radio'
                                                    onChange={e => onChange(e)}
                                                    checked={secoondary_or_high_education1 === 'No'}
                                                    onClick={()=> setShowEducation1Section(false)}
                                                />
                                                <span>{t('Form_no')}</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                            {showEducation1Section?<> 
                                <div className='usaForm__input_grp'>
                                    <div className='usaForm__input_wrap'>
                                        <label className='usaForm__form__label' htmlFor='institute_name1'>{t('Form_edu_instituteName')}</label>
                                        <input 
                                            className='usaForm__form__input usaForm__input__for__two' 
                                            name='institute_name1' 
                                            type='text' 
                                            placeholder={t('Form_edu_instituteNameEx')}
                                            onChange={e => onChange(e)} 
                                            value={institute_name1} 
                                        />
                                    </div>
                                    <div className='usaForm__input_wrap'>
                                        <label className='usaForm__form__label' htmlFor='course_name1'>{t('Form_edu_courseName')}</label>
                                        <input 
                                            className='usaForm__form__input usaForm__input__for__two' 
                                            name='course_name1' 
                                            type='text' 
                                            placeholder={t('Form_edu_courseNameEx')}
                                            onChange={e => onChange(e)} 
                                            value={course_name1} 
                                        />
                                    </div>
                                </div>

                                <div className='usaForm__input_grp'>
                                    <div className='usaForm__wrap'>
                                        <label className='usaForm__form__label' htmlFor='course_start_date1'>{t('Form_edu_startDate')}</label>
                                        <input 
                                            className='usaForm__form__input usaForm__input__for__two' 
                                            name='course_start_date1' 
                                            type='date' 
                                            onChange={e => onChange(e)} 
                                            value={course_start_date1} 
                                        />
                                    </div>
                                    <div className='usaForm__wrap'>
                                        <label className='usaForm__form__label' htmlFor='place_of_birth'>{t('Form_edu_endDate')}</label>
                                        <input 
                                            className='usaForm__form__input usaForm__input__for__two' 
                                            name='course_end_date1' 
                                            type='date' 
                                            onChange={e => onChange(e)} 
                                            value={course_end_date1} 
                                        />
                                    </div>
                                </div>
                                <div className='usaForm__input_wrap usaForm__input_wrap__bt'>
                                    <label className='usaForm__form__label' htmlFor='institute_address1'>{t('Form_address')}</label>
                                    <input 
                                        className='usaForm__input__for__one' 
                                        name='institute_address1' 
                                        type='text' 
                                        placeholder={t('Form_addressEx')} 
                                        onChange={e => onChange(e)} 
                                        value={institute_address1} 
                                    />
                                </div>
                            </> :null} 

                            <hr className='usaForm__hr'/>
                            <p className='usaForm__section__question'>{t('usaForm_educationLevel2')}</p>
                            <div className='usaForm__input_wrap usaForm__input__radio__group'>
                                <div className='usaForm__input_wrap usaForm__input__radio'>
                                    <ul className='usaForm__ul'>
                                        <li>
                                            <label className='usaForm__radio__wrap'>
                                                <input 
                                                    type='radio' 
                                                    name='secoondary_or_high_education2'
                                                    value='Yes'
                                                    className='usaForm__input__radio'
                                                    onChange={e => onChange(e)}
                                                    checked={secoondary_or_high_education2 === 'Yes'}
                                                    onClick={()=> setShowEducation2Section(true)}
                                                />
                                                <span>{t('Form_yes')}</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className='usaForm__radio__wrap'>
                                                <input 
                                                    type='radio'
                                                    name='secoondary_or_high_education2'
                                                    value='No'
                                                    className='usaForm__input__radio'
                                                    onChange={e => onChange(e)}
                                                    checked={secoondary_or_high_education2 === 'No'}
                                                    onClick={()=> setShowEducation2Section(false)}
                                                />
                                                <span>{t('Form_no')}</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                            {showEducation2Section?<> 
                                <div className='usaForm__input_grp'>
                                    <div className='usaForm__input_wrap'>
                                        <label className='usaForm__form__label' htmlFor='institute_name2'>{t('Form_edu_instituteName')}</label>
                                        <input 
                                            className='usaForm__form__input usaForm__input__for__two' 
                                            name='institute_name2' 
                                            type='text' 
                                            placeholder={t('Form_edu_instituteNameEx')}
                                            onChange={e => onChange(e)} 
                                            value={institute_name2} 
                                        />
                                    </div>
                                    <div className='usaForm__input_wrap'>
                                        <label className='usaForm__form__label' htmlFor='course_name2'>{t('Form_edu_courseName')}</label>
                                        <input 
                                            className='usaForm__form__input usaForm__input__for__two' 
                                            name='course_name2' 
                                            type='text' 
                                            placeholder={t('Form_edu_courseNameEx')}
                                            onChange={e => onChange(e)} 
                                            value={course_name2} 
                                        />
                                    </div>
                                </div>

                                <div className='usaForm__input_grp'>
                                    <div className='usaForm__wrap'>
                                        <label className='usaForm__form__label' htmlFor='course_start_date2'>{t('Form_edu_startDate')}</label>
                                        <input 
                                            className='usaForm__form__input usaForm__input__for__two' 
                                            name='course_start_date2' 
                                            type='date' 
                                            onChange={e => onChange(e)} 
                                            value={course_start_date2} 
                                        />
                                    </div>
                                    <div className='usaForm__wrap'>
                                        <label className='usaForm__form__label' htmlFor='course_end_date2'>{t('Form_edu_endDate')}</label>
                                        <input 
                                            className='usaForm__form__input usaForm__input__for__two' 
                                            name='course_end_date2' 
                                            type='date' 
                                            onChange={e => onChange(e)} 
                                            value={course_end_date2} 
                                        />
                                    </div>
                                </div>
                                <div className='usaForm__input_wrap usaForm__input_wrap__bt'>
                                    <label className='usaForm__form__label' htmlFor='institute_address2'>{t('Form_address')}</label>
                                    <input 
                                        className='usaForm__input__for__one' 
                                        name='institute_address2' 
                                        type='text' 
                                        placeholder={t('Form_addressEx')} 
                                        onChange={e => onChange(e)} 
                                        value={institute_address2} 
                                    />
                                </div>
                            </> :null} 

                            <hr className='usaForm__hr'/>
                            <h3 className='usaForm__education'>{t('usaForm_reference')}</h3>
                            <p className='usaForm__education__text1'>{t('usaForm_reference_note')}</p>
                            
                            <hr className='usaForm__hr'/>
                            <h3 className='usaForm__reference__person'>{t('usaForm_reference1')}</h3>    
                            <div className='usaForm__input_grp'>
                                <div className='usaForm__input_wrap'>
                                    <label className='usaForm__form__label' htmlFor='reference1_first_name'>{t('Form_firstName')}</label>
                                    <input 
                                        className='usaForm__form__input usaForm__input__for__two' 
                                        name='reference1_first_name' 
                                        type='text' 
                                        onChange={e => onChange(e)} 
                                        value={reference1_first_name} 
                                    />
                                </div>
                                <div className='usaForm__input_wrap'>
                                    <label className='usaForm__form__label' htmlFor='reference1_last_name'>{t('Form_lastName')}</label>
                                    <input 
                                        className='usaForm__form__input usaForm__input__for__two' 
                                        name='reference1_last_name' 
                                        type='text' 
                                        onChange={e => onChange(e)} 
                                        value={reference1_last_name} 
                                    />
                                </div>
                            </div>

                            <div className='usaForm__input_grp'>
                                <div className='usaForm__wrap'>
                                    <label className='usaForm__form__label' htmlFor='reference1_phone'>{t('Form_phone')}</label>
                                    <input 
                                        className='usaForm__form__input usaForm__input__for__two' 
                                        name='reference1_phone' 
                                        type='text' 
                                        onChange={e => onChange(e)} 
                                        value={reference1_phone} 
                                    />
                                </div>
                            </div>
                            <div className='usaForm__input_wrap usaForm__input_wrap__bt'>
                                <label className='usaForm__form__label' htmlFor='reference1_address'>{t('Form_address')}</label>
                                <input 
                                    className='usaForm__input__for__one' 
                                    name='reference1_address' 
                                    type='text' 
                                    placeholder={t('Form_addressEx')} 
                                    onChange={e => onChange(e)} 
                                    value={reference1_address} 
                                />
                            </div>

                            <hr className='usaForm__hr'/>
                            <h3 className='usaForm__reference__person'>{t('usaForm_reference2')}</h3>    
                            <div className='usaForm__input_grp'>
                                <div className='usaForm__input_wrap'>
                                    <label className='usaForm__form__label' htmlFor='reference2_first_name'>{t('Form_firstName')}</label>
                                    <input 
                                        className='usaForm__form__input usaForm__input__for__two' 
                                        name='reference2_first_name' 
                                        type='text' 
                                        onChange={e => onChange(e)} 
                                        value={reference2_first_name} 
                                    />
                                </div>
                                <div className='usaForm__input_wrap'>
                                    <label className='usaForm__form__label' htmlFor='reference2_last_name'>{t('Form_lastName')}</label>
                                    <input 
                                        className='usaForm__form__input usaForm__input__for__two' 
                                        name='reference2_last_name' 
                                        type='text' 
                                        onChange={e => onChange(e)} 
                                        value={reference2_last_name} 
                                    />
                                </div>
                            </div>

                            <div className='usaForm__input_grp'>
                                <div className='usaForm__wrap'>
                                    <label className='usaForm__form__label' htmlFor='reference2_phone'>{t('Form_phone')}</label>
                                    <input 
                                        className='usaForm__form__input usaForm__input__for__two' 
                                        name='reference2_phone' 
                                        type='text' 
                                        onChange={e => onChange(e)} 
                                        value={reference2_phone} 
                                    />
                                </div>
                            </div>
                            <div className='usaForm__input_wrap usaForm__input_wrap__bt'>
                                <label className='usaForm__form__label' htmlFor='reference2_address'>{t('Form_address')}</label>
                                <input 
                                    className='usaForm__input__for__one' 
                                    name='reference2_address' 
                                    type='text' 
                                    placeholder={t('Form_addressEx')} 
                                    onChange={e => onChange(e)} 
                                    value={reference2_address} 
                                />
                            </div>

                            <hr className='usaForm__hr'/>
                            <div className='usaForm__input_wrap'>
                                <label className='usaForm__form__label' htmlFor='message'>{t('Form_additional')}</label>
                                <textarea 
                                    className='usaForm__form__textarea'
                                    name='aditional_info'
                                    cols='30'
                                    rows='10'
                                    placeholder={t('Form_message')}
                                    onChange={e => onChange(e)} 
                                    value={aditional_info} 
                                />
                            </div>
                            <button className='usaForm__button' htmltype='submit'>{t('Form_send')}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default connect(null, { setAlert })(UsaAppForm);