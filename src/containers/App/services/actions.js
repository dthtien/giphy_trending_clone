import {
  LOAD_IMAGES,
  LOAD_IMAGES_ERROR,
  LOAD_IMAGES_SUCCESS,
} from './constants';

export const loadImages = payload => ({
  type: LOAD_IMAGES,
  payload,
});

export const loadImagesSuccess = payload => ({
  type: LOAD_IMAGES_SUCCESS,
  payload,
});

export const loadImagesError = payload => ({
  type: LOAD_IMAGES_ERROR,
  payload,
});
