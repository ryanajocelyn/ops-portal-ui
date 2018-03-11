import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, IndexRoute, Switch, Link} from 'react-router-dom';
import { createBrowserHistory } from 'history';

import OpsDashboard from './component/login/dashboard';
import Associates from './component/associates';
import Deviations from './component/deviations';
import Holidays from './component/holidays';
import Login from './component/login/Login';
import MarginWorkbook from './component/marginworkbook';
import UBR from './component/ubr';
import DefaultPage from './container/defaultPage';

class AppRouter extends Component {
  render() {
    const history = this.props.history;

    return (
      <div>
          <DefaultPage />

          <Switch>
              <Route exact path='/' component={OpsDashboard}/>
              <Route path='/dashboard' component={OpsDashboard}/>
              <Route path='/associate' component={Associates} />
              <Route path='/deviations' component={Deviations} />
              <Route path='/margins' component={MarginWorkbook} />
              <Route path='/ubr' component={UBR} />
              <Route path='/holidays' component={Holidays} />
          </Switch>
      </div>
    );
  }
}

export default AppRouter;
