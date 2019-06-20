from rest_framework import serializers
from .models import Listings


class ListingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Listings
        fields = '__all__'

    def create(self, validated_data):
        listings = Listings(**validated_data)
        listings.save()
        return listings


class ListingDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Listings
        fields = ('price',)
