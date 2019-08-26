import { takeLatest } from 'redux-saga/effects';
import { LOAD_IMAGES, saga, loadImagesSaga } from '..';

describe('SAGAS', () => {
  it('should dispatch action  ', () => {
    const generator = saga();
    expect(generator.next().value).toEqual(
      takeLatest(LOAD_IMAGES, loadImagesSaga),
    );
    expect(generator.next().done).toBeTruthy();
  });
});
