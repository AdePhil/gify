import axios from "axios";
export const fetchGifs = searchWord => {
  const url = "https://api.giphy.com/v1/gifs/search";
  const params = {
    api_key: process.env.REACT_APP_API_KEY,
    q: searchWord
  };
  return axios.get(url, { params });
};
