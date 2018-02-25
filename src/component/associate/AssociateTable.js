import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions } from '../../action/login/dashboardActions';

class AssociateTable extends React.Component {

  constructor(props) {
    super(props);

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
                  data={this.props.associates}
                  selectRow={selectRowProp}
                  striped
                  hover
                  condensed
                  pagination
                  insertRow
                  deleteRow
                  search>
                    <TableHeaderColumn dataField="id" isKey dataAlign="right" dataSort>Associate Id</TableHeaderColumn>
                    <TableHeaderColumn dataField="associateName" dataSort>Associate Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="gradeDescription" dataAlign="center">Grade</TableHeaderColumn>
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
  const { associates } = state.associateReducer;
  return { associates };
}

export default connect(mapStateToProps, mapDispatchToProps)(AssociateTable);
