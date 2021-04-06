import { combineReducers } from 'redux';
import photos from './photoReducer';
import singlePhoto from './singlePhotoReducer';

export default combineReducers({
  photos,
  singlePhoto,
});
