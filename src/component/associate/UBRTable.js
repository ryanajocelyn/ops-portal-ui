import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions } from '../../action/associateActions';

class UBRTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        ubrAssociates: []
    };

    this.onAfterSaveCell = this.onAfterSaveCell.bind(this);
  }

  componentDidMount() {
      this.props.actions.fetchUBRDetails("3");
  }

  componentWillMount() {
      this.setState ({ubrAssociates: this.props.ubrAssociates });
  }

  onAfterSaveCell(row, cellName, cellValue) {
    const { ubrAssociates } = this.state;

    ubrAssociates.map(associate => {
        if (associate.id == row.id) {
            associate.ubrTotal = parseInt(row.ubr3) + parseInt(row.ubr4) + parseInt(row.ubr5);

            const mbrTotal = parseInt(row.week3) + parseInt(row.week4) + parseInt(row.week5);
            associate.difference = parseInt(mbrTotal) -
                                        ( parseInt(associate.ubrTotal) + parseInt(row.nblHours)
                                            + parseInt(row.vacationHours));

            associate.revenue = parseFloat(row.rate) * parseFloat(associate.ubrTotal);          
            this.setState ({ubrAssociates: this.props.ubrAssociates });
        }
    });
  }

  render() {
    var selectRowProp = {
      mode: "checkbox",
      clickToSelect: true,
      bgColor: "rgb(238, 193, 213)"
    };

    const cellEditProp = {
      mode: 'click',
      blurToSave: true,
      afterSaveCell: this.onAfterSaveCell
    };

    return (
            <div>
                <BootstrapTable
                  data={this.state.ubrAssociates}
                  selectRow={selectRowProp}
                  striped
                  hover
                  condensed
                  cellEdit={ cellEditProp }
                  pagination
                  search>
                    <TableHeaderColumn dataField="id" isKey dataAlign="right" dataSort editable={ false }>Associate Id</TableHeaderColumn>
                    <TableHeaderColumn dataField="associateName" dataSort editable={ false } width="20%">Associate Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="week3" dataAlign="center" editable={ false }>Week 3</TableHeaderColumn>
                    <TableHeaderColumn dataField="ubr3" dataAlign="center">UBR 3</TableHeaderColumn>
                    <TableHeaderColumn dataField="week4" dataAlign="center" editable={ false }>Week 4</TableHeaderColumn>
                    <TableHeaderColumn dataField="ubr4" dataAlign="center">UBR 4</TableHeaderColumn>
                    <TableHeaderColumn dataField="week5" dataAlign="center" editable={ false }>Week 5</TableHeaderColumn>
                    <TableHeaderColumn dataField="ubr5" dataAlign="center">UBR 5</TableHeaderColumn>
                    <TableHeaderColumn dataField="ubrTotal" dataAlign="center" editable={ false }>UBR Total</TableHeaderColumn>
                    <TableHeaderColumn dataField="nblHours" dataAlign="center">NBL</TableHeaderColumn>
                    <TableHeaderColumn dataField="vacationHours" dataAlign="center">Vacation</TableHeaderColumn>
                    <TableHeaderColumn dataField="difference" dataAlign="center" editable={ false }>Difference</TableHeaderColumn>
                    <TableHeaderColumn dataField="rate" dataAlign="center" editable={ false }>Rate</TableHeaderColumn>
                    <TableHeaderColumn dataField="revenue" dataAlign="center" editable={ false }>Revenue</TableHeaderColumn>
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

export default connect(mapStateToProps, mapDispatchToProps)(UBRTable);
