from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.decorators import api_view, permission_classes
from .models import LanguageCenter, AcademicInstitute
from .serializers import LanguageCenterSerializer, AcademicInstituteSerializer

@api_view(['POST'])
@permission_classes((permissions.AllowAny, ))
def languageCenterCreate (request):
    serializer = LanguageCenterSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes((permissions.AllowAny, ))
def getLanguageCenterList (request):
    getLanguageCenter = LanguageCenter.objects.all()
    serializer = LanguageCenterSerializer(getLanguageCenter, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes((permissions.AllowAny, ))
def academicInstituteCreate (request):
    serializer = AcademicInstituteSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes((permissions.AllowAny, ))
def getAcademicInstituteList (request):
    getAcademicInstitute = AcademicInstitute.objects.all()
    serializer = AcademicInstituteSerializer(getAcademicInstitute, many=True)
    return Response(serializer.data)
