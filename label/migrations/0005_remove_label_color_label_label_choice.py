# Generated by Django 4.1.4 on 2022-12-16 09:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('label', '0004_label_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='label',
            name='color',
        ),
        migrations.AddField(
            model_name='label',
            name='label_choice',
            field=models.CharField(choices=[('bottle', 'BOTTLE'), ('bag', 'BAG')], default=123, max_length=6),
            preserve_default=False,
        ),
    ]
