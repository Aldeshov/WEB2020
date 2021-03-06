from random import randrange

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http.response import JsonResponse

from .models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer


class CompaniesAPIView(APIView):
    def get(self, request):
        objects = Company.objects.all()
        serializer = CompanySerializer(objects, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'!ERROR': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class CompanyDetailAPIView(APIView):
    def get_object(self, id):
        try:
            return Company.objects.get(id=id)
        except Company.DoesNotExist as e:
            return Response({'!ERROR': str(e)})

    def get(self, request, company_id):
        company = self.get_object(company_id)
        serializer = CompanySerializer(company)
        return Response(serializer.data)

    def put(self, request, company_id):
        company = self.get_object(company_id)
        serializer = CompanySerializer(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'!ERROR': serializer.errors})

    def delete(self, request, company_id):
        company = self.get_object(company_id)
        company.delete()
        return Response({'deleted': True})


@api_view(['GET', 'POST'])
def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'!ERROR': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET', 'PUT', 'DELETE'])
def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = VacancySerializer(instance=vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'!ERROR': serializer.errors})

    elif request.method == 'DELETE':
        vacancy.delete()
        return Response({'deleted': True})


@api_view(['GET'])
def company_vacancies(request, company_id):
    if request.method == 'GET':
        try:
            ans = [x for x in Vacancy.objects.filter(company=Company.objects.get(id=company_id))]
            ser = VacancySerializer(ans, many=True)
            return Response(ser.data)
        except Exception as e:
            return JsonResponse({"!ERROR": str(e)}, safe=False)


@api_view(['GET'])
def top_ten(request):
    if request.method == 'GET':
        objects = Vacancy.objects.all().order_by('-salary')[:10]
        serializer = CompanySerializer(data=objects, many=True)
        return JsonResponse(serializer, safe=False)


def add_vacancies(count):
    for i in range(len(Vacancy.objects.all()), len(Vacancy.objects.all()) + count):
        r = randrange(1, 15)
        c = randrange(1, len(Company.objects.all()) + 1)
        print('--Created random (r): ' + str(r))
        print('--Created random (c): ' + str(c))
        v = Vacancy()
        print('--Created vacancy ID: ' + str(i))
        v.name = 'Vacancy ' + str(i)
        v.salary = r * 1000
        v.company = Company.objects.get(id=c)
        v.description = 'Description'
        v.save()
        print('--OK--')


def add_companies(count):
    print(len(Company.objects.all()))
    for i in range(len(Company.objects.all()), len(Company.objects.all()) + count):
        c = Company()
        print('--Created company ID: ' + str(i))
        c.name = 'Company ' + str(i)
        c.description = 'Description'
        c.address = "Address"
        c.city = 'City'
        c.save()
        print('--OK--')