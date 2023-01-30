# Generated by Django 4.1.4 on 2022-12-16 09:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('label', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='MyModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('color', models.CharField(choices=[('bottle', 'BOTTLE'), ('bag', 'BAG')], default='green', max_length=6)),
            ],
        ),
        migrations.AlterField(
            model_name='image',
            name='title',
            field=models.CharField(max_length=100),
        ),
    ]
