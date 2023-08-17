from django.db import models


class Provider(models.Model):
    name = models.CharField(max_length=50)
    phone_number = models.CharField(max_length=50)
    address = models.CharField(max_length=50)


class Category(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField()
    image = models.ImageField()


class ProductUnit(models.Model):
    title = models.CharField(max_length=200)
    price_per_unit = models.CharField(max_length=200)

    def __str__(self):
        return self.title


class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    provider = models.ForeignKey(Provider, on_delete=models.PROTECT)
    title = models.CharField(max_length=50)
    image = models.ImageField()
    slug = models.SlugField()
    unit = models.ForeignKey(ProductUnit, on_delete=models.PROTECT)
    quantity = models.CharField(max_length=200)


