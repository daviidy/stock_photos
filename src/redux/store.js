import { createStore } from 'redux';
import getPhotos from '../modules/getPhotos';
import combineReducers from './reducers/index';

const initialState = getPhotos();

export default createStore(combineReducers, initialState);
