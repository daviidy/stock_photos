import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers/index';

const middlewares = [thunk];

const initialState = [];

export default createStore(combineReducers, initialState, applyMiddleware(...middlewares));
