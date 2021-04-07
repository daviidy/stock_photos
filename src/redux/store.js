import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import combineReducers from './reducers/index';
import { photosState } from './reducers/photoReducer';
import { topicsState } from './reducers/topicReducer';
import { singlePhotoState } from './reducers/singlePhotoReducer';

const { NODE_ENV } = process.env;

const middlewares = [thunk];

const enableDevTools = NODE_ENV === 'development'
  ? composeWithDevTools(applyMiddleware(...middlewares))
  : applyMiddleware(...middlewares);

export default createStore(
  combineReducers,
  {
    photos: photosState,
    topics: topicsState,
    singlePhoto: singlePhotoState,
  },
  enableDevTools,
);
