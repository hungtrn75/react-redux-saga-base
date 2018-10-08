import Http from './../../utils/Http';
import { Product } from './../../constants/ApiRequest';

export function fetchProducts() {
  	return (new Http()).get(Product.URL_JSON_SERVER)
}

export function createNewProduct(product) {
  	return (new Http()).post(Product.URL_JSON_SERVER, product)
}

export function editProduct(id) {
  	return (new Http()).get(Product.URL_JSON_SERVER + '/' + id)
}

export function updateProduct(payload) {
  	return (new Http()).patch(Product.URL_JSON_SERVER + '/' + payload.id, payload.product)
}

export function deleteProduct(id) {
  	return (new Http()).delete(Product.URL_JSON_SERVER + '/' + id)
}
