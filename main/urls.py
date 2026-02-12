from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # APIs
    path('api/home/', include('home.urls')),
    path('api/about/', include('about.urls')), 
    # other apps
    path('about/', include('about.urls')),
    path('achievements/', include('achievements.urls')),
    path('activities/', include('activities.urls')),path('api/activities/', include('activities.urls')),
    path('announces/', include('announces.urls')),path('api/announces/', include('announces.urls')),  # ➕ أضف مع الـ APIs الأخرى
    path('departements/', include('departements.urls')),
    path('esm/', include('esm.urls')),
    path('events/', include('events.urls')),path('api/events/', include('events.urls')), 
    path('news/', include('news.urls')),
    path('sponsors/', include('sponsors.urls')),path('api/sponsors/', include('sponsors.urls')), 
    path('api/feedback/', include('feedback.urls')), 
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)