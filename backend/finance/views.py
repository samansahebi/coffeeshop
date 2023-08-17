from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from .serializers import OrderSerializer
from .models import Order, OrderItem


class OrderList(APIView):
    queryset = Order.objects.all()
    serializer_classes = OrderSerializer
    permission_classes = [AllowAny]

    def get(self, request):
        serializer = self.serializer_classes(self.queryset)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class CreateOrder(APIView):
    queryset = Order.objects.all()
    serializer_classes = OrderSerializer
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = self.serializer_classes(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class CreateOrderItem(APIView):
    queryset = OrderItem.objects.all()
    serializer_classes = OrderSerializer
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = self.serializer_classes(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
