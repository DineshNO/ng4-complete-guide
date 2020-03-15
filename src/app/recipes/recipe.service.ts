import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Idli', 'Indian food', 'https://cdn.pixabay.com/photo/2017/06/16/11/38/breakfast-2408818_1280.jpg',
      [new Ingredient('Rice', 1), new Ingredient('Salt', 1)]),
    // tslint:disable-next-line:max-line-length
    new Recipe('Dosa', 'Indian food', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Dosa_and_ghee.jpg/1280px-Dosa_and_ghee.jpg',
      [new Ingredient('Rice', 1), new Ingredient('Urdu dal', 1)])
  ];


  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToCart(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}