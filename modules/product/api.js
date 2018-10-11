import Http from './../../utils/Http';
import { Product } from './../../constants/ApiRequest';

export function fetchProducts() {
    return (new Http()).authenticated().get(Product.URL_RESTFUL)
}

export function createNewProduct(product) {
    return (new Http()).authenticated().post(Product.URL_RESTFUL, product)
}

export function editProduct(id) {
    return (new Http()).authenticated().get(Product.URL_RESTFUL + '/' + id + '/edit')
}

export function updateProduct(payload) {
    return (new Http()).authenticated().patch(Product.URL_RESTFUL + '/' + payload.id, payload.product)
}

export function deleteProduct(id) {
    return (new Http()).authenticated().delete(Product.URL_RESTFUL + '/' + id)
}
