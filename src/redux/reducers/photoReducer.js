import { FETCH_PHOTOS_PENDING, FETCH_PHOTOS_SUCCESS, FETCH_PHOTOS_ERROR } from '../actions/actionsTypes';

export const initialState = {
  pending: false,
  photos: [],
  error: null,
};

const photos = (state = initialState, action) => {
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
        photos: action.photos,
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

export const getPhotos = (state) => state.photos.photos;
export const getPhotosPending = (state) => state.photos.pending;
export const getPhotosError = (state) => state.photos.error;

export default photos;
