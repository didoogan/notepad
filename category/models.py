from __future__ import unicode_literals

from django.db import models

# Create your models here.


class Category(models.Model):
    name = models.TextField()

    class Meta:
        ordering = ('name',)

    def __unicode__(self):
        return self.name
