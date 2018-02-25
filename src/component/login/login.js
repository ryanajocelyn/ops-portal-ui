import React from 'react';
import { findDOMNode } from 'react-dom';
import { Grid, Row, Col, Panel, FormGroup, FormControl, Form, Button, Checkbox } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { history } from 'history';

import { actions } from '../../action/login/loginActions';

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        email: '',
        password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    console.log(this.state);
    this.props.actions.doLogin(this.state);
  }

  getValidationState() {

  }

  toJSONString = form => {
  		var obj = {};
  		var elements = form.querySelectorAll( "input, select, textarea" );
  		for(var i = 0; i < elements.length; ++i ) {
  			var element = elements[i];
  			var name = element.name;
  			var value = element.value;

  			if( name ) {
  			     obj[ name ] = value;
  			}
  		}

  		return JSON.stringify( obj );
  }

  handleChange = event => {
    this.setState({
        [event.target.id]: event.target.value
    });
  }

  componentDidUpdate() {
      const { loginResponse } = this.props;
      const isLoginSuccess = loginResponse.success;
      console.log('response in update: ' + JSON.stringify(isLoginSuccess));

      if (isLoginSuccess) {
        const location = {
            pathname: '/dashboard'
        };
        this.props.history.push(location);
        //window.location = '/dashboard';
      }
  }

  render() {
    const { loginResponse } = this.props;
    const isLoginSuccess = loginResponse.success;
    console.log('response rendered: ' + JSON.stringify(isLoginSuccess));

    return (<div>
              <Grid>
                  <Row>
                      <Col md={4} mdOffset={4}>
                          <Panel className="login-panel" header="Please Sign In">
                          <Form id="loginFormId" onSubmit={this.handleSubmit}>
                            <FormGroup controlId="email"
                                       validationState={this.getValidationState()} >
                                  <FormControl type="email" placeholder="E-mail"
                                                onChange={this.handleChange}/>
                            </FormGroup>
                            <FormGroup controlId="password"
                                       validationState={this.getValidationState()} >
                                  <FormControl type="password" placeholder="Password"
                                                onChange={this.handleChange} />
                            </FormGroup>

                            <Checkbox>
                        			Remember me
                        		</Checkbox>

                            <Button type="submit" bsStyle="success"
                                    bsSize="large" block>Login</Button>
                          </Form>
                          </Panel>
                      </Col>
                  </Row>
              </Grid>
            </div>);
  }
}

function mapDispatchToProps (dispatch) {
  console.log('login map dispatch... ');
  return {
      actions: bindActionCreators( actions, dispatch)
  };
}

function mapStateToProps (state) {
  const { loginResponse } = state.loginReducer;
  console.log('login map state... ' + JSON.stringify(loginResponse));
  return { loginResponse };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
