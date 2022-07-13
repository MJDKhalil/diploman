from django.contrib import admin
from .models import LanguageCenter, AcademicInstitute

# Register your models here.
class LanguageCenterAdmin(admin.ModelAdmin):
    list_display = [field.name for field in LanguageCenter._meta.get_fields()]
    search_fields = ('email', 'name')
    list_per_page = 25
    
admin.site.register(LanguageCenter, LanguageCenterAdmin)

class AcademicInstituteAdmin(admin.ModelAdmin):
    list_display = [field.name for field in AcademicInstitute._meta.get_fields()]
    search_fields = ('email', 'name')
    list_per_page = 25
    
admin.site.register(AcademicInstitute, AcademicInstituteAdmin)
