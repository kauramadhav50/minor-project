from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    profile_image = models.ImageField(upload_to='profile_pics/', blank=True, null=True)
    bio = models.CharField(max_length=1000, blank=True, null=True)

    def __str__(self):
        return self.username