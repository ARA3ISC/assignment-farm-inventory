from django.db import models

# Create your models here.
class InventoryItem(models.Model):
	name = models.CharField(max_length=20, blank=False, null=False)
	quantity = models.IntegerField()
	unit = models.CharField(max_length=10)
	img_url = models.CharField(max_length=255, blank=True, default='https://www.contentviewspro.com/wp-content/uploads/2017/07/default_image.png')
	added_on = models.DateField(auto_now=True)

	def __str__(self):
		return self.name
