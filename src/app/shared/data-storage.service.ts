import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/Rx'
import { Authservice } from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: Authservice) { }

  storeRecipe() {
    const token = this.authService.getToken();
    const req = new HttpRequest('put', 'https://ng-recipe-book-online.firebaseio.com/recipes.json', 
                  this.recipeService.getRecipes(), { reportProgress: true});
    return this.httpClient.request(req);
  }

  getRecipes() {
    const token = this.authService.getToken();
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
