import Http from './../../utils/Http';
import { Product } from './../../constants/ApiRequest';

export function fetchProducts() {
  return (new Http()).get(Product.FETCH)
}
