from django.contrib import admin
from .models import AboutHero, AboutHistory, BoardMember

@admin.register(AboutHero)
class AboutHeroAdmin(admin.ModelAdmin):
    fieldsets = (
        ('Hero Section', {
            'fields': ('title', 'subtitle', 'image')
        }),
    )

@admin.register(AboutHistory)
class AboutHistoryAdmin(admin.ModelAdmin):
    fieldsets = (
        ('History Section', {
            'fields': ('subtitle', 'title', 'paragraph1', 'paragraph2', 'image')
        }),
    )

@admin.register(BoardMember)
class BoardMemberAdmin(admin.ModelAdmin):
    list_display = ['position', 'name', 'role_title', 'order']
    list_editable = ['order']