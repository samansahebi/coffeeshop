from django.urls import path
from .views import CreateOrder, OrderList, CreateOrderItem, GetCheckout


urlpatterns = [
    path('create-order-item', CreateOrderItem.as_view()),
    path('create-order', CreateOrder.as_view()),
    path('orders-list', OrderList.as_view()),
    path('get-checkout', GetCheckout.as_view()),
]
