import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import configureStore from './store/configureStore';
import AppRouter from './route';

const store = configureStore();

function Root() {
  //const history = syncHistoryWithStore(createBrowserHistory(), store);

  return (<Provider store = { store }>
              <BrowserRouter>
                  <AppRouter />
              </BrowserRouter>
          </Provider>);
}

render(<Root />, document.getElementById("wrapper"));
