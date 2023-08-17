from django.db import models
from django.contrib.auth.models import (BaseUserManager, AbstractBaseUser)
import datetime
from django.conf import settings
from django.core.validators import RegexValidator


class UserManager(BaseUserManager):
    def create_user(self, phone_number, password=None):

        if not phone_number:
            raise ValueError('Users must have an phone number')

        if not password:
            raise ValueError('Users must have an password')

        user = self.model(
            phone_number=phone_number,
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_staffuser(self, phone_number, password):
        user = self.create_user(
            phone_number,
            password=password,
        )
        user.staff = True
        user.save(using=self._db)
        return user

    def create_superuser(self, phone_number, password):
        user = self.create_user(
            phone_number,
            password=password,
        )
        user.staff = True
        user.admin = True
        user.active = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    phone_number = models.CharField(
        verbose_name='phone number',
        max_length=255,
        unique=True,
    )
    active = models.BooleanField(default=False)
    staff = models.BooleanField(default=False)
    admin = models.BooleanField(default=False)

    USERNAME_FIELD = 'phone_number'
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
        return self.phone_number

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.staff

    @property
    def is_admin(self):
        return self.admin

    @property
    def is_active(self):
        return self.active


class OTP(models.Model):
    user = models.ForeignKey(User, on_delete=models.PROTECT())
    otp_code = models.IntegerField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)