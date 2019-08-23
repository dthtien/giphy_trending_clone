/* eslint-disable quotes */
import axios from 'axios';

const httpClient = () => {
  const instance = axios.create({
    baseURL: "https://api.giphy.com/v1/gifs",
    headers: {
      'api_key': process.env.REACT_APP_GIPHY_TOKEN,
    }
  });

  return instance;
};

export default httpClient();