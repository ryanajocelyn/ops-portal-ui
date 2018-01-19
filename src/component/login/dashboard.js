import React from 'react';
import { findDOMNode } from 'react-dom';
import { Grid, Row, Col, Panel, FormGroup, FormControl, Form, Button, Checkbox } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions } from '../../action/login/dashboardActions';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        email: '',
        password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

  }

  handleChange = event => {
    this.setState({
        [event.target.id]: event.target.value
    });
  }

  render() {
    return (<div>
                <h1>Dashboard Page...</h1>
            </div>);
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
