from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from .serializers import OrderSerializer
from .models import Orders


class Orders(APIView):
    queryset = Orders.objects.all()
    serializer_classes = OrderSerializer
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = self.serializer_classes(self.queryset)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class CreateOrder(APIView):
    queryset = Orders.objects.all()
    serializer_classes = OrderSerializer
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = self.serializer_classes(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
