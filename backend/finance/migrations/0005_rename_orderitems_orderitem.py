# Generated by Django 4.2.3 on 2023-09-29 17:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0006_alter_offercode_offer'),
        ('finance', '0004_orderitems_alter_order_description_delete_orderitem_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='OrderItems',
            new_name='OrderItem',
        ),
    ]