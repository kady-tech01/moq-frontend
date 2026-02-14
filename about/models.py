from django.db import models
from cloudinary.models import CloudinaryField  # ✅ أضيفي هذا السطر

class AboutHero(models.Model):
    title = models.CharField(max_length=200, default='Driven by Ambition')
    subtitle = models.CharField(max_length=300, default='Shaping the next generation of ESM leaders since 2020.')
    image = CloudinaryField('image', blank=True, null=True)  # ✅ تغيير هنا
    
    def __str__(self):
        return "About Hero Section"

class AboutHistory(models.Model):
    subtitle = models.CharField(max_length=100, default='Our Journey')
    title = models.CharField(max_length=200, default='The Legacy of MoQawill')
    paragraph1 = models.TextField()
    paragraph2 = models.TextField(blank=True)
    image = CloudinaryField('image', blank=True, null=True)  # ✅ تغيير هنا
    
    def __str__(self):
        return "About History Section"

class BoardMember(models.Model):
    POSITION_CHOICES = [
        ('president', 'President'),
        ('vice_president', 'Vice President'),
        ('supervisor', 'General Supervisor'),
        ('other', 'Other'),
    ]
    
    position = models.CharField(max_length=20, choices=POSITION_CHOICES, unique=True)
    name = models.CharField(max_length=200)
    role_title = models.CharField(max_length=100)
    description = models.TextField()
    image = CloudinaryField('image')  # ✅ تغيير هنا (حذف upload_to)
    order = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['order']
    
    def __str__(self):
        return f"{self.name} - {self.role_title}"