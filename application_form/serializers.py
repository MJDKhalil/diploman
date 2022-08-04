from rest_framework import serializers
from .models import ApplicationForm, UsaApplicationForm
        
class ApplicationFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApplicationForm
        fields = '__all__'

class UsaApplicationFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = UsaApplicationForm
        fields = '__all__'