from django.urls import path
from .views import ListProducts, ListCategory, ListProductUnit, ListProvider, CreateProduct, CreateProvider


urlpatterns = [
    path('product-list', ListProducts.as_view()),
    path('product-unit-list', ListProductUnit.as_view()),
    path('category-list', ListCategory.as_view()),
    path('provider-list', ListProvider.as_view()),
]
