import { Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      recipeName: 'Pancakes',
      timeToCook: '30 min',
      imageUrl: './images-recipes/Pancakes.jpg',
      ingredients: ['2 eggs', '200 ml milk', '12 spoons milk', '1 stick butter']
    },
    {
      id: 'r2',
      recipeName: 'Spagetti',
      timeToCook: '45 min',
      imageUrl: 'https://en.wikipedia.org/wiki/Spaghetti_aglio_e_olio#/media/File:Aglio_e_olio.jpg',
      ingredients: ['1 pkg spagetti', '1p ground meat', 'tomato sauce', '100 g cheese']
    }
  ];
  constructor() { }
  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return{...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }
}
