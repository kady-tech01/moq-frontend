from django.shortcuts import render

# Create your views here.
def esm(request):
    return render(request,'esm/index.html')