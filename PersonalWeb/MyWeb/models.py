from django.db import models

# Create your models here.


class Blog(models.Model):
    title = models.CharField(max_length=30)
    content = models.TextField(max_length=1000)
    time = models.DateTimeField()


class User(models.Model):
    name = models.CharField(max_length=20, primary_key=True)
    password = models.CharField(max_length=20)
    email = models.EmailField()
    age = models.IntegerField(default=None)
    sex = models.CharField(max_length=2)
    birthday = models.DateField()
    status = models.BooleanField(default=False)
    blogs = models.ForeignKey(Blog, on_delete=models.CASCADE)




































