from django.contrib import admin
from .models import Feedback

@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'type', 'created_at', 'is_read']
    list_filter = ['type', 'is_read', 'created_at']
    list_editable = ['is_read']
    search_fields = ['name', 'email', 'message']
    readonly_fields = ['created_at', 'ip_address']
    fieldsets = (
        ('User Information', {
            'fields': ('name', 'email', 'ip_address')
        }),
        ('Feedback Details', {
            'fields': ('type', 'message', 'created_at')
        }),
        ('Status', {
            'fields': ('is_read',)
        }),
    )