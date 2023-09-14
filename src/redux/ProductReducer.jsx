import { ACTION_TYPE } from "./ActionType"

const initialState = {
    products: [],
    cartData: []
}

export const ProductReducer = (state = initialState, action) => {
    // console.log('action', action);
    switch(action.type){
        case ACTION_TYPE.ADD_TO_CART:
            // console.log('action', action);
            return {...state, cartData:[...state.cartData, action.payload]}
        case ACTION_TYPE.REMOVE_FROM_CART:
            const filterProducts = state.cartData.filter((cartData) => cartData.id !== action.payload)
            return {...state, cartData: filterProducts}
        default:
            return state
    }
}