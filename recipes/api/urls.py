from django.urls import path
from .views import *

urlpatterns = [
    path('recipes', RecipesAPIView.as_view(), name="recipes"),
    path('categories', CategoriesAPIView.as_view(), name="categories"),
]
