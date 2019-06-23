from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import reverse
from properties.models import Listings


class ListingTestCase(APITestCase):

    fixtures = ['properties/fixtures/listings.json', ]

    def test_listings_list(self):
        url = reverse('properties')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_listings_search(self):
        url = reverse('properties')
        response = self.client.get(f'{url}?search=Mor', format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_new_property(self):
        url = reverse('properties')
        response = self.client.post(url, format='json', data={
            "title": "Moradia no centro histórico da cidade",
            "location": "Vila do Conde - Vila do Conde - centro histórico",
            "subtype": "Moradia",
            "price": "296000",
            "total_area": 222.0
        })
        data = response.json()
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_search_property_by_id(self):
        url = reverse('properties_detail', kwargs={'pk': '6481583'})
        response = self.client.get(url, format='json')
        data = response.json()
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(data['price_per_square'], 1084)
