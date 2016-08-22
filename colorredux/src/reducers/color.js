import * as colors from "../actions/types";

const initialState = {
	color : '#ffffff'
};

export default function color(state = initialState, action) {
  switch(action.type) {
    case colors.NEW_COLOR:
      return  Object.assign({}, state, { color: action.color });
  }
  return state;
}