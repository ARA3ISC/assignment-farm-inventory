# Generated by Django 5.1.3 on 2024-11-12 19:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_alter_inventoryitem_quantity'),
    ]

    operations = [
        migrations.AlterField(
            model_name='inventoryitem',
            name='unit',
            field=models.CharField(max_length=10),
        ),
    ]
