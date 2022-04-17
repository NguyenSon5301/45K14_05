import React, { Component } from "react";
import { ModalHeader, ModalBody, ModalFooter, Button, Modal } from "reactstrap";
import "./ModalEditUser.scss";
import { LANGUAGE } from "../../utils/constant";
import * as actions from "../../store/actions";
import { connect } from "react-redux";

import _ from "lodash";
class ModalEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      email: "",
      firstName: "",
      lastName: "",
      phonenumber: "",
      address: "",
      gendersArr: [],
      roleArr: [],

      gender: "",
      role: "",
    };
  }
  handleInputUser = (event, id) => {
    let coppyState = { ...this.state };
    coppyState[id] = event.target.value;
    this.setState({
      ...coppyState,
    });
  };
  checkVaidInput = () => {
    let isValid = true;
    let arrInput = [
      "email",
      "firstName",
      "lastName",
      "phonenumber",
      "address",
      "gender",
      "role",
    ];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Missing parameter: " + arrInput[i]);
        break;
      }
      return isValid;
    }
  };
  //toggle
  toggle = () => {
    this.props.toogleEditUser();
  };
  handleSaveUser = () => {
    let isValid = this.checkVaidInput();
    if (isValid === false) return;

    if (isValid === true) {
      // call api
      this.props.editUser(this.state);

      this.toggle();
    }
  };
  componentDidMount() {
    this.props.fetchGenderData();
    this.props.fetchRoleData();
    let { currentUser } = this.props;
    if (currentUser && !_.isEmpty(currentUser)) {
      this.setState({
        id: currentUser.id,
        email: currentUser.email,
        password: currentUser.password,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        phonenumber: currentUser.phonenumber,
        address: currentUser.address,
        gender: currentUser.gender,
        role: currentUser.roleId,
      });
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.gendersArr !== this.props.gendersArr) {
      let { gendersArr } = this.props;
      this.setState({
        gendersArr: gendersArr,
      });
    }

    if (prevProps.roleData !== this.props.roleData) {
      let { roleData } = this.props;
      this.setState({
        roleArr: roleData,
      });
    }
  }
  render() {
    let { roleData, gendersArr, language } = this.props;

    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => this.toggle()}
        className={"abcClassName"}
        size="lg"
      >
        <ModalHeader toggle={() => this.toggle()}>Edit user</ModalHeader>
        <ModalBody>
          <div className="modal-user-container">
            <div className="modal-user-body">
              <div className="input-container max-width-input">
                <label>Email </label>
                <input
                  type="text"
                  value={this.state.email}
                  disabled
                  onChange={(event) => this.handleInputUser(event, "email")}
                />
              </div>

              <div className="input-container">
                <label>First Name</label>
                <input
                  type="text"
                  value={this.state.firstName}
                  onChange={(event) => this.handleInputUser(event, "firstName")}
                />
              </div>
              <div className="input-container">
                <label>Last Name</label>
                <input
                  type="text"
                  value={this.state.lastName}
                  onChange={(event) => this.handleInputUser(event, "lastName")}
                />
              </div>
              <div className="input-container ">
                <label>Phone</label>
                <input
                  type="text"
                  value={this.state.phonenumber}
                  onChange={(event) =>
                    this.handleInputUser(event, "phonenumber")
                  }
                />
              </div>
              <div className="input-container ">
                <label>Address</label>
                <input
                  type="text"
                  value={this.state.address}
                  onChange={(event) => this.handleInputUser(event, "address")}
                />
              </div>
              <div className="form-group col-3">
                <label>Chức vụ</label>
                <select
                  class="form-select"
                  value={this.state.role}
                  onChange={(event) => this.handleInputUser(event, "role")}
                >
                  {roleData.map((item, index) => {
                    return (
                      <option key={index} value={item.keyMap}>
                        {language === LANGUAGE.VI ? item.valueVi : item.valueEn}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="form-group col-3">
                <label>Giới tính</label>
                <select
                  value={this.state.gender}
                  class="form-select"
                  onChange={(event) => this.handleInputUser(event, "gender")}
                >
                  <label>Giới tính</label>;
                  {gendersArr &&
                    gendersArr.length > 0 &&
                    gendersArr.map((item, index) => {
                      return (
                        <>
                          <option key={index} value={item.keyMap}>
                            {language === LANGUAGE.VI
                              ? item.valueVi
                              : item.valueEn}
                          </option>
                        </>
                      );
                    })}
                </select>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary px-2" onClick={() => this.handleSaveUser()}>
            Save
          </Button>
          <Button color="secondary px-2" onClick={() => this.toggle()}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
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
    fetchGenderData: () => dispatch(actions.fetchGenderData()),
    fetchRoleData: () => dispatch(actions.fetchRoleData()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
