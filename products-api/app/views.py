from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Product, Category
from app.serializers import CategorySerializer, ProductSerializer


@csrf_exempt
def categories(request):
    if request.method == 'GET':
        get = Category.objects.all()
        serializer = CategorySerializer(get, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        serializer = CategorySerializer(data=request.body)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse({'error': serializer.errors})


@csrf_exempt
def products(request):
    if request.method == 'GET':
        get = Product.objects.all()
        serializer = ProductSerializer(get, many=True)
        return JsonResponse(serializer.data, safe=False)


@csrf_exempt
def category(request, id):
    try:
        c = Category.objects.get(id=id)
    except Exception as e:
        return JsonResponse({"error": str(e)}, safe=False)

    if request.method == 'GET':
        serializer = CategorySerializer(c)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        serializer = CategorySerializer(instance=c, data=request.body)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse({'error': serializer.errors})

    elif request.method == 'DELETE':
        c.delete()
        return JsonResponse({'deleted': True})


@csrf_exempt
def product(request, id):
    try:
        p = Product.objects.get(id=id)
    except Exception as e:
        return JsonResponse({"!ERROR": str(e)}, safe=False)

    if request.method == 'GET':
        serializer = ProductSerializer(p)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        serializer = ProductSerializer(instance=p, data=request.body)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse({'error': serializer.errors})

    elif request.method == 'DELETE':
        p.delete()
        return JsonResponse({'deleted': True})


@csrf_exempt
def category_product(request, id):
    if request.method == 'GET':
        get = Product.objects.filter(category_id=id)
        serializer = ProductSerializer(get, many=True)
        return JsonResponse(serializer.data, safe=False)
