import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {

  constructor(private recipeService : RecipeService,
    private httpClient : HttpClient){}

  storeRecipe() {
    const req = new HttpRequest('put', 'https://ng-recipe-book-online.firebaseio.com/recipes.json', 
                  this.recipeService.getRecipes(), { reportProgress: true});
    return this.httpClient.request(req);
  }

  getRecipes() {
    this.httpClient.get<Recipe[]>('https://ng-recipe-book-online.firebaseio.com/recipes.json')
      .map(
        (recipes) => {
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
