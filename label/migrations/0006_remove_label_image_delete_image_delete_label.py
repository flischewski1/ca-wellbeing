# Generated by Django 4.1.4 on 2023-01-05 10:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('label', '0005_remove_label_color_label_label_choice'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='label',
            name='image',
        ),
        migrations.DeleteModel(
            name='Image',
        ),
        migrations.DeleteModel(
            name='Label',
        ),
    ]
