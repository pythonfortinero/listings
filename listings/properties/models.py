import math
from django.db import models


class Listings(models.Model):
    id = models.AutoField(null=False, primary_key=True)  # This field type is a guess.
    title = models.TextField(blank=True, null=True)
    location = models.TextField(blank=True, null=True)
    subtype = models.TextField(blank=True, null=True)
    price = models.TextField(blank=True, null=True)  # This field type is a guess.
    total_area = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'listings'

    @property
    def price_per_square(self):
        try:
            price_per_square = math.ceil(float(self.price) / self.total_area)
        except ZeroDivisionError:
            price_per_square = 0
        return price_per_square
