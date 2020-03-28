import { Ingredient } from '../../shared/Ingredient.model';
import * as ShoppingListActions from './shopping-list.action';

export interface State {
    ingredients: Ingredient[],
    editedIngredient: Ingredient,
    editedIngredientIndex: number
}

const initialState: State = {
    ingredients: [
        new Ingredient('Apple', 4),
        new Ingredient('Tomato', 2)
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
}

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
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
            ingredients[state.editedIngredientIndex] = updatedIngredient;
            return {
                ...state,
                ingredients: ingredients
            }
        case ShoppingListActions.DELETE_INGREDIENT:
            const oldIngredients = [...state.ingredients]
            oldIngredients.splice(state.editedIngredientIndex, 1);
            return {
                ...state,
                ingredients: oldIngredients
            }
        case ShoppingListActions.START_EDIT:
            const editedIngredient = { ...state.ingredients[action.payload] }
            return {
                ...state,
                editedIngredientIndex: action.payload,
                editedIngredient: editedIngredient
            }
        case ShoppingListActions.STOP_EDIT:
            return {
                ...state,
                editedIngredientIndex: -1,
                editedIngredient: null
            }
        default:
            return state;
    }


}