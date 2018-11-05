import { createSelector } from 'reselect';

const auth = state => state.get('auth').toJS();

export const authSelector = createSelector(auth, state => state);
