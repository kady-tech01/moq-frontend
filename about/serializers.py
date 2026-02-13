from rest_framework import serializers
from .models import AboutHero, AboutHistory, BoardMember

class AboutHeroSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    
    class Meta:
        model = AboutHero
        fields = ['id', 'title', 'subtitle', 'image', 'image_url']
    
    def get_image_url(self, obj):
        if obj.image:
            return self.context['request'].build_absolute_uri(obj.image.url)
        return None

class AboutHistorySerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    
    class Meta:
        model = AboutHistory
        fields = ['id', 'subtitle', 'title', 'paragraph1', 'paragraph2', 'image', 'image_url']
    
    def get_image_url(self, obj):
        if obj.image:
            return self.context['request'].build_absolute_uri(obj.image.url)
        return None

class BoardMemberSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    position_display = serializers.CharField(source='get_position_display', read_only=True)
    
    class Meta:
        model = BoardMember
        fields = ['id', 'position', 'position_display', 'name', 'role_title', 'description', 'image', 'image_url', 'order']
    
    def get_image_url(self, obj):
        if obj.image:
            return self.context['request'].build_absolute_uri(obj.image.url)
        return None