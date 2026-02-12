from django.db import models

class Sponsor(models.Model):
    SPONSOR_TYPE_CHOICES = [
        ('vip', 'VIP Platinum'),
        ('facebook', 'Facebook Media'),
        ('instagram', 'Instagram Network'),
    ]
    
    name = models.CharField(max_length=200)
    type = models.CharField(max_length=50, choices=SPONSOR_TYPE_CHOICES, default='instagram')
    link = models.URLField(max_length=500, blank=True, null=True)
    image = models.ImageField(upload_to='sponsors/')
    order = models.IntegerField(default=0)
    
    # Image styling fields
    transform_style = models.CharField(
        max_length=200, 
        blank=True, 
        null=True,
        default='scale(1.0)',
        help_text="CSS transform like 'scale(1.1) translateY(5%)'"
    )
    object_fit = models.CharField(
        max_length=50, 
        blank=True, 
        null=True,
        choices=[('contain', 'Contain'), ('cover', 'Cover')],
        default='cover'
    )
    object_position = models.CharField(
        max_length=50, 
        blank=True, 
        null=True,
        default='center',
        help_text="CSS object-position like 'center', 'top', 'bottom'"
    )
    
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['type', 'order', '-created_at']
    
    def __str__(self):
        return f"{self.name} - {self.get_type_display()}"