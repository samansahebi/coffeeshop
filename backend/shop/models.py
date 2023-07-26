from django.db import models


class Provider(models.Model):
    name = models.CharField(max_length=50)
    phone_number = models.CharField(max_length=50)
    address = models.CharField(max_length=50)


class Category(models.Model):
    name = models.CharField(max_length=50)
    slug = models.SlugField()
    image = models.ImageField()


class Products(models.Model):
    category = models.CharField(max_length=50)
    provider = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    image = models.ImageField()
    unit = models.CharField(max_length=20)
    quantity = models.CharField(max_length=200)
    unit_price = models.CharField()


