import React, { Component } from "react";
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

class Tracker extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], open: false, message: "" };
  }

  render() {
    const columns = [
      {
        Header: "Item",
        accessor: "item"
      },
      {
        Header: "Status",
        accessor: "status"
      }
    ];

    return (
      <ReactTable
        data={this.state.todos}
        columns={columns}
        filterable={true}
        pageSize={10}
      />
    );
  }
}

export default Tracker;
