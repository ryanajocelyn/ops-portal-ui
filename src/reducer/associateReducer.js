import { FETCH_ASSOCIATES } from '../action/associateActions';

const initialState = {
    associates: []
};

export default function associateReducer(state = initialState, action) {
  console.log('reducers: ' + action.type);
  switch (action.type) {
    case `${FETCH_ASSOCIATES}_FULFILLED`: {
      console.log('value assigning..' + JSON.stringify(action.payload));
      return {
        ...state,
        associates: action.payload
      };

      break;
    }
    default:
      return state;
  }
}
