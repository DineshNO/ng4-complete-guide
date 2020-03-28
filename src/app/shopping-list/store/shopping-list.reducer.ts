import { Ingredient } from '../../shared/Ingredient.model';
import * as ShoppingListActions from './shopping-list.action';

const initialState = {
    ingredients: [
        new Ingredient('Apple', 4),
        new Ingredient('Tomato', 2)
    ]
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
        default:
            return state;
    }


}