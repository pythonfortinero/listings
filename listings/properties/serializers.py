from rest_framework import serializers
from .models import Listings


class ListingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Listings
        fields = (
            'id', 'title', 'location', 'price_per_square',
            'price', 'subtype', 'total_area',
        )
        read_only_fields = ('price_per_square',)

    def create(self, validated_data):
        listings = Listings(**validated_data)
        listings.save()
        return listings


class ListingDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Listings
        fields = ('price_per_square',)
