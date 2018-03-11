import { FETCH_ASSOCIATES, FETCH_DEVIATIONS, FETCH_ACCOUNTS,
          FETCH_HOLIDAYS, INSERT_HOLIDAY, FETCH_UBR } from '../action/associateActions';

const initialState = {
    associates: [],
    deviations: [],
    accounts: [],
    holidays: [],
    ubrAssociates: [],
    response: null
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
    case `${FETCH_DEVIATIONS}_FULFILLED`: {
      console.log('value assigning..' + JSON.stringify(action.payload));
      return {
        ...state,
        deviations: action.payload
      };

      break;
    }
    case `${FETCH_ACCOUNTS}_FULFILLED`: {
      console.log('value assigning..' + JSON.stringify(action.payload));
      return {
        ...state,
        accounts: action.payload
      };

      break;
    }
    case `${FETCH_HOLIDAYS}_FULFILLED`: {
      console.log('value assigning..' + JSON.stringify(action.payload));
      return {
        ...state,
        holidays: action.payload
      };

      break;
    }
    case `${INSERT_HOLIDAY}`: {
      console.log('value assigning..' + JSON.stringify(action.payload));
      return {
        ...state,
        response: action.payload
      };

      break;
    }
    case `${FETCH_UBR}_FULFILLED`: {
      console.log('value assigning..' + JSON.stringify(action.payload));
      return {
        ...state,
        ubrAssociates: action.payload
      };

      break;
    }
    default:
      return state;
  }
}
