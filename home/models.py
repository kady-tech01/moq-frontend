from django.db import models
from cloudinary.models import CloudinaryField  # ✅ أضيفي هذا السطر

class HomeContent(models.Model):
    """Single record for home page content"""
    hero_title = models.CharField(max_length=200, default='Welcome To MoQawill')
    hero_subtitle = models.CharField(max_length=300, default='Learn here, lead anywhere')
    hero_image = CloudinaryField('hero_image', blank=True, null=True)  # ✅ تغيير هنا
    about_text = models.TextField(blank=True)
    contact_email = models.EmailField(default='moqawillesmt@gmail.com')
    contact_location = models.CharField(max_length=200, default='ESM, Tlemcen, Algeria')
    
    def __str__(self):
        return "Home Page Content"

class HomeActivity(models.Model):
    """Activities that appear on home page"""
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = CloudinaryField('image', blank=True, null=True)  # ✅ تغيير هنا
    order = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['order']
    
    def __str__(self):
        return self.title