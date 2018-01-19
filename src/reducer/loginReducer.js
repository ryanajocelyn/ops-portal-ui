import { DO_LOGIN } from '../action/login/loginActions';

const initialState = {
    loginResponse: {
        success: '',
        errorCode: '',
        errorDescription: ''
    }
};

export default function loginReducer(state = initialState, action) {
  console.log('reducers: ' + action.type);
  switch (action.type) {
    case `${DO_LOGIN}_FULFILLED`: {
      console.log('value assigning..' + JSON.stringify(action.payload));
      return {
        ...state,
        loginResponse: action.payload
      };

      break;
    }
    default:
      return state;
  }
}
