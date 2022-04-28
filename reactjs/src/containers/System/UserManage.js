import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { toast } from "react-toastify";
import "./UserManage.scss";
import { LANGUAGE } from "../../utils/constant";

import { connect } from "react-redux";
import {
  deleteUser,
  editUser,
  CreateNewAdmin,
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
  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state, callback) => {
      return;
    };
  }
  async componentDidMount() {
    await this.props.fetchAllUser();
    await this.props.fetchGenderData();
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
      let res = await editUser(user);

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
      let res = await CreateNewAdmin(data);
      if (res && res.errCode !== 0) {
        alert(res.errMessage);
      } else {
        this.setState({
          isOpenMidalCreate: false,
        });
        emitter.emit("EVENT_CLEAR_DATA_MODAL");
        await this.props.fetchAllUser();
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
    let { language } = this.props;
    return (
      <div className="container">
        <ModalCreateUser
          //send genders

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
            <thead>
              <tr>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Phone Numbers</th>
                <th>Gender</th>
                <th>Role</th>

                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {arrUser &&
                arrUser.length > 0 &&
                arrUser.map((item, index) => {
                  return (
                    <tr key="{index}" id={item.id}>
                      <td>{item.email}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.address}</td>
                      <td>{item.phonenumber}</td>
                      <td>
                        {language === LANGUAGE.VI
                          ? item.genderData.valueVi
                          : item.genderData.valueEn}
                      </td>
                      <td>
                        {language === LANGUAGE.VI
                          ? item.roleData.valueVi
                          : item.roleData.valueEn}
                      </td>
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
            </tbody>
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
    genders: state.admin.genders,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUser: () => dispatch(actions.fetchAllUser()),
    fetchGenderData: () => dispatch(actions.fetchGenderData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
