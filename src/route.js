import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import DefaultPage from './container/defaultPage';
import Login from './component/login/Login';

class AppRouter extends Component {
  render() {
    return (
      <Router history={ createBrowserHistory() }>

          <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/dashboard' component={DefaultPage} />
          </Switch>

      </Router>
    );
  }
}

export default AppRouter;
