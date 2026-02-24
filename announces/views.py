from rest_framework.views import APIView
from rest_framework.response import Response
from django.views.decorators.cache import never_cache
from django.utils.decorators import method_decorator
from .models import Announcement
from .serializers import AnnouncementSerializer

@method_decorator(never_cache, name='dispatch')
class AnnouncementAPIView(APIView):
    def get(self, request):
        announcements = Announcement.objects.all()
        serializer = AnnouncementSerializer(announcements, many=True, context={'request': request})
        
        # إضافة هيدر لمنع التخزين المؤقت
        response = Response(serializer.data)
        response['Cache-Control'] = 'no-store, no-cache, must-revalidate, max-age=0, private'
        response['Pragma'] = 'no-cache'
        response['Expires'] = '0'
        return response