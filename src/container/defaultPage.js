import React from 'react';
import { Navbar } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from '../component/header/header'
import LeftNavBar from '../component/header/leftNavBar';
import LeftNavSearch from '../component/header/leftNavSearch';

import { actions } from '../action/login/dashboardActions';

class DefaultPage extends React.Component {
  render() {
      return(
          <nav className="navbar navbar-default navbar-static-top" role="navigation">
              <Header />
              <Navbar.Collapse />

              <div className="navbar-default sidebar" role="navigation">
                  <div className="sidebar-nav navbar-collapse">
                      <LeftNavSearch />
                      <LeftNavBar />
                  </div>
              </div>
          </nav>
      );
  }
}

function mapDispatchToProps (dispatch) {
  return {
      actions: bindActionCreators( actions, dispatch)
  };
}

function mapStateToProps (state) {
  const { loginResponse } = state.loginReducer;
  return { loginResponse };
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultPage);
