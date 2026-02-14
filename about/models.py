from django.db import models

class AboutHero(models.Model):
    title = models.CharField(max_length=200, default='Driven by Ambition')
    subtitle = models.CharField(max_length=300, default='Shaping the next generation of ESM leaders since 2020.')
    image = models.ImageField(upload_to='about/hero/', blank=True, null=True)
    
    def __str__(self):
        return "About Hero Section"

class AboutHistory(models.Model):
    subtitle = models.CharField(max_length=100, default='Our Journey')
    title = models.CharField(max_length=200, default='The Legacy of MoQawill')
    paragraph1 = models.TextField()
    paragraph2 = models.TextField(blank=True)
    image = models.ImageField(upload_to='about/history/', blank=True, null=True)
    
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
    role_title = models.CharField(max_length=100)  # President, Vice President, etc.
    description = models.TextField()
    image = models.ImageField(upload_to='about/board/')
    order = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['order']
    
    def __str__(self):
        return f"{self.name} - {self.role_title}"