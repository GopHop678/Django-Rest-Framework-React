from django.shortcuts import render
from rest_framework import generics
from django.views.generic import ListView
from .models import Recipe, Category
from .serializers import *


class RecipesAPIView(generics.ListAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

    def get_queryset(self):
        recipes = Recipe.objects.all()
        slug = self.request.GET.get('slug')
        recipe_id = self.request.GET.get('id')
        if recipe_id:
            recipes = recipes.filter(id=recipe_id)
        if slug:
            recipes = recipes.filter(category__slug=slug)
        return recipes


class CategoriesAPIView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
