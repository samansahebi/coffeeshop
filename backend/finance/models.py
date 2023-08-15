from django.db import models
from ..shop.models import Products
from ..customers.models import Customer


class Order(models.Model):
    product = models.ForeignKey(Products, on_delete=models.PROTECT)
    customer = models.ForeignKey(Customer, on_delete=models.PROTECT)
    transfered_by = models.ForeignKey(Customer, on_delete=models.PROTECT, blank=True, null=True)
    count = models.IntegerField()
    status = models.CharField(max_length=30)
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)


