import { combineReducers } from 'redux';
import photos from './photoReducer';
import singlePhoto from './singlePhotoReducer';
import topics from './topicReducer';

export default combineReducers({
  photos,
  topics,
  singlePhoto,
});
