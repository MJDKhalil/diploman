from django.urls import path
from . import views
urlpatterns = [
    path('', views.appFormCreate, name="appFormCreate"),
    path('list/', views.appFormList, name="appFormList"),
    path('detail/<str:pk>/', views.appFormDetail, name="appFormDetail"),
    path('update/<str:pk>/', views.appFormUpdate, name="appFormUpdate"),
    path('delete/<str:pk>/', views.appFormDelete, name="appFormDelete"),
    
    path('usa-form', views.usaAppFormCreate, name="usaAppFormCreate"),
    path('usa-list/', views.usaAppFormList, name="usaAppFormList"),
    path('usa-detail/<str:pk>/', views.usaAppFormDetail, name="usaAppFormDetail"),
    path('usa-update/<str:pk>/', views.usaAppFormUpdate, name="usaAppFormUpdate"),
    path('usa-delete/<str:pk>/', views.usaAppFormDelete, name="usaAppFormDelete"),
]