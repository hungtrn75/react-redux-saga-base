import { takeEvery, call, put } from 'redux-saga/effects';
import { fetchProducts, createNewProduct, editProduct, updateProduct, deleteProduct} from './api';
import * as Types from './types'
import { recFetchProducts, recEditProduct } from './actions';

function* callFetchProducts() {
    try{
        const products = yield call(fetchProducts);
        yield put(recFetchProducts(products));
    } catch (e) {
        console.log(e);
    }
}

export function* productsSaga() {
    yield takeEvery(Types.REQUEST_FETCH_PRODUCTS, callFetchProducts);
}

function* callCreateProduct(payload) {
    try {
        let newProduct = yield call(createNewProduct, payload.product);
        yield call(payload.router.push, '/products');
    } catch (e) {
        console.log(e);
    }
}

export function* addProductSaga() {
    yield takeEvery(Types.REQUEST_CREATE_PRODUCT, callCreateProduct);
}

function* callEditProduct(id) {
    try{
        const products = yield call(editProduct, id.id);
        yield put(recEditProduct(products));
    } catch (e) {
        console.log(e);
    }
}

export function* editProductSaga() {
    yield takeEvery(Types.REQUEST_EDIT_PRODUCT, callEditProduct);
}

function* callUpdateProduct(payload) {
    try {
        let product = yield call(updateProduct, payload);
        yield call(payload.router.push, '/products');
    } catch (e) {
        console.log(e);
    }
}

export function* updateProductSaga() {
    yield takeEvery(Types.REQUEST_UPDATE_PRODUCT, callUpdateProduct);
}

function* callDeleteProduct(payload) {
    try {
        let product = yield call(deleteProduct, payload.id);
        location.reload();
    } catch (e) {
        console.log(e);
    }
}

export function* deleteProductSaga() {
    yield takeEvery(Types.REQUEST_DELETE_PRODUCT, callDeleteProduct);
}
