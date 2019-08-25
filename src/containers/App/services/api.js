import axios from 'axios';
export const getTrending = (options = {}) => {
  const params = options;
  params.limit = 20;
  return axios
    .get(`trending?api_key=${process.env.REACT_APP_GIPHY_TOKEN}`, { params })
    .then(response => response.data)
    .catch(err => {
      throw err.response;
    });
};
