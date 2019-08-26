import reducer, { LOAD_IMAGES, initialState } from '..';
import { LOAD_IMAGES_ERROR, LOAD_IMAGES_SUCCESS } from '../constants';

describe('REDUCER', () => {
  it('should handle "LOAD_IMAGES" action', () => {
    expect(reducer({}, {})).toEqual({});
  });

  it('should handle "LOAD_IMAGES" action', () => {
    expect(reducer({}, { type: LOAD_IMAGES })).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should handle "LOAD_IMAGES_SUCCESS" action', () => {
    const payload = [];
    expect(reducer({}, { type: LOAD_IMAGES_SUCCESS, payload })).toEqual({
      loading: false,
      data: payload,
    });
  });

  it('should handle "LOAD_IMAGES_ERROR" action', () => {
    const error = {};
    expect(reducer({}, { type: LOAD_IMAGES_ERROR, error })).toEqual({
      loading: false,
      error,
    });
  });
});
