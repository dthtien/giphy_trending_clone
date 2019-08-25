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
  offset: 0,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_IMAGES:
        draft.loading = true;
        draft.error = false;
        draft.data = null;
        break;

      case LOAD_IMAGES_SUCCESS:
        draft.data = action.payload;
        draft.loading = false;
        draft.offset = state.offset + 20;
        break;

      case LOAD_IMAGES_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
