import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./ModalCreateUser.scss";
import { emitter } from "../../utils/emitter";
import { toast } from "react-toastify";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import { LANGUAGE } from "../../utils/constant";

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
      gendersArr: [],
      roleArr: [],

      gender: "",
      role: "",
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
    if (prevProps.gendersArr !== this.props.gendersArr) {
      let { gendersArr } = this.props;
      this.setState({
        gendersArr: gendersArr,
        gender: gendersArr && gendersArr.length > 0 ? gendersArr[0].keyMap : "",
      });
    }

    if (prevProps.roleData !== this.props.roleData) {
      let { roleData } = this.props;
      this.setState({
        roleArr: roleData,
        role: roleData && roleData.length > 0 ? roleData[0].keyMap : "",
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
    let { roleData, gendersArr, language } = this.props;
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
                  <select
                    className="form-select"
                    onChange={(event) => this.handleChangeInput(event, "role")}
                  >
                    {roleData.map((item, index) => {
                      return (
                        <option key={index} value={item.keyMap}>
                          {language === LANGUAGE.VI
                            ? item.valueVi
                            : item.valueEn}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="form-group col-3">
                  <label>Giới tính</label>
                  <select
                    className="form-select"
                    onChange={(event) =>
                      this.handleChangeInput(event, "gender")
                    }
                  >
                    {gendersArr &&
                      gendersArr.length > 0 &&
                      gendersArr.map((item, index) => {
                        return (
                          <option key={index} value={item.keyMap}>
                            {language === LANGUAGE.VI
                              ? item.valueVi
                              : item.valueEn}
                          </option>
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
    gendersArr: state.admin.genders,
    roleData: state.admin.roleData,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUser: () => dispatch(actions.fetchAllUser()),

    fetchGenderData: () => dispatch(actions.fetchGenderData()),
    fetchRoleData: () => dispatch(actions.fetchRoleData()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalCreateUser);
