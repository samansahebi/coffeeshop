from django.urls import path
from .views import CreateOrder, OrderList, GetCheckout, GetPackageTypes


urlpatterns = [
    path('create-order', CreateOrder.as_view()),
    path('orders-list', OrderList.as_view()),
    path('get-checkout', GetCheckout.as_view()),
    path('get-package-types', GetPackageTypes.as_view()),
]
