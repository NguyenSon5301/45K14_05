import React, { Component } from "react";
import { CreateNewUser } from "../../services/userService";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./ModalCreateUser.scss";
import { emitter } from "../../utils/emitter";
import { toast } from "react-toastify";
import * as actions from "../../store/actions";
import { connect } from "react-redux";

class ModalCreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phonenumber: "",
      address: "",
      genders: [],
      roles: [],
    };
    this.listenToEmitter();
  }

  // clear modal data when add new user
  listenToEmitter() {
    emitter.on("EVENT_CLEAR_DATA_MODAL", () => {
      this.setState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phonenumber: "",
        address: "",
      });
    });
  }
  componentDidMount() {
    this.props.fetchGenderData();
    this.props.fetchRoleData();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.genders !== prevProps.genders) {
      let { genders } = this.props;
      this.setState({
        genders: genders,
      });
    }
    if (this.props.genders !== prevProps.genders) {
      this.setState({
        roles: this.props.roleData,
      });
    }
  }
  handleChangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };
  checkValidateInput = () => {
    let isValid = true;
    let arrCheck = [
      "email",
      "firstName",
      "lastName",
      "phonenumber",
      "password",
      "address",
    ];
    for (let i = 0; i < arrCheck.length; i++) {
      if (!this.state[arrCheck[i]]) {
        alert("Missing required parameter: " + arrCheck[i]);
        isValid = false;
        break;
      }
    }
    return isValid;
  };
  toogle = () => {
    this.props.toogleCreateUser();
  };
  handleSubmit = async () => {
    let isValid = this.checkValidateInput();
    if (isValid === false) return;
    if (isValid === true) {
      this.props.handleSubmitPr(this.state);
    }
    toast.success("creating user is succeed");
  };
  render() {
    let { roleData, genders } = this.props;
    console.log("check res", this.props);
    return (
      <div>
        <Modal
          isOpen={this.props.isOpenMidalCreate}
          toggle={() => this.toogle()}
          className={"abc"}
          size="lg"
        >
          <ModalHeader toggle={() => this.toogle()}>Create User</ModalHeader>
          <ModalBody>
            <div className="modal-user-container">
              <div className="modal-user-body col-12">
                <div className="form-group col-3">
                  <label>Email </label>
                  <input
                    className="form-control"
                    type="email"
                    value={this.state.email}
                    onChange={(event) => this.handleChangeInput(event, "email")}
                  />
                </div>
                <div className="form-group col-3">
                  <label>Password</label>
                  <input
                    className="form-control"
                    type="password"
                    value={this.state.password}
                    onChange={(event) =>
                      this.handleChangeInput(event, "password")
                    }
                  />
                </div>
                <div className="form-group col-3">
                  <label>First Name</label>
                  <input
                    className="form-control"
                    type="text"
                    value={this.state.firstName}
                    onChange={(event) =>
                      this.handleChangeInput(event, "firstName")
                    }
                  />
                </div>
                <div className="form-group col-3">
                  <label>Last Name</label>
                  <input
                    className="form-control"
                    type="text"
                    value={this.state.lastName}
                    onChange={(event) =>
                      this.handleChangeInput(event, "lastName")
                    }
                  />
                </div>
                <div className="form-group col-3">
                  <label>Chức vụ</label>
                  <select class="form-select">
                    {roleData.map((item, index) => {
                      return (
                        <>
                          <option>{item.valueVi}</option>
                        </>
                      );
                    })}
                  </select>
                </div>
                <div className="form-group col-3">
                  <label>Giới tính</label>
                  <select class="form-select">
                    <label>Giới tính</label>;
                    {genders.map((item, index) => {
                      return (
                        <>
                          <option>{item.valueVi}</option>
                        </>
                      );
                    })}
                  </select>
                </div>

                <div className="form-group col-3 ">
                  <label>Phone Number</label>
                  <input
                    className="form-control"
                    type="text"
                    value={this.state.phonenumber}
                    onChange={(event) =>
                      this.handleChangeInput(event, "phonenumber")
                    }
                  />
                </div>
                <div className="form-group col-6 ">
                  <label>Address</label>
                  <input
                    className="form-control"
                    type="text"
                    value={this.state.address}
                    onChange={(event) =>
                      this.handleChangeInput(event, "address")
                    }
                  />
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary px-2" onClick={() => this.handleSubmit()}>
              Create
            </Button>
            <Button color="secondary px-2" onClick={() => this.toogle()}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    genders: state.admin.genders,
    roleData: state.admin.roleData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchAllUserRedux: () => dispatch(fetchAllUserRedux),
    fetchGenderData: () => dispatch(actions.fetchGenderData()),
    fetchRoleData: () => dispatch(actions.fetchRoleData()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalCreateUser);
