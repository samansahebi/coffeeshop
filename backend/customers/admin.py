from django.contrib import admin
from .models import Customer, Address, City, Province

admin.site.register(Customer)
admin.site.register(Province)
admin.site.register(City)
admin.site.register(Address)
