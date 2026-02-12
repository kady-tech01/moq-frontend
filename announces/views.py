from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Announcement
from .serializers import AnnouncementSerializer

class AnnouncementAPIView(APIView):
    def get(self, request):
        announcements = Announcement.objects.all()
        serializer = AnnouncementSerializer(announcements, many=True, context={'request': request})
        return Response(serializer.data)