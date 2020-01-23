import { LOAD_GIFS_SUCCESS } from "../actions/gifconstants";
const initialState = {
  currentGif: {},
  gifs: []
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case LOAD_GIFS_SUCCESS:
      return {
        ...state,
        gifs: action.payload.gifs
      };
    default:
      return state;
  }
};
