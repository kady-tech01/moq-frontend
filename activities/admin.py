from django.contrib import admin
from .models import Activity, ActivityImage

class ActivityImageInline(admin.TabularInline):
    model = ActivityImage
    extra = 3
    fields = ['image', 'caption', 'order', 'transform_style', 'object_fit', 'background_color']

@admin.register(Activity)
class ActivityAdmin(admin.ModelAdmin):
    list_display = ['title', 'trainer', 'layout', 'date', 'order']
    list_filter = ['layout', 'date']
    list_editable = ['order']
    search_fields = ['title', 'trainer', 'script']
    inlines = [ActivityImageInline]
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'trainer', 'script', 'date', 'location')
        }),
        ('Layout Settings', {
            'fields': ('layout', 'order')
        }),
    )

@admin.register(ActivityImage)
class ActivityImageAdmin(admin.ModelAdmin):
    list_display = ['activity', 'order', 'transform_style', 'object_fit']
    list_filter = ['activity']
    list_editable = ['order']