from django.contrib import admin
from .models import Sponsor

@admin.register(Sponsor)
class SponsorAdmin(admin.ModelAdmin):
    list_display = ['name', 'type', 'link', 'order']
    list_filter = ['type']
    list_editable = ['order', 'type']
    search_fields = ['name', 'link']
    fieldsets = (
        ('Basic Information', {
            'fields': ('name', 'type', 'link', 'image', 'order')
        }),
        ('Image Styling', {
            'fields': ('transform_style', 'object_fit', 'object_position'),
            'classes': ('wide',),
            'description': 'تنسيق الصورة - اتركه كما هو إذا كنت لا تعرف التعديل'
        }),
    )