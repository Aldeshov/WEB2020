from django.db import models
from django.contrib.postgres.fields import ArrayField


class Category(models.Model):
    id = models.CharField('id', max_length=12, primary_key=True)
    name = models.TextField('name')
    link = models.CharField('link', max_length=600)

    class Meta:
        verbose_name_plural = 'Categories'


class Product(models.Model):
    id = models.CharField('id', max_length=12, primary_key=True)
    name = models.TextField('name')
    price = models.FloatField('price')
    currency = models.CharField('currency', max_length=5)
    category_id = models.ForeignKey(Category, to_field='id', on_delete=models.CASCADE)
    gallery = ArrayField(models.CharField('link photo', max_length=600))
    description = models.TextField('description')
    link = models.CharField('link', max_length=600)
