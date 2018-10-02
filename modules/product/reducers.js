import { RECEIVE_FETCH_PRODUCTS } from "./types";

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_FETCH_PRODUCTS:
            return action.data.data;
        default:
            return state;
    }
}
