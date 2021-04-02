import getPhotos from '../../modules/getPhotos';
import { GET_PHOTOS } from '../actions/actionsTypes';

const initialState = [];

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      getPhotos();
      return state;

    default:
      return state;
  }
};

export default photoReducer;
