import React, { Component } from "react";
import { ModalHeader, ModalBody, ModalFooter, Button, Modal } from "reactstrap";
export default class ModalEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      phonenumber: "",
    };
  }
  handleInputUser = (event, id) => {
    let coppyState = { ...this.state };
    coppyState[id] = event.target.value;
    this.setState({
      ...coppyState,
    });
    console.log("coppy state", coppyState);
    console.log("test handle ", event.target.value, id);
  };
  checkVaidInput = () => {
    let isValid = true;
    let arrInput = ["email", "firstName", "lastName", "phonenumber"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Missing parameter: " + arrInput[i]);
        break;
      }
    }
  };
  //toggle
  toggle = () => {
    this.props.toogleEditUserParent();
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpenModalEdit}
        toggle={() => this.toggle()}
        className={"abcClassName"}
        size="lg"
      >
        <ModalHeader toggle={() => this.toggle()}>Edit user</ModalHeader>
        <ModalBody>
          <div className="modal-user-container">
            <div className="modal-user-body">
              <div className="input-container">
                <label>Email </label>
                <input
                  type="text"
                  value={this.state.email}
                  disabled
                  onChange={(event) => this.handleInputUser(event, "email")}
                />
              </div>
              <div className="input-container">
                <label>Password</label>
                <input
                  type="password"
                  disabled
                  value={this.state.password}
                  onChange={(event) => this.handleInputUser(event, "password")}
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
              <div className="input-container max-width-input">
                <label>Last Name</label>
                <input
                  type="text"
                  value={this.state.phonenumber}
                  onChange={(event) =>
                    this.handleInputUser(event, "phonenumber")
                  }
                />
              </div>
              {/* <div className="input-container max-width-input">
                <label>Address</label>
                <input
                  type="text"
                  value={this.state.address}
                  onChange={(event) => this.handleInputUser(event, "address")}
                />
              </div> */}
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
