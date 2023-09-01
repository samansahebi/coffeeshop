# Generated by Django 4.2.3 on 2023-08-31 15:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='quantity',
        ),
        migrations.AlterField(
            model_name='category',
            name='image',
            field=models.ImageField(upload_to='', verbose_name='image'),
        ),
        migrations.AlterField(
            model_name='category',
            name='slug',
            field=models.SlugField(verbose_name='slug'),
        ),
        migrations.AlterField(
            model_name='category',
            name='title',
            field=models.CharField(max_length=50, verbose_name='title'),
        ),
        migrations.AlterField(
            model_name='product',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='shop.category', verbose_name='category'),
        ),
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(upload_to='', verbose_name='image'),
        ),
        migrations.AlterField(
            model_name='product',
            name='provider',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='shop.provider', verbose_name='provider'),
        ),
        migrations.AlterField(
            model_name='product',
            name='slug',
            field=models.SlugField(verbose_name='slug'),
        ),
        migrations.AlterField(
            model_name='product',
            name='title',
            field=models.CharField(max_length=50, verbose_name='title'),
        ),
        migrations.AlterField(
            model_name='product',
            name='unit',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='shop.productunit', verbose_name='unit'),
        ),
        migrations.AlterField(
            model_name='productunit',
            name='price_per_unit',
            field=models.CharField(max_length=200, verbose_name='price per unit'),
        ),
        migrations.AlterField(
            model_name='productunit',
            name='title',
            field=models.CharField(max_length=200, verbose_name='title'),
        ),
        migrations.AlterField(
            model_name='provider',
            name='address',
            field=models.CharField(max_length=50, verbose_name='address'),
        ),
        migrations.AlterField(
            model_name='provider',
            name='name',
            field=models.CharField(max_length=50, verbose_name='name'),
        ),
        migrations.AlterField(
            model_name='provider',
            name='phone_number',
            field=models.CharField(max_length=50, verbose_name='phone number'),
        ),
        migrations.CreateModel(
            name='Store',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('available', models.PositiveBigIntegerField()),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='shop.product', verbose_name='product')),
            ],
        ),
    ]