import { combineReducers } from 'redux';
import { fork, all } from 'redux-saga/effects';
import products from './product/reducers';
import * as productSagas from './product/sagas';

export const rootReducer = combineReducers({
    products,
});

export function* rootSaga() {
    yield all([
        ...Object.values(productSagas),
    ].map(fork));
}