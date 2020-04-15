from django.urls import path

from api.views import CompaniesAPIView, CompanyDetailAPIView, top_ten, vacancy_list, vacancy_detail, company_vacancies
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('login/', obtain_jwt_token),
    path('companies/', CompaniesAPIView.as_view()),
    path('vacancies/', vacancy_list),
    path('companies/<int:company_id>/', CompanyDetailAPIView.as_view()),
    path('vacancies/<int:vacancy_id>/', vacancy_detail),
    path('companies/<int:company_id>/vacancies', company_vacancies),
    path('vacancies/top-ten', top_ten),
]
