from rest_framework import serializers
from .models import Customer, Address


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'


class CustomerSerializer(serializers.ModelSerializer):
    address = AddressSerializer()
    phone_number = serializers.CharField(source='user.phone_number', read_only=True)

    class Meta:
        model = Customer
        fields = '__all__'
