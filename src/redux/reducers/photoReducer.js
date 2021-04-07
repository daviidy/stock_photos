import { FETCH_PHOTOS_PENDING, FETCH_PHOTOS_SUCCESS, FETCH_PHOTOS_ERROR } from '../actions/actionsTypes';

export const photosState = {
  pending: false,
  photos: [],
  error: null,
  filter: 'All',
};

const photos = (state = photosState, action) => {
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
        filter: action.filter,
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
export const getFilter = (state) => state.photos.filter;
export default photos;
