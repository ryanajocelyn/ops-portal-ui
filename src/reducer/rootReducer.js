import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loginReducer from './loginReducer'
import { combineForms } from 'react-redux-form';

const loginFormElements = {
  email: '',
  password: ''
};

const rootForms = combineForms({
  loginForm: loginFormElements
});

const rootReducer = combineReducers({
  loginReducer,
  forms: rootForms
});

export default rootReducer;
