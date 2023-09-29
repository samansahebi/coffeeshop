from django.contrib import admin
from .models import OrderItem, Order, Transfer, PackageType

admin.site.register(PackageType)
admin.site.register(OrderItem)
admin.site.register(Order)
admin.site.register(Transfer)
