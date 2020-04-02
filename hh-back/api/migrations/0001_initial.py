# Generated by Django 2.2.12 on 2020-04-02 14:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120, verbose_name='name')),
                ('description', models.TextField(verbose_name='description')),
                ('city', models.CharField(max_length=120, verbose_name='city')),
                ('address', models.TextField(verbose_name='address')),
            ],
            options={
                'verbose_name_plural': 'Companies',
            },
        ),
        migrations.CreateModel(
            name='Vacancy',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120, verbose_name='name')),
                ('description', models.TextField(verbose_name='description')),
                ('salary', models.FloatField(verbose_name='salary')),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Company')),
            ],
            options={
                'verbose_name_plural': 'Vacancies',
            },
        ),
    ]
