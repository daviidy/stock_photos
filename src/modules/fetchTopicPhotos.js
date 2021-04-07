import { fetchTopicPhotosSuccess, fetchTopicPhotosPending, fetchTopicPhotosError } from '../redux/actions';

/* eslint-disable no-console */
const fetchTopicPhotos = (topicId) => {
  const id = 'MCND5iYNL5s5JVeGbbFAZ_HrNERMYgih1itJHqsUGPo';
  console.log('fetchphotos');
  return (dispatch) => {
    dispatch(fetchTopicPhotosPending());
    fetch(`https://api.unsplash.com/topics/${topicId}/photos?client_id=${id}&page=1&per_page=12`,
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
        console.log('success');
        console.log(res);
        dispatch(fetchTopicPhotosSuccess(res));
        return res;
      })
      .catch((error) => {
        console.log('error');
        dispatch(fetchTopicPhotosError(error));
      });
  };
};

export default fetchTopicPhotos;
