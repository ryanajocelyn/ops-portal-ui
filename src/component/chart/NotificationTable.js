import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions } from '../../action/associateActions';

class NotificationTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        notifications: [{
          'id': 1,
          'alert': 'No Student Id, Rate, Cost',
          'count': 10
        }, {
          'id': 2,
          'alert': 'UBR missing Associates',
          'count': 23
        }, {
          'id': 3,
          'alert': 'Clarity Vs FG Deviation Missing Associates',
          'count': 43
        }, {
          'id': 4,
          'alert': 'Unbilled Associates',
          'count': 39
        }]
    };
  }

  render() {
    var selectRowProp = {
      mode: "checkbox",
      clickToSelect: true,
      bgColor: "rgb(238, 193, 213)"
    };

    return (
            <div>
                <BootstrapTable
                  data={this.state.notifications}
                  selectRow={selectRowProp}
                  striped
                  hover
                  condensed>
                    <TableHeaderColumn dataField="id" isKey hidden>Id</TableHeaderColumn>
                    <TableHeaderColumn dataField="alert" width="60%" dataSort>Alert</TableHeaderColumn>
                    <TableHeaderColumn dataField="count" dataSort>Count</TableHeaderColumn>
                </BootstrapTable>
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
  const { ubrAssociates } = state.associateReducer;
  return { ubrAssociates };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationTable);
