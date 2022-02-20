from django.shortcuts import render

# Create your views here.
from django.views.decorators.csrf import csrf_protect

# global parm
user = None


def index(request, *args, **kwargs):
    return render(request, "index.html")


def login(request, *args, **kwargs):
    return render(request, "login.html")


@csrf_protect
def login_judge(request, *args, **kwargs):
    pass


def register(request, *args, **kwargs):
    return render(request, "register.html")


@csrf_protect
def register_judge(request, *args, **kwargs):
    pass
