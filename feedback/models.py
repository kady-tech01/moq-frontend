from django.db import models

class Feedback(models.Model):
    FEEDBACK_TYPES = [
        ('General', 'General'),
        ('Bug', 'Bug Report'),
        ('Suggestion', 'Suggestion'),
        ('Compliment', 'Compliment'),
        ('Complaint', 'Complaint'),
    ]
    
    name = models.CharField(max_length=100)
    email = models.EmailField()
    type = models.CharField(max_length=50, choices=FEEDBACK_TYPES)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)
    ip_address = models.GenericIPAddressField(blank=True, null=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.name} - {self.type} - {self.created_at.strftime('%Y-%m-%d %H:%M')}"