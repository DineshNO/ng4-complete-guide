import { Ingredient } from "../../shared/Ingredient.model";

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';


export class AddIngredient {
    readonly type: string = ADD_INGREDIENT;
    constructor(public payload: Ingredient) { }
}
export class AddIngredients {
    readonly type: string = ADD_INGREDIENTS;
    constructor(public payload: Ingredient[]) { }
}
export class UpdateIngredient {
    readonly type: string = UPDATE_INGREDIENT;
    constructor(public payload: { ingredient: Ingredient }) { }
}
export class DeleteIngredient {
    readonly type: string = DELETE_INGREDIENT;
    payload: any
}
export class StartEdit {
    readonly type: string = START_EDIT;
    constructor(public payload : number) { }
}

export class StopEdit {
    readonly type: string = STOP_EDIT;
    payload: any
}


export type ShoppingListActions = AddIngredient | AddIngredients | UpdateIngredient | DeleteIngredient | StartEdit | StopEdit