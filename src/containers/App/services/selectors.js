import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectApp = state => state.app || initialState;

const makeSelectImages = () =>
  createSelector(
    selectApp,
    selectAppState => selectAppState,
  );

const makeSelectOffset = () =>
  createSelector(
    selectApp,
    selectAppState => selectAppState.offset,
  );

export { makeSelectImages, makeSelectOffset };
