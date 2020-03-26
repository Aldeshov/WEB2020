from django.urls import path

from app.views import categories, products, category, product, category_product

urlpatterns = [
    path('products/', products),
    path('categories/', categories),
    path('products/<str:id>', product),
    path('categories/<str:id>/', category),
    path('categories/<str:id>/products', category_product)
]
