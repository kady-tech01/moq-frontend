from django.urls import path
from .views import HomeAPIView

urlpatterns = [
    path('', HomeAPIView, name='home-api'),
]