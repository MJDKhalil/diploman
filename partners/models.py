from django.db import models
from datetime import datetime

class LanguageCenter(models.Model):
    name = models.CharField(max_length=200, blank=True)
    email = models.CharField(max_length=100, blank=True)
    photo = models.ImageField(upload_to='partners/%Y/%m/%d/', blank=True)
    phone = models.CharField(max_length=200, blank=True)
    country = models.CharField(max_length=200, blank=True)
    language = models.CharField(max_length=200,blank=True)
    course = models.CharField(max_length=200,blank=True)
    deposit = models.CharField(max_length=200,blank=True)
    note = models.CharField(max_length=200,blank=True)
    create_date = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.email

class AcademicInstitute(models.Model):
    name = models.CharField(max_length=200, blank=True)
    email = models.CharField(max_length=100, blank=True)
    photo = models.FileField(upload_to='partners/%Y/%m/%d/', blank=True)
    phone = models.CharField(max_length=200, blank=True)
    course = models.CharField(max_length=200,blank=True)
    deposit = models.CharField(max_length=200,blank=True)
    note = models.CharField(max_length=200,blank=True)
    create_date = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.email
