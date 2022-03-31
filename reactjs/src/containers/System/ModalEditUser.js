import React, { Component } from "react";
import { ModalHeader, ModalBody, ModalFooter, Button, Modal } from "reactstrap";
import "./ModalEditUser.scss";
import _ from "lodash";
export default class ModalEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      email: "",
      firstName: "",
      lastName: "",
      phonenumber: "",
      address: "",
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
    let arrInput = ["email", "firstName", "lastName", "phonenumber", "address"];
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
    if (isValid === true) {
      // call api
      this.props.editUser(this.state);
      this.toggle();
    }
  };
  componentDidMount() {
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
      });
    }
  }

  render() {
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
