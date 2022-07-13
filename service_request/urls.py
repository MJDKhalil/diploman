from django.urls import path
from . import views
urlpatterns = [
    path('', views.serviceRequestCreate, name="serviceRequestCreate"),
    path('list/', views.serRequestsList, name="serRequestsList"),
    path('admission/', views.admissionRequestCreate, name="admissionRequestCreate"),
    path('admission-requests-list/', views.adSerRequestsList, name="adSerRequestsList"),
    path('prem-request/', views.premiumRequestCreate, name="premiumRequestCreate"),
    path('prem-requests-list/', views.premSerRequestsList, name="premSerRequestsList"),
    
    path('request-visa-assist/', views.visaAssistRequestCreate, name="visaAssistRequestCreate"),
    path('request-visa-assist-list/', views.visaAssistRequestList, name="visaAssistRequestList"),
    
    path('request-partnership/', views.requestPartnershipCreate, name="requestPartnershipCreate"),
    path('request-partnership-list/', views.requestPartnershipList, name="requestPartnershipList"),
]