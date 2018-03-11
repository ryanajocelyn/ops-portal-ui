import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions } from '../../action/associateActions';

class AssociateTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        associates: []
    };

    this.handleMissingXref = this.handleMissingXref.bind(this);
  }

  componentWillMount() {
      this.setState ({associates: this.props.associates });
  }

  handleMissingXref() {
      console.log('xref');
      if (this.state.associates) {
        const associatesTmp =
            this.state.associates.filter(a => a.resourceWorkdayId == null);

        console.log(associatesTmp.length);
        this.setState({associates: associatesTmp });
      }
  }

  render() {
    var selectRowProp = {
      mode: "checkbox",
      clickToSelect: true,
      bgColor: "rgb(238, 193, 213)"
    };

    return (
            <div>
                <Button type="submit" bsStyle="primary" onClick={this.handleMissingXref}>Missing Xref</Button>
                <br />
                
                <BootstrapTable
                  data={this.state.associates}
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
