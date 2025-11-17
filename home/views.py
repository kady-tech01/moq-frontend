from django.shortcuts import render

#function of landing page home/index.html

def index(request):
    context = {'club_name': 'MoQawill club'}
    return render(request, 'home/index.html', context)
