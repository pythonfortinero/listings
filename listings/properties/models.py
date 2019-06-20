# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Listings(models.Model):
    id = models.TextField(blank=True, null=False, primary_key=True)  # This field type is a guess.
    title = models.TextField(blank=True, null=True)
    location = models.TextField(blank=True, null=True)
    subtype = models.TextField(blank=True, null=True)
    price = models.TextField(blank=True, null=True)  # This field type is a guess.
    total_area = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'listings'
