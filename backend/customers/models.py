from django.db import models


class Province(models.Model):
    title = models.CharField(max_length=50)

    def __str__(self):
        return self.title


class City(models.Model):
    title = models.CharField(max_length=50)
    province = models.CharField(max_length=50)

    def __str__(self):
        return self.title


class Address(models.Model):
    title = models.CharField(max_length=50)
    city = models.ForeignKey(City, on_delete=models.PROTECT)
    province = models.ForeignKey(Province, on_delete=models.PROTECT)
    address = models.CharField(max_length=255)
    postal_code = models.CharField(max_length=50)

    def __str__(self):
        return self.title


class Customer(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(max_length=200)
    address = models.ForeignKey(Address, on_delete=models.CASCADE)
    postal_code = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

