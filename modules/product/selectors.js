import { createSelector } from 'reselect';

const products = state => state.get('products').toJS();

export const productsSelector = createSelector(products, state => state);
