import { RECEIVE_FETCH_PRODUCTS, RECEIVE_EDIT_PRODUCT } from "./types";

const initialState = {
    products: [],
    product: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_FETCH_PRODUCTS:
            return {
                ...state,
                products: action.products.data
            }
        case RECEIVE_EDIT_PRODUCT:
            return {
                ...state,
                product: action.product.data
            }
        default:
            return state;
    }
}
