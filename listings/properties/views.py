from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework import status
from rest_framework.response import Response
from rest_framework import filters
from .models import Listings
from .serializers import ListingSerializer, ListingDetailSerializer


class ListingView(generics.ListCreateAPIView):

    queryset = Listings.objects.all()
    serializer_class = ListingSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('subtype',)


class ListingDetailView(APIView):

    def get_queryset(self, pk):
        return get_object_or_404(Listings, id=pk)

    def get(self, request, pk):
        """
        Return properties detail.
        """
        listings = self.get_queryset(pk)
        serializer = ListingDetailSerializer(listings)
        return Response(serializer.data, status=status.HTTP_200_OK)
