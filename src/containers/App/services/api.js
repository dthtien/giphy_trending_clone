import axios from 'axios';
export const getTrending = params =>
  axios.get('trending?api_key=' +  process.env.REACT_APP_GIPHY_TOKEN , { params })
    .then(response => response.data)
    .catch(err => {
      throw err.response;
    });
