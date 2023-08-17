from django.urls import path
from .views import CreateCustomer


urlpatterns = [
    path('login', CreateCustomer.as_view()),
    path('refresh', CreateCustomer.as_view()),
    path('', CreateCustomer.as_view()),
]
