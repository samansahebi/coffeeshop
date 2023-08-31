from django.db import models
from django.utils.translation import gettext_lazy as _


class Provider(models.Model):
    name = models.CharField(_('name'), max_length=50)
    phone_number = models.CharField(_('phone number'), max_length=50)
    address = models.CharField(_('address'), max_length=50)


class Category(models.Model):
    title = models.CharField(_('title'), max_length=50)
    slug = models.SlugField(_('slug'))
    image = models.ImageField(_('image'))


class ProductUnit(models.Model):
    title = models.CharField(_('title'), max_length=200)
    price_per_unit = models.CharField(_('price per unit'), max_length=200)

    def __str__(self):
        return self.title


class Product(models.Model):
    category = models.ForeignKey(Category, verbose_name=_('category'), on_delete=models.PROTECT)
    provider = models.ForeignKey(Provider, verbose_name=_('provider'), on_delete=models.PROTECT)
    title = models.CharField(_('title'), max_length=50)
    image = models.ImageField(_('image'))
    slug = models.SlugField(_('slug'))
    unit = models.ForeignKey(ProductUnit, verbose_name=_('unit'), on_delete=models.PROTECT)

    def __str__(self):
        return self.title


class Store(models.Model):
    product = models.ForeignKey(Product, verbose_name=_('product'), on_delete=models.PROTECT)
    available = models.PositiveBigIntegerField()
