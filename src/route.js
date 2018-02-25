import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Dashboard from './component/login/dashboard';
import Associates from './component/associates';
import Login from './component/login/Login';

class AppRouter extends Component {
  render() {
    const history = this.props.history;

    return (
      <Router history={ createBrowserHistory() }>
          <Route path='/' component={Associates}>
              <IndexRoute component={Associates} />
              <Route path='/associate' component={Associates} />
          </Route>
      </Router>
    );
  }
}

export default AppRouter;
