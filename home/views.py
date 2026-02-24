from django.http import JsonResponse
from django.views.decorators.cache import never_cache
from django.utils.decorators import method_decorator
from .models import HomeContent, HomeActivity

@never_cache
def HomeAPIView(request):
    content = HomeContent.objects.first()
    activities = HomeActivity.objects.all().order_by('order')[:3]
    
    # بيانات الهيرو
    hero_data = {
        'title': content.hero_title if content else 'Welcome To MoQawill',
        'subtitle': content.hero_subtitle if content else 'Learn here, lead anywhere',
        'image': request.build_absolute_uri(content.hero_image.url) if content and content.hero_image else None
    }
    
    # بيانات About
    about_data = {
        'text': content.about_text if content else 'MoQawill Club is a scientific and cultural organization affiliated with the Higher School of Management in Tlemcen. Established in 2020 by official decree No. 01, the club is dedicated to promoting entrepreneurship, innovation, and scientific research in the field of management sciences.'
    }
    
    # بيانات الأنشطة
    activities_data = []
    for activity in activities:
        activities_data.append({
            'id': activity.id,
            'title': activity.title,
            'description': activity.description,
            'image': request.build_absolute_uri(activity.image.url) if activity.image else None
        })
    
    # بيانات التواصل
    contact_data = {
        'email': content.contact_email if content else 'moqawillesmt@gmail.com',
        'location': content.contact_location if content else 'ESM, Tlemcen, Algeria'
    }
    
    # إنشاء الاستجابة مع منع التخزين المؤقت
    response = JsonResponse({
        'hero': hero_data,
        'about': about_data,
        'activities': activities_data,
        'contact': contact_data
    })
    
    # إضافة هيدر منع التخزين المؤقت
    response['Cache-Control'] = 'no-store, no-cache, must-revalidate, max-age=0, private'
    response['Pragma'] = 'no-cache'
    response['Expires'] = '0'
    
    return response