import {
  LOAD_GIFS_START,
  LOAD_GIFS_SUCCESS,
  LOAD_GIFS_ERROR
} from "./gifconstants";
import { fetchGifs } from "../api/index";
export const loadGalleryStart = () => ({
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

export const loadGifs = searchWord => dispatch => {
  dispatch(loadGalleryStart());
  fetchGifs(searchWord)
    .then(response => {
      console.log("here");
      const gifs = response.data.data;
      console.log(gifs);
      dispatch(loadGifsSuccess({ gifs }));
    })
    .catch(() => {});
};
