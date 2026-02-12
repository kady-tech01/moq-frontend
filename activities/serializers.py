from rest_framework import serializers
from .models import Activity, ActivityImage

class ActivityImageSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    
    class Meta:
        model = ActivityImage
        fields = ['id', 'image', 'image_url', 'caption', 'order', 'transform_style', 
                 'object_fit', 'background_color']
    
    def get_image_url(self, obj):
        if obj.image:
            return self.context['request'].build_absolute_uri(obj.image.url)
        return None

class ActivitySerializer(serializers.ModelSerializer):
    images = ActivityImageSerializer(many=True, read_only=True)
    imgStyles = serializers.SerializerMethodField()
    
    class Meta:
        model = Activity
        fields = ['id', 'title', 'trainer', 'script', 'layout', 'date', 
                 'location', 'order', 'images', 'imgStyles']
    
    def get_imgStyles(self, obj):
        """Return array of styles for each image in order"""
        styles = []
        for img in obj.images.all():
            style = {}
            if img.transform_style:
                style['transform'] = img.transform_style
            if img.object_fit:
                style['objectFit'] = img.object_fit
            if img.background_color:
                style['backgroundColor'] = img.background_color
            styles.append(style)
        return styles