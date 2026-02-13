from django.urls import path
from .views import SponsorAPIView

urlpatterns = [
    path('', SponsorAPIView.as_view(), name='sponsors-api'),
]