import { takeLatest, call, put, select } from 'redux-saga/effects';
import { LOAD_IMAGES } from './constants';
import { getTrending } from './api';
import { loadImagesSuccess, loadImagesError } from './actions';
import { makeSelectOffset } from './selectors';

export function* loadImagesSaga() {
  try {
    const offset = yield select(makeSelectOffset());
    const response = yield call(getTrending, { offset });
    yield put(loadImagesSuccess(response.data));
  } catch (error) {
    yield put(loadImagesError(error));
  }
}

function* appSaga() {
  yield takeLatest(LOAD_IMAGES, loadImagesSaga);
}

export default appSaga;
