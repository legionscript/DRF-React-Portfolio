# Generated by Django 4.0.5 on 2022-07-22 19:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='work',
            name='job_title',
            field=models.CharField(default='', max_length=255),
            preserve_default=False,
        ),
    ]
