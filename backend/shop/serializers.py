from rest_framework import serializers
from .models import Provider, Category, Product, ProductUnit


class ProviderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Provider
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ProductUnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductUnit
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    unit = ProductUnitSerializer()

    class Meta:
        model = Product
        fields = '__all__'
