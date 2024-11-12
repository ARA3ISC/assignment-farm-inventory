from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import InventoryItem
from .serializers import ListOfItemsSerializer, AddItemsSerializer
from rest_framework import status
from django.shortcuts import get_object_or_404



# Create your views here.

class ItemsList(generics.ListAPIView):
	queryset = InventoryItem.objects.all()
	serializer_class = ListOfItemsSerializer

import logging as logger
class AddItem(APIView):


	def post(self, request):
		logger.error(f'\n\ndata:{request.data}\n\n')

		serializer = AddItemsSerializer(data=request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_201_CREATED)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EditItem(APIView):

	def patch(self, request, pk, *args, **kwargs):
		my_model_instance = get_object_or_404(InventoryItem, pk=pk)
		serializer = AddItemsSerializer(my_model_instance, data=request.data, partial=True)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=status.HTTP_200_OK)
		return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DeleteItem(generics.DestroyAPIView):
	queryset = InventoryItem.objects.all()
	serializer_class = AddItemsSerializer


