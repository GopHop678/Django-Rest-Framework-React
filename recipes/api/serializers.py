from rest_framework import serializers
from .models import Recipe, Category


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ['id', 'recipe_name', 'category', 'ingredients', 'instructions']
        read_only_fields = ['slug']


class CategorySerializer(serializers.ModelSerializer):
    recipes = RecipeSerializer(many=True)

    class Meta:
        model = Category
        fields = ['id', 'category_name', 'description', 'recipes', 'slug']
        # read_only_fields = ['slug']
