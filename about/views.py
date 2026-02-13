from rest_framework.views import APIView
from rest_framework.response import Response
from .models import AboutHero, AboutHistory, BoardMember
from .serializers import AboutHeroSerializer, AboutHistorySerializer, BoardMemberSerializer

class AboutAPIView(APIView):
    
    def get(self, request):
        hero = AboutHero.objects.first()
        history = AboutHistory.objects.first()
        
        president = BoardMember.objects.filter(position='president').first()
        vice_president = BoardMember.objects.filter(position='vice_president').first()
        supervisor = BoardMember.objects.filter(position='supervisor').first()
        
        data = {
            'hero': AboutHeroSerializer(hero, context={'request': request}).data if hero else {
                'title': 'Driven by Ambition',
                'subtitle': 'Shaping the next generation of ESM leaders since 2020.',
                'image': None,
                'image_url': None
            },
            'history': AboutHistorySerializer(history, context={'request': request}).data if history else {
                'subtitle': 'Our Journey',
                'title': 'The Legacy of MoQawill',
                'paragraph1': 'Founded in 2020 by official decree No. 01 at the Higher School of Management (ESM), MoQawill emerged from a vision to bridge the gap between academic theory and operational excellence.',
                'paragraph2': 'Our mission is simple yet bold: To foster an entrepreneurial spirit and provide a platform for scientific research that transforms students into industry-ready leaders.',
                'image': None,
                'image_url': None
            },
            'board': {
                'president': BoardMemberSerializer(president, context={'request': request}).data if president else {
                    'name': 'Ibrahim Kaddouri',
                    'role_title': 'President',
                    'description': 'Strategic lead focused on operational excellence and club growth.',
                    'image': None,
                    'image_url': None
                },
                'vicePresident': BoardMemberSerializer(vice_president, context={'request': request}).data if vice_president else {
                    'name': 'Mohammed Chettouane',
                    'role_title': 'Vice President',
                    'description': 'Overseeing departmental synergy and internal management.',
                    'image': None,
                    'image_url': None
                },
                'supervisor': BoardMemberSerializer(supervisor, context={'request': request}).data if supervisor else {
                    'name': 'Mohammed Sami Bouderoua',
                    'role_title': 'General Supervisor',
                    'description': 'Ensuring formal compliance and administrative efficiency.',
                    'image': None,
                    'image_url': None
                }
            }
        }
        return Response(data)