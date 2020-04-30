# Generated by Django 2.2.11 on 2020-04-30 11:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.CharField(max_length=12, primary_key=True, serialize=False, verbose_name='id')),
                ('name', models.TextField(verbose_name='name')),
                ('link', models.CharField(max_length=600, verbose_name='link')),
            ],
            options={
                'verbose_name_plural': 'Categories',
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.CharField(max_length=12, primary_key=True, serialize=False, verbose_name='id')),
                ('name', models.TextField(verbose_name='name')),
                ('price', models.FloatField(verbose_name='price')),
                ('currency', models.CharField(max_length=5, verbose_name='currency')),
                ('gallery', models.CharField(max_length=600, verbose_name='link photo')),
                ('description', models.TextField(verbose_name='description')),
                ('link', models.CharField(max_length=600, verbose_name='link')),
                ('category_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.Category')),
            ],
        ),
    ]
