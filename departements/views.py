from django.shortcuts import render

# Create your views here.
def departements(request):
    return render(request,'departements/index.html')