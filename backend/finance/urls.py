from django.urls import path
from .views import CreateOrder, Orders


urlpatterns = [
    path('create', CreateOrder.as_view()),
    path('list', Orders.as_view()),
]
