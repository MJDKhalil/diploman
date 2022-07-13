from django.urls import path
from . import views
urlpatterns = [
    path('', views.languageCenterCreate, name="languageCenterCreate"),
    path('list/', views.getLanguageCenterList, name="getLanguageCenterList"),
    path('academic-institute/', views.academicInstituteCreate, name="academicInstituteCreate"),
    path('academic-institute/list/', views.getAcademicInstituteList, name="getAcademicInstituteList"),
]