import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions } from '../../action/associateActions';

class HolidaysTable extends React.Component {

  constructor(props) {
      super(props);

      this.onAfterInsertRow = this.onAfterInsertRow.bind(this);
  }

  onAfterInsertRow(row) {
      alert('json: ' + JSON.stringify(row));
      this.props.actions.insertHoliday(JSON.stringify(row));
  }



  render() {
    const options = {
      afterInsertRow: this.onAfterInsertRow   // A hook for after insert rows
    };

    const locations = [ {
          value: 'C',
          text: 'Chennai'
        }, {
          value: 'B',
          text: 'Bangalore'
        }, {
          value: 'H',
          text: 'Hyderabad'
        }, {
          value: 'K',
          text: 'Kolkata'
        }, {
          value: 'O',
          text: 'Client'
        } ];

    var selectRowProp = {
      mode: "checkbox",
      clickToSelect: true,
      bgColor: "rgb(238, 193, 213)"
    };

    return (
            <div>
                <BootstrapTable
                  data={this.props.holidays}
                  selectRow={selectRowProp}
                  options={options}
                  striped
                  hover
                  condensed
                  pagination
                  insertRow
                  deleteRow
                  search>
                    <TableHeaderColumn dataField="id" isKey hidden hiddenOnInsert autoValue>id</TableHeaderColumn>
                    <TableHeaderColumn dataField="date" dataAlign="center" editable={ { type: 'date' } }>Date</TableHeaderColumn>
                    <TableHeaderColumn dataField="description" dataAlign="center">Description</TableHeaderColumn>
                    <TableHeaderColumn dataField="location" dataAlign="center" editable={ { type: 'select', options: {values: locations} } }>Location</TableHeaderColumn>
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
  const { holidays } = state.associateReducer;
  return { holidays };
}

export default connect(mapStateToProps, mapDispatchToProps)(HolidaysTable);
