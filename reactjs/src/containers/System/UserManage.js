import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { toast } from "react-toastify";
import "./UserManage.scss";
import { connect } from "react-redux";
import {
  getUser,
  deleteUser,
  editUser,
  CreateNewUser,
} from "../../services/userService";
import ModalEditUser from "./ModalEditUser";
import ModalCreateUser from "./ModalCreateUser";
import { emitter } from "../../utils/emitter";
import * as actions from "../../store/actions";

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUser: [],
      isOpenModalEdit: false,
      userEdit: {},
      isOpenMidalCreate: false,
    };
  }

  async componentDidMount() {
    await this.props.fetchAllUser();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.users !== this.props.users) {
      this.setState({
        arrUser: this.props.users,
      });
    }
  }
  onDelete = async (id) => {
    let res = await deleteUser(id);
    console.log("check res", res);
    if (res && res.errCode === 0) {
      toast.success("delete user is successed");
      await this.props.fetchAllUser();
    } else {
      toast.error("the user is not deleted");
    }
  };
  // send data for props modal
  onEdit = async (user) => {
    this.setState({
      isOpenModalEdit: true,
      userEdit: user,
    });
  };
  toogleEditUser = () => {
    this.setState({
      isOpenModalEdit: !this.state.isOpenModalEdit,
    });
  };
  DoEditUser = async (user) => {
    try {
      console.log("check user", user);
      let res = await editUser(user);
      console.log("check res", res);
      if (res && res.errCode === 0) {
        this.setState({
          isOpenEditUser: false,
        });
        await this.props.fetchAllUser();
      } else {
        alert(res.errMessage);
      }
    } catch (e) {
      console.log(e);
    }
  };
  // handle create user
  onAddNewUser = () => {
    this.setState({
      isOpenMidalCreate: true,
    });
  };
  // handle add new user for child
  handleSubmit = async (data) => {
    try {
      let res = await CreateNewUser(data);
      if (res && res.errCode !== 0) {
        alert(res.errMessage);
      } else {
        await this.props.fetchAllUser();
        this.setState({
          isOpenMidalCreate: false,
        });
        emitter.emit("EVENT_CLEAR_DATA_MODAL");
      }
    } catch (e) {
      console.log(e);
    }
  };
  toogleCreateUser = () => {
    this.setState({
      isOpenMidalCreate: !this.state.isOpenMidalCreate,
    });
  };

  render() {
    let { arrUser } = this.state;
    return (
      <div className="container">
        <ModalCreateUser
          toogleCreateUser={this.toogleCreateUser}
          fetchAllUser={this.fetchAllUser}
          isOpenMidalCreate={this.state.isOpenMidalCreate}
          handleSubmitPr={this.handleSubmit}
        />
        <div className="text-center">
          <h2 className="title-manage">Manage User</h2>
        </div>
        <button
          className="btn btn-primary px-2 my-2"
          onClick={() => this.onAddNewUser()}
        >
          Add New User
        </button>
        <div className="content">
          <table>
            <tr>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Phone Numbers</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
            {arrUser &&
              arrUser.length > 0 &&
              arrUser.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.email}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.address}</td>
                    <td>{item.phonenumber}</td>
                    <td>{item.Gender}</td>
                    <td className="button-sub">
                      <button
                        className="btn btn-primary mx-2"
                        onClick={() => this.onEdit(item)}
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-warning"
                        onClick={() => this.onDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </table>
        </div>
        {this.state.isOpenModalEdit && (
          <ModalEditUser
            isOpen={this.state.isOpenModalEdit}
            toogleEditUser={this.toogleEditUser}
            currentUser={this.state.userEdit}
            editUser={this.DoEditUser}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.admin.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchAllUserRedux: () => dispatch(fetchAllUserRedux),
    fetchAllUser: () => dispatch(actions.fetchAllUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
