import {
  CHANGE_FILTER,
  FETCH_PHOTOS_PENDING,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_ERROR,
  SINGLE_PHOTO_PENDING,
  SINGLE_PHOTO_SUCCESS,
  SINGLE_PHOTO_ERROR,
} from './actionsTypes';

export const fetchPhotosPending = () => ({
  type: FETCH_PHOTOS_PENDING,
});

export const fetchPhotosSuccess = (photos) => ({
  type: FETCH_PHOTOS_SUCCESS,
  photos,
});

export const fetchPhotosError = (error) => ({
  type: FETCH_PHOTOS_ERROR,
  error,
});

export const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  filter,
});

export const singlePhotoPending = () => ({
  type: SINGLE_PHOTO_PENDING,
});

export const singlePhotoSuccess = (photo) => ({
  type: SINGLE_PHOTO_SUCCESS,
  photo,
});

export const singlePhotoError = (error) => ({
  type: SINGLE_PHOTO_ERROR,
  error,
});
