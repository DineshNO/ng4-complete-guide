import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/Rx'
import { Authservice } from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient,
    private recipeService: RecipeService,
    private authService: Authservice) { }

  storeRecipe() {
    const token = this.authService.getToken();
    return this.http.put('https://ng-recipe-book-online.firebaseio.com/recipes.json?auth=' + token,
      this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();
    this.http.get<Recipe[]>('https://ng-recipe-book-online.firebaseio.com/recipes.json?auth=' + token)
      .map(
        recipes => {
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe((recipes) => {
        this.recipeService.setRecipes(recipes);
      });
  }

}
