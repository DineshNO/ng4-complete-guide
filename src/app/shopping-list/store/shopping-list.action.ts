import { Ingredient } from "../../shared/Ingredient.model";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class AddIngredient {
    readonly type: string = ADD_INGREDIENT;
    constructor(public payload: Ingredient) { }
}

export type ShoppingListActions = AddIngredient