from django.db import models
from shop.models import Product, ProductUnit
from customers.models import Customer, Address


class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.PROTECT)
    unit = models.ForeignKey(ProductUnit, on_delete=models.PROTECT)
    count = models.IntegerField()
    status = models.CharField(max_length=20)
    description = models.CharField(max_length=200)


class Order(models.Model):
    items = models.ManyToManyField(OrderItem)
    customer = models.ForeignKey(Customer, on_delete=models.PROTECT)
    address = models.ForeignKey(Address, on_delete=models.PROTECT)
    status = models.CharField(max_length=30)
    total_price = models.CharField(max_length=30)
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)


class Transfer(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=200)
    vehicle = models.CharField(max_length=200)
    order = models.ForeignKey(Order, on_delete=models.PROTECT)
    price = models.CharField(max_length=200)
    status = models.CharField(max_length=200)


