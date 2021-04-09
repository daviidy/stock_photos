import { fetchPhotosSuccess, fetchPhotosPending, fetchPhotosError } from '../redux/actions';

const fetchTopicPhotos = (filter, topicId) => {
  const id = 'MCND5iYNL5s5JVeGbbFAZ_HrNERMYgih1itJHqsUGPo';
  return (dispatch) => {
    dispatch(fetchPhotosPending());
    fetch(`https://api.unsplash.com/topics/${topicId}/photos?client_id=${id}&page=1&per_page=24`,
      {
        mode: 'cors',
        headers: {
          Authorization: `Client-ID ${id}`,
        },
      })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchPhotosSuccess(res, filter));
        return res;
      })
      .catch((error) => {
        dispatch(fetchPhotosError(error));
      });
  };
};

export default fetchTopicPhotos;
