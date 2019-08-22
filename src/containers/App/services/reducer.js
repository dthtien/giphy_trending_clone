import produce from 'immer';
import {
  LOAD_IMAGES,
  LOAD_IMAGES_ERROR,
  LOAD_IMAGES_SUCCESS,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  data: null,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_IMAGES:
        draft.loading = true;
        draft.error = false;
        draft.data = false;
        break;

      case LOAD_IMAGES_SUCCESS:
        draft.userData.repositories = action.repos;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case LOAD_IMAGES_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
