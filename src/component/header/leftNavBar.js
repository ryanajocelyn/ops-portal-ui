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
                  <LinkContainer to="/">
                  <NavItem eventKey={1}>
                			<i className="fa fa-dashboard fa-fw"></i> Dashboard
              		</NavItem>
                  </LinkContainer>

                  <LinkContainer to="/associate">
                  <NavItem eventKey={2} >
                			<i className="fa fa-table fa-fw"></i> Associates
              		</NavItem>
                  </LinkContainer>
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
