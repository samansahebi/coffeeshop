from django.db import models


class Address(models.Model):
    city = models.CharField(max_length=50)
    province = models.CharField(max_length=50)
    address = models.CharField(max_length=255)
    postal_code = models.CharField(max_length=50)

    def __str__(self):
        return self.city


class Customer(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=200)
    address = models.ForeignKey(Address, on_delete=models.CASCADE)
    postal_code = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

