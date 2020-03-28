import { Ingredient } from "../../shared/Ingredient.model";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';

export class AddIngredient {
    readonly type: string = ADD_INGREDIENT;
    constructor(public payload: Ingredient) { }
}
export class AddIngredients {
    readonly type: string = ADD_INGREDIENTS;
    constructor(public payload: Ingredient[]) { }
}


export type ShoppingListActions = AddIngredient | AddIngredients