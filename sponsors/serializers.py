from rest_framework import serializers
from .models import Sponsor

class SponsorSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    imgStyle = serializers.SerializerMethodField()
    
    class Meta:
        model = Sponsor
        fields = ['id', 'name', 'type', 'link', 'image_url', 'order', 'imgStyle']
    
    def get_image_url(self, obj):
        if obj.image:
            return self.context['request'].build_absolute_uri(obj.image.url)
        return None
    
    def get_imgStyle(self, obj):
        """Generate style object for React component"""
        style = {}
        if obj.transform_style:
            style['transform'] = obj.transform_style
        if obj.object_fit:
            style['objectFit'] = obj.object_fit
        if obj.object_position:
            style['objectPosition'] = obj.object_position
        return style