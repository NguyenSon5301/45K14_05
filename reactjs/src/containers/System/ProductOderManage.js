import React, { Component } from "react";

export default class ProductOderManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrOder: [],
    };
  }
  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h4 className="title-manage">Manage Order</h4>
        </div>

        <div className="content">
          <table>
            <tr>
              <th>Customer name</th>
              <th>Product name</th>
              <th>Number order</th>
              <th>Status</th>
              <th>Sum</th>

              <th>Date</th>

              <th>Action</th>
            </tr>
            {/* {arrContact &&
              arrContact.length > 0 &&
              arrContact.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.nameCT}</td>
                    <td>{item.emailCT}</td>
                    <td>{item.message}</td>
                    <td>{item.createdAt}</td>

                    <td className="button-sub">
                      <button
                        className="btn btn-warning"
                        onClick={() => this.onDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })} */}
          </table>
        </div>
      </div>
    );
  }
}
