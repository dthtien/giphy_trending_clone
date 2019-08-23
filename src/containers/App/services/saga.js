import { takeLatest, call, put } from 'redux-saga/effects';
import { LOAD_IMAGES } from './constants';
import { getTrending } from './api';
import { loadImagesSuccess, loadImagesError } from './actions';

export function* loadImagesSaga(action) {
  const params = action.params || {};
  try {
    const response = yield call(getTrending, { ...params, limit: 20 });
    yield put(loadImagesSuccess(response.data));
  } catch (error) {
    yield put(loadImagesError(error));
  }
}

function* appSaga() {
  yield takeLatest(LOAD_IMAGES, loadImagesSaga);
}

export default appSaga;
