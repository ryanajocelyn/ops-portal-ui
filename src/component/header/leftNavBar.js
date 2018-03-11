import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { push } from 'react-router-redux';
import { history } from '../history';

import { Navbar, NavbarBrand, NavbarToggle, NavbarCollapse, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import { actions } from '../../action/header/headerActions';

class LeftNavBar extends Component {
    constructor(props) {
      super(props);

      this.navigate = this.navigate.bind(this);
    }

    navigate(e) {
        console.log('test: '+ e);
        if (e == 1) {
            //this.props.history.push("/dashboard");
            this.context.router.history.push("/");
            //push("/dashboard");
        } else {
            ///this.props.history.push("/associate");
            this.context.router.history.push("/associate");
            //push("/associate");
        }
        //
    }

    render() {
      //  onSelect={this.navigate}
        return (
              <Nav id="side-menu">
                  <li  role="presentation">
                    <Link to="/dashboard">
                        <i className="fa fa-dashboard fa-fw"></i> Dashboard
                    </Link>
                  </li>

                  <li  role="presentation">
                    <Link to="/associate">
                  			<i className="fa fa-user fa-fw"></i> Associates
                    </Link>
                  </li>

                  <li  role="presentation">
                    <Link to="/deviations">
                        <i className="fa fa-money fa-fw"></i> Clarity-FG Deviations
                    </Link>
                  </li>

                  <li  role="presentation">
                    <Link to="/margins">
                        <i className="fa fa-book fa-fw"></i> Margin Workbook
                    </Link>
                  </li>

                  <li  role="presentation">
                    <Link to="/ubr">
                        <i className="fa fa-dollar fa-fw"></i> Unbilled Revenue
                    </Link>
                  </li>

                  <li  role="presentation">
                    <Link to="/holidays">
                        <i className="fa fa-taxi fa-fw"></i> Holidays
                    </Link>
                  </li>
              </Nav>
        );
    }
}

function mapDispatchToProps (dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

function mapStateToProps (state) {
  return {
    menu: '',
    user: ''
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftNavBar);
