from rest_framework.views import APIView
from .models import Product, ProductUnit, Category, Provider
from .serializers import ProductSerializer, ProductUnitSerializer, ProviderSerializer, CategorySerializer


class ListProducts(APIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get(self, request):
        pass


class GetProduct(APIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get(self, request, slug):
        pass


class ListProductUnit(APIView):
    queryset = ProductUnit.objects.all()
    serializer_class = ProductUnitSerializer

    def get(self, request):
        pass


class ListCategory(APIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def get(self, request):
        pass


class ListProvider(APIView):
    queryset = Provider.objects.all()
    serializer_class = ProviderSerializer

    def get(self, request):
        pass


class CreateProvider(APIView):
    queryset = Provider.objects.all()
    serializer_class = ProviderSerializer

    def post(self, request):
        pass


class CreateCategory(APIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def post(self, request):
        pass


class CreateProduct(APIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def post(self, request):
        pass
