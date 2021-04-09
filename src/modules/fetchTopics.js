import { fetchTopicsSuccess, fetchTopicsPending, fetchTopicsError } from '../redux/actions';

const fetchTopics = () => {
  const id = 'MCND5iYNL5s5JVeGbbFAZ_HrNERMYgih1itJHqsUGPo';
  return (dispatch) => {
    dispatch(fetchTopicsPending());
    fetch(`https://api.unsplash.com/topics?client_id=${id}&page=1&per_page=12`,
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
        dispatch(fetchTopicsSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchTopicsError(error));
      });
  };
};

export default fetchTopics;
