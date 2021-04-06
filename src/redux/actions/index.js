import {
  CHANGE_FILTER, FETCH_PHOTOS_PENDING, FETCH_PHOTOS_SUCCESS, FETCH_PHOTOS_ERROR,
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
