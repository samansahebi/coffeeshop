from django.contrib import admin
from .models import Product, Category, Provider, ProductUnit

admin.site.register(Product)
admin.site.register(ProductUnit)
admin.site.register(Category)
admin.site.register(Provider)
