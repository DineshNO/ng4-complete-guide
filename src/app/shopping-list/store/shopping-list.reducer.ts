import { Ingredient } from '../../shared/Ingredient.model';
import * as ShoppingListActions from './shopping-list.action';

export interface AppState{
    shoppingList : State
}

export interface State {
    ingredients: Ingredient[],
    editedIngredient: Ingredient,
    editedIngredientIndex: number
}

const initialState : State = {
    ingredients: [
        new Ingredient('Apple', 4),
        new Ingredient('Tomato', 2)
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
}

export function ShoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...<Ingredient[]>action.payload]
            }
        case ShoppingListActions.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[action.payload['index']]
            const updatedIngredient = {
                ...ingredient,
                ...action.payload['ingredient']
            };
            const ingredients = [...state.ingredients]
            ingredients[action.payload['index']] = updatedIngredient;
            return {
                ...state,
                ingredients: ingredients
            }
        case ShoppingListActions.DELETE_INGREDIENT:
            const oldIngredients = [...state.ingredients]
            oldIngredients.splice(<number>action.payload, 1);
            return {
                ...state,
                ingredients: oldIngredients
            }
        default:
            return state;
    }


}