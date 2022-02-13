from django.shortcuts import render

# Create your views here.


def index(request, *args, **kwargs):
    return render(request, "index.html")


def landing(request, *args, **kwargs):
    return render(request, "landing.html")


def generic(request, *args, **kwargs):
    return render(request, "generic.html")


def elements(request, *args, **kwargs):
    return render(request, "elements.html")
