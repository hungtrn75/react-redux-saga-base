import Http from './../../utils/Http';
import { Auth } from './../../constants/ApiRequest';

export function registerAuth(data) {
    return (new Http()).post(Auth.REGISTER, data)
}

export function loginAuth(data) {
    return (new Http()).post(Auth.LOGIN, data)
}

export function logoutAuth(data) {
    return (new Http())
        .authenticated()
        .post(Auth.LOGIN, data)
}
