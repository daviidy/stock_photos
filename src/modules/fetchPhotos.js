import { fetchPhotosError, fetchPhotosPending, fetchPhotosSuccess } from '../redux/actions'

const fetchPhotos = (filter) => {
  const id = 'MCND5iYNL5s5JVeGbbFAZ_HrNERMYgih1itJHqsUGPo'
  return async (dispatch) => {
    dispatch(fetchPhotosPending())

    // fetch(`https://api.unsplash.com/photos/?client_id=${id}&page=1&per_page=24`,
    //   {
    //     mode: 'cors',
    //     headers: {
    //       Authorization: `Client-ID ${id}`,
    //     },
    //   })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     if (res.error) {
    //       throw (res.error);
    //     }
    //     console.log(res);
    //     dispatch(fetchPhotosSuccess(res, filter));
    //     return res;
    //   })
    //   .catch((error) => {
    //     dispatch(fetchPhotosError(error));
    //   });
    try {
      const first = await fetch(`https://api.unsplash.com/photos/?client_id=${id}&page=1&per_page=24`,
        {
          mode: 'cors',
          headers: {
            Authorization: `Client-ID ${id}`
          }
        })
      const second = await first;
      dispatch(fetchPhotosSuccess(second, filter));
    } catch (error) {
      dispatch(fetchPhotosError(error));
    }
  }
}

export default fetchPhotos
