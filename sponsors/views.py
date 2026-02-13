from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Sponsor
from .serializers import SponsorSerializer

class SponsorAPIView(APIView):
    def get(self, request):
        sponsors = Sponsor.objects.all()
        serializer = SponsorSerializer(sponsors, many=True, context={'request': request})
        return Response(serializer.data)