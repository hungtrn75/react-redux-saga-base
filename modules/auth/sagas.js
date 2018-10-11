import { takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import { registerAuth, loginAuth, refreshAuth } from './api';
import * as Types from './types'
import { recLoginAuth } from './actions';
import { setCookie, removeCookie } from './../../utils/cookie';

function* callRegisterAuth(payload) {
    try {
        let user = yield call(registerAuth, payload.data);
        yield call(payload.router.push, '/auth/login');
    } catch (e) {
        console.log(e);
    }
}

export function* registerAuthSaga() {
    yield takeEvery(Types.REQUEST_REGISTER_AUTH, callRegisterAuth);
}

function* callLoginAuth(payload) {
    try {
        let user = yield call(loginAuth, payload.data);
        if (user.data) {
            let token = user.data.token;
            setCookie("token", token);
            yield put(recLoginAuth(token));
            yield call(payload.router.push, '/');
        }
    } catch (e) {
        console.log(e);
    }
}

export function* loginAuthSaga() {
    yield takeEvery(Types.REQUEST_LOGIN_AUTH, callLoginAuth);
}

function* callReAuthenticate(payload) {
    try {
        yield put(recLoginAuth(payload));
    } catch (e) {
        console.log(e.message);
    }
}

export function* reAuthenticateSaga() {
    yield takeEvery(Types.RE_REQUEST_LOGIN_AUTH, callReAuthenticate);
}

function* callLogoutAuthenticate(payload) {
    try {
        removeCookie("token");
        yield put(recLoginAuth(null));
    } catch (e) {
        console.log(e.message);
    }
}

export function* logoutAuthSaga() {
    yield takeEvery(Types.REQUEST_LOGOUT_AUTH, callLogoutAuthenticate);
}
