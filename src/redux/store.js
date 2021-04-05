import { createStore } from 'redux';
import getPhotos from '../modules/getPhotos';
import combineReducers from './reducers/index';

let initialState;

getPhotos().then((result) => {
  initialState = {
    photos: result,
  };
  console.log(initialState);
});

export default createStore(combineReducers, initialState);
