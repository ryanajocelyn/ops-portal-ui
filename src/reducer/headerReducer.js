import { FETCH_NAVIGATION_MENU } from '../action/header/headerActions';

const initialState = {
    menu:[],
    user: {}
};

export default function header(state = initialState, action) {
  switch (action.type) {
    case `${FETCH_NAVIGATION_MENU}_FULFILLED`:
      return Object.assign({}, state, {
          menu: action.payload
      });
      break;
    default:
      return state;
  }
}
