import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import './ApplicationForm.css';
import { useNavigate } from 'react-router-dom';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
import { useTranslation } from "react-i18next";

function ApplicationForm({ setAlert }) {
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
    const [showChildSectionNumbered, setShowChildSectionNumbered] = useState (false);
    const [showChild1Section, setShowChild1Section] = useState (false);
    const [showChild1PassportDetails, setShowChild1PassportDetails] = useState (false);
    const [showChild2Section, setShowChild2Section] = useState (false);
    const [showChild2PassportDetails, setShowChild2PassportDetails] = useState (false);
    const [showChild3Section, setShowChild3Section] = useState (false);
    const [showChild3PassportDetails, setShowChild3PassportDetails] = useState (false);
    const [showChild4Section, setShowChild4Section] = useState (false);
    const [showChild4PassportDetails, setShowChild4PassportDetails] = useState (false);
    const [showChild5Section, setShowChild5Section] = useState (false);
    const [showChild5PassportDetails, setShowChild5PassportDetails] = useState (false);
    const [showChild6Section, setShowChild6Section] = useState (false);
    const [showChild6PassportDetails, setShowChild6PassportDetails] = useState (false);
    const [showChild7Section, setShowChild7Section] = useState (false);
    const [showChild7PassportDetails, setShowChild7PassportDetails] = useState (false);
    const [showRefusalSection, setShowRefusalSection] = useState (false);
    const [showTripsSection, setShowTripsSection] = useState (false);
    const [showUkTripsSection, setShowUkTripsSection] = useState (false);
    const [showUkIssuedVisa, setShowUkIssuedVisa] = useState (false);
    const [showUkRemainVisa, setShowUkRemainVisa] = useState (false);

    const [showUkVisit2, setShowUkVisit2] = useState (false);
    const [showUkVisit3, setShowUkVisit3] = useState (false);
    const [showUkVisit4, setShowUkVisit4] = useState (false);
    const [showUkVisit5, setShowUkVisit5] = useState (false);
    const [showUkVisit6, setShowUkVisit6] = useState (false);
    const [showUkVisit7, setShowUkVisit7] = useState (false);

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
        email: '', pasport_number: '', first_name: '', last_name: '', dob: (null), place_of_birth: '', phone: '', nationality: '', passport_issue_date: (null), passport_expiry_date: (null), address: '', passport_photo: (null), residence_since: '', address_ownership_status: 'Rent', aditional_info: '', destination_country: '', purpose_of_trip: '', work_status: 'Student', job_title: '', job_address: '', starting_date: (null), company_name: '', company_phone: '', salary: '', monthly_living_expenses:'', trip_expenses: '', arrive_date: (null), leave_date: (null), maritial_status: '', spouse_first_name: '', spouse_last_name: '', spouse_dob: (null), spouse_nationality: '', spouse_live_with_you: 'Yes', spouse_travel_with_you: 'No', spouse_passport_photo: (null), spouse_pasport_number: '', school_name: '', admission_offer_photo: (null), inviter_full_name: '', inviter_email: '', inviter_address: '', invitation_letter: (null), medical_invitation_letter: (null), medical_details: '', hospital_name: '', other_travel_reason: '', father_first_name: '', father_last_name: '', father_dob: (null), father_nationality: '', mother_first_name: '', mother_last_name: '', mother_dob: (null), mother_nationality: '', have_children: 'No', number_of_children: '', child1_first_name: '', child1_last_name: '', child1_dob: (null), child1_live_with_you: 'Yes', child1_travelling_with_you: 'No', child1_nationality: '', child1_passport_photo: (null), child1_address: '', child2_first_name: '', child2_last_name: '', child2_dob: (null), child2_live_with_you: 'Yes', child2_travelling_with_you: 'No', child2_nationality: '', child2_passport_photo: (null), child2_address: '', child3_first_name: '', child3_last_name: '', child3_dob: (null), child3_live_with_you: 'Yes', child3_travelling_with_you: 'No', child3_nationality: '', child3_passport_photo: (null), child3_address: '', child4_first_name: '', child4_last_name: '', child4_dob: (null), child4_live_with_you: 'Yes', child4_travelling_with_you: 'No', child4_nationality: '', child4_passport_photo: (null), child4_address: '', child5_first_name: '', child5_last_name: '', child5_dob: (null), child5_live_with_you: 'Yes', child5_travelling_with_you: 'No', child5_nationality: '', child5_passport_photo: (null), child5_address: '', child6_first_name: '', child6_last_name: '', child6_dob: (null), child6_live_with_you: 'Yes', child6_travelling_with_you: 'No', child6_nationality: '', child6_passport_photo: (null), child6_address: '', child7_first_name: '', child7_last_name: '', child7_dob: (null), child7_live_with_you: 'Yes', child7_travelling_with_you: 'No', child7_nationality: '', child7_passport_photo: (null), child7_address: '', visa_refusl: 'No', country_of_refusal: '', visa_refusal_date: (null), visa_refusal_desc: '', did_visit_countries: 'No', visted_country: '', visit_arrival_date: (null), visit_departure_date: (null), number_of_visits: '1', purpose_of_visit: '', visted_country2: '', purpose_of_visit2: '', visit_arrival_date2: (null), visit_departure_date2: (null), visted_country3: '', purpose_of_visit3: '', visit_arrival_date3: (null), visit_departure_date3: (null), visted_country4: '', purpose_of_visit4: '', visit_arrival_date4: (null), visit_departure_date4: (null), visted_country5: '', purpose_of_visit5: '', visit_arrival_date5: (null), visit_departure_date5: (null), visted_country6: '', purpose_of_visit6: '', visit_arrival_date6: (null), visit_departure_date6: (null), visted_country7: '', purpose_of_visit7: '', visit_arrival_date7: (null), visit_departure_date7: (null), did_visit_uk: 'No', number_of_uk_visits: '1', purpose_of_uk_visit: '', uk_visit_arrival_date: '', period_of_uk_stay: '', medical_treatment_uk: 'No', purpose_of_uk_visit2: '', uk_visit_arrival_date2: '', period_of_uk_stay2: '', purpose_of_uk_visit3: '', uk_visit_arrival_date3: '', period_of_uk_stay3: '', purpose_of_uk_visit4: '', uk_visit_arrival_date4: '', period_of_uk_stay4: '', purpose_of_uk_visit5: '', uk_visit_arrival_date5: '', period_of_uk_stay5: '', purpose_of_uk_visit6: '', uk_visit_arrival_date6: '', period_of_uk_stay6: '', purpose_of_uk_visit7: '', uk_visit_arrival_date7: '', period_of_uk_stay7: '', uk_insurance_number: 'No', uk_driving_license: 'No', obtained_uk_visa: 'No', uk_visa_issue_date: '', uk_remain_visa: 'No', uk_remain_visa_date: '', uk_remain_visa_results: '', family_in_uk: 'No', number_of_relatives: '1', relative1_first_name: '', relative1_last_name: '', relative1_nationality: '', relative1_relationship: '', relative1_passport_no: '', relative2_first_name: '', relative2_last_name: '', relative2_nationality: '', relative2_relationship: '', relative2_passport_no: '', relative3_first_name: '', relative3_last_name: '', relative3_nationality: '', relative3_relationship: '', relative3_passport_no: '',relative4_first_name: '', relative4_last_name: '', relative4_nationality: '', relative4_relationship: '', relative4_passport_no: '', relative5_first_name: '', relative5_last_name: '', relative5_nationality: '', relative5_relationship: '', relative5_passport_no: '' 
    });

    const { email, pasport_number, first_name, last_name, dob, place_of_birth, phone, nationality, passport_issue_date, passport_expiry_date, address, passport_photo, residence_since, address_ownership_status, aditional_info, destination_country, purpose_of_trip, work_status, job_title, job_address, starting_date, company_name, company_phone, salary, monthly_living_expenses, trip_expenses, arrive_date, leave_date, maritial_status, spouse_first_name, spouse_last_name, spouse_dob, spouse_nationality, spouse_live_with_you, spouse_travel_with_you, spouse_passport_photo, spouse_pasport_number, school_name, admission_offer_photo, inviter_full_name, inviter_email, inviter_address, invitation_letter, medical_invitation_letter, medical_details, hospital_name, other_travel_reason, father_first_name, father_last_name, father_dob, father_nationality, mother_first_name, mother_last_name, mother_dob, mother_nationality, have_children, number_of_children, child1_first_name, child1_last_name, child1_dob, child1_live_with_you, child1_travelling_with_you, child1_nationality, child1_passport_photo, child1_address, child2_first_name, child2_last_name, child2_dob, child2_live_with_you, child2_travelling_with_you, child2_nationality, child2_passport_photo, child2_address, child3_first_name, child3_last_name, child3_dob, child3_live_with_you, child3_travelling_with_you, child3_nationality, child3_passport_photo, child3_address, child4_first_name, child4_last_name, child4_dob, child4_live_with_you, child4_travelling_with_you, child4_nationality, child4_passport_photo, child4_address, child5_first_name, child5_last_name, child5_dob, child5_live_with_you, child5_travelling_with_you, child5_nationality, child5_passport_photo, child5_address, child6_first_name, child6_last_name, child6_dob, child6_live_with_you, child6_travelling_with_you, child6_nationality, child6_passport_photo, child6_address, child7_first_name, child7_last_name, child7_dob, child7_live_with_you, child7_travelling_with_you, child7_nationality, child7_passport_photo, child7_address, visa_refusl, country_of_refusal, visa_refusal_date, visa_refusal_desc, did_visit_countries, visted_country, visit_arrival_date, visit_departure_date, number_of_visits, purpose_of_visit, visted_country2, purpose_of_visit2, visit_arrival_date2, visit_departure_date2, visted_country3, purpose_of_visit3, visit_arrival_date3, visit_departure_date3, visted_country4, purpose_of_visit4, visit_arrival_date4, visit_departure_date4, visted_country5, purpose_of_visit5, visit_arrival_date5, visit_departure_date5, visted_country6, purpose_of_visit6, visit_arrival_date6, visit_departure_date6, visted_country7, purpose_of_visit7, visit_arrival_date7, visit_departure_date7, did_visit_uk, number_of_uk_visits, purpose_of_uk_visit, uk_visit_arrival_date, period_of_uk_stay, medical_treatment_uk, purpose_of_uk_visit2, uk_visit_arrival_date2, period_of_uk_stay2, purpose_of_uk_visit3, uk_visit_arrival_date3, period_of_uk_stay3, purpose_of_uk_visit4, uk_visit_arrival_date4, period_of_uk_stay4, purpose_of_uk_visit5, uk_visit_arrival_date5, period_of_uk_stay5, purpose_of_uk_visit6, uk_visit_arrival_date6, period_of_uk_stay6, purpose_of_uk_visit7, uk_visit_arrival_date7, period_of_uk_stay7, uk_insurance_number, uk_driving_license, obtained_uk_visa, uk_visa_issue_date, uk_remain_visa, uk_remain_visa_date, uk_remain_visa_results, family_in_uk, number_of_relatives, relative1_first_name, relative1_last_name, relative1_nationality, relative1_relationship, relative1_passport_no, relative2_first_name, relative2_last_name, relative2_nationality, relative2_relationship, relative2_passport_no, relative3_first_name, relative3_last_name, relative3_nationality, relative3_relationship, relative3_passport_no, relative4_first_name, relative4_last_name, relative4_nationality, relative4_relationship, relative4_passport_no, relative5_first_name, relative5_last_name, relative5_nationality, relative5_relationship, relative5_passport_no } = formData;

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
        dataForm.append('residence_since',residence_since)
        dataForm.append('address_ownership_status',address_ownership_status)
        dataForm.append('aditional_info',aditional_info)  
        dataForm.append('destination_country',destination_country)
        dataForm.append('purpose_of_trip',purpose_of_trip)
        dataForm.append('work_status',work_status)
        dataForm.append('job_title',job_title)
        dataForm.append('job_address',job_address)
        dataForm.append('company_name',company_name)
        dataForm.append('company_phone',company_phone)
        dataForm.append('salary',salary)
        dataForm.append('monthly_living_expenses',monthly_living_expenses)
        dataForm.append('trip_expenses',trip_expenses)
        dataForm.append('maritial_status',maritial_status)
        dataForm.append('spouse_first_name',spouse_first_name)
        dataForm.append('spouse_last_name',spouse_last_name)
        dataForm.append('spouse_nationality',spouse_nationality)
        dataForm.append('spouse_live_with_you',spouse_live_with_you)
        dataForm.append('spouse_travel_with_you',spouse_travel_with_you)
        dataForm.append('spouse_pasport_number',spouse_pasport_number)
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
        dataForm.append('mother_first_name',mother_first_name)
        dataForm.append('mother_last_name',mother_last_name)
        dataForm.append('mother_nationality',mother_nationality)
        dataForm.append('have_children',have_children)
        dataForm.append('number_of_children',number_of_children)

        dataForm.append('child1_first_name',child1_first_name)
        dataForm.append('child1_last_name',child1_last_name)
        dataForm.append('child1_nationality',child1_nationality)
        dataForm.append('child1_live_with_you',child1_live_with_you)
        dataForm.append('child1_travelling_with_you',child1_travelling_with_you)
        dataForm.append('child1_address',child1_address)

        dataForm.append('child2_first_name',child2_first_name)
        dataForm.append('child2_last_name',child2_last_name)
        dataForm.append('child2_nationality',child2_nationality)
        dataForm.append('child2_live_with_you',child2_live_with_you)
        dataForm.append('child2_travelling_with_you',child2_travelling_with_you)
        dataForm.append('child2_address',child2_address)

        dataForm.append('child3_first_name',child3_first_name)
        dataForm.append('child3_last_name',child3_last_name)
        dataForm.append('child3_nationality',child3_nationality)
        dataForm.append('child3_live_with_you',child3_live_with_you)
        dataForm.append('child3_travelling_with_you',child3_travelling_with_you)
        dataForm.append('child3_address',child3_address)

        dataForm.append('child4_first_name',child4_first_name)
        dataForm.append('child4_last_name',child4_last_name)
        dataForm.append('child4_nationality',child4_nationality)
        dataForm.append('child4_live_with_you',child4_live_with_you)
        dataForm.append('child4_travelling_with_you',child4_travelling_with_you)
        dataForm.append('child4_address',child4_address)

        dataForm.append('child5_first_name',child5_first_name)
        dataForm.append('child5_last_name',child5_last_name)
        dataForm.append('child5_nationality',child5_nationality)
        dataForm.append('child5_live_with_you',child5_live_with_you)
        dataForm.append('child5_travelling_with_you',child5_travelling_with_you)
        dataForm.append('child5_address',child5_address)

        dataForm.append('child6_first_name',child6_first_name)
        dataForm.append('child6_last_name',child6_last_name)
        dataForm.append('child6_nationality',child6_nationality)
        dataForm.append('child6_live_with_you',child6_live_with_you)
        dataForm.append('child6_travelling_with_you',child6_travelling_with_you)
        dataForm.append('child6_address',child6_address)

        dataForm.append('child7_first_name',child7_first_name)
        dataForm.append('child7_last_name',child7_last_name)
        dataForm.append('child7_nationality',child7_nationality)
        dataForm.append('child7_live_with_you',child7_live_with_you)
        dataForm.append('child7_travelling_with_you',child7_travelling_with_you)
        dataForm.append('child7_address',child7_address)

        
        dataForm.append('did_visit_countries',did_visit_countries)
        dataForm.append('visted_country',visted_country)
        dataForm.append('purpose_of_visit',purpose_of_visit)
        dataForm.append('visted_country2',visted_country2)
        dataForm.append('purpose_of_visit2',purpose_of_visit2)
        dataForm.append('visted_country3',visted_country)
        dataForm.append('purpose_of_visit3',purpose_of_visit)
        dataForm.append('visted_country4',visted_country)
        dataForm.append('purpose_of_visit4',purpose_of_visit)
        dataForm.append('visted_country5',visted_country)
        dataForm.append('purpose_of_visit5',purpose_of_visit)
        dataForm.append('visted_country6',visted_country)
        dataForm.append('purpose_of_visit6',purpose_of_visit)
        dataForm.append('visted_country7',visted_country)
        dataForm.append('purpose_of_visit7',purpose_of_visit)


        dataForm.append('visa_refusl',visa_refusl)
        dataForm.append('country_of_refusal',country_of_refusal)
        dataForm.append('visa_refusal_desc',visa_refusal_desc)

        dataForm.append('did_visit_uk',did_visit_uk)
        dataForm.append('medical_treatment_uk',medical_treatment_uk)
        dataForm.append('number_of_uk_visits',number_of_uk_visits)
        dataForm.append('uk_insurance_number',uk_insurance_number)
        dataForm.append('uk_driving_license',uk_driving_license)
        dataForm.append('obtained_uk_visa',obtained_uk_visa)
        dataForm.append('uk_visa_issue_date',uk_visa_issue_date)
        dataForm.append('uk_remain_visa',uk_remain_visa)
        dataForm.append('uk_remain_visa_date',uk_remain_visa_date)
        dataForm.append('uk_remain_visa_results',uk_remain_visa_results)

        dataForm.append('purpose_of_uk_visit',purpose_of_uk_visit)
        dataForm.append('uk_visit_arrival_date',uk_visit_arrival_date)
        dataForm.append('period_of_uk_stay',period_of_uk_stay)

        dataForm.append('purpose_of_uk_visit2',purpose_of_uk_visit2)
        dataForm.append('uk_visit_arrival_date2',uk_visit_arrival_date2)
        dataForm.append('period_of_uk_stay2',period_of_uk_stay2)

        dataForm.append('purpose_of_uk_visit3',purpose_of_uk_visit3)
        dataForm.append('uk_visit_arrival_date3',uk_visit_arrival_date3)
        dataForm.append('period_of_uk_stay3',period_of_uk_stay3)

        dataForm.append('purpose_of_uk_visit4',purpose_of_uk_visit4)
        dataForm.append('uk_visit_arrival_date4',uk_visit_arrival_date4)
        dataForm.append('period_of_uk_stay4',period_of_uk_stay4)

        dataForm.append('purpose_of_uk_visit5',purpose_of_uk_visit5)
        dataForm.append('uk_visit_arrival_date5',uk_visit_arrival_date5)
        dataForm.append('period_of_uk_stay5',period_of_uk_stay5)

        dataForm.append('purpose_of_uk_visit6',purpose_of_uk_visit6)
        dataForm.append('uk_visit_arrival_date6',uk_visit_arrival_date6)
        dataForm.append('period_of_uk_stay6',period_of_uk_stay6)

        dataForm.append('purpose_of_uk_visit7',purpose_of_uk_visit7)
        dataForm.append('uk_visit_arrival_date7',uk_visit_arrival_date7)
        dataForm.append('period_of_uk_stay7',period_of_uk_stay7)

        dataForm.append('family_in_uk',family_in_uk)
        dataForm.append('number_of_relatives',number_of_relatives)

        dataForm.append('relative1_first_name',relative1_first_name)
        dataForm.append('relative1_last_name',relative1_last_name)
        dataForm.append('relative1_nationality',relative1_nationality)
        dataForm.append('relative1_relationship',relative1_relationship)
        dataForm.append('relative1_passport_no',relative1_passport_no)

        dataForm.append('relative2_first_name',relative2_first_name)
        dataForm.append('relative2_last_name',relative2_last_name)
        dataForm.append('relative2_nationality',relative2_nationality)
        dataForm.append('relative2_relationship',relative2_relationship)
        dataForm.append('relative2_passport_no',relative2_passport_no)

        dataForm.append('relative3_first_name',relative3_first_name)
        dataForm.append('relative3_last_name',relative3_last_name)
        dataForm.append('relative3_nationality',relative3_nationality)
        dataForm.append('relative3_relationship',relative3_relationship)
        dataForm.append('relative3_passport_no',relative3_passport_no)

        dataForm.append('relative4_first_name',relative4_first_name)
        dataForm.append('relative4_last_name',relative4_last_name)
        dataForm.append('relative4_nationality',relative4_nationality)
        dataForm.append('relative4_relationship',relative4_relationship)
        dataForm.append('relative4_passport_no',relative4_passport_no)

        dataForm.append('relative5_first_name',relative5_first_name)
        dataForm.append('relative5_last_name',relative5_last_name)
        dataForm.append('relative5_nationality',relative5_nationality)
        dataForm.append('relative5_relationship',relative5_relationship)
        dataForm.append('relative5_passport_no',relative5_passport_no)

        
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
        if(leave_date !== null) {
            dataForm.append('leave_date', leave_date)
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
        if(child1_passport_photo !== null) {
            dataForm.append('child1_passport_photo', child1_passport_photo)
        }
        if(child1_dob !== null) {
            dataForm.append('child1_dob', child1_dob)
        }
        if(child2_passport_photo !== null) {
            dataForm.append('child2_passport_photo', child2_passport_photo)
        }
        if(child2_dob !== null) {
            dataForm.append('child2_dob', child2_dob)
        }
        if(child3_passport_photo !== null) {
            dataForm.append('child3_passport_photo', child3_passport_photo)
        }
        if(child3_dob !== null) {
            dataForm.append('child3_dob', child3_dob)
        }
        if(child4_passport_photo !== null) {
            dataForm.append('child4_passport_photo', child4_passport_photo)
        }
        if(child4_dob !== null) {
            dataForm.append('child4_dob', child4_dob)
        }
        if(child5_passport_photo !== null) {
            dataForm.append('child5_passport_photo', child5_passport_photo)
        }
        if(child5_dob !== null) {
            dataForm.append('child5_dob', child5_dob)
        }
        if(child6_passport_photo !== null) {
            dataForm.append('child6_passport_photo', child6_passport_photo)
        }
        if(child6_dob !== null) {
            dataForm.append('child6_dob', child6_dob)
        }
        if(child7_dob !== null) {
            dataForm.append('child7_dob', child7_dob)
        }
        if(child7_passport_photo !== null) {
            dataForm.append('child7_passport_photo', child7_passport_photo)
        }
        if(visa_refusal_date !== null) {
            dataForm.append('visa_refusal_date', visa_refusal_date)
        }
        if(visit_arrival_date !== null) {
            dataForm.append('visit_arrival_date', visit_arrival_date)
        }
        if(visit_departure_date !== null) {
            dataForm.append('visit_departure_date', visit_departure_date)
        }
        if(visit_arrival_date2 !== null) {
            dataForm.append('visit_arrival_date2', visit_arrival_date2)
        }
        if(visit_departure_date2 !== null) {
            dataForm.append('visit_departure_date2', visit_departure_date2)
        }
        if(visit_arrival_date3 !== null) {
            dataForm.append('visit_arrival_date3', visit_arrival_date3)
        }
        if(visit_departure_date3 !== null) {
            dataForm.append('visit_departure_date3', visit_departure_date3)
        }
        if(visit_arrival_date4 !== null) {
            dataForm.append('visit_arrival_date4', visit_arrival_date4)
        }
        if(visit_departure_date4 !== null) {
            dataForm.append('visit_departure_date4', visit_departure_date4)
        }
        if(visit_arrival_date5 !== null) {
            dataForm.append('visit_arrival_date5', visit_arrival_date5)
        }
        if(visit_departure_date5 !== null) {
            dataForm.append('visit_departure_date5', visit_departure_date5)
        }
        if(visit_arrival_date6 !== null) {
            dataForm.append('visit_arrival_date6', visit_arrival_date6)
        }
        if(visit_departure_date6 !== null) {
            dataForm.append('visit_departure_date6', visit_departure_date6)
        }
        if(visit_arrival_date7 !== null) {
            dataForm.append('visit_arrival_date7', visit_arrival_date7)
        }
        if(visit_departure_date7 !== null) {
            dataForm.append('visit_departure_date7', visit_departure_date7)
        }


    await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/api/application-form/`,
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
        <div className='applicationForm'>
            <div className='wrapper'>
                <Helmet>
                    <title>Diploman - UK Form</title>
                    <meta
                        name='description'
                        content='UK Form page'
                    />
                </Helmet>
                <div className='applicationForm__wrapper'>
                    <h1 className='applicationForm__title'>{t('ukForm_title')}</h1>
                    <hr className='appform__hr'/>
                    <form className='applicationForm__form' onSubmit={e => onSubmit(e)}>
                        <div className='form__wrap'>
                            <div className='input_grp'>
                                <div className='form__wrap'>
                                    <label className='ukForm__form__label' htmlFor='email'>{t('Form_email')}</label>
                                    <input 
                                        className='applicationForm__form__input ukForm__input__for__two' 
                                        name='email' 
                                        type='email' 
                                        placeholder='exam@gmail.com' 
                                        onChange={e => onChange(e)} 
                                        value={email} 
                                        required
                                    />
                                </div>
                                <div className='form__wrap'>
                                    <label className='ukForm__form__label' htmlFor='phone'>{t('Form_phone')}</label>
                                    <input 
                                        className='applicationForm__form__input ukForm__input__for__two' 
                                        name='phone' 
                                        type='text' 
                                        onChange={e => onChange(e)} 
                                        value={phone} 
                                    />
                                </div>
                            </div>
                            <hr className='appform__hr'/>

                            <p className='passport__section__title'>{t('Form_main_passport')}</p>
                            <div className='input_grp'>
                                <div className='input_wrap input_wrap__bt'>
                                    <p className='ukForm__text'>{t('Form_passport_info')}</p>
                                    <IconButton onClick={()=> setShow(true)}>
                                        <ExpandMoreIcon className='expand__bt'/>
                                    </IconButton>
                                    <IconButton onClick={()=> setShow(false)}>
                                        <ExpandLessIcon className='expand__less__bt'/>
                                    </IconButton>
                                </div>
                                <div className='input_wrap input_wrap__bt import__passport'>
                                    <label className='ukForm__form__label' htmlFor='passport_photo'>{t('Form_passport_import')}</label>
                                    <input 
                                        className='ukForm__input__for__two import__passport' 
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
                                    <div className='input_grp'>
                                        <div className='input_wrap'>
                                            <label className='ukForm__form__label appForm__subject' htmlFor='first_name'>{t('Form_firstName')}</label>
                                            <input 
                                                className='applicationForm__form__input ukForm__input__for__two' 
                                                name='first_name' 
                                                type='text' 
                                                placeholder={t('Form_firstName')} 
                                                onChange={e => onChange(e)} 
                                                value={first_name} 
                                            />
                                        </div>
                                        <div className='input_wrap'>
                                            <label className='ukForm__form__label' htmlFor='last_name'>{t('Form_lastName')}</label>
                                            <input 
                                                className='applicationForm__form__input ukForm__input__for__two' 
                                                name='last_name' 
                                                type='text' 
                                                placeholder={t('Form_lastName')} 
                                                onChange={e => onChange(e)} 
                                                value={last_name} 
                                            />
                                        </div>
                                    </div>


                                    <div className='input_grp'>
                                        <div className='form__wrap'>
                                            <label className='ukForm__form__label' htmlFor='dob'>{t('Form_dob')}</label>
                                            <input 
                                                className='applicationForm__form__input ukForm__input__for__two' 
                                                name='dob' 
                                                type='date' 
                                                onChange={e => onChange(e)} 
                                                value={dob} 
                                            />
                                        </div>
                                        <div className='form__wrap'>
                                            <label className='ukForm__form__label' htmlFor='place_of_birth'>{t('Form_pob')}</label>
                                            <input 
                                                className='applicationForm__form__input ukForm__input__for__two' 
                                                name='place_of_birth' 
                                                type='text' 
                                                placeholder={t('Form_pobEx')} 
                                                onChange={e => onChange(e)} 
                                                value={place_of_birth} 
                                            />
                                        </div>
                                    </div>

                                    <div className='input_grp'>
                                        <div className='form__wrap'>
                                            <label className='ukForm__form__label' htmlFor='pasport_number'>{t('Form_passportNo')}</label>
                                            <input 
                                                className='applicationForm__form__input ukForm__input__for__two' 
                                                name='pasport_number' 
                                                type='text' 
                                                placeholder={t('Form_passportNo')}
                                                onChange={e => onChange(e)} 
                                                value={pasport_number} 
                                            />
                                        </div>
                                        <div className='form__wrap'>
                                            <label className='ukForm__form__label' htmlFor='nationality'>{t('Form_nationality')}</label>
                                            <input 
                                                className='applicationForm__form__input ukForm__input__for__two' 
                                                name='nationality' 
                                                type='text' 
                                                placeholder={t('Form_nationalityEx')}
                                                onChange={e => onChange(e)} 
                                                value={nationality} 
                                            />
                                        </div>
                                    </div>

                                    <div className='input_grp'>
                                        <div className='form__wrap'>
                                            <label className='ukForm__form__label' htmlFor='passport_issue_date'>{t('Form_pass_issueDate')}</label>
                                            <input 
                                                className='applicationForm__form__input ukForm__input__for__two' 
                                                name='passport_issue_date' 
                                                type='date' 
                                                onChange={e => onChange(e)} 
                                                value={passport_issue_date} 
                                            />
                                        </div>
                                        <div className='form__wrap'>
                                            <label className='ukForm__form__label' htmlFor='passport_issue_date'>{t('Form_pass_expiryDate')}</label>
                                            <input 
                                                className='applicationForm__form__input ukForm__input__for__two' 
                                                name='passport_expiry_date' 
                                                type='date' 
                                                onChange={e => onChange(e)} 
                                                value={passport_expiry_date} 
                                            />
                                        </div>
                                    </div>
                                </>
                                :null}

                                <hr className='appform__hr'/>

                                <div className='input_wrap input_wrap__bt'>
                                    <label className='ukForm__form__label' htmlFor='address'>{t('Form_address')}</label>
                                    <input 
                                        className='input__for__one' 
                                        name='address' 
                                        type='text' 
                                        placeholder={t('Form_addressEx')} 
                                        onChange={e => onChange(e)} 
                                        value={address} 
                                    />
                                </div>

                                <div className='input_grp'>
                                    <div className='input_wrap'>
                                        <label className='ukForm__form__label appForm__subject' htmlFor='residence_since'>{t('Form_addressSince')}</label>
                                        <input 
                                            className='applicationForm__form__input ukForm__input__for__two' 
                                            name='residence_since' 
                                            type='text' 
                                            placeholder={t('Form_addressSinceEx')} 
                                            onChange={e => onChange(e)} 
                                            value={residence_since} 
                                        />
                                    </div>
                                    <div className='input_wrap passport__input__radio'>
                                        <ul className='appform__ul'>
                                            <li className='appform__il'>
                                                <label className="radio_wrap">
                                                    <input 
                                                        type="radio" 
                                                        name="address_ownership_status" 
                                                        value='Rent' 
                                                        className="input_radio" 
                                                        onChange={e => onChange(e)}
                                                        checked={address_ownership_status === 'Rent'}
                                                    />
                                                    <span>{t('Form_addressRent')}</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="radio_wrap">
                                                    <input 
                                                        type="radio" 
                                                        name="address_ownership_status" 
                                                        value='Owned'
                                                        className="input_radio"
                                                        onChange={e => onChange(e)}
                                                        checked={address_ownership_status === 'Owned'}
                                                        />
                                                    <span>{t('Form_addressOwned')}</span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <hr className='appform__hr'/>

                                <div className='input_grp'>
                                    
                                    <div className='select__purpose'>
                                        <h2 className='select__op__container'>{t('Form_maritial-status')}</h2>
                                        <div className='p__select__box'>
                                            <div onClick={()=> setShowMaritialStatus(!showMaritialStatus)} className='ukForm__selected' id="maritialStatusRadio">{t('Form_select')}<ExpandMoreIcon className='p__xpand__bt'/></div>
                                            { showMaritialStatus?
                                            <>
                                                <div className='p__option__container '>
                                                    <div className='travel__p__option'>
                                                        <label className='p__box__label'>
                                                            <input
                                                                type='radio'
                                                                name='maritial_status' 
                                                                value='Single' 
                                                                className='p__input_radio' 
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
                                                    <div className='travel__p__option'>
                                                        <label className='p__box__label'>
                                                            <input 
                                                                type='radio'
                                                                name='maritial_status'
                                                                value='Married'
                                                                className='p__input_radio'
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
                                                    <div className='travel__p__option'>
                                                        <label className='p__box__label'>
                                                            <input
                                                                type='radio'
                                                                name='maritial_status'
                                                                value='Widowed'
                                                                className='p__input_radio'
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

                                    <div className='input_wrap'>
                                        <label className='ukForm__form__label appForm__subject' htmlFor='first_name'>{t('Form_destination')}</label>
                                        <input 
                                            className='applicationForm__form__input ukForm__input__for__two' 
                                            name='destination_country' 
                                            type='text' 
                                            placeholder={t('Form_destinationEx')} 
                                            onChange={e => onChange(e)} 
                                            value={destination_country} 
                                        />
                                    </div>
                                </div>

                                    
                            {showMaritialSection?
                                <>
                                    <p className='passport__section__title'>{t('Form_wifePassport')}</p>
                                    <div className='input_grp'>
                                        <div className='input_wrap input_wrap__bt'>
                                            <p className='ukForm__text'>{t('Form_passport_info')}</p>
                                            <IconButton onClick={()=> setShowSpousSection(true)}>
                                                <ExpandMoreIcon className='expand__bt'/>
                                            </IconButton>
                                            <IconButton onClick={()=> setShowSpousSection(false)}>
                                                <ExpandLessIcon className='expand__less__bt'/>
                                            </IconButton>
                                        </div>
                                        <div className='input_wrap input_wrap__bt import__passport'>
                                            <label className='ukForm__form__label' htmlFor='spouse_passport_photo'>{t('Form_passport_import')}</label>
                                            <input 
                                                className='ukForm__input__for__two import__passport' 
                                                name='spouse_passport_photo' 
                                                type='file' 
                                                accept='image/*,.pdf'
                                                placeholder='Import Passport' 
                                                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.files[0] })}
                                            />
                                        </div>
                                    </div>
                                    <div className='input_grp'>
                                        <div className='input_wrap spouse__trip__bt'>
                                            <p className='radion__title'>{t('Form_wifeAddress')}</p>
                                            <ul className='appform__ul'>
                                                <li className='appform__il'>
                                                    <label className="radio_wrap">
                                                        <input 
                                                            type='radio'
                                                            name='spouse_live_with_you'
                                                            value='Yes' 
                                                            className='input_radio'
                                                            onChange={e => onChange(e)}
                                                            checked={spouse_live_with_you === 'Yes'}
                                                        />
                                                        <span>{t('Form_yes')}</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className='radio_wrap'>
                                                        <input 
                                                            type='radio'
                                                            name='spouse_live_with_you'
                                                            value='No'
                                                            className='input_radio'
                                                            onChange={e => onChange(e)}
                                                            checked={spouse_live_with_you === 'No'}
                                                            />
                                                        <span>{t('Form_no')}</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className='input_wrap spouse__trip__bt'>
                                            <p className='radion__title'>{t('Form_wifeTravel')}</p>
                                            <ul className='appform__ul'>
                                                <li className='appform__il'>
                                                    <label className="radio_wrap">
                                                        <input 
                                                            type='radio' 
                                                            name='spouse_travel_with_you' 
                                                            value='Yes' 
                                                            className='input_radio'
                                                            onChange={e => onChange(e)}
                                                            checked={spouse_travel_with_you === 'Yes'}
                                                        />
                                                        <span>{t('Form_yes')}</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className='radio_wrap'>
                                                        <input 
                                                            type='radio'
                                                            name='spouse_travel_with_you'
                                                            value='No'
                                                            className="input_radio"
                                                            onChange={e => onChange(e)}
                                                            checked={spouse_travel_with_you === 'No'}
                                                            />
                                                        <span>{t('Form_no')}</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    { showSpousSection?
                                        <>
                                            <div className='input_grp'>
                                                <div className='input_wrap'>
                                                    <label className='ukForm__form__label appForm__subject' htmlFor='spouse_first_name'>{t('Form_wife_firstName')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='spouse_first_name' 
                                                        type='text' 
                                                        placeholder={t('Form_firstName')} 
                                                        onChange={e => onChange(e)} 
                                                        value={spouse_first_name} 
                                                    />
                                                </div>
                                                <div className='input_wrap'>
                                                    <label className='ukForm__form__label' htmlFor='last_name'>{t('Form_wife_lastName')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='spouse_last_name' 
                                                        type='text' 
                                                        placeholder={t('Form_lastName')} 
                                                        onChange={e => onChange(e)} 
                                                        value={spouse_last_name} 
                                                    />
                                                </div>
                                            </div>

                                            <div className='input_grp'>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='spouse_pasport_number'>{t('Form_passportNo')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='spouse_pasport_number' 
                                                        type='text' 
                                                        placeholder={t('Form_passportNo')}
                                                        onChange={e => onChange(e)} 
                                                        value={spouse_pasport_number} 
                                                    />
                                                </div>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='spouse_nationality'>{t('Form_nationality')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='spouse_nationality' 
                                                        type='text' 
                                                        placeholder={t('Form_nationalityEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={spouse_nationality} 
                                                    />
                                                </div>
                                            </div>
                                            <div className='input_grp'>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='spouse_dob'>{t('Form_dob')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='spouse_dob' 
                                                        type='date' 
                                                        onChange={e => onChange(e)} 
                                                        value={spouse_dob} 
                                                    />
                                                </div>
                                            </div>

                                        </>
                                    :null}
                                </>
                            :null}
                            <hr className='appform__hr'/>
                            <div className='input_grp'>
                                <div className='input_wrap'>
                                    <label className='ukForm__form__label' htmlFor='trip_expenses'>{t('Form_tripExpenses')}</label>
                                    <input 
                                        className='applicationForm__form__input ukForm__input__for__two' 
                                        name='trip_expenses' 
                                        type='text' 
                                        placeholder={t('Form_tripExpensesEx')}
                                        onChange={e => onChange(e)} 
                                        value={trip_expenses} 
                                    />
                                </div>
                                
                                <div className='select__purpose'>
                                    <h2 className='select__op__container'>{t('Form_tripPurpose')}</h2>
                                    <div className='p__select__box'>
                                        <div onClick={()=> setShowPurpose(!showPurpose)} className='ukForm__selected' id="myRadioCheck">{t('Form_select')}<ExpandMoreIcon className='p__xpand__bt'/></div>
                                        { showPurpose?
                                        <>
                                            <div className='p__option__container '>
                                                <div className='travel__p__option'>
                                                    <label className='p__box__label'>
                                                        <input
                                                            type='radio'
                                                            name='purpose_of_trip' 
                                                            value='Study' 
                                                            className='p__input_radio' 
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
                                                <div className='travel__p__option'>
                                                    <label className='p__box__label'>
                                                        <input 
                                                            type='radio'
                                                            name='purpose_of_trip'
                                                            value='Tourism / Visit'
                                                            className='p__input_radio'
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
                                                <div className='travel__p__option'>
                                                    <label className='p__box__label'>
                                                        <input
                                                            type='radio'
                                                            name='purpose_of_trip'
                                                            value='Business'
                                                            className='p__input_radio'
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
                                                <div className='travel__p__option'>
                                                    <label className='p__box__label'>
                                                        <input 
                                                            type='radio'
                                                            name='purpose_of_trip'
                                                            value='Medical'
                                                            className='p__input_radio'
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
                                                <div className='travel__p__option'>
                                                    <label className='p__box__label'>
                                                        <input 
                                                            type='radio'
                                                            name='purpose_of_trip'
                                                            value='Other'
                                                            className='p__input_radio'
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
                                    <div className='input_grp'>
                                        <div className='input_wrap'>
                                            <label className='ukForm__form__label appForm__subject' htmlFor='first_name'>{t('Form_instituteName')}</label>
                                            <input 
                                                className='applicationForm__form__input ukForm__input__for__two' 
                                                name='school_name' 
                                                type='text' 
                                                placeholder={t('Form_instituteEx')}
                                                onChange={e => onChange(e)} 
                                                value={school_name} 
                                            />
                                        </div>
                                        <div className='input_wrap input_wrap__bt import__passport'>
                                            <label className='ukForm__form__label' htmlFor='admission_offer_photo'>{t('Form_instituteAdmission')}</label>
                                            <input 
                                                className='ukForm__input__for__two import__passport' 
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
                                    <div className='input_grp'>
                                        <div className='input_wrap'>
                                            <label className='ukForm__form__label appForm__subject' htmlFor='inviter_full_name'>{t('Form_inviter')}</label>
                                            <input 
                                                className='applicationForm__form__input ukForm__input__for__two' 
                                                name='inviter_full_name' 
                                                type='text' 
                                                placeholder={t('Form_inviterEx')} 
                                                onChange={e => onChange(e)} 
                                                value={inviter_full_name} 
                                            />
                                        </div>
                                        <div className='input_wrap'>
                                            <label className='ukForm__form__label' htmlFor='inviter_email'>{t('Form_email')}</label>
                                            <input 
                                                className='applicationForm__form__input ukForm__input__for__two' 
                                                name='inviter_email' 
                                                type='text' 
                                                placeholder={t('Form_emailEx')}
                                                onChange={e => onChange(e)} 
                                                value={inviter_email} 
                                            />
                                        </div>
                                    </div>

                                    <div className='input_wrap input_wrap__bt'>
                                        <label className='ukForm__form__label' htmlFor='inviter_address'>{t('Form_address')}</label>
                                        <input 
                                            className='input__for__one' 
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
                                    <div className='input_grp'>
                                        <div className='input_wrap'>
                                            <label className='ukForm__form__label appForm__subject' htmlFor='hospital_name'>{t('Form_hospital')}</label>
                                            <input 
                                                className='applicationForm__form__input ukForm__input__for__two' 
                                                name='hospital_name' 
                                                type='text' 
                                                placeholder={t('Form_hospitalEx')}
                                                onChange={e => onChange(e)} 
                                                value={hospital_name} 
                                            />
                                        </div>
                                        <div className='input_wrap input_wrap__bt import__passport'>
                                            <label className='ukForm__form__label' htmlFor='medical_invitation_letter'>{t('Form_hospitalLetter')}</label>
                                            <input 
                                                className='ukForm__input__for__two import__passport' 
                                                name='medical_invitation_letter' 
                                                type='file' 
                                                accept='image/*,.pdf'
                                                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.files[0] })}
                                            />
                                        </div>
                                    </div>

                                    <div className='input_wrap'>
                                        <label className='ukForm__form__label' htmlFor='medical_details'>{t('Form_additional')}</label>
                                        <textarea 
                                            className='applicationForm__form__textarea'
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
                                    <div className='input_wrap'>
                                        <label className='ukForm__form__label' htmlFor='other_travel_reason'>{t('Form_additional')}</label>
                                        <textarea 
                                            className='applicationForm__form__textarea'
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

                            <div className='input_grp'>
                                 <div className='form__wrap'>
                                        <label className='ukForm__form__label' htmlFor='arrive_date'>{t('Form_tripArrival')}</label>
                                        <input 
                                            className='applicationForm__form__input ukForm__input__for__two' 
                                            name='arrive_date' 
                                            type='date' 
                                            onChange={e => onChange(e)} 
                                            value={arrive_date} 
                                        />
                                </div>
                                 <div className='form__wrap'>
                                    <label className='ukForm__form__label' htmlFor='leave_date'>{t('Form_tripDepature')}</label>
                                    <input 
                                        className='applicationForm__form__input ukForm__input__for__two' 
                                        name='leave_date' 
                                        type='date' 
                                        onChange={e => onChange(e)} 
                                        value={leave_date} 
                                    />
                                </div>
                            </div>
                            <div className='input_grp'>

                                { showInviterDetails?
                                 <>
                                    <div className='input_wrap input_wrap__bt import__passport'>
                                        <label className='ukForm__form__label' htmlFor='invitation_letter'>{t('Form_invitation')}</label>
                                        <input 
                                            className='ukForm__input__for__two import__passport' 
                                            name='invitation_letter' 
                                            type='file' 
                                            accept='image/*,.pdf'
                                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.files[0] })}
                                        />
                                    </div>
                                 </>
                                 :null}
                            </div>

                                <hr className='appform__hr'/>
                                <p className='appform__section__title'>{t('Form_employmentStatus')}</p>
                                <div className='input_wrap input__radio__group'>
                                    <div className='input_wrap passport__input__radio'>
                                        <ul className='appform__ul'>
                                            <li className='appform__il'>
                                                <label className="radio_wrap">
                                                    <input 
                                                        type="radio" 
                                                        name="work_status" 
                                                        value='Student' 
                                                        className="input_radio" 
                                                        onChange={e => onChange(e)}
                                                        onClick={()=> setShowJobDetails(false)}
                                                        checked={work_status === 'Student'}
                                                    />
                                                    <span>{t('Form_workStatus1')}</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="radio_wrap">
                                                    <input 
                                                        type="radio" 
                                                        name="work_status" 
                                                        value='S/Employee'
                                                        className="input_radio"
                                                        onChange={e => onChange(e)}
                                                        checked={work_status === 'S/Employee'}
                                                        onClick={()=> setShowJobDetails(!showJobDetails)}
                                                        />
                                                    <span>{t('Form_workStatus2')}</span>
                                                </label>
                                            </li>
                                            <li>
                                                <label className="radio_wrap">
                                                    <input 
                                                        type="radio" 
                                                        name="work_status" 
                                                        value='Unemployed'
                                                        className="input_radio"
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
                                    <div className='input_grp'>
                                        <div className='input_wrap'>
                                            <label className='ukForm__form__label appForm__subject' htmlFor='first_name'>{t('Form_job')}</label>
                                            <input 
                                                className='applicationForm__form__input ukForm__input__for__two' 
                                                name='job_title' 
                                                type='text' 
                                                placeholder={t('Form_jobEx')}
                                                onChange={e => onChange(e)} 
                                                value={job_title} 
                                            />
                                        </div>
                                        <div className='input_wrap'>
                                            <label className='ukForm__form__label' htmlFor='last_name'>{t('Form_startDate')}</label>
                                            <input 
                                                className='applicationForm__form__input ukForm__input__for__two' 
                                                name='starting_date' 
                                                type='date' 
                                                onChange={e => onChange(e)} 
                                                value={starting_date} 
                                            />
                                        </div>
                                    </div>

                                    <div className='input_grp'>
                                        <div className='input_wrap'>
                                            <label className='ukForm__form__label appForm__subject' htmlFor='company_name'>{t('Form_employerName')}</label>
                                            <input 
                                                className='applicationForm__form__input ukForm__input__for__two' 
                                                name='company_name' 
                                                type='text' 
                                                placeholder={t('Form_employerNameEx')}
                                                onChange={e => onChange(e)} 
                                                value={company_name} 
                                            />
                                        </div>
                                        <div className='input_wrap'>
                                            <label className='ukForm__form__label' htmlFor='company_phone'>{t('Form_employerNamePhone')}</label>
                                            <input 
                                                className='applicationForm__form__input ukForm__input__for__two' 
                                                name='company_phone' 
                                                type='text' 
                                                onChange={e => onChange(e)} 
                                                value={company_phone} 
                                            />
                                        </div>
                                    </div>

                                    <div className='input_grp'>
                                        <div className='input_wrap'>
                                            <label className='ukForm__form__label appForm__subject' htmlFor='salary'>{t('Form_jobIncome')}</label>
                                            <input 
                                                className='applicationForm__form__input ukForm__input__for__two' 
                                                name='salary' 
                                                type='text' 
                                                placeholder={t('Form_jobSalary')} 
                                                onChange={e => onChange(e)} 
                                                value={salary} 
                                            />
                                        </div>
                                        <div className='input_wrap'>
                                            <label className='ukForm__form__label' htmlFor='monthly_living_expenses'>{t('Form_livingExpenses')}</label>
                                            <input 
                                                className='applicationForm__form__input ukForm__input__for__two' 
                                                name='monthly_living_expenses' 
                                                type='text' 
                                                placeholder={t('Form_tripExpensesEx')}
                                                onChange={e => onChange(e)} 
                                                value={monthly_living_expenses} 
                                            />
                                        </div>
                                    </div>
                                        <div className='input_wrap'>
                                            <label className='ukForm__form__label appForm__subject' htmlFor='salary'>{t('Form_employerAddress')}</label>
                                            <input 
                                                className='applicationForm__form__input input__for__one' 
                                                name='job_address' 
                                                type='text' 
                                                onChange={e => onChange(e)} 
                                                value={job_address} 
                                            />
                                        </div>
                                </>
                            :null}
                            <hr className='appform__hr'/>

                            <div className='input_grp'>
                                <div className='input_wrap'>
                                    <label className='ukForm__form__label appForm__subject' htmlFor='father_first_name'>{t('Form_father_firstName')}</label>
                                    <input 
                                        className='applicationForm__form__input ukForm__input__for__two' 
                                        name='father_first_name' 
                                        type='text' 
                                        placeholder={t('Form_father_firstNameEx')}
                                        onChange={e => onChange(e)} 
                                        value={father_first_name} 
                                    />
                                </div>
                                <div className='input_wrap'>
                                    <label className='ukForm__form__label' htmlFor='father_last_name'>{t('Form_father_lastName')}</label>
                                    <input 
                                        className='applicationForm__form__input ukForm__input__for__two' 
                                        name='father_last_name' 
                                        type='text' 
                                        placeholder={t('Form_father_lastNameEx')}
                                        onChange={e => onChange(e)} 
                                        value={father_last_name} 
                                    />
                                </div>
                            </div>

                            <div className='input_grp'>
                                <div className='form__wrap'>
                                    <label className='ukForm__form__label' htmlFor='father_dob'>{t('Form_father_dob')}</label>
                                    <input 
                                        className='applicationForm__form__input ukForm__input__for__two' 
                                        name='father_dob' 
                                        type='date' 
                                        onChange={e => onChange(e)} 
                                        value={father_dob} 
                                    />
                                </div>
                                <div className='form__wrap'>
                                    <label className='ukForm__form__label' htmlFor='father_nationality'>{t('Form_father_nationality')}</label>
                                    <input 
                                        className='applicationForm__form__input ukForm__input__for__two' 
                                        name='father_nationality' 
                                        type='text' 
                                        placeholder={t('Form_father_nationalityEx')}
                                        onChange={e => onChange(e)} 
                                        value={father_nationality} 
                                    />
                                </div>
                            </div>

                            <hr className='appform__hr'/>

                            <div className='input_grp'>
                                <div className='input_wrap'>
                                    <label className='ukForm__form__label appForm__subject' htmlFor='mother_first_name'>{t('Form_mother_firstName')}</label>
                                    <input 
                                        className='applicationForm__form__input ukForm__input__for__two' 
                                        name='mother_first_name' 
                                        type='text' 
                                        placeholder={t('Form_mother_firstNameEx')}
                                        onChange={e => onChange(e)} 
                                        value={mother_first_name} 
                                    />
                                </div>
                                <div className='input_wrap'>
                                    <label className='ukForm__form__label' htmlFor='mother_last_name'>{t('Form_mother_lastName')}</label>
                                    <input 
                                        className='applicationForm__form__input ukForm__input__for__two' 
                                        name='mother_last_name' 
                                        type='text' 
                                        placeholder={t('Form_mother_lastNameEx')}
                                        onChange={e => onChange(e)} 
                                        value={mother_last_name} 
                                    />
                                </div>
                            </div>

                            <div className='input_grp'>
                                <div className='form__wrap'>
                                    <label className='ukForm__form__label' htmlFor='dob'>{t('Form_mother_dob')}</label>
                                    <input 
                                        className='applicationForm__form__input ukForm__input__for__two' 
                                        name='mother_dob' 
                                        type='date' 
                                        onChange={e => onChange(e)} 
                                        value={mother_dob} 
                                    />
                                </div>
                                <div className='form__wrap'>
                                    <label className='ukForm__form__label' htmlFor='place_of_birth'>{t('Form_mother_nationality')}</label>
                                    <input 
                                        className='applicationForm__form__input ukForm__input__for__two' 
                                        name='mother_nationality' 
                                        type='text' 
                                        placeholder={t('Form_mother_nationalityEx')}
                                        onChange={e => onChange(e)} 
                                        value={mother_nationality} 
                                    />
                                </div>
                            </div>
                            <hr className='appform__hr'/> 

                            <div className='input_grp'>
                                <p className='ukForm__section__question' >{t('Form_childrenQ')}</p>
                                <div className='input_wrap passport__input__radio'>
                                    <ul className='appform__ul'>
                                        <li className='appform__il'>
                                            <label className='radio_wrap'>
                                                <input 
                                                    type='radio' 
                                                    name='have_children'
                                                    value='Yes' 
                                                    className='input_radio'
                                                    onChange={e => onChange(e)}
                                                    checked={have_children === 'Yes'}
                                                    onClick={()=> setShowChildSectionNumbered(true)}
                                                />
                                                <span>{t('Form_yes')}</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className='radio_wrap'>
                                                <input 
                                                    type='radio'
                                                    name='have_children'
                                                    value='No'
                                                    className='input_radio'
                                                    onChange={e => onChange(e)}
                                                    checked={have_children === 'No'}
                                                    onClick={()=> setShowChildSectionNumbered(false)}
                                                    />
                                                <span>{t('Form_no')}</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {showChildSectionNumbered?
                                <>
                                <hr className='appform__hr'/> 
                                    <p className='ukForm__section__question'>{t('Form_childrenNo')}</p>
                                    <div className='input_wrap input__radio__group'>
                                            <div className='input_wrap passport__input__radio'>
                                                <ul className='appform__ul'>
                                                    <li className='appform__il'>
                                                        <label className='radio_wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_children'
                                                                value='1' 
                                                                className='input_radio'
                                                                onChange={e => onChange(e)}
                                                                checked={number_of_children === '1'}
                                                                onClick={()=> {
                                                                    setShowChild1Section(true)
                                                                    setShowChild2Section(false)
                                                                    setShowChild3Section(false)
                                                                    setShowChild4Section(false)
                                                                    setShowChild5Section(false)
                                                                    setShowChild6Section(false)
                                                                    setShowChild7Section(false)
                                                                }}
                                                            />
                                                            <span>1</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className='radio_wrap'>
                                                            <input 
                                                                type='radio'
                                                                name='number_of_children'
                                                                value='2'
                                                                className='input_radio'
                                                                onChange={e => onChange(e)}
                                                                onClick={()=> {
                                                                    setShowChild1Section(true)
                                                                    setShowChild2Section(true)
                                                                    setShowChild3Section(false)
                                                                    setShowChild4Section(false)
                                                                    setShowChild5Section(false)
                                                                    setShowChild6Section(false)
                                                                    setShowChild7Section(false)
                                                                }}
                                                                checked={number_of_children === '2'}
                                                                />
                                                            <span>2</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className='radio_wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_children'
                                                                value='3'
                                                                className='input_radio'
                                                                onChange={e => onChange(e)}
                                                                checked={number_of_children === '3'}
                                                                onClick={()=> {
                                                                    setShowChild1Section(true)
                                                                    setShowChild2Section(true)
                                                                    setShowChild3Section(true)
                                                                    setShowChild4Section(false)
                                                                    setShowChild5Section(false)
                                                                    setShowChild6Section(false)
                                                                    setShowChild7Section(false)
                                                                }}
                                                                />
                                                            <span>3</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className='radio_wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_children'
                                                                value='4'
                                                                className='input_radio'
                                                                onChange={e => onChange(e)}
                                                                checked={number_of_children === '4'}
                                                                onClick={()=> {
                                                                    setShowChild1Section(true)
                                                                    setShowChild2Section(true)
                                                                    setShowChild3Section(true)
                                                                    setShowChild4Section(true)
                                                                    setShowChild5Section(false)
                                                                    setShowChild6Section(false)
                                                                    setShowChild7Section(false)
                                                                }}
                                                                />
                                                            <span>4</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className='radio_wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_children'
                                                                value='5'
                                                                className='input_radio'
                                                                onChange={e => onChange(e)}
                                                                checked={number_of_children === '5'}
                                                                onClick={()=> {
                                                                    setShowChild1Section(true)
                                                                    setShowChild2Section(true)
                                                                    setShowChild3Section(true)
                                                                    setShowChild4Section(true)
                                                                    setShowChild5Section(true)
                                                                    setShowChild6Section(false)
                                                                    setShowChild7Section(false)
                                                                }}
                                                                />
                                                            <span>5</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className='radio_wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_children'
                                                                value='6'
                                                                className='input_radio'
                                                                onChange={e => onChange(e)}
                                                                checked={number_of_children === '6'}
                                                                onClick={()=> {
                                                                    setShowChild1Section(true)
                                                                    setShowChild2Section(true)
                                                                    setShowChild3Section(true)
                                                                    setShowChild4Section(true)
                                                                    setShowChild5Section(true)
                                                                    setShowChild6Section(true)
                                                                    setShowChild7Section(false)
                                                                }}
                                                                />
                                                            <span>6</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className='radio_wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_children'
                                                                value='7'
                                                                className='input_radio'
                                                                onChange={e => onChange(e)}
                                                                checked={number_of_children === '7'}
                                                                onClick={()=> {
                                                                    setShowChild1Section(true)
                                                                    setShowChild2Section(true)
                                                                    setShowChild3Section(true)
                                                                    setShowChild4Section(true)
                                                                    setShowChild5Section(true)
                                                                    setShowChild6Section(true)
                                                                    setShowChild7Section(true)
                                                                }}
                                                                />
                                                            <span>7</span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        {showChild1Section?
                                            <>
                                                <hr className='appform__hr'/>
                                                <p className='passport__section__title'>{t('Form_childPassport')}</p>
                                                <div className='input_grp'>
                                                    <div className='input_wrap input_wrap__bt'>
                                                        <p className='ukForm__text'>{t('Form_passport_info')}</p>
                                                        <IconButton onClick={()=> setShowChild1PassportDetails(true)}>
                                                            <ExpandMoreIcon className='expand__bt'/>
                                                        </IconButton>
                                                        <IconButton onClick={()=> setShowChild1PassportDetails(false)}>
                                                            <ExpandLessIcon className='expand__less__bt'/>
                                                        </IconButton>
                                                    </div>
                                                    <div className='input_wrap input_wrap__bt import__passport'>
                                                        <label className='ukForm__form__label' htmlFor='spouse_passport_photo'>{t('Form_passport_import')}</label>
                                                            <input 
                                                            className='ukForm__input__for__two import__passport' 
                                                            name='child1_passport_photo' 
                                                            type='file' 
                                                            accept='image/*,.pdf'
                                                            placeholder='Import Passport' 
                                                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.files[0] })}
                                                        />
                                                    </div>
                                                </div>

                                                <div className='input_grp'>
                                                    <div className='input_wrap spouse__trip__bt'>
                                                        <p className='radion__title'>{t('Form_childAddress')}</p>
                                                        <ul className='appform__ul'>
                                                            <li className='appform__il'>
                                                                <label className="radio_wrap">
                                                                    <input 
                                                                        type='radio'
                                                                        name='child1_live_with_you'
                                                                        value='Yes' 
                                                                        className='input_radio'
                                                                        checked={child1_live_with_you === 'Yes'}
                                                                        onChange={e => onChange(e)}
                                                                    />
                                                                    <span>{t('Form_yes')}</span>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label className='radio_wrap'>
                                                                    <input 
                                                                        type='radio'
                                                                        name='child1_live_with_you'
                                                                        value='No'
                                                                        className='input_radio'
                                                                        checked={child1_live_with_you === 'No'}
                                                                        onChange={e => onChange(e)}
                                                                        />
                                                                    <span>{t('Form_no')}</span>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className='input_wrap spouse__trip__bt'>
                                                        <p className='radion__title'>{t('Form_childTravel')}</p>
                                                        <ul className='appform__ul'>
                                                            <li className='appform__il'>
                                                                <label className="radio_wrap">
                                                                    <input 
                                                                        type='radio' 
                                                                        name='child1_travelling_with_you' 
                                                                        value='Yes' 
                                                                        className='input_radio'
                                                                        checked={child1_travelling_with_you === 'Yes'}
                                                                        onChange={e => onChange(e)}
                                                                    />
                                                                    <span>{t('Form_yes')}</span>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label className='radio_wrap'>
                                                                    <input 
                                                                        type='radio'
                                                                        name='child1_travelling_with_you'
                                                                        value='No'
                                                                        className='input_radio'
                                                                        checked={child1_travelling_with_you === 'No'}
                                                                        onChange={e => onChange(e)}
                                                                    />
                                                                    <span>{t('Form_no')}</span>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {showChild1PassportDetails?
                                                 <>
                                                    <div className='input_grp'>
                                                        <div className='input_wrap'>
                                                            <label className='ukForm__form__label appForm__subject' htmlFor='child1_first_name'>{t('Form_childFirstName')}</label>
                                                            <input 
                                                                className='applicationForm__form__input ukForm__input__for__two'
                                                                type='text'
                                                                name='child1_first_name' 
                                                                value={child1_first_name} 
                                                                placeholder={t('Form_firstName')}
                                                                onChange={e => onChange(e)}
                                                            />
                                                        </div>
                                                        <div className='input_wrap'>
                                                            <label className='ukForm__form__label appForm__subject' htmlFor='child1_last_name'>{t('Form_childlastName')}</label>
                                                            <input 
                                                                className='applicationForm__form__input ukForm__input__for__two'
                                                                type='text'
                                                                name='child1_last_name' 
                                                                value={child1_last_name} 
                                                                placeholder={t('Form_lastName')}
                                                                onChange={e => onChange(e)}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className='input_grp'>
                                                        <div className='input_wrap'>
                                                            <label className='ukForm__form__label appForm__subject' htmlFor='child1_dob'>{t('Form_childDob')}</label>
                                                            <input 
                                                                className='applicationForm__form__input ukForm__input__for__two'
                                                                type='date'
                                                                name='child1_dob' 
                                                                value={child1_dob} 
                                                                onChange={e => onChange(e)}
                                                            />
                                                        </div>
                                                        <div className='input_wrap'>
                                                            <label className='ukForm__form__label appForm__subject' htmlFor='child1_nationality'>{t('Form_childNationality')}</label>
                                                            <input 
                                                                className='applicationForm__form__input ukForm__input__for__two'
                                                                type='text'
                                                                name='child1_nationality' 
                                                                value={child1_nationality} 
                                                                placeholder={t('Form_childNationalityEx')}
                                                                onChange={e => onChange(e)}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className='input_wrap input_wrap__bt'>
                                                        <label className='ukForm__form__label' htmlFor='child1_address'>{t('Form_address')}</label>
                                                        <input 
                                                            className='input__for__one' 
                                                            name='child1_address' 
                                                            type='text' 
                                                            placeholder={t('Form_childAddressEx')}
                                                            onChange={e => onChange(e)} 
                                                            value={child1_address} 
                                                        />
                                                    </div>
                                                </>
                                            :null}
                                         </>
                                        :null}

                                        {showChild2Section?
                                            <>
                                                <hr className='appform__hr'/>
                                                <p className='passport__section__title'>{t('Form_childPassport')}</p>
                                                <div className='input_grp'>
                                                    <div className='input_wrap input_wrap__bt'>
                                                        <p className='ukForm__text'>{t('Form_passport_info')}</p>
                                                        <IconButton onClick={()=> setShowChild2PassportDetails(true)}>
                                                            <ExpandMoreIcon className='expand__bt'/>
                                                        </IconButton>
                                                        <IconButton onClick={()=> setShowChild2PassportDetails(false)}>
                                                            <ExpandLessIcon className='expand__less__bt'/>
                                                        </IconButton>
                                                    </div>
                                                    <div className='input_wrap input_wrap__bt import__passport'>
                                                        <label className='ukForm__form__label' htmlFor='child2_passport_photo'>{t('Form_passport_import')}</label>
                                                            <input 
                                                            className='ukForm__input__for__two import__passport' 
                                                            name='child2_passport_photo' 
                                                            type='file' 
                                                            accept='image/*,.pdf'
                                                            placeholder='Import Passport' 
                                                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.files[0] })}
                                                        />
                                                    </div>
                                                </div>

                                                <div className='input_grp'>
                                                    <div className='input_wrap spouse__trip__bt'>
                                                        <p className='radion__title'>{t('Form_childAddress')}</p>
                                                        <ul className='appform__ul'>
                                                            <li className='appform__il'>
                                                                <label className="radio_wrap">
                                                                    <input 
                                                                        type='radio'
                                                                        name='child2_live_with_you'
                                                                        value='Yes' 
                                                                        className='input_radio'
                                                                        checked={child2_live_with_you === 'Yes'}
                                                                        onChange={e => onChange(e)}
                                                                    />
                                                                    <span>{t('Form_yes')}</span>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label className='radio_wrap'>
                                                                    <input 
                                                                        type='radio'
                                                                        name='child2_live_with_you'
                                                                        value='No'
                                                                        className='input_radio'
                                                                        checked={child2_live_with_you === 'No'}
                                                                        onChange={e => onChange(e)}
                                                                        />
                                                                    <span>{t('Form_no')}</span>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className='input_wrap spouse__trip__bt'>
                                                        <p className='radion__title'>{t('Form_childTravel')}</p>
                                                        <ul className='appform__ul'>
                                                            <li className='appform__il'>
                                                                <label className="radio_wrap">
                                                                    <input 
                                                                        type='radio' 
                                                                        name='child2_travelling_with_you' 
                                                                        value='Yes' 
                                                                        className='input_radio'
                                                                        checked={child2_travelling_with_you === 'Yes'}
                                                                        onChange={e => onChange(e)}
                                                                    />
                                                                    <span>{t('Form_yes')}</span>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label className='radio_wrap'>
                                                                    <input 
                                                                        type='radio'
                                                                        name='child2_travelling_with_you'
                                                                        value='No'
                                                                        className='input_radio'
                                                                        checked={child2_travelling_with_you === 'No'}
                                                                        onChange={e => onChange(e)}
                                                                    />
                                                                    <span>{t('Form_no')}</span>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {showChild2PassportDetails?
                                                 <>
                                                    <div className='input_grp'>
                                                        <div className='input_wrap'>
                                                            <label className='ukForm__form__label appForm__subject' htmlFor='child2_first_name'>{t('Form_childFirstName')}</label>
                                                            <input 
                                                                className='applicationForm__form__input ukForm__input__for__two'
                                                                type='text'
                                                                name='child2_first_name' 
                                                                value={child2_first_name} 
                                                                placeholder={t('Form_firstName')}
                                                                onChange={e => onChange(e)}
                                                            />
                                                        </div>
                                                        <div className='input_wrap'>
                                                            <label className='ukForm__form__label appForm__subject' htmlFor='child2_last_name'>{t('Form_childlastName')}</label>
                                                            <input 
                                                                className='applicationForm__form__input ukForm__input__for__two'
                                                                type='text'
                                                                name='child2_last_name' 
                                                                value={child2_last_name} 
                                                                placeholder={t('Form_lastName')}
                                                                onChange={e => onChange(e)}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className='input_grp'>
                                                        <div className='input_wrap'>
                                                            <label className='ukForm__form__label appForm__subject' htmlFor='child2_dob'>{t('Form_childDob')}</label>
                                                            <input 
                                                                className='applicationForm__form__input ukForm__input__for__two'
                                                                type='date'
                                                                name='child2_dob' 
                                                                value={child2_dob} 
                                                                onChange={e => onChange(e)}
                                                            />
                                                        </div>
                                                        <div className='input_wrap'>
                                                            <label className='ukForm__form__label appForm__subject' htmlFor='child2_nationality'>{t('Form_childNationality')}</label>
                                                            <input 
                                                                className='applicationForm__form__input ukForm__input__for__two'
                                                                type='text'
                                                                name='child2_nationality' 
                                                                value={child2_nationality} 
                                                                placeholder={t('Form_childNationalityEx')}
                                                                onChange={e => onChange(e)}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className='input_wrap input_wrap__bt'>
                                                        <label className='ukForm__form__label' htmlFor='child2_address'>{t('Form_address')}</label>
                                                        <input 
                                                            className='input__for__one' 
                                                            name='child2_address' 
                                                            type='text' 
                                                            placeholder={t('Form_childAddressEx')}
                                                            onChange={e => onChange(e)} 
                                                            value={child2_address} 
                                                        />
                                                    </div>
                                                </>
                                            :null}
                                         </>
                                        :null}

                                        {showChild3Section?
                                            <>
                                                <hr className='appform__hr'/>
                                                <p className='passport__section__title'>{t('Form_childPassport')}</p>
                                                <div className='input_grp'>
                                                    <div className='input_wrap input_wrap__bt'>
                                                        <p className='ukForm__text'>{t('Form_passport_info')}</p>
                                                        <IconButton onClick={()=> setShowChild3PassportDetails(true)}>
                                                            <ExpandMoreIcon className='expand__bt'/>
                                                        </IconButton>
                                                        <IconButton onClick={()=> setShowChild3PassportDetails(false)}>
                                                            <ExpandLessIcon className='expand__less__bt'/>
                                                        </IconButton>
                                                    </div>
                                                    <div className='input_wrap input_wrap__bt import__passport'>
                                                        <label className='ukForm__form__label' htmlFor='child3_passport_photo'>{t('Form_passport_import')}</label>
                                                            <input 
                                                            className='ukForm__input__for__two import__passport' 
                                                            name='child3_passport_photo' 
                                                            type='file' 
                                                            accept='image/*,.pdf'
                                                            placeholder='Import Passport' 
                                                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.files[0] })}
                                                        />
                                                    </div>
                                                </div>

                                                <div className='input_grp'>
                                                    <div className='input_wrap spouse__trip__bt'>
                                                        <p className='radion__title'>{t('Form_childAddress')}</p>
                                                        <ul className='appform__ul'>
                                                            <li className='appform__il'>
                                                                <label className="radio_wrap">
                                                                    <input 
                                                                        type='radio'
                                                                        name='child3_live_with_you'
                                                                        value='Yes' 
                                                                        className='input_radio'
                                                                        checked={child3_live_with_you === 'Yes'}
                                                                        onChange={e => onChange(e)}
                                                                    />
                                                                    <span>{t('Form_yes')}</span>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label className='radio_wrap'>
                                                                    <input 
                                                                        type='radio'
                                                                        name='child3_live_with_you'
                                                                        value='No'
                                                                        className='input_radio'
                                                                        checked={child3_live_with_you === 'No'}
                                                                        onChange={e => onChange(e)}
                                                                        />
                                                                    <span>{t('Form_no')}</span>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className='input_wrap spouse__trip__bt'>
                                                        <p className='radion__title'>{t('Form_childTravel')}</p>
                                                        <ul className='appform__ul'>
                                                            <li className='appform__il'>
                                                                <label className="radio_wrap">
                                                                    <input 
                                                                        type='radio' 
                                                                        name='child3_travelling_with_you' 
                                                                        value='Yes' 
                                                                        className='input_radio'
                                                                        checked={child3_travelling_with_you === 'Yes'}
                                                                        onChange={e => onChange(e)}
                                                                    />
                                                                    <span>{t('Form_yes')}</span>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label className='radio_wrap'>
                                                                    <input 
                                                                        type='radio'
                                                                        name='child3_travelling_with_you'
                                                                        value='No'
                                                                        className='input_radio'
                                                                        checked={child2_travelling_with_you === 'No'}
                                                                        onChange={e => onChange(e)}
                                                                    />
                                                                    <span>{t('Form_no')}</span>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {showChild3PassportDetails?
                                                 <>
                                                    <div className='input_grp'>
                                                        <div className='input_wrap'>
                                                            <label className='ukForm__form__label appForm__subject' htmlFor='child3_first_name'>{t('Form_childFirstName')}</label>
                                                            <input 
                                                                className='applicationForm__form__input ukForm__input__for__two'
                                                                type='text'
                                                                name='child3_first_name' 
                                                                value={child3_first_name} 
                                                                placeholder={t('Form_firstName')}
                                                                onChange={e => onChange(e)}
                                                            />
                                                        </div>
                                                        <div className='input_wrap'>
                                                            <label className='ukForm__form__label appForm__subject' htmlFor='child3_last_name'>{t('Form_childlastName')}</label>
                                                            <input 
                                                                className='applicationForm__form__input ukForm__input__for__two'
                                                                type='text'
                                                                name='child3_last_name' 
                                                                value={child3_last_name} 
                                                                placeholder={t('Form_lastName')}
                                                                onChange={e => onChange(e)}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className='input_grp'>
                                                        <div className='input_wrap'>
                                                            <label className='ukForm__form__label appForm__subject' htmlFor='child3_dob'>{t('Form_childDob')}</label>
                                                            <input 
                                                                className='applicationForm__form__input ukForm__input__for__two'
                                                                type='date'
                                                                name='child3_dob' 
                                                                value={child3_dob} 
                                                                onChange={e => onChange(e)}
                                                            />
                                                        </div>
                                                        <div className='input_wrap'>
                                                            <label className='ukForm__form__label appForm__subject' htmlFor='child3_nationality'>{t('Form_childNationality')}</label>
                                                            <input 
                                                                className='applicationForm__form__input ukForm__input__for__two'
                                                                type='text'
                                                                name='child3_nationality' 
                                                                value={child3_nationality} 
                                                                placeholder={t('Form_childNationalityEx')}
                                                                onChange={e => onChange(e)}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className='input_wrap input_wrap__bt'>
                                                        <label className='ukForm__form__label' htmlFor='child3_address'>{t('Form_address')}</label>
                                                        <input 
                                                            className='input__for__one' 
                                                            name='child3_address' 
                                                            type='text' 
                                                            placeholder={t('Form_childAddressEx')}
                                                            onChange={e => onChange(e)} 
                                                            value={child3_address} 
                                                        />
                                                    </div>
                                                </>
                                            :null}
                                         </>
                                        :null}

                                        {showChild4Section?
                                            <>
                                                <hr className='appform__hr'/>
                                                <p className='passport__section__title'>{t('Form_childPassport')}</p>
                                                <div className='input_grp'>
                                                    <div className='input_wrap input_wrap__bt'>
                                                        <p className='ukForm__text'>{t('Form_passport_info')}</p>
                                                        <IconButton onClick={()=> setShowChild4PassportDetails(true)}>
                                                            <ExpandMoreIcon className='expand__bt'/>
                                                        </IconButton>
                                                        <IconButton onClick={()=> setShowChild4PassportDetails(false)}>
                                                            <ExpandLessIcon className='expand__less__bt'/>
                                                        </IconButton>
                                                    </div>
                                                    <div className='input_wrap input_wrap__bt import__passport'>
                                                        <label className='ukForm__form__label' htmlFor='child4_passport_photo'>{t('Form_passport_import')}</label>
                                                            <input 
                                                            className='ukForm__input__for__two import__passport' 
                                                            name='child4_passport_photo' 
                                                            type='file' 
                                                            accept='image/*,.pdf'
                                                            placeholder='Import Passport' 
                                                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.files[0] })}
                                                        />
                                                    </div>
                                                </div>

                                                <div className='input_grp'>
                                                    <div className='input_wrap spouse__trip__bt'>
                                                        <p className='radion__title'>{t('Form_childAddress')}</p>
                                                        <ul className='appform__ul'>
                                                            <li className='appform__il'>
                                                                <label className="radio_wrap">
                                                                    <input 
                                                                        type='radio'
                                                                        name='child4_live_with_you'
                                                                        value='Yes' 
                                                                        className='input_radio'
                                                                        checked={child4_live_with_you === 'Yes'}
                                                                        onChange={e => onChange(e)}
                                                                    />
                                                                    <span>{t('Form_yes')}</span>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label className='radio_wrap'>
                                                                    <input 
                                                                        type='radio'
                                                                        name='child4_live_with_you'
                                                                        value='No'
                                                                        className='input_radio'
                                                                        checked={child4_live_with_you === 'No'}
                                                                        onChange={e => onChange(e)}
                                                                        />
                                                                    <span>{t('Form_no')}</span>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className='input_wrap spouse__trip__bt'>
                                                        <p className='radion__title'>{t('Form_childTravel')}</p>
                                                        <ul className='appform__ul'>
                                                            <li className='appform__il'>
                                                                <label className="radio_wrap">
                                                                    <input 
                                                                        type='radio' 
                                                                        name='child4_travelling_with_you' 
                                                                        value='Yes' 
                                                                        className='input_radio'
                                                                        checked={child4_travelling_with_you === 'Yes'}
                                                                        onChange={e => onChange(e)}
                                                                    />
                                                                    <span>{t('Form_yes')}</span>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label className='radio_wrap'>
                                                                    <input 
                                                                        type='radio'
                                                                        name='child4_travelling_with_you'
                                                                        value='No'
                                                                        className='input_radio'
                                                                        checked={child4_travelling_with_you === 'No'}
                                                                        onChange={e => onChange(e)}
                                                                    />
                                                                    <span>{t('Form_no')}</span>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {showChild4PassportDetails?
                                                 <>
                                                    <div className='input_grp'>
                                                        <div className='input_wrap'>
                                                            <label className='ukForm__form__label appForm__subject' htmlFor='child4_first_name'>{t('Form_childFirstName')}</label>
                                                            <input 
                                                                className='applicationForm__form__input ukForm__input__for__two'
                                                                type='text'
                                                                name='child4_first_name' 
                                                                value={child4_first_name} 
                                                                placeholder={t('Form_firstName')}
                                                                onChange={e => onChange(e)}
                                                            />
                                                        </div>
                                                        <div className='input_wrap'>
                                                            <label className='ukForm__form__label appForm__subject' htmlFor='child4_last_name'>{t('Form_childlastName')}</label>
                                                            <input 
                                                                className='applicationForm__form__input ukForm__input__for__two'
                                                                type='text'
                                                                name='child4_last_name' 
                                                                value={child4_last_name} 
                                                                placeholder={t('Form_lastName')}
                                                                onChange={e => onChange(e)}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className='input_grp'>
                                                        <div className='input_wrap'>
                                                            <label className='ukForm__form__label appForm__subject' htmlFor='child4_dob'>{t('Form_childDob')}</label>
                                                            <input 
                                                                className='applicationForm__form__input ukForm__input__for__two'
                                                                type='date'
                                                                name='child4_dob' 
                                                                value={child4_dob} 
                                                                onChange={e => onChange(e)}
                                                            />
                                                        </div>
                                                        <div className='input_wrap'>
                                                            <label className='ukForm__form__label appForm__subject' htmlFor='child4_nationality'>{t('Form_childNationality')}</label>
                                                            <input 
                                                                className='applicationForm__form__input ukForm__input__for__two'
                                                                type='text'
                                                                name='child4_nationality' 
                                                                value={child4_nationality} 
                                                                placeholder={t('Form_childNationalityEx')}
                                                                onChange={e => onChange(e)}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className='input_wrap input_wrap__bt'>
                                                        <label className='ukForm__form__label' htmlFor='child4_address'>{t('Form_address')}</label>
                                                        <input 
                                                            className='input__for__one' 
                                                            name='child4_address' 
                                                            type='text' 
                                                            placeholder={t('Form_childAddressEx')}
                                                            onChange={e => onChange(e)} 
                                                            value={child4_address} 
                                                        />
                                                    </div>
                                                </>
                                            :null}
                                         </>
                                        :null}

                                        {showChild5Section?
                                            <>
                                                <hr className='appform__hr'/>
                                                <p className='passport__section__title'>{t('Form_childPassport')}</p>
                                                <div className='input_grp'>
                                                    <div className='input_wrap input_wrap__bt'>
                                                        <p className='ukForm__text'>{t('Form_passport_info')}</p>
                                                        <IconButton onClick={()=> setShowChild5PassportDetails(true)}>
                                                            <ExpandMoreIcon className='expand__bt'/>
                                                        </IconButton>
                                                        <IconButton onClick={()=> setShowChild5PassportDetails(false)}>
                                                            <ExpandLessIcon className='expand__less__bt'/>
                                                        </IconButton>
                                                    </div>
                                                    <div className='input_wrap input_wrap__bt import__passport'>
                                                        <label className='ukForm__form__label' htmlFor='child5_passport_photo'>{t('Form_passport_import')}</label>
                                                            <input 
                                                            className='ukForm__input__for__two import__passport' 
                                                            name='child5_passport_photo' 
                                                            type='file' 
                                                            accept='image/*,.pdf'
                                                            placeholder='Import Passport' 
                                                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.files[0] })}
                                                        />
                                                    </div>
                                                </div>

                                                <div className='input_grp'>
                                                    <div className='input_wrap spouse__trip__bt'>
                                                        <p className='radion__title'>{t('Form_childAddress')}</p>
                                                        <ul className='appform__ul'>
                                                            <li className='appform__il'>
                                                                <label className="radio_wrap">
                                                                    <input 
                                                                        type='radio'
                                                                        name='child5_live_with_you'
                                                                        value='Yes' 
                                                                        className='input_radio'
                                                                        checked={child5_live_with_you === 'Yes'}
                                                                        onChange={e => onChange(e)}
                                                                    />
                                                                    <span>{t('Form_yes')}</span>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label className='radio_wrap'>
                                                                    <input 
                                                                        type='radio'
                                                                        name='child5_live_with_you'
                                                                        value='No'
                                                                        className='input_radio'
                                                                        checked={child5_live_with_you === 'No'}
                                                                        onChange={e => onChange(e)}
                                                                        />
                                                                    <span>{t('Form_no')}</span>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className='input_wrap spouse__trip__bt'>
                                                        <p className='radion__title'>{t('Form_childTravel')}</p>
                                                        <ul className='appform__ul'>
                                                            <li className='appform__il'>
                                                                <label className="radio_wrap">
                                                                    <input 
                                                                        type='radio' 
                                                                        name='child5_travelling_with_you' 
                                                                        value='Yes' 
                                                                        className='input_radio'
                                                                        checked={child5_travelling_with_you === 'Yes'}
                                                                        onChange={e => onChange(e)}
                                                                    />
                                                                    <span>{t('Form_yes')}</span>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label className='radio_wrap'>
                                                                    <input 
                                                                        type='radio'
                                                                        name='child5_travelling_with_you'
                                                                        value='No'
                                                                        className='input_radio'
                                                                        checked={child5_travelling_with_you === 'No'}
                                                                        onChange={e => onChange(e)}
                                                                    />
                                                                    <span>{t('Form_no')}</span>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {showChild5PassportDetails?
                                                 <>
                                                    <div className='input_grp'>
                                                        <div className='input_wrap'>
                                                            <label className='ukForm__form__label appForm__subject' htmlFor='child5_first_name'>{t('Form_childFirstName')}</label>
                                                            <input 
                                                                className='applicationForm__form__input ukForm__input__for__two'
                                                                type='text'
                                                                name='child5_first_name' 
                                                                value={child5_first_name} 
                                                                placeholder={t('Form_firstName')}
                                                                onChange={e => onChange(e)}
                                                            />
                                                        </div>
                                                        <div className='input_wrap'>
                                                            <label className='ukForm__form__label appForm__subject' htmlFor='child5_last_name'>{t('Form_childlastName')}</label>
                                                            <input 
                                                                className='applicationForm__form__input ukForm__input__for__two'
                                                                type='text'
                                                                name='child5_last_name' 
                                                                value={child5_last_name} 
                                                                placeholder={t('Form_lastName')}
                                                                onChange={e => onChange(e)}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className='input_grp'>
                                                        <div className='input_wrap'>
                                                            <label className='ukForm__form__label appForm__subject' htmlFor='child5_dob'>{t('Form_childDob')}</label>
                                                            <input 
                                                                className='applicationForm__form__input ukForm__input__for__two'
                                                                type='date'
                                                                name='child5_dob' 
                                                                value={child5_dob} 
                                                                onChange={e => onChange(e)}
                                                            />
                                                        </div>
                                                        <div className='input_wrap'>
                                                            <label className='ukForm__form__label appForm__subject' htmlFor='child5_nationality'>{t('Form_childNationality')}</label>
                                                            <input 
                                                                className='applicationForm__form__input ukForm__input__for__two'
                                                                type='text'
                                                                name='child5_nationality' 
                                                                value={child5_nationality} 
                                                                placeholder={t('Form_childNationalityEx')}
                                                                onChange={e => onChange(e)}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className='input_wrap input_wrap__bt'>
                                                        <label className='ukForm__form__label' htmlFor='child5_address'>{t('Form_address')}</label>
                                                        <input 
                                                            className='input__for__one' 
                                                            name='child5_address' 
                                                            type='text' 
                                                            placeholder={t('Form_childAddressEx')}
                                                            onChange={e => onChange(e)} 
                                                            value={child5_address} 
                                                        />
                                                    </div>
                                                </>
                                            :null}
                                         </>
                                        :null}

                                        {showChild6Section?
                                            <>
                                                <hr className='appform__hr'/>
                                                <p className='passport__section__title'>{t('Form_childPassport')}</p>
                                                <div className='input_grp'>
                                                    <div className='input_wrap input_wrap__bt'>
                                                        <p className='ukForm__text'>{t('Form_passport_info')}</p>
                                                        <IconButton onClick={()=> setShowChild6PassportDetails(true)}>
                                                            <ExpandMoreIcon className='expand__bt'/>
                                                        </IconButton>
                                                        <IconButton onClick={()=> setShowChild6PassportDetails(false)}>
                                                            <ExpandLessIcon className='expand__less__bt'/>
                                                        </IconButton>
                                                    </div>
                                                    <div className='input_wrap input_wrap__bt import__passport'>
                                                        <label className='ukForm__form__label' htmlFor='child6_passport_photo'>{t('Form_passport_import')}</label>
                                                            <input 
                                                            className='ukForm__input__for__two import__passport' 
                                                            name='child6_passport_photo' 
                                                            type='file' 
                                                            accept='image/*,.pdf'
                                                            placeholder='Import Passport' 
                                                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.files[0] })}
                                                        />
                                                    </div>
                                                </div>

                                                <div className='input_grp'>
                                                    <div className='input_wrap spouse__trip__bt'>
                                                        <p className='radion__title'>{t('Form_childAddress')}</p>
                                                        <ul className='appform__ul'>
                                                            <li className='appform__il'>
                                                                <label className="radio_wrap">
                                                                    <input 
                                                                        type='radio'
                                                                        name='child6_live_with_you'
                                                                        value='Yes' 
                                                                        className='input_radio'
                                                                        checked={child6_live_with_you === 'Yes'}
                                                                        onChange={e => onChange(e)}
                                                                    />
                                                                    <span>{t('Form_yes')}</span>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label className='radio_wrap'>
                                                                    <input 
                                                                        type='radio'
                                                                        name='child6_live_with_you'
                                                                        value='No'
                                                                        className='input_radio'
                                                                        checked={child6_live_with_you === 'No'}
                                                                        onChange={e => onChange(e)}
                                                                        />
                                                                    <span>{t('Form_no')}</span>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className='input_wrap spouse__trip__bt'>
                                                        <p className='radion__title'>{t('Form_childTravel')}</p>
                                                        <ul className='appform__ul'>
                                                            <li className='appform__il'>
                                                                <label className="radio_wrap">
                                                                    <input 
                                                                        type='radio' 
                                                                        name='child6_travelling_with_you' 
                                                                        value='Yes' 
                                                                        className='input_radio'
                                                                        checked={child6_travelling_with_you === 'Yes'}
                                                                        onChange={e => onChange(e)}
                                                                    />
                                                                    <span>{t('Form_yes')}</span>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label className='radio_wrap'>
                                                                    <input 
                                                                        type='radio'
                                                                        name='child6_travelling_with_you'
                                                                        value='No'
                                                                        className='input_radio'
                                                                        checked={child6_travelling_with_you === 'No'}
                                                                        onChange={e => onChange(e)}
                                                                    />
                                                                    <span>{t('Form_no')}</span>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {showChild6PassportDetails?
                                                 <>
                                                    <div className='input_grp'>
                                                        <div className='input_wrap'>
                                                            <label className='ukForm__form__label appForm__subject' htmlFor='child6_first_name'>{t('Form_childTravel')}</label>
                                                            <input 
                                                                className='applicationForm__form__input ukForm__input__for__two'
                                                                type='text'
                                                                name='child6_first_name' 
                                                                value={child6_first_name} 
                                                                placeholder={t('Form_firstName')}
                                                                onChange={e => onChange(e)}
                                                            />
                                                        </div>
                                                        <div className='input_wrap'>
                                                            <label className='ukForm__form__label appForm__subject' htmlFor='child6_last_name'>{t('Form_childlastName')}</label>
                                                            <input 
                                                                className='applicationForm__form__input ukForm__input__for__two'
                                                                type='text'
                                                                name='child6_last_name' 
                                                                value={child6_last_name} 
                                                                placeholder={t('Form_lastName')}
                                                                onChange={e => onChange(e)}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className='input_grp'>
                                                        <div className='input_wrap'>
                                                            <label className='ukForm__form__label appForm__subject' htmlFor='child6_dob'>{t('Form_childDob')}</label>
                                                            <input 
                                                                className='applicationForm__form__input ukForm__input__for__two'
                                                                type='date'
                                                                name='child6_dob' 
                                                                value={child6_dob} 
                                                                onChange={e => onChange(e)}
                                                            />
                                                        </div>
                                                        <div className='input_wrap'>
                                                            <label className='ukForm__form__label appForm__subject' htmlFor='child6_nationality'>{t('Form_childNationality')}</label>
                                                            <input 
                                                                className='applicationForm__form__input ukForm__input__for__two'
                                                                type='text'
                                                                name='child6_nationality' 
                                                                value={child6_nationality} 
                                                                placeholder={t('Form_childNationalityEx')}
                                                                onChange={e => onChange(e)}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className='input_wrap input_wrap__bt'>
                                                        <label className='ukForm__form__label' htmlFor='child6_address'>{t('Form_address')}</label>
                                                        <input 
                                                            className='input__for__one' 
                                                            name='child6_address' 
                                                            type='text' 
                                                            placeholder={t('Form_childAddressEx')}
                                                            onChange={e => onChange(e)} 
                                                            value={child6_address} 
                                                        />
                                                    </div>
                                                </>
                                            :null}
                                         </>
                                        :null}
                        
                                        {showChild7Section?
                                            <>
                                                <hr className='appform__hr'/>
                                                <p className='passport__section__title'>{t('Form_childPassport')}</p>
                                                <div className='input_grp'>
                                                    <div className='input_wrap input_wrap__bt'>
                                                        <p className='ukForm__text'>{t('Form_passport_info')}</p>
                                                        <IconButton onClick={()=> setShowChild7PassportDetails(true)}>
                                                            <ExpandMoreIcon className='expand__bt'/>
                                                        </IconButton>
                                                        <IconButton onClick={()=> setShowChild7PassportDetails(false)}>
                                                            <ExpandLessIcon className='expand__less__bt'/>
                                                        </IconButton>
                                                    </div>
                                                    <div className='input_wrap input_wrap__bt import__passport'>
                                                        <label className='ukForm__form__label' htmlFor='child7_passport_photo'>{t('Form_passport_import')}</label>
                                                            <input 
                                                            className='ukForm__input__for__two import__passport' 
                                                            name='child7_passport_photo' 
                                                            type='file' 
                                                            accept='image/*,.pdf'
                                                            placeholder='Import Passport' 
                                                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.files[0] })}
                                                        />
                                                    </div>
                                                </div>

                                                <div className='input_grp'>
                                                    <div className='input_wrap spouse__trip__bt'>
                                                        <p className='radion__title'>{t('Form_childAddress')}</p>
                                                        <ul className='appform__ul'>
                                                            <li className='appform__il'>
                                                                <label className="radio_wrap">
                                                                    <input 
                                                                        type='radio'
                                                                        name='child7_live_with_you'
                                                                        value='Yes' 
                                                                        className='input_radio'
                                                                        checked={child7_live_with_you === 'Yes'}
                                                                        onChange={e => onChange(e)}
                                                                    />
                                                                    <span>{t('Form_yes')}</span>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label className='radio_wrap'>
                                                                    <input 
                                                                        type='radio'
                                                                        name='child7_live_with_you'
                                                                        value='No'
                                                                        className='input_radio'
                                                                        checked={child7_live_with_you === 'No'}
                                                                        onChange={e => onChange(e)}
                                                                        />
                                                                    <span>{t('Form_no')}</span>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className='input_wrap spouse__trip__bt'>
                                                        <p className='radion__title'>{t('Form_childTravel')}</p>
                                                        <ul className='appform__ul'>
                                                            <li className='appform__il'>
                                                                <label className="radio_wrap">
                                                                    <input 
                                                                        type='radio' 
                                                                        name='child7_travelling_with_you' 
                                                                        value='Yes' 
                                                                        className='input_radio'
                                                                        checked={child7_travelling_with_you === 'Yes'}
                                                                        onChange={e => onChange(e)}
                                                                    />
                                                                    <span>{t('Form_yes')}</span>
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <label className='radio_wrap'>
                                                                    <input 
                                                                        type='radio'
                                                                        name='child7_travelling_with_you'
                                                                        value='No'
                                                                        className='input_radio'
                                                                        checked={child7_travelling_with_you === 'No'}
                                                                        onChange={e => onChange(e)}
                                                                    />
                                                                    <span>{t('Form_no')}</span>
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {showChild7PassportDetails?
                                                 <>
                                                    <div className='input_grp'>
                                                        <div className='input_wrap'>
                                                            <label className='ukForm__form__label appForm__subject' htmlFor='child7_first_name'>{t('Form_childFirstName')}</label>
                                                            <input 
                                                                className='applicationForm__form__input ukForm__input__for__two'
                                                                type='text'
                                                                name='child7_first_name' 
                                                                value={child7_first_name} 
                                                                placeholder={t('Form_firstName')}
                                                                onChange={e => onChange(e)}
                                                            />
                                                        </div>
                                                        <div className='input_wrap'>
                                                            <label className='ukForm__form__label appForm__subject' htmlFor='child7_last_name'>{t('Form_childlastName')}</label>
                                                            <input 
                                                                className='applicationForm__form__input ukForm__input__for__two'
                                                                type='text'
                                                                name='child7_last_name' 
                                                                value={child7_last_name} 
                                                                placeholder={t('Form_lastName')}
                                                                onChange={e => onChange(e)}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className='input_grp'>
                                                        <div className='input_wrap'>
                                                            <label className='ukForm__form__label appForm__subject' htmlFor='child7_dob'>{t('Form_childDob')}</label>
                                                            <input 
                                                                className='applicationForm__form__input ukForm__input__for__two'
                                                                type='date'
                                                                name='child7_dob' 
                                                                value={child7_dob} 
                                                                onChange={e => onChange(e)}
                                                            />
                                                        </div>
                                                        <div className='input_wrap'>
                                                            <label className='ukForm__form__label appForm__subject' htmlFor='child7_nationality'>{t('Form_childNationality')}</label>
                                                            <input 
                                                                className='applicationForm__form__input ukForm__input__for__two'
                                                                type='text'
                                                                name='child7_nationality' 
                                                                value={child7_nationality} 
                                                                placeholder={t('Form_childNationalityEx')}
                                                                onChange={e => onChange(e)}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className='input_wrap input_wrap__bt'>
                                                        <label className='ukForm__form__label' htmlFor='child7_address'>{t('Form_address')}</label>
                                                        <input 
                                                            className='input__for__one' 
                                                            name='child7_address' 
                                                            type='text' 
                                                            placeholder={t('Form_childAddressEx')} 
                                                            onChange={e => onChange(e)} 
                                                            value={child7_address} 
                                                        />
                                                    </div>
                                                </>
                                            :null}
                                         </>
                                        :null}

                                </>
                            :null}

                            <hr className='appform__hr'/>
                            <p className='ukForm__section__question'>{t('Form_visaRefusal')}</p>
                            <div className='input_wrap input__radio__group'>
                                <div className='input_wrap passport__input__radio'>
                                    <ul className='appform__ul'>
                                        <li>
                                            <label className="radio_wrap">
                                                <input 
                                                    type="radio" 
                                                    name="visa_refusl" 
                                                    value='Yes'
                                                    className="input_radio"
                                                    onChange={e => onChange(e)}
                                                    checked={visa_refusl === 'Yes'}
                                                    onClick={()=> setShowRefusalSection(true)}
                                                />
                                                <span>{t('Form_yes')}</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className="radio_wrap">
                                                <input 
                                                    type="radio" 
                                                    name="visa_refusl" 
                                                    value='No'
                                                    className="input_radio"
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
                                    <div className='input_grp'>
                                        <div className='input_wrap'>
                                            <label className='ukForm__form__label appForm__subject' htmlFor='country_of_refusal'>{t('Form_visaRefusal_country')}</label>
                                            <input 
                                                className='applicationForm__form__input ukForm__input__for__two'
                                                type='text'
                                                name='country_of_refusal' 
                                                value={country_of_refusal} 
                                                placeholder={t('Form_visaRefusal_countryEx')}
                                                onChange={e => onChange(e)}
                                            />
                                        </div>
                                        <div className='input_wrap'>
                                            <label className='ukForm__form__label appForm__subject' htmlFor='visa_refusal_date'>{t('Form_visaRefusal_date')}</label>
                                            <input 
                                                className='applicationForm__form__input ukForm__input__for__two'
                                                type='date'
                                                name='visa_refusal_date' 
                                                value={visa_refusal_date} 
                                                onChange={e => onChange(e)}
                                            />
                                        </div>
                                    </div>
                                    <div className='input_wrap'>
                                        <label className='ukForm__form__label' htmlFor='visa_refusal_desc'>{t('Form_visaRefusal_details')}</label>
                                        <textarea 
                                            className='applicationForm__form__textarea'
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

                            <hr className='appform__hr'/>
                            <p className='ukForm__section__question'>{t('Form_travel_history')}</p>
                            <div className='input_wrap input__radio__group'>
                                <div className='input_wrap passport__input__radio'>
                                    <ul className='appform__ul'>
                                        <li>
                                            <label className='radio_wrap'>
                                                <input 
                                                    type='radio' 
                                                    name='did_visit_uk'
                                                    value='Yes'
                                                    className='input_radio'
                                                    onChange={e => onChange(e)}
                                                    checked={did_visit_uk === 'Yes'}
                                                    onClick={()=> setShowUkTripsSection(true)}
                                                />
                                                <span>{t('Form_yes')}</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className='radio_wrap'>
                                                <input 
                                                    type='radio'
                                                    name='did_visit_uk'
                                                    value='No'
                                                    className='input_radio'
                                                    onChange={e => onChange(e)}
                                                    checked={did_visit_uk === 'No'}
                                                    onClick={()=> {
                                                        setShowUkTripsSection(false)
                                                    }}
                                                />
                                                <span>{t('Form_no')}</span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {showUkTripsSection?
                                <>
                                    <hr className='appform__hr'/>
                                    <p className='ukForm__section__question'>{t('ukForm_medical')}</p>
                                    <div className='input_wrap input__radio__group'>
                                        <div className='input_wrap passport__input__radio'>
                                            <ul className='appform__ul'>
                                                <li>
                                                    <label className='radio_wrap'>
                                                        <input 
                                                            type='radio' 
                                                            name='medical_treatment_uk'
                                                            value='Yes'
                                                            className='input_radio'
                                                            onChange={e => onChange(e)}
                                                            checked={medical_treatment_uk === 'Yes'}
                                                        />
                                                        <span>{t('Form_yes')}</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className='radio_wrap'>
                                                        <input 
                                                            type='radio'
                                                            name='medical_treatment_uk'
                                                            value='No'
                                                            className='input_radio'
                                                            onChange={e => onChange(e)}
                                                            checked={medical_treatment_uk === 'No'}
                                                        />
                                                        <span>{t('Form_no')}</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <hr className='appform__hr'/>
                                    <p className='ukForm__section__question'>{t('ukForm_insuranceNo')}</p>
                                    <div className='input_wrap input__radio__group'>
                                        <div className='input_wrap passport__input__radio'>
                                            <ul className='appform__ul'>
                                                <li>
                                                    <label className='radio_wrap'>
                                                        <input 
                                                            type='radio' 
                                                            name='uk_insurance_number'
                                                            value='Yes'
                                                            className='input_radio'
                                                            onChange={e => onChange(e)}
                                                            checked={uk_insurance_number === 'Yes'}
                                                        />
                                                        <span>{t('Form_yes')}</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className='radio_wrap'>
                                                        <input 
                                                            type='radio'
                                                            name='uk_insurance_number'
                                                            value='No'
                                                            className='input_radio'
                                                            onChange={e => onChange(e)}
                                                            checked={uk_insurance_number === 'No'}
                                                        />
                                                        <span>{t('Form_no')}</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <hr className='appform__hr'/>
                                    <p className='ukForm__section__question'>{t('ukForm_drivingLC')}</p>
                                    <div className='input_wrap input__radio__group'>
                                        <div className='input_wrap passport__input__radio'>
                                            <ul className='appform__ul'>
                                                <li>
                                                    <label className='radio_wrap'>
                                                        <input 
                                                            type='radio' 
                                                            name='uk_driving_license'
                                                            value='Yes'
                                                            className='input_radio'
                                                            onChange={e => onChange(e)}
                                                            checked={uk_driving_license === 'Yes'}
                                                        />
                                                        <span>{t('Form_yes')}</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className='radio_wrap'>
                                                        <input 
                                                            type='radio'
                                                            name='uk_driving_license'
                                                            value='No'
                                                            className='input_radio'
                                                            onChange={e => onChange(e)}
                                                            checked={uk_driving_license === 'No'}
                                                        />
                                                        <span>{t('Form_no')}</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <hr className='appform__hr'/>
                                    <p className='ukForm__section__question'>{t('ukForm_visaIssued')}</p>
                                    <div className='input_wrap input__radio__group'>
                                        <div className='input_wrap passport__input__radio'>
                                            <ul className='appform__ul'>
                                                <li>
                                                    <label className='radio_wrap'>
                                                        <input 
                                                            type='radio' 
                                                            name='obtained_uk_visa'
                                                            value='Yes'
                                                            className='input_radio'
                                                            onChange={e => onChange(e)}
                                                            checked={obtained_uk_visa === 'Yes'}
                                                            onClick={()=> {
                                                                setShowUkIssuedVisa(true)
                                                            }}
                                                        />
                                                        <span>{t('Form_yes')}</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className='radio_wrap'>
                                                        <input 
                                                            type='radio'
                                                            name='obtained_uk_visa'
                                                            value='No'
                                                            className='input_radio'
                                                            onChange={e => onChange(e)}
                                                            checked={obtained_uk_visa === 'No'}
                                                            onClick={()=> {
                                                                setShowUkIssuedVisa(false)
                                                            }}
                                                        />
                                                        <span>{t('Form_no')}</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {showUkIssuedVisa?
                                        <>
                                            <hr className='appform__hr'/>
                                            <div className='input_grp'>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='uk_visit_arrival_date2'>{t('ukForm_visaIssue_date')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='uk_visa_issue_date' 
                                                        placeholder={t('ukForm_visaIssue_dateEx')}
                                                        type='text' 
                                                        onChange={e => onChange(e)} 
                                                        value={uk_visa_issue_date} 
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    :null}

                                    <hr className='appform__hr'/>
                                    <p className='ukForm__section__question'>{t('ukForm_visa_extend')}</p>
                                    <div className='input_wrap input__radio__group'>
                                        <div className='input_wrap passport__input__radio'>
                                            <ul className='appform__ul'>
                                                <li>
                                                    <label className='radio_wrap'>
                                                        <input 
                                                            type='radio' 
                                                            name='uk_remain_visa'
                                                            value='Yes'
                                                            className='input_radio'
                                                            onChange={e => onChange(e)}
                                                            checked={uk_remain_visa === 'Yes'}
                                                            onClick={()=> {
                                                                setShowUkRemainVisa(true)
                                                            }}
                                                        />
                                                        <span>{t('Form_yes')}</span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className='radio_wrap'>
                                                        <input 
                                                            type='radio'
                                                            name='uk_remain_visa'
                                                            value='No'
                                                            className='input_radio'
                                                            onChange={e => onChange(e)}
                                                            checked={uk_remain_visa === 'No'}
                                                            onClick={()=> {
                                                                setShowUkRemainVisa(false)
                                                            }}
                                                        />
                                                        <span>{t('Form_no')}</span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {showUkRemainVisa?
                                        <>
                                            <hr className='appform__hr'/>
                                            <div className='input_grp'>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='uk_remain_visa_date'>{t('ukForm_visa_extendDate')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='uk_remain_visa_date' 
                                                        placeholder={t('ukForm_visaIssue_dateEx')}
                                                        type='text' 
                                                        onChange={e => onChange(e)} 
                                                        value={uk_remain_visa_date} 
                                                    />
                                                </div>
                                                <div className='input_wrap passport__input__radio'>
                                                    <ul className='appform__ul'>
                                                        <li className='appform__il'>
                                                            <label className="radio_wrap">
                                                                <input 
                                                                    type="radio" 
                                                                    name="uk_remain_visa_results" 
                                                                    value='Approved' 
                                                                    className="input_radio" 
                                                                    onChange={e => onChange(e)}
                                                                    checked={uk_remain_visa_results === 'Approved'}
                                                                />
                                                                <span>{t('ukForm_visaExtend_ok')}</span>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="radio_wrap">
                                                                <input 
                                                                    type="radio" 
                                                                    name="uk_remain_visa_results" 
                                                                    value='Refused'
                                                                    className="input_radio"
                                                                    onChange={e => onChange(e)}
                                                                    checked={uk_remain_visa_results === 'Refused'}
                                                                    />
                                                                <span>{t('ukForm_visaExtend_refused')}</span>
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </>
                                    :null}

                                    <hr className='appform__hr'/>
                                    <p className='ukForm__section__question'>{t('ukForm_tripsNo')}</p>
                                    <div className='input_wrap input__radio__group'>
                                            <div className='input_wrap passport__input__radio'>
                                                <ul className='appform__ul'>
                                                    <li className='appform__il'>
                                                        <label className='radio_wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_uk_visits'
                                                                value='1' 
                                                                className='input_radio'
                                                                onChange={e => onChange(e)}
                                                                checked={number_of_uk_visits === '1'}
                                                                onClick={()=> {
                                                                    setShowUkVisit2(false)
                                                                    setShowUkVisit3(false)
                                                                    setShowUkVisit4(false)
                                                                    setShowUkVisit5(false)
                                                                    setShowUkVisit6(false)
                                                                    setShowUkVisit7(false)                                        
                                                                }}
                                                            />
                                                            <span>1</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className='radio_wrap'>
                                                            <input 
                                                                type='radio'
                                                                name='number_of_uk_visits'
                                                                value='2'
                                                                className='input_radio'
                                                                onChange={e => onChange(e)}
                                                                onClick={()=> {
                                                                    setShowUkVisit2(true)
                                                                    setShowUkVisit3(false)
                                                                    setShowUkVisit4(false)
                                                                    setShowUkVisit5(false)
                                                                    setShowUkVisit6(false)
                                                                    setShowUkVisit7(false)                                        
                                                                }}
                                                                checked={number_of_uk_visits === '2'}
                                                                />
                                                            <span>2</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className='radio_wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_uk_visits'
                                                                value='3'
                                                                className='input_radio'
                                                                onChange={e => onChange(e)}
                                                                checked={number_of_uk_visits === '3'}
                                                                onClick={()=> {
                                                                    setShowUkVisit2(true)
                                                                    setShowUkVisit3(true)
                                                                    setShowUkVisit4(false)
                                                                    setShowUkVisit5(false)
                                                                    setShowUkVisit6(false)
                                                                    setShowUkVisit7(false)                                        
                                                                }}
                                                                />
                                                            <span>3</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className='radio_wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_uk_visits'
                                                                value='4'
                                                                className='input_radio'
                                                                onChange={e => onChange(e)}
                                                                checked={number_of_uk_visits === '4'}
                                                                onClick={()=> {
                                                                    setShowUkVisit2(true)
                                                                    setShowUkVisit3(true)
                                                                    setShowUkVisit4(true)
                                                                    setShowUkVisit5(false)
                                                                    setShowUkVisit6(false)
                                                                    setShowUkVisit7(false)                                        
                                                                }}
                                                                />
                                                            <span>4</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className='radio_wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_uk_visits'
                                                                value='5'
                                                                className='input_radio'
                                                                onChange={e => onChange(e)}
                                                                checked={number_of_uk_visits === '5'}
                                                                onClick={()=> {
                                                                    setShowUkVisit2(true)
                                                                    setShowUkVisit3(true)
                                                                    setShowUkVisit4(true)
                                                                    setShowUkVisit5(true)
                                                                    setShowUkVisit6(false)
                                                                    setShowUkVisit7(false)                                        
                                                                }}
                                                                />
                                                            <span>5</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className='radio_wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_uk_visits'
                                                                value='6'
                                                                className='input_radio'
                                                                onChange={e => onChange(e)}
                                                                checked={number_of_uk_visits === '6'}
                                                                onClick={()=> {
                                                                    setShowUkVisit2(true)
                                                                    setShowUkVisit3(true)
                                                                    setShowUkVisit4(true)
                                                                    setShowUkVisit5(true)
                                                                    setShowUkVisit6(true)
                                                                    setShowUkVisit7(false)                                        
                                                                }}
                                                                />
                                                            <span>6</span>
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className='radio_wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_uk_visits'
                                                                value='7'
                                                                className='input_radio'
                                                                onChange={e => onChange(e)}
                                                                checked={number_of_uk_visits === '7'}
                                                                onClick={()=> {
                                                                    setShowUkVisit2(true)
                                                                    setShowUkVisit3(true)
                                                                    setShowUkVisit4(true)
                                                                    setShowUkVisit5(true)
                                                                    setShowUkVisit6(true)
                                                                    setShowUkVisit7(true)                                        
                                                                }}
                                                                />
                                                            <span>7</span>
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                            
                                            <hr className='appform__hr'/>
                                            <div className='input_grp'>
                                                <div className='input_wrap'>
                                                    <label className='ukForm__form__label appForm__subject' htmlFor='purpose_of_uk_visit'>{t('ukForm_visaPurpose')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='purpose_of_uk_visit' 
                                                        type='text' 
                                                        placeholder={t('ukForm_visaPurposeEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={purpose_of_uk_visit} 
                                                    />
                                                </div>
                                            </div>

                                            <div className='input_grp'>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='uk_visit_arrival_date'>{t('ukForm_ukVisit_date')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='uk_visit_arrival_date' 
                                                        placeholder={t('ukForm_visaIssue_dateEx')}
                                                        type='text' 
                                                        onChange={e => onChange(e)} 
                                                        value={uk_visit_arrival_date} 
                                                    />
                                                </div>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='period_of_uk_stay'>{t('ukForm_uk_StudyPeriod')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='period_of_uk_stay' 
                                                        type='text' 
                                                        placeholder={t('ukForm_uk_StudyPeriodEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={period_of_uk_stay} 
                                                    />
                                                </div>
                                            </div>

                                    {showUkVisit2?
                                        <>
                                            <hr className='appform__hr'/>
                                            <div className='input_grp'>
                                                <div className='input_wrap'>
                                                    <label className='ukForm__form__label appForm__subject' htmlFor='purpose_of_uk_visit2'>{t('ukForm_visaPurpose')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='purpose_of_uk_visit2' 
                                                        type='text' 
                                                        placeholder={t('ukForm_visaPurposeEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={purpose_of_uk_visit2} 
                                                    />
                                                </div>
                                            </div>

                                            <div className='input_grp'>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='uk_visit_arrival_date2'>{t('ukForm_ukVisit_date')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='uk_visit_arrival_date2' 
                                                        placeholder={t('ukForm_visaIssue_dateEx')}
                                                        type='text' 
                                                        onChange={e => onChange(e)} 
                                                        value={uk_visit_arrival_date2} 
                                                    />
                                                </div>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='period_of_uk_stay2'>{t('ukForm_uk_StudyPeriod')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='period_of_uk_stay2' 
                                                        type='text' 
                                                        placeholder={t('ukForm_uk_StudyPeriodEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={period_of_uk_stay2} 
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    :null}

                                    {showUkVisit3?
                                        <>
                                            <hr className='appform__hr'/>
                                            <div className='input_grp'>
                                                <div className='input_wrap'>
                                                    <label className='ukForm__form__label appForm__subject' htmlFor='purpose_of_uk_visit3'>{t('ukForm_visaPurpose')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='purpose_of_uk_visit3' 
                                                        type='text' 
                                                        placeholder={t('ukForm_visaPurposeEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={purpose_of_uk_visit3} 
                                                    />
                                                </div>
                                            </div>

                                            <div className='input_grp'>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='uk_visit_arrival_date3'>{t('ukForm_ukVisit_date')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='uk_visit_arrival_date3' 
                                                        placeholder={t('ukForm_visaIssue_dateEx')}
                                                        type='text' 
                                                        onChange={e => onChange(e)} 
                                                        value={uk_visit_arrival_date3} 
                                                    />
                                                </div>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='period_of_uk_stay3'>{t('ukForm_uk_StudyPeriod')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='period_of_uk_stay3' 
                                                        type='text' 
                                                        placeholder={t('ukForm_uk_StudyPeriodEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={period_of_uk_stay3} 
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    :null}
                                    {showUkVisit4?
                                        <>
                                            <hr className='appform__hr'/>
                                            <div className='input_grp'>
                                                <div className='input_wrap'>
                                                    <label className='ukForm__form__label appForm__subject' htmlFor='purpose_of_uk_visit4'>{t('ukForm_visaPurpose')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='purpose_of_uk_visit4' 
                                                        type='text' 
                                                        placeholder={t('ukForm_visaPurposeEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={purpose_of_uk_visit4} 
                                                    />
                                                </div>
                                            </div>

                                            <div className='input_grp'>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='uk_visit_arrival_date4'>{t('ukForm_ukVisit_date')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='uk_visit_arrival_date4' 
                                                        placeholder={t('ukForm_visaIssue_dateEx')}
                                                        type='text' 
                                                        onChange={e => onChange(e)} 
                                                        value={uk_visit_arrival_date4} 
                                                    />
                                                </div>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='period_of_uk_stay4'>{t('ukForm_uk_StudyPeriod')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='period_of_uk_stay4' 
                                                        type='text' 
                                                        placeholder={t('ukForm_uk_StudyPeriodEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={period_of_uk_stay4} 
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    :null}
                                    {showUkVisit5?
                                        <>
                                            <hr className='appform__hr'/>
                                            <div className='input_grp'>
                                                <div className='input_wrap'>
                                                    <label className='ukForm__form__label appForm__subject' htmlFor='purpose_of_uk_visit5'>{t('ukForm_visaPurpose')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='purpose_of_uk_visit5' 
                                                        type='text' 
                                                        placeholder={t('ukForm_visaPurposeEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={purpose_of_uk_visit5} 
                                                    />
                                                </div>
                                            </div>

                                            <div className='input_grp'>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='uk_visit_arrival_date5'>{t('ukForm_ukVisit_date')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='uk_visit_arrival_date5' 
                                                        placeholder={t('ukForm_visaIssue_dateEx')}
                                                        type='text' 
                                                        onChange={e => onChange(e)} 
                                                        value={uk_visit_arrival_date5} 
                                                    />
                                                </div>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='period_of_uk_stay5'>{t('ukForm_uk_StudyPeriod')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='period_of_uk_stay5' 
                                                        type='text' 
                                                        placeholder={t('ukForm_uk_StudyPeriodEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={period_of_uk_stay5} 
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    :null}
                                    {showUkVisit6?
                                        <>
                                            <hr className='appform__hr'/>
                                            <div className='input_grp'>
                                                <div className='input_wrap'>
                                                    <label className='ukForm__form__label appForm__subject' htmlFor='purpose_of_uk_visit6'>{t('ukForm_visaPurpose')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='purpose_of_uk_visit6' 
                                                        type='text' 
                                                        placeholder={t('ukForm_visaPurposeEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={purpose_of_uk_visit6} 
                                                    />
                                                </div>
                                            </div>

                                            <div className='input_grp'>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='uk_visit_arrival_date6'>{t('ukForm_ukVisit_date')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='uk_visit_arrival_date6' 
                                                        placeholder={t('ukForm_visaIssue_dateEx')}
                                                        type='text' 
                                                        onChange={e => onChange(e)} 
                                                        value={uk_visit_arrival_date6} 
                                                    />
                                                </div>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='period_of_uk_stay6'>{t('ukForm_uk_StudyPeriod')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='period_of_uk_stay6' 
                                                        type='text' 
                                                        placeholder={t('ukForm_uk_StudyPeriodEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={period_of_uk_stay6} 
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    :null}
                                    {showUkVisit7?
                                        <>
                                            <hr className='appform__hr'/>
                                            <div className='input_grp'>
                                                <div className='input_wrap'>
                                                    <label className='ukForm__form__label appForm__subject' htmlFor='purpose_of_uk_visit7'>{t('ukForm_visaPurpose')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='purpose_of_uk_visit7' 
                                                        type='text' 
                                                        placeholder={t('ukForm_visaPurposeEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={purpose_of_uk_visit7} 
                                                    />
                                                </div>
                                            </div>

                                            <div className='input_grp'>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='uk_visit_arrival_date7'>{t('ukForm_ukVisit_date')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='uk_visit_arrival_date7' 
                                                        placeholder={t('ukForm_visaIssue_dateEx')}
                                                        type='text' 
                                                        onChange={e => onChange(e)} 
                                                        value={uk_visit_arrival_date7} 
                                                    />
                                                </div>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='period_of_uk_stay7'>{t('ukForm_uk_StudyPeriod')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='period_of_uk_stay7' 
                                                        type='text' 
                                                        placeholder={t('ukForm_uk_StudyPeriodEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={period_of_uk_stay7} 
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    :null}
                                </>
                            :null}

                            <hr className='appform__hr'/>
                            <p className='ukForm__section__question'>{t('Form_otherTrips')}</p>
                            <div className='input_wrap input__radio__group'>
                                <div className='input_wrap passport__input__radio'>
                                    <ul className='appform__ul'>
                                        <li>
                                            <label className='radio_wrap'>
                                                <input 
                                                    type='radio' 
                                                    name='did_visit_countries'
                                                    value='Yes'
                                                    className='input_radio'
                                                    onChange={e => onChange(e)}
                                                    checked={did_visit_countries === 'Yes'}
                                                    onClick={()=> setShowTripsSection(true)}
                                                />
                                                <span>{t('Form_yes')}</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className='radio_wrap'>
                                                <input 
                                                    type='radio'
                                                    name='did_visit_countries'
                                                    value='No'
                                                    className='input_radio'
                                                    onChange={e => onChange(e)}
                                                    checked={did_visit_countries === 'No'}
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
                                    <p className='ukForm__section__question'>{t('Form_otherTripsNo')}</p>
                                    <div className='input_wrap input__radio__group'>
                                            <div className='input_wrap passport__input__radio'>
                                                <ul className='appform__ul'>
                                                    <li className='appform__il'>
                                                        <label className='radio_wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_visits'
                                                                value='1' 
                                                                className='input_radio'
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
                                                        <label className='radio_wrap'>
                                                            <input 
                                                                type='radio'
                                                                name='number_of_visits'
                                                                value='2'
                                                                className='input_radio'
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
                                                        <label className='radio_wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_visits'
                                                                value='3'
                                                                className='input_radio'
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
                                                        <label className='radio_wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_visits'
                                                                value='4'
                                                                className='input_radio'
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
                                                        <label className='radio_wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_visits'
                                                                value='5'
                                                                className='input_radio'
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
                                                        <label className='radio_wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_visits'
                                                                value='6'
                                                                className='input_radio'
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
                                                        <label className='radio_wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_visits'
                                                                value='7'
                                                                className='input_radio'
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

                                            <hr className='appform__hr'/>
                                            <div className='input_grp'>
                                                <div className='input_wrap'>
                                                    <label className='ukForm__form__label appForm__subject' htmlFor='visted_country'>{t('Form_countryName')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='visted_country' 
                                                        type='text' 
                                                        placeholder={t('Form_countryEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={visted_country} 
                                                    />
                                                </div>
                                                <div className='input_wrap'>
                                                    <label className='ukForm__form__label' htmlFor='purpose_of_visit'>{t('ukForm_visaPurpose')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='purpose_of_visit' 
                                                        type='text' 
                                                        placeholder={t('Form_visitPurpose')}
                                                        onChange={e => onChange(e)} 
                                                        value={purpose_of_visit} 
                                                    />
                                                </div>
                                            </div>

                                            <div className='input_grp'>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='visit_arrival_date'>{t('Form_visit_entry')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='visit_arrival_date' 
                                                        type='date' 
                                                        onChange={e => onChange(e)} 
                                                        value={visit_arrival_date} 
                                                    />
                                                </div>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='visit_departure_date'>{t('Form_visit_depature')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='visit_departure_date' 
                                                        type='date' 
                                                        onChange={e => onChange(e)} 
                                                        value={visit_departure_date} 
                                                    />
                                                </div>
                                            </div>

                                    {showCountryVisit2?
                                        <>
                                            <hr className='appform__hr'/>
                                            <div className='input_grp'>
                                                <div className='input_wrap'>
                                                    <label className='ukForm__form__label appForm__subject' htmlFor='visted_country'>{t('Form_countryName')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='visted_country2' 
                                                        type='text' 
                                                        placeholder={t('Form_countryEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={visted_country2} 
                                                    />
                                                </div>
                                                <div className='input_wrap'>
                                                    <label className='ukForm__form__label' htmlFor='last_name'>{t('ukForm_visaPurpose')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='purpose_of_visit2' 
                                                        type='text' 
                                                        placeholder={t('Form_visitPurpose')}
                                                        onChange={e => onChange(e)} 
                                                        value={purpose_of_visit2} 
                                                    />
                                                </div>
                                            </div>

                                            <div className='input_grp'>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='passport_issue_date'>{t('Form_visit_entry')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='visit_arrival_date2' 
                                                        type='date' 
                                                        onChange={e => onChange(e)} 
                                                        value={visit_arrival_date2} 
                                                    />
                                                </div>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='passport_issue_date'>{t('Form_visit_depature')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='visit_departure_date2' 
                                                        type='date' 
                                                        onChange={e => onChange(e)} 
                                                        value={visit_departure_date2} 
                                                    />
                                                </div>
                                            </div>

                                        </>
                                    :null}

                                    {showCountryVisit3?
                                        <>
                                            <hr className='appform__hr'/>
                                            <div className='input_grp'>
                                                <div className='input_wrap'>
                                                    <label className='ukForm__form__label appForm__subject' htmlFor='visted_country3'>{t('Form_countryName')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='visted_country3' 
                                                        type='text' 
                                                        placeholder={t('Form_countryEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={visted_country3} 
                                                    />
                                                </div>
                                                <div className='input_wrap'>
                                                    <label className='ukForm__form__label' htmlFor='purpose_of_visit3'>{t('ukForm_visaPurpose')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='purpose_of_visit3' 
                                                        type='text' 
                                                        placeholder={t('Form_visitPurpose')}
                                                        onChange={e => onChange(e)} 
                                                        value={purpose_of_visit3} 
                                                    />
                                                </div>
                                            </div>

                                            <div className='input_grp'>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='visit_arrival_date3'>{t('Form_visit_entry')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='visit_arrival_date3' 
                                                        type='date' 
                                                        onChange={e => onChange(e)} 
                                                        value={visit_arrival_date3} 
                                                    />
                                                </div>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='visit_departure_date3'>{t('Form_visit_depature')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='visit_departure_date3' 
                                                        type='date' 
                                                        onChange={e => onChange(e)} 
                                                        value={visit_departure_date3} 
                                                    />
                                                </div>
                                            </div>

                                        </>
                                    :null}

                                    {showCountryVisit4?
                                        <>
                                            <hr className='appform__hr'/>
                                            <div className='input_grp'>
                                                <div className='input_wrap'>
                                                    <label className='ukForm__form__label appForm__subject' htmlFor='visted_country4'>{t('Form_countryName')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='visted_country4' 
                                                        type='text' 
                                                        placeholder={t('Form_countryEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={visted_country4} 
                                                    />
                                                </div>
                                                <div className='input_wrap'>
                                                    <label className='ukForm__form__label' htmlFor='purpose_of_visit4'>{t('ukForm_visaPurpose')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='purpose_of_visit4' 
                                                        type='text' 
                                                        placeholder={t('Form_visitPurpose')} 
                                                        onChange={e => onChange(e)} 
                                                        value={purpose_of_visit4} 
                                                    />
                                                </div>
                                            </div>

                                            <div className='input_grp'>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='visit_arrival_date4'>{t('Form_visit_entry')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='visit_arrival_date4' 
                                                        type='date' 
                                                        onChange={e => onChange(e)} 
                                                        value={visit_arrival_date4} 
                                                    />
                                                </div>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='visit_departure_date4'>{t('Form_visit_depature')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='visit_departure_date4' 
                                                        type='date' 
                                                        onChange={e => onChange(e)} 
                                                        value={visit_departure_date4} 
                                                    />
                                                </div>
                                            </div>

                                        </>
                                    :null}

                                    {showCountryVisit5?
                                        <>
                                            <hr className='appform__hr'/>
                                            <div className='input_grp'>
                                                <div className='input_wrap'>
                                                    <label className='ukForm__form__label appForm__subject' htmlFor='visted_country5'>{t('Form_countryName')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='visted_country5' 
                                                        type='text' 
                                                        placeholder={t('Form_countryEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={visted_country5} 
                                                    />
                                                </div>
                                                <div className='input_wrap'>
                                                    <label className='ukForm__form__label' htmlFor='purpose_of_visit5'>{t('ukForm_visaPurpose')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='purpose_of_visit5' 
                                                        type='text' 
                                                        placeholder={t('Form_visitPurpose')}
                                                        onChange={e => onChange(e)} 
                                                        value={purpose_of_visit5} 
                                                    />
                                                </div>
                                            </div>

                                            <div className='input_grp'>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='visit_arrival_date5'>{t('Form_visit_entry')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='visit_arrival_date5' 
                                                        type='date' 
                                                        onChange={e => onChange(e)} 
                                                        value={visit_arrival_date5} 
                                                    />
                                                </div>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='visit_departure_date5'>{t('Form_visit_depature')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='visit_departure_date5' 
                                                        type='date' 
                                                        onChange={e => onChange(e)} 
                                                        value={visit_departure_date5} 
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    :null}

                                    {showCountryVisit6?
                                        <>
                                            <hr className='appform__hr'/>
                                            <div className='input_grp'>
                                                <div className='input_wrap'>
                                                    <label className='ukForm__form__label appForm__subject' htmlFor='visted_country6'>{t('Form_countryName')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='visted_country6' 
                                                        type='text' 
                                                        placeholder={t('Form_countryEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={visted_country6} 
                                                    />
                                                </div>
                                                <div className='input_wrap'>
                                                    <label className='ukForm__form__label' htmlFor='purpose_of_visit6'>{t('ukForm_visaPurpose')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='purpose_of_visit6' 
                                                        type='text' 
                                                        placeholder={t('Form_visitPurpose')}
                                                        onChange={e => onChange(e)} 
                                                        value={purpose_of_visit6} 
                                                    />
                                                </div>
                                            </div>

                                            <div className='input_grp'>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='visit_arrival_date6'>{t('Form_visit_entry')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='visit_arrival_date6' 
                                                        type='date' 
                                                        onChange={e => onChange(e)} 
                                                        value={visit_arrival_date6} 
                                                    />
                                                </div>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='visit_departure_date6'>{t('Form_visit_depature')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='visit_departure_date6' 
                                                        type='date' 
                                                        onChange={e => onChange(e)} 
                                                        value={visit_departure_date6} 
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    :null}

                                    {showCountryVisit7?
                                        <>
                                            <hr className='appform__hr'/>
                                            <div className='input_grp'>
                                                <div className='input_wrap'>
                                                    <label className='ukForm__form__label appForm__subject' htmlFor='visted_country7'>{t('Form_countryName')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='visted_country7' 
                                                        type='text' 
                                                        placeholder={t('Form_countryEx')}
                                                        onChange={e => onChange(e)} 
                                                        value={visted_country7} 
                                                    />
                                                </div>
                                                <div className='input_wrap'>
                                                    <label className='ukForm__form__label' htmlFor='purpose_of_visit7'>{t('ukForm_visaPurpose')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='purpose_of_visit7' 
                                                        type='text' 
                                                        placeholder={t('Form_visitPurpose')} 
                                                        onChange={e => onChange(e)} 
                                                        value={purpose_of_visit7} 
                                                    />
                                                </div>
                                            </div>

                                            <div className='input_grp'>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='visit_arrival_date7'>{t('Form_visit_entry')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='visit_arrival_date7' 
                                                        type='date' 
                                                        onChange={e => onChange(e)} 
                                                        value={visit_arrival_date7} 
                                                    />
                                                </div>
                                                <div className='form__wrap'>
                                                    <label className='ukForm__form__label' htmlFor='visit_departure_date7'>{t('Form_visit_depature')}</label>
                                                    <input 
                                                        className='applicationForm__form__input ukForm__input__for__two' 
                                                        name='visit_departure_date7' 
                                                        type='date' 
                                                        onChange={e => onChange(e)} 
                                                        value={visit_departure_date7} 
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    :null}
                                </>
                            :null}

                            <hr className='appform__hr'/>
                            <p className='ukForm__section__question'>{t('ukForm_ukFamily')}</p>
                            <div className='input_wrap input__radio__group'>
                                <div className='input_wrap passport__input__radio'>
                                    <ul className='appform__ul'>
                                        <li>
                                            <label className='radio_wrap'>
                                                <input 
                                                    type='radio' 
                                                    name='family_in_uk'
                                                    value='Yes'
                                                    className='input_radio'
                                                    onChange={e => onChange(e)}
                                                    checked={family_in_uk === 'Yes'}
                                                    onClick={()=> setShowFamilyAbroadSection(true)}
                                                />
                                                <span>{t('Form_yes')}</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label className='radio_wrap'>
                                                <input 
                                                    type='radio'
                                                    name='family_in_uk'
                                                    value='No'
                                                    className='input_radio'
                                                    onChange={e => onChange(e)}
                                                    checked={family_in_uk === 'No'}
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
                                    <p className='ukForm__section__question'>{t('Form_howMany')}</p>
                                    <div className='input_wrap input__radio__group'>
                                            <div className='input_wrap passport__input__radio'>
                                                <ul className='appform__ul'>
                                                    <li className='appform__il'>
                                                        <label className='radio_wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_relatives'
                                                                value='1' 
                                                                className='input_radio'
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
                                                        <label className='radio_wrap'>
                                                            <input 
                                                                type='radio'
                                                                name='number_of_relatives'
                                                                value='2'
                                                                className='input_radio'
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
                                                        <label className='radio_wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_relatives'
                                                                value='3'
                                                                className='input_radio'
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
                                                        <label className='radio_wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_relatives'
                                                                value='4'
                                                                className='input_radio'
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
                                                        <label className='radio_wrap'>
                                                            <input 
                                                                type='radio' 
                                                                name='number_of_relatives'
                                                                value='5'
                                                                className='input_radio'
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
                            
                                        <hr className='appform__hr'/>
                                        <div className='input_grp'>
                                            <div className='input_wrap'>
                                                <label className='ukForm__form__label appForm__subject' htmlFor='relative1_first_name'>{t('Form_relative_firstName')}</label>
                                                <input 
                                                    className='applicationForm__form__input ukForm__input__for__two' 
                                                    name='relative1_first_name' 
                                                    type='text' 
                                                    placeholder={t('Form_firstName')}
                                                    onChange={e => onChange(e)} 
                                                    value={relative1_first_name} 
                                                />
                                            </div>
                                            <div className='input_wrap'>
                                                <label className='ukForm__form__label' htmlFor='relative1_last_name'>{t('Form_relative_lastName')}</label>
                                                <input 
                                                    className='applicationForm__form__input ukForm__input__for__two' 
                                                    name='relative1_last_name' 
                                                    type='text' 
                                                    placeholder={t('Form_lastName')}
                                                    onChange={e => onChange(e)} 
                                                    value={relative1_last_name} 
                                                />
                                            </div>
                                        </div>

                                        <div className='input_grp'>
                                            <div className='input_wrap'>
                                                <label className='ukForm__form__label appForm__subject' htmlFor='relative1_nationality'>{t('Form_nationality')}</label>
                                                <input 
                                                    className='applicationForm__form__input ukForm__input__for__two' 
                                                    name='relative1_nationality' 
                                                    type='text' 
                                                    placeholder={t('Form_nationalityEx')}
                                                    onChange={e => onChange(e)} 
                                                    value={relative1_nationality} 
                                                />
                                            </div>
                                            <div className='input_wrap'>
                                                <label className='ukForm__form__label' htmlFor='relative1_relationship'>{t('Form_relationship')}</label>
                                                <input 
                                                    className='applicationForm__form__input ukForm__input__for__two' 
                                                    name='relative1_relationship' 
                                                    type='text' 
                                                    placeholder={t('Form_relationshipEx')}
                                                    onChange={e => onChange(e)} 
                                                    value={relative1_relationship} 
                                                />
                                            </div>
                                        </div>

                                        <div className='input_grp'>
                                            <div className='input_wrap'>
                                                <label className='ukForm__form__label appForm__subject' htmlFor='relative1_passport_no'>{t('Form_relative_PassportNo')}</label>
                                                <input 
                                                    className='applicationForm__form__input ukForm__input__for__two' 
                                                    name='relative1_passport_no' 
                                                    type='text' 
                                                    placeholder={t('Form_relative_PassportNoEx')}
                                                    onChange={e => onChange(e)} 
                                                    value={relative1_passport_no} 
                                                />
                                            </div>
                                        </div>

                                        {showRelativeAbroad2?
                                            <>
                                                <hr className='appform__hr'/>
                                                <div className='input_grp'>
                                                    <div className='input_wrap'>
                                                        <label className='ukForm__form__label appForm__subject' htmlFor='relative2_first_name'>{t('Form_relative_firstName')}</label>
                                                        <input 
                                                            className='applicationForm__form__input ukForm__input__for__two' 
                                                            name='relative2_first_name' 
                                                            type='text' 
                                                            placeholder={t('Form_firstName')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative2_first_name} 
                                                        />
                                                    </div>
                                                    <div className='input_wrap'>
                                                        <label className='ukForm__form__label' htmlFor='relative1_last_name'>{t('Form_relative_lastName')}</label>
                                                        <input 
                                                            className='applicationForm__form__input ukForm__input__for__two' 
                                                            name='relative2_last_name' 
                                                            type='text' 
                                                            placeholder={t('Form_lastName')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative2_last_name} 
                                                        />
                                                    </div>
                                                </div>

                                                <div className='input_grp'>
                                                    <div className='input_wrap'>
                                                        <label className='ukForm__form__label appForm__subject' htmlFor='relative2_nationality'>{t('Form_nationality')}</label>
                                                        <input 
                                                            className='applicationForm__form__input ukForm__input__for__two' 
                                                            name='relative2_nationality' 
                                                            type='text' 
                                                            placeholder={t('Form_nationalityEx')} 
                                                            onChange={e => onChange(e)} 
                                                            value={relative2_nationality} 
                                                        />
                                                    </div>
                                                    <div className='input_wrap'>
                                                        <label className='ukForm__form__label' htmlFor='relative2_relationship'>{t('Form_relationship')}</label>
                                                        <input 
                                                            className='applicationForm__form__input ukForm__input__for__two' 
                                                            name='relative2_relationship' 
                                                            type='text' 
                                                            placeholder={t('Form_relationshipEx')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative2_relationship} 
                                                        />
                                                    </div>
                                                </div>

                                                <div className='input_grp'>
                                                    <div className='input_wrap'>
                                                        <label className='ukForm__form__label appForm__subject' htmlFor='relative2_passport_no'>{t('Form_relative_PassportNo')}</label>
                                                        <input 
                                                            className='applicationForm__form__input ukForm__input__for__two' 
                                                            name='relative2_passport_no' 
                                                            type='text' 
                                                            placeholder={t('Form_relative_PassportNoEx')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative2_passport_no} 
                                                        />
                                                    </div>
                                                </div>
                                            </>
                                        :null}
                                        {showRelativeAbroad3?
                                            <>
                                                <hr className='appform__hr'/>
                                                <div className='input_grp'>
                                                    <div className='input_wrap'>
                                                        <label className='ukForm__form__label appForm__subject' htmlFor='relative3_first_name'>{t('Form_relative_firstName')}</label>
                                                        <input 
                                                            className='applicationForm__form__input ukForm__input__for__two' 
                                                            name='relative3_first_name' 
                                                            type='text' 
                                                            placeholder={t('Form_firstName')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative3_first_name} 
                                                        />
                                                    </div>
                                                    <div className='input_wrap'>
                                                        <label className='ukForm__form__label' htmlFor='relative3_last_name'>{t('Form_relative_lastName')}</label>
                                                        <input 
                                                            className='applicationForm__form__input ukForm__input__for__two' 
                                                            name='relative3_last_name' 
                                                            type='text' 
                                                            placeholder={t('Form_lastName')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative3_last_name} 
                                                        />
                                                    </div>
                                                </div>

                                                <div className='input_grp'>
                                                    <div className='input_wrap'>
                                                        <label className='ukForm__form__label appForm__subject' htmlFor='relative3_nationality'>{t('Form_nationality')}</label>
                                                        <input 
                                                            className='applicationForm__form__input ukForm__input__for__two' 
                                                            name='relative3_nationality' 
                                                            type='text' 
                                                            placeholder={t('Form_nationalityEx')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative3_nationality} 
                                                        />
                                                    </div>
                                                    <div className='input_wrap'>
                                                        <label className='ukForm__form__label' htmlFor='relative3_relationship'>{t('Form_relationship')}</label>
                                                        <input 
                                                            className='applicationForm__form__input ukForm__input__for__two' 
                                                            name='relative3_relationship' 
                                                            type='text' 
                                                            placeholder={t('Form_relationshipEx')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative3_relationship} 
                                                        />
                                                    </div>
                                                </div>

                                                <div className='input_grp'>
                                                    <div className='input_wrap'>
                                                        <label className='ukForm__form__label appForm__subject' htmlFor='relative3_passport_no'>{t('Form_relative_PassportNo')}</label>
                                                        <input 
                                                            className='applicationForm__form__input ukForm__input__for__two' 
                                                            name='relative3_passport_no' 
                                                            type='text' 
                                                            placeholder={t('Form_relative_PassportNoEx')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative3_passport_no} 
                                                        />
                                                    </div>
                                                </div>
                                            </>
                                        :null}
                                        {showRelativeAbroad4?
                                            <>
                                                <hr className='appform__hr'/>
                                                <div className='input_grp'>
                                                    <div className='input_wrap'>
                                                        <label className='ukForm__form__label appForm__subject' htmlFor='relative4_first_name'>{t('Form_relative_firstName')}</label>
                                                        <input 
                                                            className='applicationForm__form__input ukForm__input__for__two' 
                                                            name='relative4_first_name' 
                                                            type='text' 
                                                            placeholder={t('Form_firstName')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative4_first_name} 
                                                        />
                                                    </div>
                                                    <div className='input_wrap'>
                                                        <label className='ukForm__form__label' htmlFor='relative4_last_name'>{t('Form_relative_lastName')}</label>
                                                        <input 
                                                            className='applicationForm__form__input ukForm__input__for__two' 
                                                            name='relative4_last_name' 
                                                            type='text' 
                                                            placeholder={t('Form_lastName')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative4_last_name} 
                                                        />
                                                    </div>
                                                </div>

                                                <div className='input_grp'>
                                                    <div className='input_wrap'>
                                                        <label className='ukForm__form__label appForm__subject' htmlFor='relative4_nationality'>{t('Form_nationality')}</label>
                                                        <input 
                                                            className='applicationForm__form__input ukForm__input__for__two' 
                                                            name='relative4_nationality' 
                                                            type='text' 
                                                            placeholder={t('Form_nationalityEx')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative4_nationality} 
                                                        />
                                                    </div>
                                                    <div className='input_wrap'>
                                                        <label className='ukForm__form__label' htmlFor='relative4_relationship'>{t('Form_relationship')}</label>
                                                        <input 
                                                            className='applicationForm__form__input ukForm__input__for__two' 
                                                            name='relative4_relationship' 
                                                            type='text' 
                                                            placeholder={t('Form_relationshipEx')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative4_relationship} 
                                                        />
                                                    </div>
                                                </div>

                                                <div className='input_grp'>
                                                    <div className='input_wrap'>
                                                        <label className='ukForm__form__label appForm__subject' htmlFor='relative4_passport_no'>{t('Form_relative_PassportNo')}</label>
                                                        <input 
                                                            className='applicationForm__form__input ukForm__input__for__two' 
                                                            name='relative4_passport_no' 
                                                            type='text' 
                                                            placeholder={t('Form_relative_PassportNoEx')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative4_passport_no} 
                                                        />
                                                    </div>
                                                </div>
                                            </>
                                        :null}
                                        {showRelativeAbroad5?
                                            <>
                                                <hr className='appform__hr'/>
                                                <div className='input_grp'>
                                                    <div className='input_wrap'>
                                                        <label className='ukForm__form__label appForm__subject' htmlFor='relative5_first_name'>{t('Form_relative_firstName')}</label>
                                                        <input 
                                                            className='applicationForm__form__input ukForm__input__for__two' 
                                                            name='relative5_first_name' 
                                                            type='text' 
                                                            placeholder={t('Form_firstName')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative5_first_name} 
                                                        />
                                                    </div>
                                                    <div className='input_wrap'>
                                                        <label className='ukForm__form__label' htmlFor='relative5_last_name'>{t('Form_relative_lastName')}</label>
                                                        <input 
                                                            className='applicationForm__form__input ukForm__input__for__two' 
                                                            name='relative5_last_name' 
                                                            type='text' 
                                                            placeholder={t('Form_lastName')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative5_last_name} 
                                                        />
                                                    </div>
                                                </div>

                                                <div className='input_grp'>
                                                    <div className='input_wrap'>
                                                        <label className='ukForm__form__label appForm__subject' htmlFor='relative5_nationality'>{t('Form_nationality')}</label>
                                                        <input 
                                                            className='applicationForm__form__input ukForm__input__for__two' 
                                                            name='relative5_nationality' 
                                                            type='text' 
                                                            placeholder={t('Form_nationalityEx')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative5_nationality} 
                                                        />
                                                    </div>
                                                    <div className='input_wrap'>
                                                        <label className='ukForm__form__label' htmlFor='relative5_relationship'>{t('Form_relationship')}</label>
                                                        <input 
                                                            className='applicationForm__form__input ukForm__input__for__two' 
                                                            name='relative5_relationship' 
                                                            type='text' 
                                                            placeholder={t('Form_relationshipEx')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative5_relationship} 
                                                        />
                                                    </div>
                                                </div>

                                                <div className='input_grp'>
                                                    <div className='input_wrap'>
                                                        <label className='ukForm__form__label appForm__subject' htmlFor='relative5_passport_no'>{t('Form_relative_PassportNo')}</label>
                                                        <input 
                                                            className='applicationForm__form__input ukForm__input__for__two' 
                                                            name='relative5_passport_no' 
                                                            type='text' 
                                                            placeholder={t('Form_relative_PassportNoEx')}
                                                            onChange={e => onChange(e)} 
                                                            value={relative5_passport_no} 
                                                        />
                                                    </div>
                                                </div>
                                            </>
                                        :null}
                                </>
                            :null}

                            <hr className='appform__hr'/>
                            <div className='input_wrap'>
                                <label className='ukForm__form__label' htmlFor='message'>{t('Form_additional')}</label>
                                <textarea 
                                    className='applicationForm__form__textarea'
                                    name='aditional_info'
                                    cols='30'
                                    rows='10'
                                    placeholder={t('Form_message')}
                                    onChange={e => onChange(e)} 
                                    value={aditional_info} 
                                />
                            </div>
                            <button className='app__form__button' htmltype='submit'>{t('Form_send')}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default connect(null, { setAlert })(ApplicationForm);