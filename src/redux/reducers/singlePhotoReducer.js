import { SINGLE_PHOTO_PENDING, SINGLE_PHOTO_SUCCESS, SINGLE_PHOTO_ERROR } from '../actions/actionsTypes';

export const singlePhotoState = {
  pending: false,
  photo: {},
  error: null,
};

const singlePhoto = (state = singlePhotoState, action) => {
  switch (action.type) {
    case SINGLE_PHOTO_PENDING:
      return {
        ...state,
        pending: true,
      };

    case SINGLE_PHOTO_SUCCESS:
      return {
        ...state,
        pending: false,
        photo: action.photo,
      };

    case SINGLE_PHOTO_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export const getPhoto = (state) => state.singlePhoto.photo;
export const getPhotoPending = (state) => state.singlePhoto.pending;
export const getPhotoError = (state) => state.singlePhoto.error;

export default singlePhoto;
