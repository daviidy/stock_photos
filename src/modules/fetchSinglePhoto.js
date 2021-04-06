import { singlePhotoError, singlePhotoPending, singlePhotoSuccess } from '../redux/actions';

/* eslint-disable no-console */
const fetchSinglePhoto = (photoId) => {
  const id = 'MCND5iYNL5s5JVeGbbFAZ_HrNERMYgih1itJHqsUGPo';
  console.log('fetch one photo');
  return (dispatch) => {
    dispatch(singlePhotoPending());
    fetch(`https://api.unsplash.com/photos/${photoId}/?client_id=${id}`,
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
        console.log('single photo success');
        console.log(res);
        dispatch(singlePhotoSuccess(res));
        return res;
      })
      .catch((error) => {
        console.log('error');
        dispatch(singlePhotoError(error));
      });
  };
};

export default fetchSinglePhoto;
