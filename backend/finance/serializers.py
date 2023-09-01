from rest_framework import serializers
from .models import Order, OrderItem


class OrderItemSerializer(serializers.ModelSerializer):
    title = serializers.ReadOnlyField(source='product.title', read_only=True)
    slug = serializers.ReadOnlyField(source='product.slug', read_only=True)
    price = serializers.ReadOnlyField(source='product.unit.price_per_unit', read_only=True)

    class Meta:
        model = OrderItem
        fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True)

    class Meta:
        model = Order
        fields = '__all__'
