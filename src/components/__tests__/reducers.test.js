import reducer from '../../redux/reducers/photoReducer';
import * as types from '../../redux/actions/actionsTypes';

describe('photos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        pending: false,
        photos: [],
        error: null,
        filter: 'All',
      },
    );
  });

  it('should handle FETCH_PHOTOS_SUCCESS', () => {
    expect(
      reducer([], {
        type: types.FETCH_PHOTOS_SUCCESS,
        photos: [
          {
            id: 'any',
            description: 'any',
          },
        ],
        filter: 'All',
      }),
    ).toEqual(
      {
        pending: false,
        photos: [
          {
            id: 'any',
            description: 'any',
          },
        ],
        filter: 'All',
      },
    );
  });
});
