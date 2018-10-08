import { RECEIVE_LOGIN_AUTH } from "./types";
import { getCookie } from './../../utils/cookie';

const initialState = {
    isAuthenticated: getCookie('token') ? true : false,
    decoded: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_LOGIN_AUTH:
            return {
                ...state,
                isAuthenticated: action.decoded ? true : false,
                decoded: action.decoded
            }
        default:
            return state;
    }
}
