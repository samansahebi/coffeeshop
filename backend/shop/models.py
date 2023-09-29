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


class OfferCode(models.Model):
    CHOICES = (
        ('Price', 'Price'),
        ('Percentage', 'Percentage'),
    )
    is_public = models.BooleanField(default=False)
    code = models.CharField(_('code'), max_length=200)
    offer = models.IntegerField(_('offer'))
    type = models.CharField(_('type'), default='Percentage', max_length=200)

    def __str__(self):
        return self.code


class Product(models.Model):
    category = models.ForeignKey(Category, verbose_name=_('category'), on_delete=models.PROTECT)
    provider = models.ForeignKey(Provider, verbose_name=_('provider'), on_delete=models.PROTECT)
    title = models.CharField(_('title'), max_length=50)
    description = models.TextField(_('description'))
    image = models.ImageField(_('image'))
    slug = models.SlugField(_('slug'))
    unit = models.ManyToManyField(ProductUnit, verbose_name=_('unit'))
    offer_code = models.ForeignKey(OfferCode, on_delete=models.CASCADE, blank=True, null=True)
    count_in_store = models.IntegerField(default=1)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
