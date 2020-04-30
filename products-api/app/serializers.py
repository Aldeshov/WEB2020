from rest_framework import serializers

from app.models import Category, Product


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'link')


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name', 'price', 'name', 'currency', 'category_id', 'gallery', 'description', 'link')
