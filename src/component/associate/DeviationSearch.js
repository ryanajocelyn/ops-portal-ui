import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import { Panel, DropdownButton, MenuItem, FormControl, PanelGroup } from 'react-bootstrap';
import { Form, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions } from '../../action/associateActions';

class DeviationSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment()
    }

    this.handleSdChange = this.handleSdChange.bind(this);
    this.handleEdChange = this.handleEdChange.bind(this);
  }

  handleSdChange(date) {
      this.setState({
          startDate: date
      });
  }

  handleEdChange(date) {
      this.setState({
          endDate: date
      });
  }

  renderMenuItem (title, i) {
      return(
          <MenuItem eventKey={i}>{title.accountName}</MenuItem>
      );
  }

  componentDidMount() {
      this.props.actions.fetchAllAccounts();
  }

  render() {
    const { accounts } = this.props;

    return (
            <div>
                <PanelGroup accordion id="search-accordion">
                <Panel eventKey="1" bsStyle="info">
                    <Panel.Heading>
                        <Panel.Title toggle componentClass="h3">Search</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>
                        <Form inline>
                            <FormGroup controlId="fiAccountName">
                                <ControlLabel>Account Name</ControlLabel> {' '}
                                <div>
                                <DropdownButton
                                  bsStyle={"default"}
                                  title={"Account"}
                                  key={1}
                                  id={"split-button-basic"}
                                >
                                    { accounts.map(this.renderMenuItem) }
                                </DropdownButton>
                                </div>
                            </FormGroup>
                            {'    '}
                            <FormGroup controlId="fiStartDate">
                                <ControlLabel>Start Date</ControlLabel>{' '}
                                <DatePicker
                                    className="form-control"
                                    selected={this.state.startDate}
                                    onChange={this.handleSdChange}
                                />
                            </FormGroup>
                            {'    '}
                            <FormGroup controlId="fiEndDate">
                                <ControlLabel>End Date</ControlLabel>{' '}
                                <DatePicker
                                    className="form-control"
                                    selected={this.state.endDate}
                                    onChange={this.handleEdChange}
                                />
                            </FormGroup>
                            {'    '}
                            <Button type="submit" bsStyle="primary">Calculate Deviations</Button>
                        </Form>
                    </Panel.Body>
                </Panel>
                </PanelGroup>
            </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
      actions: bindActionCreators( actions, dispatch)
  };
}

function mapStateToProps (state) {
  const { accounts } = state.associateReducer;
  return { accounts };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviationSearch);
