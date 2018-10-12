import * as Types from './types';

export function reqRegisterAuth (data, router) {
    return {
        type: Types.REQUEST_REGISTER_AUTH,
        data,
        router
    }
}

export function reqLoginAuth (data, router) {
    return {
        type: Types.REQUEST_LOGIN_AUTH,
        data,
        router
    }
}

export function recLoginAuth (decoded) {
    return {
        type: Types.RECEIVE_LOGIN_AUTH,
        decoded
    }
}

export function reRecLoginAuth (token) {
    return {
        type: Types.RE_REQUEST_LOGIN_AUTH,
        token
    }
}

export function reqLogoutAuth () {
    return {
        type: Types.REQUEST_LOGOUT_AUTH
    }
}
