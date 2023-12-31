from django.db import models
from django.utils.translation import gettext_lazy as _
from shop.models import Product, ProductUnit
from customers.models import Customer, Address


class PackageType(models.Model):
    title = models.CharField(_('title'), max_length=50)


class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.PROTECT)
    unit = models.ForeignKey(ProductUnit, on_delete=models.PROTECT)
    package_type = models.ForeignKey(PackageType, verbose_name=_('package type'), on_delete=models.PROTECT, null=True, blank=True)
    count = models.IntegerField()


class Order(models.Model):
    CHOICES = (
        ('Checkout', 'Checkout'),
        ('Pending', 'Pending'),
        ('Paid', 'Paid'),
        ('TransferPending', 'TransferPending'),
        ('Delivered', 'Delivered'),
    )

    items = models.ManyToManyField(OrderItem)
    customer = models.ForeignKey(Customer, verbose_name=_('customer'), on_delete=models.PROTECT)
    address = models.ForeignKey(Address, verbose_name=_('address'), on_delete=models.PROTECT)
    description = models.TextField(_('description'), null=True, blank=True)
    status = models.CharField(_('status'), max_length=30, choices=CHOICES, default='Checkout')
    total_price = models.CharField(_('total price'), max_length=30)
    date_created = models.DateTimeField(verbose_name=_('date created'), auto_now_add=True)
    date_updated = models.DateTimeField(verbose_name=_('date updated'), auto_now=True)


class Transfer(models.Model):
    first_name = models.CharField(_('first name'), max_length=200)
    last_name = models.CharField(_('last name'), max_length=200)
    phone_number = models.CharField(_('phone number'), max_length=200)
    vehicle = models.CharField(_('vehicle'), max_length=200)
    order = models.ForeignKey(Order, verbose_name=_('order'), on_delete=models.PROTECT)
    price = models.CharField(_('price'), max_length=200)
    status = models.CharField(_('status'), max_length=200)


