from django.contrib import admin
from .models import Event, EventImage

class EventImageInline(admin.TabularInline):
    model = EventImage
    extra = 4
    fields = ['image', 'caption', 'order']

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ['title', 'date', 'order', 'created_at']
    list_filter = ['date']
    list_editable = ['order']
    search_fields = ['title', 'script']
    inlines = [EventImageInline]
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'date', 'script', 'order')
        }),
    )

@admin.register(EventImage)
class EventImageAdmin(admin.ModelAdmin):
    list_display = ['event', 'order']
    list_editable = ['order']
    list_filter = ['event']