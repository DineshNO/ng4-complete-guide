import { Recipe } from "../recipe.model";
import * as RecipeActions from "./recipe.action";
import * as fromApp from "../../store/app.reducer";
import { Ingredient } from "../../shared/Ingredient.model";

export interface FeatureState extends fromApp.AppState {
    recipes: State
}

export interface State {
    recipes: Recipe[]
}

export const initialState = {
    recipes: [
        new Recipe(
            'test',
            'test',
            'https://upload.wikimedia.org/wikipedia/commons/6/61/Pizza_Prosciutto.jpg',
            [
                new Ingredient('Rice', 15)
            ])
    ]
}

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
    switch (action.type) {
        case RecipeActions.SET_RECIPE:
            return {
                ...state,
                recipes: [...action.payload]
            }
        case RecipeActions.ADD_RECIPE:
            return {
                ...state,
                recipes: [...state.recipes, action.payload]
            }
        case RecipeActions.UPDATE_RECIPE:
            const index = action.payload['index'];
            const recipe = state.recipes[index];
            const updatedRecipe = {
                ...recipe,
                ...action.payload.updatedRecipe
            }
            const recipes = [...state.recipes]
            recipes[action.payload.index] = updatedRecipe
            return {
                ...state,
                recipes: recipes
            }
        case RecipeActions.DELETE_RECIPE:
            const oldRecipes = [...state.recipes]
            oldRecipes.splice(action.payload['index'], 1)
            return {
                ...state,
                recipes: oldRecipes
            }
        default:
            return state;
    }
}