from django.db import models
from accounts.models import UserAccount
from django.utils.timezone import now

# Create your models here.
# Application form
class ApplicationForm(models.Model):
    
    class OwnershipStatus(models.TextChoices):
        RENT = 'Rent'
        OWNED = 'Owned'
        
    class YesNoQuestion(models.TextChoices):
        YES = 'Yes'
        NO = 'No'
    
    userAccount = models.ForeignKey(UserAccount, on_delete=models.DO_NOTHING, null=True, blank=True)
    email = models.CharField(max_length=50, blank=True)
    pasport_number = models.CharField(max_length=20, blank=True)
    first_name = models.CharField(max_length=50, blank=True)
    last_name = models.CharField(max_length=50, blank=True)
    dob = models.DateField(null=True, blank=True)
    place_of_birth = models.CharField(max_length=50, blank=True)
    address = models.CharField(max_length=150, blank=True)
    post_code = models.CharField(max_length=15, blank=True)
    residence_since = models.CharField(max_length=20, blank=True)
    address_ownership_status = models.CharField(max_length=50, choices=OwnershipStatus.choices, default=OwnershipStatus.RENT)
    address2 = models.CharField(max_length=150, blank=True)
    post_code2 = models.CharField(max_length=15, blank=True)
    address2_residence_since = models.CharField(max_length=20, blank=True)
    phone = models.CharField(max_length=20, blank=True)
    passport_issue_date = models.DateField(null=True, blank=True)
    passport_expiry_date = models.DateField(null=True, blank=True)
    nationality = models.CharField(max_length=35, blank=True)
    destination_country = models.CharField(max_length=50, blank=True)
    passport_photo = models.FileField(upload_to='apFormPhotos/%Y/%m/%d/', blank=True)
    
    work_status = models.CharField(max_length=50, blank=True)
    job_title = models.CharField(max_length=30, blank=True)
    starting_date = models.DateField(null=True, blank=True)
    job_address = models.CharField(max_length=150, blank=True)
    company_name = models.CharField(max_length=50, blank=True)
    company_phone = models.CharField(max_length=20, blank=True)
    salary = models.CharField(max_length=50, blank=True)
    
    
    arrive_date = models.DateField(null=True, blank=True)
    leave_date = models.DateField(null=True, blank=True)
    monthly_living_expenses = models.CharField(max_length=50, blank=True)
    trip_expenses = models.CharField(max_length=50, blank=True)
    purpose_of_trip = models.CharField(max_length=50, blank=True)
    
    school_name = models.CharField(max_length=50, blank=True)
    admission_offer_photo = models.FileField(upload_to='apFormPhotos/%Y/%m/%d/', blank=True)
    
    maritial_status = models.CharField(max_length=50, blank=True)
    spouse_first_name = models.CharField(max_length=50, blank=True)
    spouse_last_name = models.CharField(max_length=50, blank=True)
    spouse_dob = models.DateField(null=True, blank=True)
    spouse_nationality = models.CharField(max_length=35, blank=True)
    spouse_live_with_you = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.YES)
    spouse_travel_with_you = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.NO)
    spouse_passport_photo = models.FileField(upload_to='apFormPhotos/%Y/%m/%d/', blank=True)
    spouse_pasport_number = models.CharField(max_length=20, blank=True)
    
    father_first_name = models.CharField(max_length=50, blank=True)
    father_last_name = models.CharField(max_length=50, blank=True)
    father_dob = models.DateField(null=True, blank=True)
    father_nationality = models.CharField(max_length=35, blank=True)
    
    mother_first_name = models.CharField(max_length=50, blank=True)
    mother_last_name = models.CharField(max_length=50, blank=True)
    mother_dob = models.DateField(null=True, blank=True)
    mother_nationality = models.CharField(max_length=35, blank=True)
    
    inviter_full_name = models.CharField(max_length=50, blank=True)
    inviter_email = models.EmailField(max_length=200, blank=True)
    inviter_address = models.CharField(max_length=150, blank=True)
    invitation_letter = models.FileField(upload_to='apFormPhotos/%Y/%m/%d/', blank=True)
    
    hospital_name = models.CharField(max_length=50, blank=True)
    medical_invitation_letter = models.FileField(upload_to='apFormPhotos/%Y/%m/%d/', blank=True)
    medical_details = models.TextField(max_length=1500, blank=True)
    
    other_travel_reason = models.TextField(max_length=1500, blank=True)
    
    have_children = models.CharField(max_length=50, blank=True)
    number_of_children = models.CharField(max_length=50, blank=True)
    
    child1_first_name = models.CharField(max_length=50, blank=True)
    child1_last_name = models.CharField(max_length=50, blank=True)
    child1_dob = models.DateField(null=True, blank=True)
    child1_address = models.CharField(max_length=150, blank=True)
    child1_live_with_you = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.YES)
    child1_travelling_with_you = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.NO)
    child1_nationality = models.CharField(max_length=35, blank=True)
    child1_passport_photo = models.FileField(upload_to='apFormPhotos/%Y/%m/%d/', blank=True)
    
    child2_first_name = models.CharField(max_length=50, blank=True)
    child2_last_name = models.CharField(max_length=50, blank=True)
    child2_dob = models.DateField(null=True, blank=True)
    child2_address = models.CharField(max_length=150, blank=True)
    child2_live_with_you = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.YES)
    child2_travelling_with_you = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.NO)
    child2_nationality = models.CharField(max_length=35, blank=True)
    child2_passport_photo = models.FileField(upload_to='apFormPhotos/%Y/%m/%d/', blank=True)
    
    child3_first_name = models.CharField(max_length=50, blank=True)
    child3_last_name = models.CharField(max_length=50, blank=True)
    child3_dob = models.DateField(null=True, blank=True)
    child3_address = models.CharField(max_length=150, blank=True)
    child3_live_with_you = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.YES)
    child3_travelling_with_you = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.NO)
    child3_nationality = models.CharField(max_length=35, blank=True)
    child3_passport_photo = models.FileField(upload_to='apFormPhotos/%Y/%m/%d/', blank=True)
    
    child4_first_name = models.CharField(max_length=50, blank=True)
    child4_last_name = models.CharField(max_length=50, blank=True)
    child4_dob = models.DateField(null=True, blank=True)
    child4_address = models.CharField(max_length=150, blank=True)
    child4_live_with_you = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.YES)
    child4_travelling_with_you = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.NO)
    child4_nationality = models.CharField(max_length=35, blank=True)
    child4_passport_photo = models.FileField(upload_to='apFormPhotos/%Y/%m/%d/', blank=True)
    
    child5_first_name = models.CharField(max_length=50, blank=True)
    child5_last_name = models.CharField(max_length=50, blank=True)
    child5_dob = models.DateField(null=True, blank=True)
    child5_address = models.CharField(max_length=150, blank=True)
    child5_live_with_you = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.YES)
    child5_travelling_with_you = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.NO)
    child5_nationality = models.CharField(max_length=35, blank=True)
    child5_passport_photo = models.FileField(upload_to='apFormPhotos/%Y/%m/%d/', blank=True)
    
    child6_first_name = models.CharField(max_length=50, blank=True)
    child6_last_name = models.CharField(max_length=50, blank=True)
    child6_dob = models.DateField(null=True, blank=True)
    child6_address = models.CharField(max_length=150, blank=True)
    child6_live_with_you = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.YES)
    child6_travelling_with_you = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.NO)
    child6_nationality = models.CharField(max_length=35, blank=True)
    child6_passport_photo = models.FileField(upload_to='apFormPhotos/%Y/%m/%d/', blank=True)
    
    child7_first_name = models.CharField(max_length=50, blank=True)
    child7_last_name = models.CharField(max_length=50, blank=True)
    child7_dob = models.DateField(null=True, blank=True)
    child7_address = models.CharField(max_length=150, blank=True)
    child7_live_with_you = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.YES)
    child7_travelling_with_you = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.NO)
    child7_nationality = models.CharField(max_length=35, blank=True)
    child7_passport_photo = models.FileField(upload_to='apFormPhotos/%Y/%m/%d/', blank=True)
    
    family_in_uk = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.YES)
    number_of_relatives = models.CharField(max_length=50, blank=True)
    
    relative1_first_name = models.CharField(max_length=50, blank=True)
    relative1_last_name = models.CharField(max_length=50, blank=True)
    relative1_nationality = models.CharField(max_length=35, blank=True)
    relative1_relationship = models.CharField(max_length=50, blank=True)
    relative1_passport_no = models.CharField(max_length=50, blank=True)
    
    relative2_first_name = models.CharField(max_length=50, blank=True)
    relative2_last_name = models.CharField(max_length=50, blank=True)
    relative2_nationality = models.CharField(max_length=35, blank=True)
    relative2_relationship = models.CharField(max_length=50, blank=True)
    relative2_passport_no = models.CharField(max_length=50, blank=True)
    
    relative3_first_name = models.CharField(max_length=50, blank=True)
    relative3_last_name = models.CharField(max_length=50, blank=True)
    relative3_nationality = models.CharField(max_length=35, blank=True)
    relative3_relationship = models.CharField(max_length=50, blank=True)
    relative3_passport_no = models.CharField(max_length=50, blank=True)
    
    relative4_first_name = models.CharField(max_length=50, blank=True)
    relative4_last_name = models.CharField(max_length=50, blank=True)
    relative4_nationality = models.CharField(max_length=35, blank=True)
    relative4_relationship = models.CharField(max_length=50, blank=True)
    relative4_passport_no = models.CharField(max_length=50, blank=True)
    
    relative5_first_name = models.CharField(max_length=50, blank=True)
    relative5_last_name = models.CharField(max_length=50, blank=True)
    relative5_nationality = models.CharField(max_length=35, blank=True)
    relative5_relationship = models.CharField(max_length=50, blank=True)
    relative5_passport_no = models.CharField(max_length=50, blank=True)
    
    visa_refusl = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.YES)
    country_of_refusal = models.CharField(max_length=100, blank=True)
    visa_refusal_date = models.DateField(null=True, blank=True)
    visa_refusal_desc = models.TextField(max_length=1500, blank=True)
    
    did_visit_uk = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.YES)
    medical_treatment_uk = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.YES)
    uk_insurance_number = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.YES)
    uk_driving_license = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.YES)
    obtained_uk_visa = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.YES)
    uk_visa_issue_date = models.CharField(max_length=100, blank=True)
    uk_remain_visa = models.CharField(max_length=100, blank=True)
    uk_remain_visa_date = models.CharField(max_length=100, blank=True)
    uk_remain_visa_results = models.CharField(max_length=100, blank=True)
    number_of_uk_visits = models.CharField(max_length=100, blank=True)
    
    purpose_of_uk_visit = models.CharField(max_length=250, blank=True)
    uk_visit_arrival_date = models.CharField(max_length=100, blank=True)
    period_of_uk_stay = models.CharField(max_length=100, blank=True)
    
    purpose_of_uk_visit2 = models.CharField(max_length=250, blank=True)
    uk_visit_arrival_date2 = models.CharField(max_length=100, blank=True)
    period_of_uk_stay2 = models.CharField(max_length=100, blank=True)
    
    purpose_of_uk_visit3 = models.CharField(max_length=250, blank=True)
    uk_visit_arrival_date3 = models.CharField(max_length=100, blank=True)
    period_of_uk_stay3 = models.CharField(max_length=100, blank=True)
    
    purpose_of_uk_visit4 = models.CharField(max_length=250, blank=True)
    uk_visit_arrival_date4 = models.CharField(max_length=100, blank=True)
    period_of_uk_stay4 = models.CharField(max_length=100, blank=True)
    
    purpose_of_uk_visit5 = models.CharField(max_length=250, blank=True)
    uk_visit_arrival_date5 = models.CharField(max_length=100, blank=True)
    period_of_uk_stay5 = models.CharField(max_length=100, blank=True)
    
    purpose_of_uk_visit6 = models.CharField(max_length=250, blank=True)
    uk_visit_arrival_date6 = models.CharField(max_length=100, blank=True)
    period_of_uk_stay6 = models.CharField(max_length=100, blank=True)
    
    purpose_of_uk_visit7 = models.CharField(max_length=250, blank=True)
    uk_visit_arrival_date7 = models.CharField(max_length=100, blank=True)
    period_of_uk_stay7 = models.CharField(max_length=100, blank=True)
    
    
    did_visit_countries = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.YES)
    number_of_visits = models.CharField(max_length=100, blank=True)
    visted_country = models.CharField(max_length=100, blank=True)
    purpose_of_visit = models.CharField(max_length=250, blank=True)
    visit_arrival_date = models.DateField(null=True, blank=True)
    visit_departure_date = models.DateField(null=True, blank=True)
    
    visted_country2 = models.CharField(max_length=100, blank=True)
    purpose_of_visit2 = models.CharField(max_length=250, blank=True)
    visit_arrival_date2 = models.DateField(null=True, blank=True)
    visit_departure_date2 = models.DateField(null=True, blank=True)
    
    visted_country3 = models.CharField(max_length=100, blank=True)
    purpose_of_visit3 = models.CharField(max_length=250, blank=True)
    visit_arrival_date3 = models.DateField(null=True, blank=True)
    visit_departure_date3 = models.DateField(null=True, blank=True)
    
    visted_country4 = models.CharField(max_length=100, blank=True)
    purpose_of_visit4 = models.CharField(max_length=250, blank=True)
    visit_arrival_date4 = models.DateField(null=True, blank=True)
    visit_departure_date4 = models.DateField(null=True, blank=True)
    
    visted_country5 = models.CharField(max_length=100, blank=True)
    purpose_of_visit5 = models.CharField(max_length=250, blank=True)
    visit_arrival_date5 = models.DateField(null=True, blank=True)
    visit_departure_date5 = models.DateField(null=True, blank=True)
    
    visted_country6 = models.CharField(max_length=100, blank=True)
    purpose_of_visit6 = models.CharField(max_length=250, blank=True)
    visit_arrival_date6 = models.DateField(null=True, blank=True)
    visit_departure_date6 = models.DateField(null=True, blank=True)
    
    visted_country7 = models.CharField(max_length=100, blank=True)
    purpose_of_visit7 = models.CharField(max_length=250, blank=True)
    visit_arrival_date7 = models.DateField(null=True, blank=True)
    visit_departure_date7 = models.DateField(null=True, blank=True)
    
    aditional_info = models.TextField(max_length=1500, blank=True)
    
    photo_main = models.FileField(upload_to='apFormPhotos/%Y/%m/%d/', blank=True)
    photo_1 = models.FileField(upload_to='apFormPhotos/%Y/%m/%d/', blank=True)
    photo_2 = models.FileField(upload_to='apFormPhotos/%Y/%m/%d/', blank=True)
    photo_3 = models.FileField(upload_to='apFormPhotos/%Y/%m/%d/', blank=True)
    photo_4 = models.FileField(upload_to='apFormPhotos/%Y/%m/%d/', blank=True)

    
    is_sent = models.BooleanField(default=True)
    application_form_date = models.DateTimeField(default=now, blank=True)
    
    def __str__(self):
        return self.pasport_number
    
