from rest_framework.views import APIView
from .models import Product


class ListProducts(APIView):
    queryset = Product

    def get(self, request):
        pass


class GetProduct(APIView):
    def get(self, request, slug):
        pass


class ListProductUnit(APIView):
    def get(self, request):
        pass


class ListCategory(APIView):
    def get(self, request):
        pass


class ListProvider(APIView):
    def get(self, request):
        pass


class CreateProvider(APIView):
    def post(self, request):
        pass


class CreateCategory(APIView):
    def post(self, request):
        pass


class CreateProduct(APIView):
    def post(self, request):
        pass
