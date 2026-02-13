from django.urls import path
from .views import ActivityAPIView

urlpatterns = [
    path('', ActivityAPIView.as_view(), name='activities-api'),
]