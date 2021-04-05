import { FETCH_PHOTOS_PENDING, FETCH_PHOTOS_SUCCESS, FETCH_PHOTOS_ERROR } from '../actions/actionsTypes';

const initialState = {
  pending: false,
  photos: [],
  error: null,
};

export const photos = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_PENDING:
      return {
        ...state,
        pending: true,
      };

    case FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        pending: false,
        photos: action.payload,
      };

    case FETCH_PHOTOS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export const getPhotos = (state) => state.products;
export const getPhotosPending = (state) => state.pending;
export const getPhotosError = (state) => state.error;
