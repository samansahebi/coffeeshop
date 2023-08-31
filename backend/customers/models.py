from django.db import models
from users.models import User
from django.utils.translation import gettext_lazy as _


class Province(models.Model):
    title = models.CharField(_('title'), max_length=50)

    def __str__(self):
        return self.title


class City(models.Model):
    title = models.CharField(_('title'), max_length=50)
    province = models.ForeignKey(Province, verbose_name=_('province'), on_delete=models.PROTECT)

    def __str__(self):
        return self.title


class Address(models.Model):
    title = models.CharField(_('title'), max_length=50)
    city = models.ForeignKey(City, verbose_name=_('city'), on_delete=models.PROTECT)
    province = models.ForeignKey(Province, verbose_name=_('province'), on_delete=models.PROTECT)
    address = models.CharField(_('address'), max_length=255)
    postal_code = models.CharField(_('postal code'), max_length=50)

    def __str__(self):
        return f'{self.title}'


class Customer(models.Model):
    user = models.ForeignKey(User, verbose_name=_('user'), on_delete=models.PROTECT)
    first_name = models.CharField(_('first name'), max_length=50, null=True, blank=True)
    last_name = models.CharField(_('last name'), max_length=50, null=True, blank=True)
    email = models.EmailField(_('email'), max_length=200, null=True, blank=True)
    address = models.ManyToManyField(Address, verbose_name=_('address'))

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

