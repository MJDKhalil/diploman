from django.db import models
from datetime import datetime

class ServiceRequest(models.Model):
    name = models.CharField(max_length=200, blank=True)
    email = models.CharField(max_length=100, blank=True)
    phone = models.CharField(max_length=200, blank=True)
    request = models.CharField(max_length=200,blank=True)
    message = models.TextField(blank=True)
    contact_date = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.email
    
class AdmissionRequest(models.Model):
    name = models.CharField(max_length=200, blank=True)
    email = models.CharField(max_length=100, blank=True)
    phone = models.CharField(max_length=200, blank=True)
    school = models.CharField(max_length=200, blank=True)
    other = models.CharField(max_length=200, blank=True)
    course_length = models.CharField(max_length=100, blank=True)
    start_date = models.DateField(null=True, blank=True)
    destination = models.CharField(max_length=200, blank=True)
    message = models.TextField(blank=True)
    contact_date = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.email
    
class PremiumRequest(models.Model):
    name = models.CharField(max_length=200, blank=True)
    email = models.CharField(max_length=100, blank=True)
    phone = models.CharField(max_length=200, blank=True)
    message = models.TextField(blank=True)
    contact_date = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.email
    
class VisaAssistRequest(models.Model):
    name = models.CharField(max_length=200, blank=True)
    email = models.CharField(max_length=100, blank=True)
    destination = models.CharField(max_length=200, blank=True)
    phone = models.CharField(max_length=200, blank=True)
    message = models.TextField(blank=True)
    contact_date = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.email
    
class RequestPartnership(models.Model):
    name = models.CharField(max_length=200, blank=True)
    email = models.CharField(max_length=100, blank=True)
    phone = models.CharField(max_length=200, blank=True)
    message = models.TextField(blank=True)
    contact_date = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.email
