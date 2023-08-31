from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework import status, exceptions
from .serializers import CustomerSerializer, AddressSerializer
from .models import Customer, Address


class CreateCustomer(APIView):
    queryset = Customer.objects.all()
    serializer_classes = CustomerSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = self.serializer_classes(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class CustomerInfo(APIView):
    queryset = Customer.objects.all()
    serializer_classes = CustomerSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request):
        query = self.queryset.get(user_id=request.user.id)
        serializer = self.serializer_classes(query)
        return Response(serializer.data, status=status.HTTP_200_OK)


class UpdateCustomerInfo(APIView):
    queryset = Customer.objects.all()
    serializer_classes = CustomerSerializer
    permission_classes = [IsAuthenticated]

    def put(self, request):
        query = self.queryset.get(user_id=request.user.id)
        serializer = self.serializer_classes(query)
        return Response(serializer.data, status=status.HTTP_200_OK)


class CreateAddress(APIView):
    queryset = Address.objects.all()
    serializer_classes = AddressSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = self.serializer_classes(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
