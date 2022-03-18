import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { fetchAllUserRedux } from "../../store/actions/adminActions";
import { toast } from "react-toastify";
import "./UserManage.scss";
import { connect } from "react-redux";
import { getUser, deleteUser, editUser } from "../../services/userService";
import ModalEditUser from "./ModalEditUser";

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUser: [],
      isOpenModalEdit: false,
      userEdit: {},
    };
  }
  fetchAllUser = async () => {
    let res = await getUser("All");
    if (res && res.errCode === 0) {
      let data = res.data;
      this.setState({
        arrUser: data,
      });
    }
  };

  async componentDidMount() {
    await this.fetchAllUser();
  }
  onDelete = async (id) => {
    let res = await deleteUser(id);
    console.log("check res", res);
    if (res && res.errCode === 0) {
      toast.success("The user is deleted");
      await this.fetchAllUser();
    } else {
      toast.error("the user is not deleted");
    }
  };
  onEdit = async (user) => {
    console.log("check user", user);
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
        await this.fetchAllUser();
      } else {
        alert(res.errMessage);
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    let { arrUser } = this.state;
    console.log("check arrUser", arrUser);
    return (
      <div className="container">
        <div className="text-center">
          <h2 className="title-manage">Manage User</h2>
        </div>
        <div className="content">
          <table>
            <tr>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Numbers</th>
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
                    <td>{item.phonenumber}</td>
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
            isOpenModalEdit={this.state.isOpenModalEdit}
            currentUser={this.state.userEdit}
            toogleEditUserParent={this.toogleEditUser}
            editUser={this.DoEditUser}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // allUSer: state.admin.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchAllUserRedux: () => dispatch(fetchAllUserRedux),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
