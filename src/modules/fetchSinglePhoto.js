import { singlePhotoError, singlePhotoPending, singlePhotoSuccess } from '../redux/actions';

const fetchSinglePhoto = (photoId) => {
  const id = 'MCND5iYNL5s5JVeGbbFAZ_HrNERMYgih1itJHqsUGPo';
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
        dispatch(singlePhotoSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(singlePhotoError(error));
      });
  };
};

export default fetchSinglePhoto;
