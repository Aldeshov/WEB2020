from django.shortcuts import render
import json
from django.http.response import HttpResponse, JsonResponse
from .models import Product, Category
from app.serializers import CategorySerializer

from django.views.decorators.csrf import csrf_exempt


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


@csrf_exempt
def categories(request):
    if request.method == 'GET':
        get = Category.objects.all()
        serializer = CategorySerializer(get, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        request_body = json.loads(request.body)
        serializer = CategorySerializer(data=request_body)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse({'error': serializer.errors})


def products(request):
    ans = [to_json_product(n) for n in Product.objects.all()]
    return JsonResponse(ans, safe=False)


@csrf_exempt
def category(request, id):
    try:
        ans = Category.objects.get(id=id)
    except Exception as e:
        return JsonResponse({"error": str(e)}, safe=False)

    if request.method == 'GET':
        serializer = CategorySerializer(ans)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        request_body = json.loads(request.body)
        serializer = CategorySerializer(instance=ans, data=request_body)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse({'error': serializer.errors})

    elif request.method == 'DELETE':
        ans.delete()
        return JsonResponse({'deleted': True})


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
