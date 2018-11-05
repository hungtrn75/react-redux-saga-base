import { createSelector } from 'reselect';

const alert = state => state.get('alert').toJS();

export const alertsSelector = createSelector(alert, state => state);
