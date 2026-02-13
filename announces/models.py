from django.db import models

class Announcement(models.Model):
    STATUS_CHOICES = [
        ('active', 'Active'),
        ('archive', 'Archive'),
    ]
    
    TYPE_CHOICES = [
        ('Recruitment', 'Recruitment'),
        ('Event', 'Event'),
        ('Policy', 'Policy'),
        ('General', 'General'),
        ('Urgent', 'Urgent'),
    ]
    
    title = models.CharField(max_length=200)
    type = models.CharField(max_length=50, choices=TYPE_CHOICES, default='General')
    date = models.DateField(auto_now_add=False, auto_now=False) 
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='active')
    content = models.TextField()
    link = models.URLField(blank=True, null=True)
    link_text = models.CharField(max_length=100, default='Take Action →')
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-status', 'order', '-date']
        
    def __str__(self):
        return f"{self.title} - {self.get_status_display()}"