# USA Application form
class UsaApplicationForm(models.Model):
        
    class YesNoQuestion(models.TextChoices):
        YES = 'Yes'
        NO = 'No'
    
    userAccount = models.ForeignKey(UserAccount, on_delete=models.DO_NOTHING, null=True, blank=True)
    email = models.CharField(max_length=50, blank=True)
    pasport_number = models.CharField(max_length=20, blank=True)
    first_name = models.CharField(max_length=50, blank=True)
    last_name = models.CharField(max_length=50, blank=True)
    dob = models.DateField(null=True, blank=True)
    place_of_birth = models.CharField(max_length=50, blank=True)
    address = models.CharField(max_length=250, blank=True)
    phone = models.CharField(max_length=20, blank=True)
    passport_issue_date = models.DateField(null=True, blank=True)
    passport_expiry_date = models.DateField(null=True, blank=True)
    nationality = models.CharField(max_length=35, blank=True)
    passport_photo = models.FileField(upload_to='apFormPhotos/%Y/%m/%d/', blank=True)
    lost_passport = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.NO)
    
    permanent_resident_in_other_country = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.NO)
    residency_country = models.CharField(max_length=150, blank=True)
    national_identification_number = models.CharField(max_length=150, blank=True)
    person_paying_for_trip = models.CharField(max_length=150, blank=True)
    
    
    work_status = models.CharField(max_length=50, blank=True)
    job_title = models.CharField(max_length=30, blank=True)
    starting_date = models.DateField(null=True, blank=True)
    job_address = models.CharField(max_length=150, blank=True)
    company_name = models.CharField(max_length=50, blank=True)
    company_phone = models.CharField(max_length=20, blank=True)
    salary = models.CharField(max_length=50, blank=True)
    job_desc = models.CharField(max_length=250, blank=True)
    
    secoondary_or_high_education1 = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.YES)
    institute_name1 = models.CharField(max_length=250, blank=True)
    institute_address1 = models.CharField(max_length=250, blank=True)
    course_name1 = models.CharField(max_length=250, blank=True)
    course_start_date1 = models.DateField(null=True, blank=True)
    course_end_date1 = models.DateField(null=True, blank=True)
    
    secoondary_or_high_education2 = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.YES)
    institute_name2 = models.CharField(max_length=250, blank=True)
    institute_address2 = models.CharField(max_length=250, blank=True)
    course_name2 = models.CharField(max_length=250, blank=True)
    course_start_date2 = models.DateField(null=True, blank=True)
    course_end_date2 = models.DateField(null=True, blank=True)
        
    arrive_date = models.DateField(null=True, blank=True)
    length_of_stay = models.CharField(max_length=50, blank=True)
    purpose_of_trip = models.CharField(max_length=50, blank=True)
    
    travelling_alone = models.CharField(max_length=50, blank=True)
    number_of_companions = models.CharField(max_length=50, blank=True)
    companion1_first_name = models.CharField(max_length=50, blank=True)
    companion1_last_name = models.CharField(max_length=50, blank=True)
    companion1_relationship = models.CharField(max_length=50, blank=True)
    
    companion2_first_name = models.CharField(max_length=50, blank=True)
    companion2_last_name = models.CharField(max_length=50, blank=True)
    companion2_relationship = models.CharField(max_length=50, blank=True)
    
    companion3_first_name = models.CharField(max_length=50, blank=True)
    companion3_last_name = models.CharField(max_length=50, blank=True)
    companion3_relationship = models.CharField(max_length=50, blank=True)
    
    companion4_first_name = models.CharField(max_length=50, blank=True)
    companion4_last_name = models.CharField(max_length=50, blank=True)
    companion4_relationship = models.CharField(max_length=50, blank=True)
    
    companion5_first_name = models.CharField(max_length=50, blank=True)
    companion5_last_name = models.CharField(max_length=50, blank=True)
    companion5_relationship = models.CharField(max_length=50, blank=True)
    
    school_name = models.CharField(max_length=50, blank=True)
    admission_offer_photo = models.FileField(upload_to='apFormPhotos/%Y/%m/%d/', blank=True)
    
    maritial_status = models.CharField(max_length=50, blank=True)
    spouse_first_name = models.CharField(max_length=50, blank=True)
    spouse_last_name = models.CharField(max_length=50, blank=True)
    spouse_dob = models.DateField(null=True, blank=True)
    spouse_nationality = models.CharField(max_length=35, blank=True)
    spouse_passport_photo = models.FileField(upload_to='apFormPhotos/%Y/%m/%d/', blank=True)
    spouse_pasport_number = models.CharField(max_length=20, blank=True)
    spouse_city_of_birth = models.CharField(max_length=50, blank=True)
    
    father_first_name = models.CharField(max_length=50, blank=True)
    father_last_name = models.CharField(max_length=50, blank=True)
    father_dob = models.DateField(null=True, blank=True)
    father_nationality = models.CharField(max_length=50, blank=True)
    father_city_of_birth = models.CharField(max_length=50, blank=True)
    
    
    mother_first_name = models.CharField(max_length=50, blank=True)
    mother_last_name = models.CharField(max_length=50, blank=True)
    mother_dob = models.DateField(null=True, blank=True)
    mother_nationality = models.CharField(max_length=50, blank=True)
    mother_city_of_birth = models.CharField(max_length=50, blank=True)

    inviter_full_name = models.CharField(max_length=50, blank=True)
    inviter_email = models.EmailField(max_length=200, blank=True)
    inviter_address = models.CharField(max_length=150, blank=True)
    invitation_letter = models.FileField(upload_to='apFormPhotos/%Y/%m/%d/', blank=True)
    
    hospital_name = models.CharField(max_length=50, blank=True)
    medical_invitation_letter = models.FileField(upload_to='apFormPhotos/%Y/%m/%d/', blank=True)
    medical_details = models.TextField(max_length=1500, blank=True)
    
    other_travel_reason = models.TextField(max_length=1500, blank=True)
    
    family_in_usa = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.YES)
    number_of_relatives = models.CharField(max_length=50, blank=True)
    
    relative1_first_name = models.CharField(max_length=50, blank=True)
    relative1_last_name = models.CharField(max_length=50, blank=True)
    relative1_status = models.CharField(max_length=35, blank=True)
    relative1_relationship = models.CharField(max_length=50, blank=True)
    
    relative2_first_name = models.CharField(max_length=50, blank=True)
    relative2_last_name = models.CharField(max_length=50, blank=True)
    relative2_status = models.CharField(max_length=35, blank=True)
    relative2_relationship = models.CharField(max_length=50, blank=True)
    
    relative3_first_name = models.CharField(max_length=50, blank=True)
    relative3_last_name = models.CharField(max_length=50, blank=True)
    relative3_status = models.CharField(max_length=35, blank=True)
    relative3_relationship = models.CharField(max_length=50, blank=True)
    
    relative4_first_name = models.CharField(max_length=50, blank=True)
    relative4_last_name = models.CharField(max_length=50, blank=True)
    relative4_status = models.CharField(max_length=35, blank=True)
    relative4_relationship = models.CharField(max_length=50, blank=True)
    
    relative5_first_name = models.CharField(max_length=50, blank=True)
    relative5_last_name = models.CharField(max_length=50, blank=True)
    relative5_status = models.CharField(max_length=35, blank=True)
    relative5_relationship = models.CharField(max_length=50, blank=True)
    
    reference1_first_name = models.CharField(max_length=50, blank=True)
    reference1_last_name = models.CharField(max_length=50, blank=True)
    reference1_address = models.CharField(max_length=250, blank=True)
    reference1_phone = models.CharField(max_length=50, blank=True)
    
    reference2_first_name = models.CharField(max_length=50, blank=True)
    reference2_last_name = models.CharField(max_length=50, blank=True)
    reference2_address = models.CharField(max_length=250, blank=True)
    reference2_phone = models.CharField(max_length=50, blank=True)
    
    visa_refusl = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.NO)
    visa_lost = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.NO)
    visa_cancelled = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.NO)
    country_of_refusal = models.CharField(max_length=100, blank=True)
    visa_refusal_date = models.DateField(null=True, blank=True)
    visa_refusal_desc = models.TextField(max_length=1500, blank=True)
    
    visited_usa = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.NO)
    usa_driving_license = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.NO)
    obtained_usa_visa = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.NO)
    usa_visa_issue_date = models.CharField(max_length=100, blank=True)
    usa_visa_no = models.CharField(max_length=100, blank=True)
    made_finger_prints = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.NO)
    
    social_media_presence  = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.NO)
    social_media_identifier  = models.CharField(max_length=100, blank=True)
    
    number_of_usa_visits = models.CharField(max_length=100, blank=True)
    usa_visit_arrival_date = models.CharField(max_length=100, blank=True)
    period_of_usa_stay = models.CharField(max_length=100, blank=True)
    
    usa_visit_arrival_date2 = models.CharField(max_length=100, blank=True)
    period_of_usa_stay2 = models.CharField(max_length=100, blank=True)
    
    usa_visit_arrival_date3 = models.CharField(max_length=100, blank=True)
    period_of_usa_stay3 = models.CharField(max_length=100, blank=True)
    
    usa_visit_arrival_date4 = models.CharField(max_length=100, blank=True)
    period_of_usa_stay4 = models.CharField(max_length=100, blank=True)
    
    usa_visit_arrival_date5 = models.CharField(max_length=100, blank=True)
    period_of_usa_stay5 = models.CharField(max_length=100, blank=True)
    
    usa_visit_arrival_date6 = models.CharField(max_length=100, blank=True)
    period_of_usa_stay6 = models.CharField(max_length=100, blank=True)
    
    usa_visit_arrival_date7 = models.CharField(max_length=100, blank=True)
    period_of_usa_stay7 = models.CharField(max_length=100, blank=True)
    
    visited_other_countries = models.CharField(max_length=50, choices=YesNoQuestion.choices, default=YesNoQuestion.NO)
    number_of_visits = models.CharField(max_length=100, blank=True)
    visted_country = models.CharField(max_length=100, blank=True)
    
    visted_country2 = models.CharField(max_length=100, blank=True)
    visted_country3 = models.CharField(max_length=100, blank=True)
    visted_country4 = models.CharField(max_length=100, blank=True)
    visted_country5 = models.CharField(max_length=100, blank=True)
    visted_country6 = models.CharField(max_length=100, blank=True)
    visted_country7 = models.CharField(max_length=100, blank=True)
    
    aditional_info = models.TextField(max_length=1500, blank=True)
    
    photo_main = models.FileField(upload_to='apFormPhotos/%Y/%m/%d/', blank=True)
    photo_1 = models.FileField(upload_to='apFormPhotos/%Y/%m/%d/', blank=True)

    
    is_sent = models.BooleanField(default=True)
    application_form_date = models.DateTimeField(default=now, blank=True)
    
    def __str__(self):
        return self.pasport_number