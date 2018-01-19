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
  return (<Provider store = { store }>
            <div>
              <div>
                <BrowserRouter>
                    <AppRouter />
                </BrowserRouter>
              </div>
            </div>
          </Provider>);
}

render(<Root />, document.getElementById("root"));
