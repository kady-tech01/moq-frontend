from django.urls import path
from .views import AnnouncementAPIView

urlpatterns = [
    path('', AnnouncementAPIView.as_view(), name='announcements-api'),
]