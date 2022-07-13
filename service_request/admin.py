from django.contrib import admin
from .models import ServiceRequest, AdmissionRequest, PremiumRequest, VisaAssistRequest, RequestPartnership

# Register your models here.
class ServiceRequestAdmin(admin.ModelAdmin):
    list_display = [field.name for field in ServiceRequest._meta.get_fields()]
    search_fields = ('email', 'name')
    list_per_page = 25
    
admin.site.register(ServiceRequest, ServiceRequestAdmin)

class AdmissionRequestAdmin(admin.ModelAdmin):
    list_display = [field.name for field in AdmissionRequest._meta.get_fields()]
    search_fields = ('email', 'name')
    list_per_page = 25
    
admin.site.register(AdmissionRequest, AdmissionRequestAdmin)

class PremiumRequestAdmin(admin.ModelAdmin):
    list_display = [field.name for field in PremiumRequest._meta.get_fields()]
    search_fields = ('email', 'name')
    list_per_page = 25
    
admin.site.register(PremiumRequest, PremiumRequestAdmin)

class VisaAssistRequestAdmin(admin.ModelAdmin):
    list_display = [field.name for field in VisaAssistRequest._meta.get_fields()]
    search_fields = ('email', 'name')
    list_per_page = 25
    
admin.site.register(VisaAssistRequest, VisaAssistRequestAdmin)

class RequestPartnershipAdmin(admin.ModelAdmin):
    list_display = [field.name for field in RequestPartnership._meta.get_fields()]
    search_fields = ('email', 'name')
    list_per_page = 25
    
admin.site.register(RequestPartnership, RequestPartnershipAdmin)
