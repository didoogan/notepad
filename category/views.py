from rest_framework import generics

from .models import Category
from .serializers import CategorySerializer, SimpleCategorySerializer
from rest_framework.permissions import IsAuthenticated


class CategoryList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = SimpleCategorySerializer


class CategoryRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()
    # permission_classes = (IsAuthenticated, )

    # def get_queryset(self):
    #     category_id = self.kwargs.get('pk', False)
    #     category = Category.objects.filter(id=category_id)
    #     return category




