import { fetchProductsError, fetchProductsPending, fetchProductsSuccess } from "../redux/actions";

/* eslint-disable no-console */
const getPhotos = () => {
  const id = 'MCND5iYNL5s5JVeGbbFAZ_HrNERMYgih1itJHqsUGPo';
  return dispatch => {
    dispatch(fetchProductsPending());
    fetch(`https://api.unsplash.com/photos/?client_id=${id}&page=1`,
      {
        mode: 'cors',
        headers: {
          Authorization: `Client-ID ${id}`,
        },
      })
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        throw(res.error)
      }
      dispatch(fetchProductsSuccess(res))
      console.log(res);
      return res;
    })
    .catch(error => {
      dispatch(fetchProductsError(error));
    })

    const response = await result.json();
    console.log(response);
    return response;
};

export default getPhotos;
