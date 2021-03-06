import { fetchPhotosError, fetchPhotosPending, fetchPhotosSuccess } from '../redux/actions';

const fetchPhotos = (filter) => {
  const id = 'MCND5iYNL5s5JVeGbbFAZ_HrNERMYgih1itJHqsUGPo';
  return async (dispatch) => {
    dispatch(fetchPhotosPending());
    try {
      const first = await fetch(`https://api.unsplash.com/photos/?client_id=${id}&page=1&per_page=24`,
        {
          mode: 'cors',
          headers: {
            Authorization: `Client-ID ${id}`,
          },
        });
      const second = await first.json();
      dispatch(fetchPhotosSuccess(second, filter));
      return second;
    } catch (error) {
      dispatch(fetchPhotosError(error));
      return error;
    }
  };
};

export default fetchPhotos;
