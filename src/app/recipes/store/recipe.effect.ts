import { Effect, Actions } from "@ngrx/effects";
import { HttpClient, HttpRequest } from "@angular/common/http";
import { Recipe } from "../recipe.model";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import * as RecipeActions from './recipe.action'
import * as fromRecipe from './recipe.reducer';

import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class RecipeEffects {

    @Effect()
    recipeFetch = this.action$
        .ofType(RecipeActions.FETCH_RECIPES)
        .switchMap((action: RecipeActions.FetchRecipes) => {
            return this.httpClient.get<Recipe[]>('https://ng-recipe-book-online.firebaseio.com/recipes.json',
                {
                    observe: 'body',
                    responseType: 'json'
                })
        })
        .map(
            (recipes) => {
                for (let recipe of recipes) {
                    if (!recipe['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                return {
                    type: RecipeActions.SET_RECIPE,
                    payload: recipes
                };
            }
        );

    @Effect({dispatch:false})
    recipeStore = this.action$
            .ofType(RecipeActions.STORE_RECIPES)
            .withLatestFrom(this.store.select('recipes'))
            .switchMap(
                ([action,state]) => {
                    const req = new HttpRequest('put', 'https://ng-recipe-book-online.firebaseio.com/recipes.json', 
                    state.recipes, { reportProgress: true});
                    return this.httpClient.request(req);
                }
            )

    constructor(private action$: Actions, private httpClient: HttpClient,private store : Store<fromRecipe.FeatureState>) { }
}