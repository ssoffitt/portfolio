# Generated by Django 2.2.12 on 2020-06-07 14:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('alex', '0004_auto_20190919_1844'),
    ]

    operations = [
        migrations.AddField(
            model_name='attachments',
            name='type',
            field=models.CharField(choices=[('image', 'Image'), ('vidoe', 'Video')], default='image', max_length=5),
        ),
    ]