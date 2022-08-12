from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=255)
    title = models.CharField(max_length=2083)
    feature = models.CharField(max_length=2083)
    price = models.FloatField()
    img_url = models.CharField(max_length=2083)
    stock = models.IntegerField()
