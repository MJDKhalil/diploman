from rest_framework import serializers
from .models import ServiceRequest, AdmissionRequest, PremiumRequest, VisaAssistRequest, RequestPartnership

class ServiceRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceRequest
        fields = '__all__'
        
class AdmissionRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdmissionRequest
        fields = '__all__'
        
class PremiumRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = PremiumRequest
        fields = '__all__'

class VisaAssistRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = VisaAssistRequest
        fields = '__all__'
        
class RequestPartnershipSerializer(serializers.ModelSerializer):
    class Meta:
        model = RequestPartnership
        fields = '__all__'