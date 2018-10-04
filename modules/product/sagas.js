import { takeEvery, call, put } from 'redux-saga/effects';
import { fetchProducts } from './api';
import * as Types from './types'
import { recFetchProducts } from './actions';

function* callFetchProducts() {
  const products = yield call(fetchProducts);
  yield put(recFetchProducts(products));
}

export function* productsSaga() {
  yield takeEvery(Types.REQUEST_FETCH_PRODUCTS, callFetchProducts);
}
