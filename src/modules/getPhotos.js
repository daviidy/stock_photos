const getPhotos = async () => {
  const id = 'ylaQJIceB2zpscPcvxIj';
  try {
    const result = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`,
      {
        mode: 'cors',
      });

    const response = await result.json();
    return response.result;
  } catch (e) {
    return e;
  }
};

export default getPhotos;
