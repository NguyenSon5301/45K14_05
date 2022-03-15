import React, { Component } from "react";
import bg from "../../More/images/zzc.jpg";
import "./styleRegister.scss";
import { CreateNewUser } from "../../services/userService";

export default class RegisterUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phonenumber: "",
      //   address: "",
      //   gender: "",
    };
  }
  handleChangeInput = (e, id) => {
    let copyState = { ...this.state };
    copyState[id] = e.target.value;
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
  handleSubmit = async () => {
    let isValid = this.checkValidateInput();
    if (isValid === false) return;
    if (isValid === true) {
      await CreateNewUser({
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phonenumber: this.state.phonenumber,
      });
      setTimeout(() => {
        this.props.history.push(`/home`);
      }, 1000);
    }
  };
  render() {
    let { address, firstName, lastName, email, password, phonenumber } =
      this.state;

    return (
      <div className="d-lg-flex half">
        <div
          className="bg order-1 order-md-2"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        <div className="contents order-2 order-md-1">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7">
                <div className="mb-4">
                  <h3>Register</h3>
                </div>
                <div>
                  <div className="form-group ">
                    <input
                      placeholder="Email"
                      type="text"
                      className="form-control"
                      value={email}
                      onChange={(e) => this.handleChangeInput(e, "email")}
                    />
                  </div>
                  <div className="form-group ">
                    <input
                      placeholder="firstName"
                      type="text"
                      className="form-control"
                      value={firstName}
                      onChange={(e) => this.handleChangeInput(e, "firstName")}
                    />
                  </div>
                  <div className="form-group ">
                    <input
                      placeholder="lastName"
                      type="text"
                      className="form-control"
                      value={lastName}
                      onChange={(e) => this.handleChangeInput(e, "lastName")}
                    />
                  </div>
                  <div className="form-group ">
                    <input
                      placeholder="password"
                      type="text"
                      className="form-control"
                      value={password}
                      onChange={(e) => this.handleChangeInput(e, "password")}
                    />
                  </div>
                  <div className="form-group last-child ">
                    <input
                      placeholder="phonenumber"
                      type="text"
                      className="form-control"
                      value={phonenumber}
                      onChange={(e) => this.handleChangeInput(e, "phonenumber")}
                    />
                  </div>

                  <div className="col-12" style={{ color: "red" }}>
                    {this.state.errMessage}
                  </div>
                  <input
                    type="submit"
                    value="Submit"
                    className="btn btn-block btn-primary my-2"
                    onClick={() => this.handleSubmit()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
