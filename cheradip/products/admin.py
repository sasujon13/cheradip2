from itertools import product
from unicodedata import name
from django.contrib import admin
from .models import Product


class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'title', 'feature', 'price', 'img_url', 'stock')


admin.site.register(Product, ProductAdmin)
