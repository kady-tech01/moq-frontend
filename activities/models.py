from django.db import models

class Activity(models.Model):
    LAYOUT_CHOICES = [
        ('one-photo', 'One Photo'),
        ('two-photos', 'Two Photos'),
        ('three-photos', 'Three Photos'),
        ('circle-photo', 'Circle Photo'),
        ('grid', 'Grid'),
    ]
    
    title = models.CharField(max_length=200)
    trainer = models.CharField(max_length=200, blank=True, null=True)
    script = models.TextField()
    layout = models.CharField(max_length=20, choices=LAYOUT_CHOICES, default='one-photo')
    date = models.DateField(blank=True, null=True)
    location = models.CharField(max_length=200, blank=True)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-order', '-created_at']
    
    def __str__(self):
        return self.title

class ActivityImage(models.Model):
    activity = models.ForeignKey(Activity, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='activities/')
    caption = models.CharField(max_length=200, blank=True)
    order = models.IntegerField(default=0)
    transform_style = models.CharField(max_length=200, blank=True, null=True, 
                                      help_text="CSS transform like 'scale(1.1)' or 'translateY(5%)'")
    object_fit = models.CharField(max_length=50, blank=True, null=True,
                                 choices=[('contain', 'Contain'), ('cover', 'Cover')],
                                 default='cover')
    background_color = models.CharField(max_length=20, blank=True, null=True,
                                       help_text="Background color like '#fff' or 'white'")
    
    class Meta:
        ordering = ['order']
    
    def __str__(self):
        return f"Image for {self.activity.title}"