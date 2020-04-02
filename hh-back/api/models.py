from django.db import models


class Company(models.Model):
    name = models.CharField('name', max_length=120)
    description = models.TextField('description')
    city = models.CharField('city', max_length=120)
    address = models.TextField('address')

    class Meta:
        verbose_name_plural = 'Companies'


class Vacancy(models.Model):
    name = models.CharField('name', max_length=120)
    description = models.TextField('description')
    salary = models.FloatField('salary')
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = 'Vacancies'
