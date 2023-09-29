from rest_framework import serializers
from .models import Order, PackageType


class OrderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order
        fields = '__all__'


class PackageTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = PackageType
        fields = '__all__'
