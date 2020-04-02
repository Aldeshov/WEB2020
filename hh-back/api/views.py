from django.shortcuts import render
from django.http.response import HttpResponse, JsonResponse
from .models import Company, Vacancy
from random import *


def to_json_company(item):
    return {
        "name": item.name,
        "description": item.description,
        "city": item.city,
        "address": item.address
    }


def to_json_vacancy(item):
    return {
        "name": item.name,
        "description": item.description,
        "salary": item.salary,
        "company": to_json_company(item.company)
    }


def companies(request):
    ans = [to_json_company(n) for n in Company.objects.all()]
    return JsonResponse(ans, safe=False)


def company(request, id):
    try:
        ans = to_json_company(Company.objects.get(id=id))
        return JsonResponse(ans, safe=False)
    except Exception as e:
        return JsonResponse({"error": str(e)})


def company_vacancies(request, id):
    try:
        ans = [to_json_vacancy(x) for x in Vacancy.objects.filter(company=Company.objects.get(id=id))]
        return JsonResponse(ans, safe=False)
    except Exception as e:
        return JsonResponse({"!ERROR": str(e)}, safe=False)


def vacancies(request):
    try:
        ans = [to_json_vacancy(n) for n in Vacancy.objects.all()]
        return JsonResponse(ans, safe=False)
    except Exception as e:
        return JsonResponse({"!ERROR": str(e)}, safe=False)


def vacancy(request, id):
    try:
        ans = Vacancy.objects.get(id=id)
        return JsonResponse(to_json_vacancy(ans), safe=False)
    except Exception as e:
        return JsonResponse({"error": str(e)})


def sort(item):
    try:
        return int(item['salary'])
    except KeyError:
        return 0


def top_ten(request):
    ans = [to_json_vacancy(x) for x in Vacancy.objects.all()]
    ans.sort(key=sort, reverse=True)
    ten = []
    for i in range(0, 10):
        ten.insert(i, ans[i])
    return JsonResponse(ten, safe=False)


# Adding Companies & Vacancies
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
