from rest_framework import serializers
from .models import InventoryItem

class ListOfItemsSerializer(serializers.ModelSerializer):

	class Meta:
		model = InventoryItem
		fields = '__all__'



class AddItemsSerializer(serializers.ModelSerializer):

	class Meta:
		model = InventoryItem
		fields = ('name', 'quantity', 'unit', 'img_url')
