import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectApp = state => state.app || initialState;

const makeSelectImages = () =>
  createSelector(
    selectApp,
    selectApp => selectApp,
  );

export { makeSelectImages };