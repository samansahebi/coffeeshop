from django.urls import path
from .views import CreateCustomer, CreateAddress, CustomerInfo


urlpatterns = [
    path('create-customer', CreateCustomer.as_view()),
    path('customer-info', CustomerInfo.as_view()),
    path('create-address', CreateAddress.as_view()),
]
