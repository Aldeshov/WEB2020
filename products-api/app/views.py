from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse
from .models import Product, Category

def to_json_category(item):
    return {
        "id": item.id,
        "name": item.name,
        "link": item.link
    }

def to_json_product(item):
    return {
        "id": item.id,
        "name": item.name,
        "price": item.price,
        "currency": item.currency,
        "category_id": to_json_category(item.category_id),
        "gallery": item.gallery,
        "description": item.description,
        "link": item.link
    }

def categories(request):
    categories = [to_json_category(n) for n in Category.objects.all()]
    return JsonResponse(categories, safe=False)

def products(request):
    products = [to_json_product(n) for n in Product.objects.all()]
    return JsonResponse(products, safe=False)

def category(request, id):
    try:
        ans = Category.objects.get(id=id)
    except Exception as e:
        return JsonResponse({"error": str(e)}, safe=False)
    return JsonResponse(to_json_category(ans), safe=False)

def product(request, id):
    try:
        ans = Product.objects.get(id=id)
    except Exception as e:
        return JsonResponse({"!ERROR": str(e)}, safe=False)
    return JsonResponse((to_json_product(ans)), safe=False)

def category_product(request, id):
    try:
        ans = [to_json_product(x) for x in Product.objects.filter(category_id=Category.objects.get(id=id))]
        return JsonResponse(ans, safe=False)
    except Exception as e:
        return JsonResponse({"!ERROR": str(e)}, safe=False)