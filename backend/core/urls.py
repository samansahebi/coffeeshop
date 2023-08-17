from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('customers/', include('customers.urls')),
    path('finance/', include('finance.urls')),
    path('users/', include('users.urls')),
    path('shop/', include('shop.urls')),
]
