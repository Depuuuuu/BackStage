from django.db import models

# Create your models here.


class Users(models.Model):
    user_name = models.CharField(max_length=20)
    password = models.IntegerField(max_length=20)
    player_name = models.CharField(max_length=20)
