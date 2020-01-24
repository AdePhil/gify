import axios from "axios";
export const fetchGifs = (searchWord, offset) => {
  const url = "https://api.giphy.com/v1/gifs/search";
  const params = {
    api_key: process.env.REACT_APP_API_KEY,
    q: searchWord,
    offset
  };
  return axios.get(url, { params });
};

export const fetchGifById = id => {
  const url = "https://api.giphy.com/v1/gifs";
  const params = {
    api_key: process.env.REACT_APP_API_KEY,
    ids: id
  };
  return axios.get(url, { params });
};
