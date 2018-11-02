import { RECEIVE_FETCH_PRODUCTS, RECEIVE_EDIT_PRODUCT } from "./types";
import { fromJS } from 'immutable';

const initialState = fromJS({
    products: [],
    product: null
});

export default function (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_FETCH_PRODUCTS:
            return state.merge({
                ...state,
                products: action.products.data
            })
        case RECEIVE_EDIT_PRODUCT:
            return state.merge({
                ...state,
                product: action.product.data
            })
        default:
            return state;
    }
}
