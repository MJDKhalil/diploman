from django.contrib import admin
from .models import ApplicationForm, UsaApplicationForm

# Register your models here.
class ApplicationFormAdmin(admin.ModelAdmin):
    list_display = [field.name for field in ApplicationForm._meta.get_fields()]
    search_fields = ('pasport_number', 'first_name', 'last_name')
    list_per_page = 25
    
admin.site.register(ApplicationForm, ApplicationFormAdmin)

# usa application form
class UsaApplicationFormAdmin(admin.ModelAdmin):
    list_display = [field.name for field in UsaApplicationForm._meta.get_fields()]
    search_fields = ('pasport_number', 'first_name', 'last_name')
    list_per_page = 25
    
admin.site.register(UsaApplicationForm, UsaApplicationFormAdmin)