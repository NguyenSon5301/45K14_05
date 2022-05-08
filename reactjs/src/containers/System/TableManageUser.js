import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";

import "./TableManageUser.scss";

// Finish!

class TableManageUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersRedux: [],
    };
  }
  componentDidMount() {}

  handleDeleteUser = (user) => {
    this.props.deleteUserRedux(user.id);
  };
  handleEditUser = (user) => {
    this.props.handleEditUserFromParent(user);
  };
  render() {
    let { ListUsers } = this.props;
    let { usersRedux } = this.state;

    return (
      <>
        <table id="TableManageUser">
          <tbody>
            <tr>
              <th>
                <FormattedMessage id="Product.title" />
              </th>
              <th>Action</th>
            </tr>
            {usersRedux &&
              usersRedux.length > 0 &&
              usersRedux.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <button
                        className="btn-delete"
                        onClick={() => this.handleDeleteUser(item)}
                      >
                        <i className="fas fa-trash-alt mx-1"></i>
                      </button>
                      <button
                        className="btn-edit"
                        onClick={() => this.handleEditUser(item)}
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ListUsers: state.admin.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
