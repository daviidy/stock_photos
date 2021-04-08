import 'regenerator-runtime/runtime';
import fetch from 'jest-fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../redux/actions/index';
import fetchPhotos from '../../modules/fetchPhotos';
import * as types from '../../redux/actions/actionsTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
fetch.enableMocks();

describe('actions', () => {
  it('should create an action to pend photos fetching', () => {
    const expectedAction = {
      type: types.FETCH_PHOTOS_PENDING,
    };
    expect(actions.fetchPhotosPending()).toEqual(expectedAction);
  });

  it('should create an action to fetch photos successfully', () => {
    const photos = [];
    const filter = 'All';
    const expectedAction = {
      type: types.FETCH_PHOTOS_SUCCESS,
      photos,
      filter,
    };
    expect(actions.fetchPhotosSuccess(photos, filter)).toEqual(expectedAction);
  });

  it('should create an action to fetch photos with an error', () => {
    const error = 'any error';
    const expectedAction = {
      type: types.FETCH_PHOTOS_ERROR,
      error,
    };
    expect(actions.fetchPhotosError(error)).toEqual(expectedAction);
  });

  it('should create an action to pend topics fetching', () => {
    const expectedAction = {
      type: types.FETCH_TOPICS_PENDING,
    };
    expect(actions.fetchTopicsPending()).toEqual(expectedAction);
  });

  it('should create an action to fetch topics successfully', () => {
    const topics = [];
    const filter = 'All';
    const expectedAction = {
      type: types.FETCH_TOPICS_SUCCESS,
      topics,
      filter,
    };
    expect(actions.fetchTopicsSuccess(topics, filter)).toEqual(expectedAction);
  });

  it('should create an action to fetch topics with an error', () => {
    const error = 'any error';
    const expectedAction = {
      type: types.FETCH_TOPICS_ERROR,
      error,
    };
    expect(actions.fetchTopicsError(error)).toEqual(expectedAction);
  });

  it('should create an action to pend single photo fetching', () => {
    const expectedAction = {
      type: types.SINGLE_PHOTO_PENDING,
    };
    expect(actions.singlePhotoPending()).toEqual(expectedAction);
  });

  it('should create an action to fetch single photo successfully', () => {
    const photo = {};
    const expectedAction = {
      type: types.SINGLE_PHOTO_SUCCESS,
      photo,
    };
    expect(actions.singlePhotoSuccess(photo)).toEqual(expectedAction);
  });

  it('should create an action to fetch single photo with an error', () => {
    const error = 'any error';
    const expectedAction = {
      type: types.SINGLE_PHOTO_ERROR,
      error,
    };
    expect(actions.singlePhotoError(error)).toEqual(expectedAction);
  });
});

describe('async actions', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  afterEach(() => {
    fetch.resetMocks();
  });
  test('creates FETCH_TODOS_SUCCESS when fetching todos has been done', async () => {
    fetch.mockResponseOnce(JSON.stringify(
      [{
        id: 'any',
        description: 'any',
      },
      {
        id: 'test',
        description: 'test',
      }],
    ));

    const store = mockStore({
      photos: {
        photos: [],
      },
    });

    await store.dispatch(fetchPhotos('All'));
    expect(fetch).toHaveBeenCalledTimes(1);

    expect(store.getActions()[0].type).toEqual(types.FETCH_PHOTOS_PENDING);
    expect(store.getActions()[1].type).toEqual(types.FETCH_PHOTOS_SUCCESS);
  });
});
