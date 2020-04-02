from django.urls import path

from api.views import companies, company, company_vacancies, vacancies, vacancy, top_ten

urlpatterns = [
    path('companies/', companies),
    path('vacancies/', vacancies),
    path('companies/<int:id>', company),
    path('vacancies/<int:id>/', vacancy),
    path('companies/<int:id>/vacancies', company_vacancies),
    path('vacancies/top-ten', top_ten),
]
