import { createSelector } from 'reselect';

const alert = state => state.alert;

export const alertsSelector = createSelector(alert, state => state);
