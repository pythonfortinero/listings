from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .models import Listings
from .serializers import ListingSerializer, ListingDetailSerializer


class ListingView(APIView):

    def get_queryset(self):
        queryset = Listings.objects.all()
        subtype = self.request.query_params.get('subtype', None)
        if subtype is not None:
            queryset = queryset.filter(subtype=subtype)
        return queryset

    def get(self, request):
        """
        Return a list of all properties.
        """
        listings = self.get_queryset()
        serializer = ListingSerializer(listings, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        """
        Create properties
        """
        serializer = ListingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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
