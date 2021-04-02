/* eslint-disable no-console */
const getPhotos = async () => {
  const id = 'MCND5iYNL5s5JVeGbbFAZ_HrNERMYgih1itJHqsUGPo';
  try {
    const result = await fetch(`https://api.unsplash.com/photos/?client_id=${id}&page=1`,
      {
        mode: 'cors',
        headers: {
          Authorization: `Client-ID ${id}`,
        },
      });

    const response = await result.json();
    console.log(response);
    return response;
  } catch (e) {
    return e;
  }
};

export default getPhotos;
