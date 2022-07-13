from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.decorators import api_view, permission_classes
from .models import ServiceRequest, AdmissionRequest, PremiumRequest, VisaAssistRequest, RequestPartnership
from .serializers import ServiceRequestSerializer, AdmissionRequestSerializer, PremiumRequestSerializer, VisaAssistRequestSerializer, RequestPartnershipSerializer

# Create your views here.
@api_view(['POST'])
@permission_classes((permissions.AllowAny, ))
def serviceRequestCreate (request):
    serializer = ServiceRequestSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes((permissions.AllowAny, ))
def serRequestsList (request):
    serRequests = ServiceRequest.objects.all()
    serializer = ServiceRequestSerializer(serRequests, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes((permissions.AllowAny, ))
def admissionRequestCreate (request):
    serializer = AdmissionRequestSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes((permissions.AllowAny, ))
def adSerRequestsList (request):
    adSerRequests = AdmissionRequest.objects.all()
    serializer = AdmissionRequestSerializer(adSerRequests, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes((permissions.AllowAny, ))
def premiumRequestCreate (request):
    serializer = PremiumRequestSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes((permissions.AllowAny, ))
def premSerRequestsList (request):
    premSerRequests = PremiumRequest.objects.all()
    serializer = PremiumRequestSerializer(premSerRequests, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes((permissions.AllowAny, ))
def visaAssistRequestCreate (request):
    serializer = VisaAssistRequestSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes((permissions.AllowAny, ))
def visaAssistRequestList (request):
    visaAssistRequest = VisaAssistRequest.objects.all()
    serializer = VisaAssistRequestSerializer(visaAssistRequest, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes((permissions.AllowAny, ))
def requestPartnershipCreate (request):
    serializer = RequestPartnershipSerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes((permissions.AllowAny, ))
def requestPartnershipList (request):
    requestPartnership = RequestPartnership.objects.all()
    serializer = RequestPartnershipSerializer(requestPartnership, many=True)
    return Response(serializer.data)