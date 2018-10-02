import * as Types from './types';

export function reqFetchProducts () {
  return {
    type: Types.REQUEST_FETCH_PRODUCTS
  }
}


export function recFetchProducts (data) {
  return {
    type: Types.RECEIVE_FETCH_PRODUCTS,
    data
  }
}
