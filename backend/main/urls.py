from django.urls import path, include
from .views import ItemsList, AddItem, EditItem, DeleteItem

urlpatterns = [
    path('itemsList/', ItemsList.as_view()),
    path('addItem/', AddItem.as_view()),
    path('update/<int:pk>/', EditItem.as_view()),
    path('delete/<int:pk>/', DeleteItem.as_view()),
]
