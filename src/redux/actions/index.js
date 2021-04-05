import {
  CHANGE_FILTER, FETCH_PHOTOS_PENDING, FETCH_PHOTOS_SUCCESS, FETCH_PHOTOS_ERROR,
} from './actionsTypes';

export const fetchProductsPending = () => ({
  type: FETCH_PHOTOS_PENDING,
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PHOTOS_SUCCESS,
  products,
});

export const fetchProductsError = (error) => ({
  type: FETCH_PHOTOS_ERROR,
  error,
});

export const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  filter,
});
