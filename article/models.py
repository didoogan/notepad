from __future__ import unicode_literals
from django.contrib.auth.models import User

from django.db import models


class Article(models.Model):
    user = models.ForeignKey(User, related_name='article')
    title = models.CharField(max_length=100)
    content = models.TextField()
    date_of_creation = models.DateField(auto_now_add=True, auto_now=False)
    visible = models.BooleanField(default=True)


