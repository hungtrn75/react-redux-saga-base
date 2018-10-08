import * as Types from './types';

export function reqFetchProducts () {
    return {
        type: Types.REQUEST_FETCH_PRODUCTS
    }
}

export function recFetchProducts (products) {
    return {
        type: Types.RECEIVE_FETCH_PRODUCTS,
        products
    }
}

export function reqCreateProduct (product, router) {
    return {
        type: Types.REQUEST_CREATE_PRODUCT,
        product,
        router
    }
}

export function reqEditProduct (id) {
    return {
        type: Types.REQUEST_EDIT_PRODUCT,
        id
    }
}

export function recEditProduct (product) {
    return {
        type: Types.RECEIVE_EDIT_PRODUCT,
        product
    }
}

export function reqUpdateProduct (id, product, router) {
    return {
        type: Types.REQUEST_UPDATE_PRODUCT,
        id,
        product,
        router
    }
}

export function reqDeleteProduct (id) {
    return {
        type: Types.REQUEST_DELETE_PRODUCT,
        id
    }
}
