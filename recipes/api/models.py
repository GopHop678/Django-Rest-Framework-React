from django.db import models


class Category(models.Model):
    category_name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100, unique=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.category_name


class Recipe(models.Model):
    category = models.ForeignKey(Category, related_name='recipes', on_delete=models.DO_NOTHING)
    recipe_name = models.CharField(max_length=200)
    ingredients = models.TextField(blank=True, null=True)
    instructions = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.recipe_name
