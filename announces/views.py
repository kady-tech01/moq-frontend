from django.shortcuts import render

# Create your views here.
def announces(request):
    return render(request,'announces/index.html')