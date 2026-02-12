from rest_framework import serializers
from .models import Announcement

class AnnouncementSerializer(serializers.ModelSerializer):
    date_display = serializers.DateField(source='date', format='%b %d, %Y')
    
    class Meta:
        model = Announcement
        fields = ['id', 'title', 'type', 'date', 'date_display', 'status', 
                 'content', 'link', 'link_text', 'order']