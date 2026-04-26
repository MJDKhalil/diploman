import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import styles from '../styles/UsaAppForm.module.css';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18n from '../../i18n';
import { DEMO_MODE, DEMO_ALERT_MSG } from '../utils/demo';

import PassportSection from '../components/forms/usa/PassportSection';
import AddressMaritalSection from '../components/forms/usa/AddressMaritalSection';
import SpouseSection from '../components/forms/usa/SpouseSection';
import TripSection from '../components/forms/usa/TripSection';
import EmploymentSection from '../components/forms/usa/EmploymentSection';
import CompanionsSection from '../components/forms/usa/CompanionsSection';
import ParentsSection from '../components/forms/usa/ParentsSection';
import VisaHistorySection from '../components/forms/usa/VisaHistorySection';
import OtherVisitsSection from '../components/forms/usa/OtherVisitsSection';
import USAVisitsSection from '../components/forms/usa/USAVisitsSection';
import RelativesInUSASection from '../components/forms/usa/RelativesInUSASection';
import SocialMediaSection from '../components/forms/usa/SocialMediaSection';
import EducationSection from '../components/forms/usa/EducationSection';
import ReferencesSection from '../components/forms/usa/ReferencesSection';

function UsaAppForm({ setAlert }) {
    const { t } = useTranslation();
    const navigate = useRouter();

    // --- show/hide state ---
    const [show, setShow] = useState(false);
    const [showJobDetails, setShowJobDetails] = useState(false);
    const [showPurpose, setShowPurpose] = useState(false);
    const [showMaritialStatus, setShowMaritialStatus] = useState(false);
    const [showMaritialSection, setShowMaritialSection] = useState(false);
    const [showSpousSection, setShowSpousSection] = useState(false);
    const [showSchoolDetails, setShowSchoolDetails] = useState(false);
    const [showInviterDetails, setShowInviterDetails] = useState(false);
    const [showMedicalDetails, setShowMedicalDetails] = useState(false);
    const [showOtherTripDetails, setShowOtherTripDetails] = useState(false);
    const [showRefusalSection, setShowRefusalSection] = useState(false);
    const [showTripsSection, setShowTripsSection] = useState(false);
    const [showUsaTripsSection, setShowUsaTripsSection] = useState(false);
    const [showUsaIssuedVisa, setShowUsaIssuedVisa] = useState(false);
    const [showUsaVisit2, setShowUsaVisit2] = useState(false);
    const [showUsaVisit3, setShowUsaVisit3] = useState(false);
    const [showUsaVisit4, setShowUsaVisit4] = useState(false);
    const [showUsaVisit5, setShowUsaVisit5] = useState(false);
    const [showUsaVisit6, setShowUsaVisit6] = useState(false);
    const [showUsaVisit7, setShowUsaVisit7] = useState(false);
    const [showCountryVisit2, setShowCountryVisit2] = useState(false);
    const [showCountryVisit3, setShowCountryVisit3] = useState(false);
    const [showCountryVisit4, setShowCountryVisit4] = useState(false);
    const [showCountryVisit5, setShowCountryVisit5] = useState(false);
    const [showCountryVisit6, setShowCountryVisit6] = useState(false);
    const [showCountryVisit7, setShowCountryVisit7] = useState(false);
    const [showFamilyAbroadSection, setShowFamilyAbroadSection] = useState(false);
    const [showRelativeAbroad2, setShowRelativeAbroad2] = useState(false);
    const [showRelativeAbroad3, setShowRelativeAbroad3] = useState(false);
    const [showRelativeAbroad4, setShowRelativeAbroad4] = useState(false);
    const [showRelativeAbroad5, setShowRelativeAbroad5] = useState(false);
    const [showNoOfCompanions, setShowNoOfCompanions] = useState(false);
    const [showCompanionSection2, setShowCompanionSection2] = useState(false);
    const [showCompanionSection3, setShowCompanionSection3] = useState(false);
    const [showCompanionSection4, setShowCompanionSection4] = useState(false);
    const [showCompanionSection5, setShowCompanionSection5] = useState(false);
    const [showSocialMediaSection, setShowSocialMediaSection] = useState(false);
    const [showEducation1Section, setShowEducation1Section] = useState(false);
    const [showEducation2Section, setShowEducation2Section] = useState(false);

    // --- form data ---
    const [formData, setFormData] = useState({
        email: '', pasport_number: '', first_name: '', last_name: '', dob: null, place_of_birth: '', phone: '', nationality: '', passport_issue_date: null, passport_expiry_date: null, address: '', passport_photo: null, lost_passport: 'No', permanent_resident_in_other_country: 'No', residency_country: '', national_identification_number: '', person_paying_for_trip: '', aditional_info: '', purpose_of_trip: '', work_status: 'Student', job_title: '', job_address: '', starting_date: null, company_name: '', company_phone: '', salary: '', job_desc: '', arrive_date: null, length_of_stay: '', companion1_first_name: '', companion1_last_name: '', companion1_relationship: '', companion2_first_name: '', companion2_last_name: '', companion2_relationship: '', companion3_first_name: '', companion3_last_name: '', companion3_relationship: '', companion4_first_name: '', companion4_last_name: '', companion4_relationship: '', companion5_first_name: '', companion5_last_name: '', companion5_relationship: '', maritial_status: '', spouse_first_name: '', spouse_last_name: '', spouse_dob: null, spouse_nationality: '', spouse_passport_photo: null, spouse_pasport_number: '', spouse_city_of_birth: '', school_name: '', admission_offer_photo: null, inviter_full_name: '', inviter_email: '', inviter_address: '', invitation_letter: null, medical_invitation_letter: null, medical_details: '', hospital_name: '', other_travel_reason: '', father_first_name: '', father_last_name: '', father_dob: null, father_nationality: '', father_city_of_birth: '', mother_first_name: '', mother_last_name: '', mother_dob: null, mother_nationality: '', mother_city_of_birth: '', visa_lost: 'No', visa_cancelled: 'No', visa_refusl: 'No', country_of_refusal: '', visa_refusal_date: null, visa_refusal_desc: '', visited_other_countries: 'No', visted_country: '', number_of_visits: '1', visted_country2: '', visted_country3: '', visted_country4: '', visted_country5: '', visted_country6: '', visted_country7: '', visited_usa: 'No', number_of_usa_visits: '1', usa_visit_arrival_date: '', period_of_usa_stay: '', usa_visit_arrival_date2: '', period_of_usa_stay2: '', usa_visit_arrival_date3: '', period_of_usa_stay3: '', usa_visit_arrival_date4: '', period_of_usa_stay4: '', usa_visit_arrival_date5: '', period_of_usa_stay5: '', usa_visit_arrival_date6: '', period_of_usa_stay6: '', usa_visit_arrival_date7: '', period_of_usa_stay7: '', usa_driving_license: 'No', obtained_usa_visa: 'No', made_finger_prints: 'No', usa_visa_issue_date: '', usa_visa_no: '', family_in_usa: 'No', number_of_relatives: '1', relative1_first_name: '', relative1_last_name: '', relative1_status: '', relative1_relationship: '', relative2_first_name: '', relative2_last_name: '', relative2_status: '', relative2_relationship: '', relative3_first_name: '', relative3_last_name: '', relative3_status: '', relative3_relationship: '', relative4_first_name: '', relative4_last_name: '', relative4_status: '', relative4_relationship: '', relative5_first_name: '', relative5_last_name: '', relative5_status: '', relative5_relationship: '', social_media_presence: 'No', social_media_identifier: '', secoondary_or_high_education1: 'No', institute_name1: '', institute_address1: '', course_name1: '', course_start_date1: null, course_end_date1: null, secoondary_or_high_education2: 'No', institute_name2: '', institute_address2: '', course_name2: '', course_start_date2: null, course_end_date2: null, travelling_alone: 'No', number_of_companions: '1', reference1_first_name: '', reference1_last_name: '', reference1_address: '', reference1_phone: '', reference2_first_name: '', reference2_last_name: '', reference2_address: '', reference2_phone: ''
    });

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onFileChange = (name, file) => setFormData({ ...formData, [name]: file });

    const { email, pasport_number, first_name, last_name, dob, place_of_birth, phone, nationality, passport_issue_date, passport_expiry_date, address, passport_photo, lost_passport, permanent_resident_in_other_country, residency_country, national_identification_number, person_paying_for_trip, aditional_info, purpose_of_trip, work_status, job_title, job_address, starting_date, company_name, company_phone, salary, job_desc, arrive_date, length_of_stay, companion1_first_name, companion1_last_name, companion1_relationship, companion2_first_name, companion2_last_name, companion2_relationship, companion3_first_name, companion3_last_name, companion3_relationship, companion4_first_name, companion4_last_name, companion4_relationship, companion5_first_name, companion5_last_name, companion5_relationship, maritial_status, spouse_first_name, spouse_last_name, spouse_dob, spouse_nationality, spouse_passport_photo, spouse_pasport_number, spouse_city_of_birth, school_name, admission_offer_photo, inviter_full_name, inviter_email, inviter_address, invitation_letter, medical_invitation_letter, medical_details, hospital_name, other_travel_reason, father_first_name, father_last_name, father_dob, father_nationality, father_city_of_birth, mother_first_name, mother_last_name, mother_dob, mother_nationality, mother_city_of_birth, visa_lost, visa_cancelled, visa_refusl, country_of_refusal, visa_refusal_date, visa_refusal_desc, visited_other_countries, visted_country, number_of_visits, visted_country2, visted_country3, visted_country4, visted_country5, visted_country6, visted_country7, visited_usa, number_of_usa_visits, usa_visit_arrival_date, period_of_usa_stay, usa_visit_arrival_date2, period_of_usa_stay2, usa_visit_arrival_date3, period_of_usa_stay3, usa_visit_arrival_date4, period_of_usa_stay4, usa_visit_arrival_date5, period_of_usa_stay5, usa_visit_arrival_date6, period_of_usa_stay6, usa_visit_arrival_date7, period_of_usa_stay7, usa_driving_license, obtained_usa_visa, made_finger_prints, usa_visa_issue_date, usa_visa_no, family_in_usa, number_of_relatives, relative1_first_name, relative1_last_name, relative1_status, relative1_relationship, relative2_first_name, relative2_last_name, relative2_status, relative2_relationship, relative3_first_name, relative3_last_name, relative3_status, relative3_relationship, relative4_first_name, relative4_last_name, relative4_status, relative4_relationship, relative5_first_name, relative5_last_name, relative5_status, relative5_relationship, social_media_presence, social_media_identifier, secoondary_or_high_education1, institute_name1, institute_address1, course_name1, course_start_date1, course_end_date1, secoondary_or_high_education2, institute_name2, institute_address2, course_name2, course_start_date2, course_end_date2, travelling_alone, number_of_companions, reference1_first_name, reference1_last_name, reference1_address, reference1_phone, reference2_first_name, reference2_last_name, reference2_address, reference2_phone } = formData;

    const onSubmit = async (e) => {
        e.preventDefault();

        if (DEMO_MODE) {
            setAlert(DEMO_ALERT_MSG, 'info');
            return;
        }

        let dataForm = new FormData();

        dataForm.append('pasport_number', pasport_number);
        dataForm.append('email', email);
        dataForm.append('first_name', first_name);
        dataForm.append('last_name', last_name);
        dataForm.append('place_of_birth', place_of_birth);
        dataForm.append('phone', phone);
        dataForm.append('nationality', nationality);
        dataForm.append('address', address);
        dataForm.append('national_identification_number', national_identification_number);
        dataForm.append('aditional_info', aditional_info);
        dataForm.append('purpose_of_trip', purpose_of_trip);
        dataForm.append('person_paying_for_trip', person_paying_for_trip);
        dataForm.append('work_status', work_status);
        dataForm.append('job_title', job_title);
        dataForm.append('job_address', job_address);
        dataForm.append('company_name', company_name);
        dataForm.append('company_phone', company_phone);
        dataForm.append('salary', salary);
        dataForm.append('job_desc', job_desc);
        dataForm.append('maritial_status', maritial_status);
        dataForm.append('spouse_first_name', spouse_first_name);
        dataForm.append('spouse_last_name', spouse_last_name);
        dataForm.append('spouse_nationality', spouse_nationality);
        dataForm.append('spouse_pasport_number', spouse_pasport_number);
        dataForm.append('spouse_city_of_birth', spouse_city_of_birth);
        dataForm.append('school_name', school_name);
        dataForm.append('inviter_full_name', inviter_full_name);
        dataForm.append('inviter_email', inviter_email);
        dataForm.append('inviter_address', inviter_address);
        dataForm.append('medical_details', medical_details);
        dataForm.append('hospital_name', hospital_name);
        dataForm.append('other_travel_reason', other_travel_reason);
        dataForm.append('father_first_name', father_first_name);
        dataForm.append('father_last_name', father_last_name);
        dataForm.append('father_nationality', father_nationality);
        dataForm.append('father_city_of_birth', father_city_of_birth);
        dataForm.append('mother_first_name', mother_first_name);
        dataForm.append('mother_last_name', mother_last_name);
        dataForm.append('mother_nationality', mother_nationality);
        dataForm.append('mother_city_of_birth', mother_city_of_birth);
        dataForm.append('lost_passport', lost_passport);
        dataForm.append('permanent_resident_in_other_country', permanent_resident_in_other_country);
        dataForm.append('residency_country', residency_country);
        dataForm.append('visited_other_countries', visited_other_countries);
        dataForm.append('visted_country', visted_country);
        dataForm.append('visted_country2', visted_country2);
        dataForm.append('visted_country3', visted_country3);
        dataForm.append('visted_country4', visted_country4);
        dataForm.append('visted_country5', visted_country5);
        dataForm.append('visted_country6', visted_country6);
        dataForm.append('visted_country7', visted_country7);
        dataForm.append('visa_refusl', visa_refusl);
        dataForm.append('country_of_refusal', country_of_refusal);
        dataForm.append('visa_refusal_desc', visa_refusal_desc);
        dataForm.append('visited_usa', visited_usa);
        dataForm.append('number_of_usa_visits', number_of_usa_visits);
        dataForm.append('usa_driving_license', usa_driving_license);
        dataForm.append('obtained_usa_visa', obtained_usa_visa);
        dataForm.append('made_finger_prints', made_finger_prints);
        dataForm.append('visa_lost', visa_lost);
        dataForm.append('usa_visa_no', usa_visa_no);
        dataForm.append('visa_cancelled', visa_cancelled);
        dataForm.append('usa_visa_issue_date', usa_visa_issue_date);
        dataForm.append('length_of_stay', length_of_stay);
        dataForm.append('usa_visit_arrival_date', usa_visit_arrival_date);
        dataForm.append('period_of_usa_stay', period_of_usa_stay);
        dataForm.append('usa_visit_arrival_date2', usa_visit_arrival_date2);
        dataForm.append('period_of_usa_stay2', period_of_usa_stay2);
        dataForm.append('usa_visit_arrival_date3', usa_visit_arrival_date3);
        dataForm.append('period_of_usa_stay3', period_of_usa_stay3);
        dataForm.append('usa_visit_arrival_date4', usa_visit_arrival_date4);
        dataForm.append('period_of_usa_stay4', period_of_usa_stay4);
        dataForm.append('usa_visit_arrival_date5', usa_visit_arrival_date5);
        dataForm.append('period_of_usa_stay5', period_of_usa_stay5);
        dataForm.append('usa_visit_arrival_date6', usa_visit_arrival_date6);
        dataForm.append('period_of_usa_stay6', period_of_usa_stay6);
        dataForm.append('usa_visit_arrival_date7', usa_visit_arrival_date7);
        dataForm.append('period_of_usa_stay7', period_of_usa_stay7);
        dataForm.append('family_in_usa', family_in_usa);
        dataForm.append('number_of_relatives', number_of_relatives);
        dataForm.append('relative1_first_name', relative1_first_name);
        dataForm.append('relative1_last_name', relative1_last_name);
        dataForm.append('relative1_status', relative1_status);
        dataForm.append('relative1_relationship', relative1_relationship);
        dataForm.append('relative2_first_name', relative2_first_name);
        dataForm.append('relative2_last_name', relative2_last_name);
        dataForm.append('relative2_status', relative2_status);
        dataForm.append('relative2_relationship', relative2_relationship);
        dataForm.append('relative3_first_name', relative3_first_name);
        dataForm.append('relative3_last_name', relative3_last_name);
        dataForm.append('relative3_status', relative3_status);
        dataForm.append('relative3_relationship', relative3_relationship);
        dataForm.append('relative4_first_name', relative4_first_name);
        dataForm.append('relative4_last_name', relative4_last_name);
        dataForm.append('relative4_status', relative4_status);
        dataForm.append('relative4_relationship', relative4_relationship);
        dataForm.append('relative5_first_name', relative5_first_name);
        dataForm.append('relative5_last_name', relative5_last_name);
        dataForm.append('relative5_status', relative5_status);
        dataForm.append('relative5_relationship', relative5_relationship);
        dataForm.append('travelling_alone', travelling_alone);
        dataForm.append('number_of_companions', number_of_companions);
        dataForm.append('companion1_first_name', companion1_first_name);
        dataForm.append('companion1_last_name', companion1_last_name);
        dataForm.append('companion1_relationship', companion1_relationship);
        dataForm.append('companion2_first_name', companion2_first_name);
        dataForm.append('companion2_last_name', companion2_last_name);
        dataForm.append('companion2_relationship', companion2_relationship);
        dataForm.append('companion3_first_name', companion3_first_name);
        dataForm.append('companion3_last_name', companion3_last_name);
        dataForm.append('companion3_relationship', companion3_relationship);
        dataForm.append('companion4_first_name', companion4_first_name);
        dataForm.append('companion4_last_name', companion4_last_name);
        dataForm.append('companion4_relationship', companion4_relationship);
        dataForm.append('companion5_first_name', companion5_first_name);
        dataForm.append('companion5_last_name', companion5_last_name);
        dataForm.append('companion5_relationship', companion5_relationship);
        dataForm.append('social_media_presence', social_media_presence);
        dataForm.append('social_media_identifier', social_media_identifier);
        dataForm.append('secoondary_or_high_education1', secoondary_or_high_education1);
        dataForm.append('institute_name1', institute_name1);
        dataForm.append('institute_address1', institute_address1);
        dataForm.append('course_name1', course_name1);
        dataForm.append('secoondary_or_high_education2', secoondary_or_high_education2);
        dataForm.append('institute_name2', institute_name2);
        dataForm.append('institute_address2', institute_address2);
        dataForm.append('course_name2', course_name2);

        if (passport_photo !== null) dataForm.append('passport_photo', passport_photo);
        if (dob !== null) dataForm.append('dob', dob);
        if (passport_issue_date !== null) dataForm.append('passport_issue_date', passport_issue_date);
        if (passport_expiry_date !== null) dataForm.append('passport_expiry_date', passport_expiry_date);
        if (starting_date !== null) dataForm.append('starting_date', starting_date);
        if (arrive_date !== null) dataForm.append('arrive_date', arrive_date);
        if (spouse_dob !== null) dataForm.append('spouse_dob', spouse_dob);
        if (spouse_passport_photo !== null) dataForm.append('spouse_passport_photo', spouse_passport_photo);
        if (admission_offer_photo !== null) dataForm.append('admission_offer_photo', admission_offer_photo);
        if (invitation_letter !== null) dataForm.append('invitation_letter', invitation_letter);
        if (medical_invitation_letter !== null) dataForm.append('medical_invitation_letter', medical_invitation_letter);
        if (father_dob !== null) dataForm.append('father_dob', father_dob);
        if (mother_dob !== null) dataForm.append('mother_dob', mother_dob);
        if (visa_refusal_date !== null) dataForm.append('visa_refusal_date', visa_refusal_date);
        if (passport_photo !== null) dataForm.append('course_start_date1', course_start_date1);
        if (passport_photo !== null) dataForm.append('course_end_date1', course_end_date1);
        if (passport_photo !== null) dataForm.append('course_start_date2', course_start_date2);
        if (passport_photo !== null) dataForm.append('course_end_date2', course_end_date2);

        await axios({
            method: 'post',
            url: `${process.env.NEXT_PUBLIC_API_URL}/api/application-form/usa-form/`,
            data: dataForm,
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(() => {
                navigate('/');
                setAlert(t('alert_form_sent'), 'success');
            })
            .catch(() => {
                setAlert(t('alert_form_err'), 'error');
            });
    };

    return (
        <div className={styles.usaForm}>
            <div className={styles.usaForm__wrapper}>
                <Head>
                    <title>Diploman - USA Form</title>
                    <meta name='description' content='USA Form page' />
                </Head>
                <div className={styles.usaForm__inner__wrapper}>
                    <h1 className={styles.usaForm__title}>{t('usaForm_title')}</h1>
                    <hr className={styles.usaForm__hr} />
                    <form className={styles.usaForm__form} onSubmit={e => onSubmit(e)}>

                        <PassportSection
                            formData={formData}
                            onChange={onChange}
                            onFileChange={onFileChange}
                            show={show}
                            setShow={setShow}
                        />

                        <AddressMaritalSection
                            formData={formData}
                            onChange={onChange}
                            showMaritialStatus={showMaritialStatus}
                            setShowMaritialStatus={setShowMaritialStatus}
                            showMaritialSection={showMaritialSection}
                            setShowMaritialSection={setShowMaritialSection}
                        />

                        <SpouseSection
                            formData={formData}
                            onChange={onChange}
                            onFileChange={onFileChange}
                            showMaritialSection={showMaritialSection}
                            showSpousSection={showSpousSection}
                            setShowSpousSection={setShowSpousSection}
                        />

                        <TripSection
                            formData={formData}
                            onChange={onChange}
                            onFileChange={onFileChange}
                            showPurpose={showPurpose}
                            setShowPurpose={setShowPurpose}
                            showSchoolDetails={showSchoolDetails}
                            setShowSchoolDetails={setShowSchoolDetails}
                            showInviterDetails={showInviterDetails}
                            setShowInviterDetails={setShowInviterDetails}
                            showMedicalDetails={showMedicalDetails}
                            setShowMedicalDetails={setShowMedicalDetails}
                            showOtherTripDetails={showOtherTripDetails}
                            setShowOtherTripDetails={setShowOtherTripDetails}
                        />

                        <EmploymentSection
                            formData={formData}
                            onChange={onChange}
                            showJobDetails={showJobDetails}
                            setShowJobDetails={setShowJobDetails}
                        />

                        <CompanionsSection
                            formData={formData}
                            onChange={onChange}
                            showNoOfCompanions={showNoOfCompanions}
                            setShowNoOfCompanions={setShowNoOfCompanions}
                            showCompanionSection2={showCompanionSection2}
                            setShowCompanionSection2={setShowCompanionSection2}
                            showCompanionSection3={showCompanionSection3}
                            setShowCompanionSection3={setShowCompanionSection3}
                            showCompanionSection4={showCompanionSection4}
                            setShowCompanionSection4={setShowCompanionSection4}
                            showCompanionSection5={showCompanionSection5}
                            setShowCompanionSection5={setShowCompanionSection5}
                        />

                        <ParentsSection
                            formData={formData}
                            onChange={onChange}
                        />

                        <VisaHistorySection
                            formData={formData}
                            onChange={onChange}
                            showRefusalSection={showRefusalSection}
                            setShowRefusalSection={setShowRefusalSection}
                        />

                        <OtherVisitsSection
                            formData={formData}
                            onChange={onChange}
                            showTripsSection={showTripsSection}
                            setShowTripsSection={setShowTripsSection}
                            showCountryVisit2={showCountryVisit2}
                            setShowCountryVisit2={setShowCountryVisit2}
                            showCountryVisit3={showCountryVisit3}
                            setShowCountryVisit3={setShowCountryVisit3}
                            showCountryVisit4={showCountryVisit4}
                            setShowCountryVisit4={setShowCountryVisit4}
                            showCountryVisit5={showCountryVisit5}
                            setShowCountryVisit5={setShowCountryVisit5}
                            showCountryVisit6={showCountryVisit6}
                            setShowCountryVisit6={setShowCountryVisit6}
                            showCountryVisit7={showCountryVisit7}
                            setShowCountryVisit7={setShowCountryVisit7}
                        />

                        <USAVisitsSection
                            formData={formData}
                            onChange={onChange}
                            showUsaTripsSection={showUsaTripsSection}
                            setShowUsaTripsSection={setShowUsaTripsSection}
                            showUsaIssuedVisa={showUsaIssuedVisa}
                            setShowUsaIssuedVisa={setShowUsaIssuedVisa}
                            showUsaVisit2={showUsaVisit2}
                            setShowUsaVisit2={setShowUsaVisit2}
                            showUsaVisit3={showUsaVisit3}
                            setShowUsaVisit3={setShowUsaVisit3}
                            showUsaVisit4={showUsaVisit4}
                            setShowUsaVisit4={setShowUsaVisit4}
                            showUsaVisit5={showUsaVisit5}
                            setShowUsaVisit5={setShowUsaVisit5}
                            showUsaVisit6={showUsaVisit6}
                            setShowUsaVisit6={setShowUsaVisit6}
                            showUsaVisit7={showUsaVisit7}
                            setShowUsaVisit7={setShowUsaVisit7}
                        />

                        <RelativesInUSASection
                            formData={formData}
                            onChange={onChange}
                            showFamilyAbroadSection={showFamilyAbroadSection}
                            setShowFamilyAbroadSection={setShowFamilyAbroadSection}
                            showRelativeAbroad2={showRelativeAbroad2}
                            setShowRelativeAbroad2={setShowRelativeAbroad2}
                            showRelativeAbroad3={showRelativeAbroad3}
                            setShowRelativeAbroad3={setShowRelativeAbroad3}
                            showRelativeAbroad4={showRelativeAbroad4}
                            setShowRelativeAbroad4={setShowRelativeAbroad4}
                            showRelativeAbroad5={showRelativeAbroad5}
                            setShowRelativeAbroad5={setShowRelativeAbroad5}
                        />

                        <SocialMediaSection
                            formData={formData}
                            onChange={onChange}
                            showSocialMediaSection={showSocialMediaSection}
                            setShowSocialMediaSection={setShowSocialMediaSection}
                        />

                        <EducationSection
                            formData={formData}
                            onChange={onChange}
                            showEducation1Section={showEducation1Section}
                            setShowEducation1Section={setShowEducation1Section}
                            showEducation2Section={showEducation2Section}
                            setShowEducation2Section={setShowEducation2Section}
                        />

                        <ReferencesSection
                            formData={formData}
                            onChange={onChange}
                        />

                        <button className={styles.usaForm__submit__btn} type='submit'>
                            {t('Form_submit')}
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'en', ['common'], i18n)),
    }
});

export default connect(null, { setAlert })(UsaAppForm);
