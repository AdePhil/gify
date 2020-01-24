import {
  LOAD_GIFS_START,
  LOAD_GIFS_SUCCESS,
  LOAD_GIFS_ERROR,
  RESET_GIFS,
  LOAD_GIF_BY_ID_ERROR,
  LOAD_GIF_BY_ID_START,
  LOAD_GIF_BY_ID_SUCCESS,
  RESET_CURRENT_GIF
} from "./gifconstants";
import { fetchGifs, fetchGifById } from "../api/index";
export const loadGifsStart = () => ({
  type: LOAD_GIFS_START
});
export const loadGifsSuccess = payload => ({
  type: LOAD_GIFS_SUCCESS,
  payload
});
export const loadGifsError = payload => ({
  type: LOAD_GIFS_ERROR,
  payload
});
export const resetGifs = () => ({
  type: RESET_GIFS
});

export const loadGifs = (searchWord, offset) => dispatch => {
  dispatch(loadGifsStart());
  fetchGifs(searchWord, offset)
    .then(response => {
      const gifs = response.data.data;
      dispatch(loadGifsSuccess({ gifs }));
    })
    .catch(() => {});
};

export const loadGifByIdStart = () => ({
  type: LOAD_GIF_BY_ID_START
});
export const loadGifByIdSuccess = payload => ({
  type: LOAD_GIF_BY_ID_SUCCESS,
  payload
});
export const loadGifByIdError = payload => ({
  type: LOAD_GIF_BY_ID_ERROR,
  payload
});

export const resetCurrentGif = () => ({
  type: RESET_CURRENT_GIF
});

export const loadGifById = id => dispatch => {
  dispatch(loadGifByIdStart());
  fetchGifById(id)
    .then(response => {
      const gif = response.data.data;
      console.log(gif);
      dispatch(loadGifByIdSuccess({ gif }));
    })
    .catch(() => {});
};
