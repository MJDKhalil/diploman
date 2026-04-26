import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import styles from '../styles/ApplicationForm.module.css';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18n from '../../i18n';
import { DEMO_MODE, DEMO_ALERT_MSG } from '../utils/demo';

import PassportSection from '../components/forms/uk/PassportSection';
import AddressSection from '../components/forms/uk/AddressSection';
import TripSection from '../components/forms/uk/TripSection';
import SpouseSection from '../components/forms/uk/SpouseSection';
import EmploymentSection from '../components/forms/uk/EmploymentSection';
import ParentsSection from '../components/forms/uk/ParentsSection';
import ChildrenSection from '../components/forms/uk/ChildrenSection';
import VisaHistorySection from '../components/forms/uk/VisaHistorySection';
import PreviousTripsSection from '../components/forms/uk/PreviousTripsSection';
import UKVisitsSection from '../components/forms/uk/UKVisitsSection';
import UKStatusSection from '../components/forms/uk/UKStatusSection';
import RelativesInUKSection from '../components/forms/uk/RelativesInUKSection';

function ApplicationForm({ setAlert }) {
    const { t } = useTranslation();
    const navigate = useRouter();

    // --- visibility toggles ---
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
    const [showChildSectionNumbered, setShowChildSectionNumbered] = useState(false);
    const [showChild1Section, setShowChild1Section] = useState(false);
    const [showChild1PassportDetails, setShowChild1PassportDetails] = useState(false);
    const [showChild2Section, setShowChild2Section] = useState(false);
    const [showChild2PassportDetails, setShowChild2PassportDetails] = useState(false);
    const [showChild3Section, setShowChild3Section] = useState(false);
    const [showChild3PassportDetails, setShowChild3PassportDetails] = useState(false);
    const [showChild4Section, setShowChild4Section] = useState(false);
    const [showChild4PassportDetails, setShowChild4PassportDetails] = useState(false);
    const [showChild5Section, setShowChild5Section] = useState(false);
    const [showChild5PassportDetails, setShowChild5PassportDetails] = useState(false);
    const [showChild6Section, setShowChild6Section] = useState(false);
    const [showChild6PassportDetails, setShowChild6PassportDetails] = useState(false);
    const [showChild7Section, setShowChild7Section] = useState(false);
    const [showChild7PassportDetails, setShowChild7PassportDetails] = useState(false);
    const [showRefusalSection, setShowRefusalSection] = useState(false);
    const [showTripsSection, setShowTripsSection] = useState(false);
    const [showUkTripsSection, setShowUkTripsSection] = useState(false);
    const [showUkIssuedVisa, setShowUkIssuedVisa] = useState(false);
    const [showUkRemainVisa, setShowUkRemainVisa] = useState(false);
    const [showUkVisit2, setShowUkVisit2] = useState(false);
    const [showUkVisit3, setShowUkVisit3] = useState(false);
    const [showUkVisit4, setShowUkVisit4] = useState(false);
    const [showUkVisit5, setShowUkVisit5] = useState(false);
    const [showUkVisit6, setShowUkVisit6] = useState(false);
    const [showUkVisit7, setShowUkVisit7] = useState(false);
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

    // --- form data ---
    const [formData, setFormData] = useState({
        email: '', pasport_number: '', first_name: '', last_name: '', dob: (null), place_of_birth: '', phone: '', nationality: '', passport_issue_date: (null), passport_expiry_date: (null), address: '', passport_photo: (null), residence_since: '', address_ownership_status: 'Rent', aditional_info: '', destination_country: '', purpose_of_trip: '', work_status: 'Student', job_title: '', job_address: '', starting_date: (null), company_name: '', company_phone: '', salary: '', monthly_living_expenses:'', trip_expenses: '', arrive_date: (null), leave_date: (null), maritial_status: '', spouse_first_name: '', spouse_last_name: '', spouse_dob: (null), spouse_nationality: '', spouse_live_with_you: 'Yes', spouse_travel_with_you: 'No', spouse_passport_photo: (null), spouse_pasport_number: '', school_name: '', admission_offer_photo: (null), inviter_full_name: '', inviter_email: '', inviter_address: '', invitation_letter: (null), medical_invitation_letter: (null), medical_details: '', hospital_name: '', other_travel_reason: '', father_first_name: '', father_last_name: '', father_dob: (null), father_nationality: '', mother_first_name: '', mother_last_name: '', mother_dob: (null), mother_nationality: '', have_children: 'No', number_of_children: '', child1_first_name: '', child1_last_name: '', child1_dob: (null), child1_live_with_you: 'Yes', child1_travelling_with_you: 'No', child1_nationality: '', child1_passport_photo: (null), child1_address: '', child2_first_name: '', child2_last_name: '', child2_dob: (null), child2_live_with_you: 'Yes', child2_travelling_with_you: 'No', child2_nationality: '', child2_passport_photo: (null), child2_address: '', child3_first_name: '', child3_last_name: '', child3_dob: (null), child3_live_with_you: 'Yes', child3_travelling_with_you: 'No', child3_nationality: '', child3_passport_photo: (null), child3_address: '', child4_first_name: '', child4_last_name: '', child4_dob: (null), child4_live_with_you: 'Yes', child4_travelling_with_you: 'No', child4_nationality: '', child4_passport_photo: (null), child4_address: '', child5_first_name: '', child5_last_name: '', child5_dob: (null), child5_live_with_you: 'Yes', child5_travelling_with_you: 'No', child5_nationality: '', child5_passport_photo: (null), child5_address: '', child6_first_name: '', child6_last_name: '', child6_dob: (null), child6_live_with_you: 'Yes', child6_travelling_with_you: 'No', child6_nationality: '', child6_passport_photo: (null), child6_address: '', child7_first_name: '', child7_last_name: '', child7_dob: (null), child7_live_with_you: 'Yes', child7_travelling_with_you: 'No', child7_nationality: '', child7_passport_photo: (null), child7_address: '', visa_refusl: 'No', country_of_refusal: '', visa_refusal_date: (null), visa_refusal_desc: '', did_visit_countries: 'No', visted_country: '', visit_arrival_date: (null), visit_departure_date: (null), number_of_visits: '1', purpose_of_visit: '', visted_country2: '', purpose_of_visit2: '', visit_arrival_date2: (null), visit_departure_date2: (null), visted_country3: '', purpose_of_visit3: '', visit_arrival_date3: (null), visit_departure_date3: (null), visted_country4: '', purpose_of_visit4: '', visit_arrival_date4: (null), visit_departure_date4: (null), visted_country5: '', purpose_of_visit5: '', visit_arrival_date5: (null), visit_departure_date5: (null), visted_country6: '', purpose_of_visit6: '', visit_arrival_date6: (null), visit_departure_date6: (null), visted_country7: '', purpose_of_visit7: '', visit_arrival_date7: (null), visit_departure_date7: (null), did_visit_uk: 'No', number_of_uk_visits: '1', purpose_of_uk_visit: '', uk_visit_arrival_date: '', period_of_uk_stay: '', medical_treatment_uk: 'No', purpose_of_uk_visit2: '', uk_visit_arrival_date2: '', period_of_uk_stay2: '', purpose_of_uk_visit3: '', uk_visit_arrival_date3: '', period_of_uk_stay3: '', purpose_of_uk_visit4: '', uk_visit_arrival_date4: '', period_of_uk_stay4: '', purpose_of_uk_visit5: '', uk_visit_arrival_date5: '', period_of_uk_stay5: '', purpose_of_uk_visit6: '', uk_visit_arrival_date6: '', period_of_uk_stay6: '', purpose_of_uk_visit7: '', uk_visit_arrival_date7: '', period_of_uk_stay7: '', uk_insurance_number: 'No', uk_driving_license: 'No', obtained_uk_visa: 'No', uk_visa_issue_date: '', uk_remain_visa: 'No', uk_remain_visa_date: '', uk_remain_visa_results: '', family_in_uk: 'No', number_of_relatives: '1', relative1_first_name: '', relative1_last_name: '', relative1_nationality: '', relative1_relationship: '', relative1_passport_no: '', relative2_first_name: '', relative2_last_name: '', relative2_nationality: '', relative2_relationship: '', relative2_passport_no: '', relative3_first_name: '', relative3_last_name: '', relative3_nationality: '', relative3_relationship: '', relative3_passport_no: '',relative4_first_name: '', relative4_last_name: '', relative4_nationality: '', relative4_relationship: '', relative4_passport_no: '', relative5_first_name: '', relative5_last_name: '', relative5_nationality: '', relative5_relationship: '', relative5_passport_no: ''
    });

    const { email, pasport_number, first_name, last_name, dob, place_of_birth, phone, nationality, passport_issue_date, passport_expiry_date, address, passport_photo, residence_since, address_ownership_status, aditional_info, destination_country, purpose_of_trip, work_status, job_title, job_address, starting_date, company_name, company_phone, salary, monthly_living_expenses, trip_expenses, arrive_date, leave_date, maritial_status, spouse_first_name, spouse_last_name, spouse_dob, spouse_nationality, spouse_live_with_you, spouse_travel_with_you, spouse_passport_photo, spouse_pasport_number, school_name, admission_offer_photo, inviter_full_name, inviter_email, inviter_address, invitation_letter, medical_invitation_letter, medical_details, hospital_name, other_travel_reason, father_first_name, father_last_name, father_dob, father_nationality, mother_first_name, mother_last_name, mother_dob, mother_nationality, have_children, number_of_children, child1_first_name, child1_last_name, child1_dob, child1_live_with_you, child1_travelling_with_you, child1_nationality, child1_passport_photo, child1_address, child2_first_name, child2_last_name, child2_dob, child2_live_with_you, child2_travelling_with_you, child2_nationality, child2_passport_photo, child2_address, child3_first_name, child3_last_name, child3_dob, child3_live_with_you, child3_travelling_with_you, child3_nationality, child3_passport_photo, child3_address, child4_first_name, child4_last_name, child4_dob, child4_live_with_you, child4_travelling_with_you, child4_nationality, child4_passport_photo, child4_address, child5_first_name, child5_last_name, child5_dob, child5_live_with_you, child5_travelling_with_you, child5_nationality, child5_passport_photo, child5_address, child6_first_name, child6_last_name, child6_dob, child6_live_with_you, child6_travelling_with_you, child6_nationality, child6_passport_photo, child6_address, child7_first_name, child7_last_name, child7_dob, child7_live_with_you, child7_travelling_with_you, child7_nationality, child7_passport_photo, child7_address, visa_refusl, country_of_refusal, visa_refusal_date, visa_refusal_desc, did_visit_countries, visted_country, visit_arrival_date, visit_departure_date, number_of_visits, purpose_of_visit, visted_country2, purpose_of_visit2, visit_arrival_date2, visit_departure_date2, visted_country3, purpose_of_visit3, visit_arrival_date3, visit_departure_date3, visted_country4, purpose_of_visit4, visit_arrival_date4, visit_departure_date4, visted_country5, purpose_of_visit5, visit_arrival_date5, visit_departure_date5, visted_country6, purpose_of_visit6, visit_arrival_date6, visit_departure_date6, visted_country7, purpose_of_visit7, visit_arrival_date7, visit_departure_date7, did_visit_uk, number_of_uk_visits, purpose_of_uk_visit, uk_visit_arrival_date, period_of_uk_stay, medical_treatment_uk, purpose_of_uk_visit2, uk_visit_arrival_date2, period_of_uk_stay2, purpose_of_uk_visit3, uk_visit_arrival_date3, period_of_uk_stay3, purpose_of_uk_visit4, uk_visit_arrival_date4, period_of_uk_stay4, purpose_of_uk_visit5, uk_visit_arrival_date5, period_of_uk_stay5, purpose_of_uk_visit6, uk_visit_arrival_date6, period_of_uk_stay6, purpose_of_uk_visit7, uk_visit_arrival_date7, period_of_uk_stay7, uk_insurance_number, uk_driving_license, obtained_uk_visa, uk_visa_issue_date, uk_remain_visa, uk_remain_visa_date, uk_remain_visa_results, family_in_uk, number_of_relatives, relative1_first_name, relative1_last_name, relative1_nationality, relative1_relationship, relative1_passport_no, relative2_first_name, relative2_last_name, relative2_nationality, relative2_relationship, relative2_passport_no, relative3_first_name, relative3_last_name, relative3_nationality, relative3_relationship, relative3_passport_no, relative4_first_name, relative4_last_name, relative4_nationality, relative4_relationship, relative4_passport_no, relative5_first_name, relative5_last_name, relative5_nationality, relative5_relationship, relative5_passport_no } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onFileChange = (name, file) => setFormData({ ...formData, [name]: file });

    const onSubmit = async (e) => {
        e.preventDefault();

        if (DEMO_MODE) {
            setAlert(DEMO_ALERT_MSG, 'info');
            return;
        }

        let dataForm = new FormData();

        dataForm.append('pasport_number', pasport_number)
        dataForm.append('email', email)
        dataForm.append('first_name', first_name)
        dataForm.append('last_name', last_name)
        dataForm.append('place_of_birth', place_of_birth)
        dataForm.append('phone', phone)
        dataForm.append('nationality', nationality)
        dataForm.append('address', address)
        dataForm.append('residence_since', residence_since)
        dataForm.append('address_ownership_status', address_ownership_status)
        dataForm.append('aditional_info', aditional_info)
        dataForm.append('destination_country', destination_country)
        dataForm.append('purpose_of_trip', purpose_of_trip)
        dataForm.append('work_status', work_status)
        dataForm.append('job_title', job_title)
        dataForm.append('job_address', job_address)
        dataForm.append('company_name', company_name)
        dataForm.append('company_phone', company_phone)
        dataForm.append('salary', salary)
        dataForm.append('monthly_living_expenses', monthly_living_expenses)
        dataForm.append('trip_expenses', trip_expenses)
        dataForm.append('maritial_status', maritial_status)
        dataForm.append('spouse_first_name', spouse_first_name)
        dataForm.append('spouse_last_name', spouse_last_name)
        dataForm.append('spouse_nationality', spouse_nationality)
        dataForm.append('spouse_live_with_you', spouse_live_with_you)
        dataForm.append('spouse_travel_with_you', spouse_travel_with_you)
        dataForm.append('spouse_pasport_number', spouse_pasport_number)
        dataForm.append('school_name', school_name)
        dataForm.append('inviter_full_name', inviter_full_name)
        dataForm.append('inviter_email', inviter_email)
        dataForm.append('inviter_address', inviter_address)
        dataForm.append('medical_details', medical_details)
        dataForm.append('hospital_name', hospital_name)
        dataForm.append('other_travel_reason', other_travel_reason)
        dataForm.append('father_first_name', father_first_name)
        dataForm.append('father_last_name', father_last_name)
        dataForm.append('father_nationality', father_nationality)
        dataForm.append('mother_first_name', mother_first_name)
        dataForm.append('mother_last_name', mother_last_name)
        dataForm.append('mother_nationality', mother_nationality)
        dataForm.append('have_children', have_children)
        dataForm.append('number_of_children', number_of_children)

        dataForm.append('child1_first_name', child1_first_name)
        dataForm.append('child1_last_name', child1_last_name)
        dataForm.append('child1_nationality', child1_nationality)
        dataForm.append('child1_live_with_you', child1_live_with_you)
        dataForm.append('child1_travelling_with_you', child1_travelling_with_you)
        dataForm.append('child1_address', child1_address)

        dataForm.append('child2_first_name', child2_first_name)
        dataForm.append('child2_last_name', child2_last_name)
        dataForm.append('child2_nationality', child2_nationality)
        dataForm.append('child2_live_with_you', child2_live_with_you)
        dataForm.append('child2_travelling_with_you', child2_travelling_with_you)
        dataForm.append('child2_address', child2_address)

        dataForm.append('child3_first_name', child3_first_name)
        dataForm.append('child3_last_name', child3_last_name)
        dataForm.append('child3_nationality', child3_nationality)
        dataForm.append('child3_live_with_you', child3_live_with_you)
        dataForm.append('child3_travelling_with_you', child3_travelling_with_you)
        dataForm.append('child3_address', child3_address)

        dataForm.append('child4_first_name', child4_first_name)
        dataForm.append('child4_last_name', child4_last_name)
        dataForm.append('child4_nationality', child4_nationality)
        dataForm.append('child4_live_with_you', child4_live_with_you)
        dataForm.append('child4_travelling_with_you', child4_travelling_with_you)
        dataForm.append('child4_address', child4_address)

        dataForm.append('child5_first_name', child5_first_name)
        dataForm.append('child5_last_name', child5_last_name)
        dataForm.append('child5_nationality', child5_nationality)
        dataForm.append('child5_live_with_you', child5_live_with_you)
        dataForm.append('child5_travelling_with_you', child5_travelling_with_you)
        dataForm.append('child5_address', child5_address)

        dataForm.append('child6_first_name', child6_first_name)
        dataForm.append('child6_last_name', child6_last_name)
        dataForm.append('child6_nationality', child6_nationality)
        dataForm.append('child6_live_with_you', child6_live_with_you)
        dataForm.append('child6_travelling_with_you', child6_travelling_with_you)
        dataForm.append('child6_address', child6_address)

        dataForm.append('child7_first_name', child7_first_name)
        dataForm.append('child7_last_name', child7_last_name)
        dataForm.append('child7_nationality', child7_nationality)
        dataForm.append('child7_live_with_you', child7_live_with_you)
        dataForm.append('child7_travelling_with_you', child7_travelling_with_you)
        dataForm.append('child7_address', child7_address)

        dataForm.append('did_visit_countries', did_visit_countries)
        dataForm.append('visted_country', visted_country)
        dataForm.append('purpose_of_visit', purpose_of_visit)
        dataForm.append('visted_country2', visted_country2)
        dataForm.append('purpose_of_visit2', purpose_of_visit2)
        dataForm.append('visted_country3', visted_country)
        dataForm.append('purpose_of_visit3', purpose_of_visit)
        dataForm.append('visted_country4', visted_country)
        dataForm.append('purpose_of_visit4', purpose_of_visit)
        dataForm.append('visted_country5', visted_country)
        dataForm.append('purpose_of_visit5', purpose_of_visit)
        dataForm.append('visted_country6', visted_country)
        dataForm.append('purpose_of_visit6', purpose_of_visit)
        dataForm.append('visted_country7', visted_country)
        dataForm.append('purpose_of_visit7', purpose_of_visit)

        dataForm.append('visa_refusl', visa_refusl)
        dataForm.append('country_of_refusal', country_of_refusal)
        dataForm.append('visa_refusal_desc', visa_refusal_desc)

        dataForm.append('did_visit_uk', did_visit_uk)
        dataForm.append('medical_treatment_uk', medical_treatment_uk)
        dataForm.append('number_of_uk_visits', number_of_uk_visits)
        dataForm.append('uk_insurance_number', uk_insurance_number)
        dataForm.append('uk_driving_license', uk_driving_license)
        dataForm.append('obtained_uk_visa', obtained_uk_visa)
        dataForm.append('uk_visa_issue_date', uk_visa_issue_date)
        dataForm.append('uk_remain_visa', uk_remain_visa)
        dataForm.append('uk_remain_visa_date', uk_remain_visa_date)
        dataForm.append('uk_remain_visa_results', uk_remain_visa_results)

        dataForm.append('purpose_of_uk_visit', purpose_of_uk_visit)
        dataForm.append('uk_visit_arrival_date', uk_visit_arrival_date)
        dataForm.append('period_of_uk_stay', period_of_uk_stay)

        dataForm.append('purpose_of_uk_visit2', purpose_of_uk_visit2)
        dataForm.append('uk_visit_arrival_date2', uk_visit_arrival_date2)
        dataForm.append('period_of_uk_stay2', period_of_uk_stay2)

        dataForm.append('purpose_of_uk_visit3', purpose_of_uk_visit3)
        dataForm.append('uk_visit_arrival_date3', uk_visit_arrival_date3)
        dataForm.append('period_of_uk_stay3', period_of_uk_stay3)

        dataForm.append('purpose_of_uk_visit4', purpose_of_uk_visit4)
        dataForm.append('uk_visit_arrival_date4', uk_visit_arrival_date4)
        dataForm.append('period_of_uk_stay4', period_of_uk_stay4)

        dataForm.append('purpose_of_uk_visit5', purpose_of_uk_visit5)
        dataForm.append('uk_visit_arrival_date5', uk_visit_arrival_date5)
        dataForm.append('period_of_uk_stay5', period_of_uk_stay5)

        dataForm.append('purpose_of_uk_visit6', purpose_of_uk_visit6)
        dataForm.append('uk_visit_arrival_date6', uk_visit_arrival_date6)
        dataForm.append('period_of_uk_stay6', period_of_uk_stay6)

        dataForm.append('purpose_of_uk_visit7', purpose_of_uk_visit7)
        dataForm.append('uk_visit_arrival_date7', uk_visit_arrival_date7)
        dataForm.append('period_of_uk_stay7', period_of_uk_stay7)

        dataForm.append('family_in_uk', family_in_uk)
        dataForm.append('number_of_relatives', number_of_relatives)

        dataForm.append('relative1_first_name', relative1_first_name)
        dataForm.append('relative1_last_name', relative1_last_name)
        dataForm.append('relative1_nationality', relative1_nationality)
        dataForm.append('relative1_relationship', relative1_relationship)
        dataForm.append('relative1_passport_no', relative1_passport_no)

        dataForm.append('relative2_first_name', relative2_first_name)
        dataForm.append('relative2_last_name', relative2_last_name)
        dataForm.append('relative2_nationality', relative2_nationality)
        dataForm.append('relative2_relationship', relative2_relationship)
        dataForm.append('relative2_passport_no', relative2_passport_no)

        dataForm.append('relative3_first_name', relative3_first_name)
        dataForm.append('relative3_last_name', relative3_last_name)
        dataForm.append('relative3_nationality', relative3_nationality)
        dataForm.append('relative3_relationship', relative3_relationship)
        dataForm.append('relative3_passport_no', relative3_passport_no)

        dataForm.append('relative4_first_name', relative4_first_name)
        dataForm.append('relative4_last_name', relative4_last_name)
        dataForm.append('relative4_nationality', relative4_nationality)
        dataForm.append('relative4_relationship', relative4_relationship)
        dataForm.append('relative4_passport_no', relative4_passport_no)

        dataForm.append('relative5_first_name', relative5_first_name)
        dataForm.append('relative5_last_name', relative5_last_name)
        dataForm.append('relative5_nationality', relative5_nationality)
        dataForm.append('relative5_relationship', relative5_relationship)
        dataForm.append('relative5_passport_no', relative5_passport_no)

        if (passport_photo !== null) dataForm.append('passport_photo', passport_photo)
        if (dob !== null) dataForm.append('dob', dob)
        if (passport_issue_date !== null) dataForm.append('passport_issue_date', passport_issue_date)
        if (passport_expiry_date !== null) dataForm.append('passport_expiry_date', passport_expiry_date)
        if (starting_date !== null) dataForm.append('starting_date', starting_date)
        if (arrive_date !== null) dataForm.append('arrive_date', arrive_date)
        if (leave_date !== null) dataForm.append('leave_date', leave_date)
        if (spouse_dob !== null) dataForm.append('spouse_dob', spouse_dob)
        if (spouse_passport_photo !== null) dataForm.append('spouse_passport_photo', spouse_passport_photo)
        if (admission_offer_photo !== null) dataForm.append('admission_offer_photo', admission_offer_photo)
        if (invitation_letter !== null) dataForm.append('invitation_letter', invitation_letter)
        if (medical_invitation_letter !== null) dataForm.append('medical_invitation_letter', medical_invitation_letter)
        if (father_dob !== null) dataForm.append('father_dob', father_dob)
        if (mother_dob !== null) dataForm.append('mother_dob', mother_dob)
        if (child1_passport_photo !== null) dataForm.append('child1_passport_photo', child1_passport_photo)
        if (child1_dob !== null) dataForm.append('child1_dob', child1_dob)
        if (child2_passport_photo !== null) dataForm.append('child2_passport_photo', child2_passport_photo)
        if (child2_dob !== null) dataForm.append('child2_dob', child2_dob)
        if (child3_passport_photo !== null) dataForm.append('child3_passport_photo', child3_passport_photo)
        if (child3_dob !== null) dataForm.append('child3_dob', child3_dob)
        if (child4_passport_photo !== null) dataForm.append('child4_passport_photo', child4_passport_photo)
        if (child4_dob !== null) dataForm.append('child4_dob', child4_dob)
        if (child5_passport_photo !== null) dataForm.append('child5_passport_photo', child5_passport_photo)
        if (child5_dob !== null) dataForm.append('child5_dob', child5_dob)
        if (child6_passport_photo !== null) dataForm.append('child6_passport_photo', child6_passport_photo)
        if (child6_dob !== null) dataForm.append('child6_dob', child6_dob)
        if (child7_dob !== null) dataForm.append('child7_dob', child7_dob)
        if (child7_passport_photo !== null) dataForm.append('child7_passport_photo', child7_passport_photo)
        if (visa_refusal_date !== null) dataForm.append('visa_refusal_date', visa_refusal_date)
        if (visit_arrival_date !== null) dataForm.append('visit_arrival_date', visit_arrival_date)
        if (visit_departure_date !== null) dataForm.append('visit_departure_date', visit_departure_date)
        if (visit_arrival_date2 !== null) dataForm.append('visit_arrival_date2', visit_arrival_date2)
        if (visit_departure_date2 !== null) dataForm.append('visit_departure_date2', visit_departure_date2)
        if (visit_arrival_date3 !== null) dataForm.append('visit_arrival_date3', visit_arrival_date3)
        if (visit_departure_date3 !== null) dataForm.append('visit_departure_date3', visit_departure_date3)
        if (visit_arrival_date4 !== null) dataForm.append('visit_arrival_date4', visit_arrival_date4)
        if (visit_departure_date4 !== null) dataForm.append('visit_departure_date4', visit_departure_date4)
        if (visit_arrival_date5 !== null) dataForm.append('visit_arrival_date5', visit_arrival_date5)
        if (visit_departure_date5 !== null) dataForm.append('visit_departure_date5', visit_departure_date5)
        if (visit_arrival_date6 !== null) dataForm.append('visit_arrival_date6', visit_arrival_date6)
        if (visit_departure_date6 !== null) dataForm.append('visit_departure_date6', visit_departure_date6)
        if (visit_arrival_date7 !== null) dataForm.append('visit_arrival_date7', visit_arrival_date7)
        if (visit_departure_date7 !== null) dataForm.append('visit_departure_date7', visit_departure_date7)

        await axios({
            method: 'post',
            url: `${process.env.NEXT_PUBLIC_API_URL}/api/application-form/`,
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
        <div className={styles.applicationForm}>
            <div className={styles.wrapper}>
                <Head>
                    <title>Diploman - UK Form</title>
                    <meta name='description' content='UK Form page' />
                </Head>
                <div className={styles.applicationForm__wrapper}>
                    <h1 className={styles.applicationForm__title}>{t('ukForm_title')}</h1>
                    <hr className={styles.appform__hr} />
                    <form className={styles.applicationForm__form} onSubmit={e => onSubmit(e)}>
                        <div className={styles.form__wrap}>
                            <div className={styles.input_grp}>
                                <div className={styles.form__wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='email'>{t('Form_email')}</label>
                                    <input
                                        className={styles['applicationForm__form__input'] + ' ' + styles['ukForm__input__for__two']}
                                        name='email'
                                        type='email'
                                        placeholder='exam@gmail.com'
                                        onChange={e => onChange(e)}
                                        value={email}
                                        required
                                    />
                                </div>
                                <div className={styles.form__wrap}>
                                    <label className={styles.ukForm__form__label} htmlFor='phone'>{t('Form_phone')}</label>
                                    <input
                                        className={styles['applicationForm__form__input'] + ' ' + styles['ukForm__input__for__two']}
                                        name='phone'
                                        type='text'
                                        onChange={e => onChange(e)}
                                        value={phone}
                                    />
                                </div>
                            </div>
                            <hr className={styles.appform__hr} />

                            <PassportSection
                                formData={formData}
                                onChange={onChange}
                                onFileChange={onFileChange}
                                show={show}
                                setShow={setShow}
                            />

                            <AddressSection
                                formData={formData}
                                onChange={onChange}
                            />

                            <TripSection
                                formData={formData}
                                onChange={onChange}
                                onFileChange={onFileChange}
                                showPurpose={showPurpose}
                                setShowPurpose={setShowPurpose}
                                showMaritialStatus={showMaritialStatus}
                                setShowMaritialStatus={setShowMaritialStatus}
                                setShowMaritialSection={setShowMaritialSection}
                                showSchoolDetails={showSchoolDetails}
                                setShowSchoolDetails={setShowSchoolDetails}
                                showInviterDetails={showInviterDetails}
                                setShowInviterDetails={setShowInviterDetails}
                                showMedicalDetails={showMedicalDetails}
                                setShowMedicalDetails={setShowMedicalDetails}
                                showOtherTripDetails={showOtherTripDetails}
                                setShowOtherTripDetails={setShowOtherTripDetails}
                            />

                            <SpouseSection
                                formData={formData}
                                onChange={onChange}
                                onFileChange={onFileChange}
                                showMaritialSection={showMaritialSection}
                                showSpousSection={showSpousSection}
                                setShowSpousSection={setShowSpousSection}
                            />

                            <EmploymentSection
                                formData={formData}
                                onChange={onChange}
                                showJobDetails={showJobDetails}
                                setShowJobDetails={setShowJobDetails}
                            />

                            <ParentsSection
                                formData={formData}
                                onChange={onChange}
                            />

                            <ChildrenSection
                                formData={formData}
                                onChange={onChange}
                                onFileChange={onFileChange}
                                showChildSectionNumbered={showChildSectionNumbered}
                                setShowChildSectionNumbered={setShowChildSectionNumbered}
                                showChild1Section={showChild1Section}
                                setShowChild1Section={setShowChild1Section}
                                showChild1PassportDetails={showChild1PassportDetails}
                                setShowChild1PassportDetails={setShowChild1PassportDetails}
                                showChild2Section={showChild2Section}
                                setShowChild2Section={setShowChild2Section}
                                showChild2PassportDetails={showChild2PassportDetails}
                                setShowChild2PassportDetails={setShowChild2PassportDetails}
                                showChild3Section={showChild3Section}
                                setShowChild3Section={setShowChild3Section}
                                showChild3PassportDetails={showChild3PassportDetails}
                                setShowChild3PassportDetails={setShowChild3PassportDetails}
                                showChild4Section={showChild4Section}
                                setShowChild4Section={setShowChild4Section}
                                showChild4PassportDetails={showChild4PassportDetails}
                                setShowChild4PassportDetails={setShowChild4PassportDetails}
                                showChild5Section={showChild5Section}
                                setShowChild5Section={setShowChild5Section}
                                showChild5PassportDetails={showChild5PassportDetails}
                                setShowChild5PassportDetails={setShowChild5PassportDetails}
                                showChild6Section={showChild6Section}
                                setShowChild6Section={setShowChild6Section}
                                showChild6PassportDetails={showChild6PassportDetails}
                                setShowChild6PassportDetails={setShowChild6PassportDetails}
                                showChild7Section={showChild7Section}
                                setShowChild7Section={setShowChild7Section}
                                showChild7PassportDetails={showChild7PassportDetails}
                                setShowChild7PassportDetails={setShowChild7PassportDetails}
                            />

                            <VisaHistorySection
                                formData={formData}
                                onChange={onChange}
                            />

                            <PreviousTripsSection
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

                            <UKVisitsSection
                                formData={formData}
                                onChange={onChange}
                                showUkTripsSection={showUkTripsSection}
                                setShowUkTripsSection={setShowUkTripsSection}
                                showUkVisit2={showUkVisit2}
                                setShowUkVisit2={setShowUkVisit2}
                                showUkVisit3={showUkVisit3}
                                setShowUkVisit3={setShowUkVisit3}
                                showUkVisit4={showUkVisit4}
                                setShowUkVisit4={setShowUkVisit4}
                                showUkVisit5={showUkVisit5}
                                setShowUkVisit5={setShowUkVisit5}
                                showUkVisit6={showUkVisit6}
                                setShowUkVisit6={setShowUkVisit6}
                                showUkVisit7={showUkVisit7}
                                setShowUkVisit7={setShowUkVisit7}
                            />

                            <UKStatusSection
                                formData={formData}
                                onChange={onChange}
                                showUkIssuedVisa={showUkIssuedVisa}
                                setShowUkIssuedVisa={setShowUkIssuedVisa}
                                showUkRemainVisa={showUkRemainVisa}
                                setShowUkRemainVisa={setShowUkRemainVisa}
                            />

                            <RelativesInUKSection
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

                            <hr className={styles.appform__hr} />
                            <div className={styles.input_wrap}>
                                <label className={styles.ukForm__form__label} htmlFor='message'>{t('Form_additional')}</label>
                                <textarea
                                    className={styles.applicationForm__form__textarea}
                                    name='aditional_info'
                                    cols='30'
                                    rows='10'
                                    placeholder={t('Form_message')}
                                    onChange={e => onChange(e)}
                                    value={aditional_info}
                                />
                            </div>
                            <button className={styles.app__form__button} htmltype='submit'>{t('Form_send')}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'en', ['common'], i18n)),
    },
});

export default connect(null, { setAlert })(ApplicationForm);
