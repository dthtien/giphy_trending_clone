import { takeLatest } from 'redux-saga/effects';
import { LOAD_IMAGES } from './constants';

function* loadImagesSaga(action){
  console.log('hello');
}

function* appSaga(){
  yield takeLatest(LOAD_IMAGES, loadImagesSaga);
};

export default appSaga;
