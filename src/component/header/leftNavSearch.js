import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Navbar, NavbarBrand, NavbarToggle, NavbarCollapse, Nav, NavItem } from 'react-bootstrap';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import { actions } from '../../action/header/headerActions';

class LeftNavSearch extends Component {
    handleSelect() {

    }

    render() {
        return (
                <ul className="nav" id="side-menu">
                    <li className="sidebar-search">
                        <div className="input-group custom-search-form">
                            <FormControl type="text" placeholder="Search..."/>
                            <span className="input-group-btn">
                                <Button><i className="fa fa-search"></i></Button>
                            </span>
                        </div>
                    </li>
                </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(LeftNavSearch);
