from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from .serializers import OrderSerializer, PackageTypeSerializer
from .models import Order, PackageType


class OrderList(APIView):
    queryset = Order.objects.all()
    serializer_classes = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = self.serializer_classes(self.queryset.filter(customer=request.user.customer).exclude(status='Checkout'), many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class GetPackageTypes(APIView):
    queryset = PackageType.objects.all()
    serializer_classes = PackageTypeSerializer

    def get(self, request):
        serializer = self.serializer_classes(self.queryset.all(), many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class GetCheckout(APIView):
    queryset = Order.objects.all()
    serializer_classes = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = self.serializer_classes(self.queryset.filter(customer=request.user.customer, status='Checkout'), many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


class CreateOrder(APIView):
    queryset = Order.objects.all()
    serializer_classes = OrderSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = self.serializer_classes(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
