import {
  LOAD_GIFS_SUCCESS,
  RESET_GIFS,
  LOAD_GIF_BY_ID_SUCCESS,
  RESET_CURRENT_GIF,
  LOAD_GIFS_START,
  LOAD_GIF_BY_ID_START
} from "../actions/gifconstants";
const initialState = {
  currentGif: {},
  gifs: [],
  loadingGifs: false,
  loadingCurrentGif: false
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case LOAD_GIFS_START:
      return {
        ...state,
        loadingGifs: true
      };
    case LOAD_GIFS_SUCCESS:
      return {
        ...state,
        gifs: [...state.gifs, ...action.payload.gifs],
        loadingGifs: false
      };
    case RESET_GIFS:
      return {
        ...state,
        gifs: []
      };
    case LOAD_GIF_BY_ID_START:
      return {
        ...state,
        loadingCurrentGif: true
      };
    case LOAD_GIF_BY_ID_SUCCESS:
      return {
        ...state,
        currentGif:
          action.payload.gif.length === 1 ? action.payload.gif[0] : {},
        loadingCurrentGif: false
      };
    case RESET_CURRENT_GIF:
      return {
        ...state,
        currentGif: {}
      };
    default:
      return state;
  }
};
