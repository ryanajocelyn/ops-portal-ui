import {createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from '../reducer/rootReducer';

const createStoreWithMiddleware = applyMiddleware (
  //thunkMiddleware(),
  promiseMiddleware(),
  createLogger()
)(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    /*const store = createStore(combineForms({
      loginForm: loginFormElements
    }), applyMiddleware (
      //thunkMiddleware(),
      promiseMiddleware(),
      createLogger()
    ));*/

    if (module.hot) {
      module.hot.accept ('../reducer/rootReducer', () => {
          const nextRootReducer = require('../reducer/rootReducer');

          store.replaceReducer(nextRootReducer);
      });
    }

    return store;
}
