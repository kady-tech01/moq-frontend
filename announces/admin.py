from django.contrib import admin
from .models import Announcement

@admin.register(Announcement)
class AnnouncementAdmin(admin.ModelAdmin):
    list_display = ['title', 'type', 'date', 'status', 'order']
    list_filter = ['status', 'type', 'date']
    list_editable = ['status', 'order']
    search_fields = ['title', 'content']
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'type', 'content', 'date')
        }),
        ('Status & Display', {
            'fields': ('status', 'order')
        }),
        ('Action Link', {
            'fields': ('link', 'link_text'),
            'classes': ('collapse',),
            'description': 'Optional: Add a link for users to take action'
        }),
    )