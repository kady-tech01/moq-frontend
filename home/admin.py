from django.contrib import admin
from .models import HomeContent, HomeActivity

@admin.register(HomeContent)
class HomeContentAdmin(admin.ModelAdmin):
    fieldsets = (
        ('Hero Section', {
            'fields': ('hero_title', 'hero_subtitle', 'hero_image')
        }),
        ('About Section', {
            'fields': ('about_text',)
        }),
        ('Contact Information', {
            'fields': ('contact_email', 'contact_location')
        }),
    )

@admin.register(HomeActivity)
class HomeActivityAdmin(admin.ModelAdmin):
    list_display = ['title', 'order']
    list_editable = ['order']