from rest_framework import serializers
from .models import LanguageCenter, AcademicInstitute
        
class LanguageCenterSerializer(serializers.ModelSerializer):
    class Meta:
        model = LanguageCenter
        fields = '__all__'

class AcademicInstituteSerializer(serializers.ModelSerializer):
    class Meta:
        model = AcademicInstitute
        fields = '__all__'