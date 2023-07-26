from django.db import models
from ..shop.models import Products
from ..customers.models import Customer


class Bill(models.Model):
    product = models.ForeignKey(Products, on_delete=models.PROTECT)
    customer = models.ForeignKey(Customer, on_delete=models.PROTECT)
    count = models.IntegerField()
    is_paid = models.BooleanField(default=False)
    date = models.DateTimeField(auto_now_add=True)


