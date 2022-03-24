import React, { Component } from "react";
import { CreateNewUser } from "../../services/userService";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./ModalCreateUser.scss";
import { emitter } from "../../utils/emitter";
import { toast } from "react-toastify";
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phonenumber: "",
      address: "",
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
                <div className="form-group col-3 max-width-input">
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
                <div className="form-group col-3 max-width-input">
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
