import { RECEIVE_LOGIN_AUTH } from "./types";
import { getCookie } from './../../utils/cookie';

const initialState = {
    isAuthenticated: getCookie('token') ? true : false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_LOGIN_AUTH:
            return {
                isAuthenticated: action.decoded ? true : false
            }
        default:
            return state;
    }
}
