import React, { Component } from "react";
import bg from "../../More/images/zzc.jpg";
import "./styleRegister.scss";
import { CreateNewUser } from "../../services/userService";
import axios from "axios";

export default class Register extends Component {
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
    console.log("check event", e.target.value);
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
      let res = await CreateNewUser({
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phonenumber: this.state.phonenumber,
      });
      setTimeout(() => {
        this.props.history.push(`/home`);
      }, 3000);
    }
  };
  render() {
    let { address, firstName, lastName, email, password, phonenumber } =
      this.state;
    console.log("check state", this.state);
    return (
      <div className="wrapper">
        <div className="inner">
          <div
            className="image-holder"
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
          <div className="form-input">
            <h3>Registration Form</h3>
            <div className="form-group">
              <input
                value={firstName}
                onChange={(e) => this.handleChangeInput(e, "firstName")}
                type="text"
                placeholder="First Name"
                className="form-control"
              />
              <input
                value={lastName}
                onChange={(e) => this.handleChangeInput(e, "lastName")}
                type="text"
                placeholder="Last Name"
                className="form-control"
              />
            </div>

            <div className="form-wrapper">
              <input
                value={email}
                onChange={(e) => this.handleChangeInput(e, "email")}
                type="text"
                placeholder="Email Address"
                className="form-control"
              />
              <i className="zmdi zmdi-email"></i>
            </div>
            <div className="form-wrapper">
              <input
                value={phonenumber}
                onChange={(e) => this.handleChangeInput(e, "phonenumber")}
                type="text"
                placeholder="Phone Number"
                className="form-control"
              />
              <i className="zmdi zmdi-phone"></i>
            </div>
            <div className="form-wrapper">
              <select name="" id="" className="form-control">
                <option value="" disabled selected>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="femal">Female</option>
                <option value="other">Other</option>
              </select>
              <i className="zmdi zmdi-caret-down"></i>
            </div>
            <div className="form-wrapper">
              <input
                value={password}
                onChange={(e) => this.handleChangeInput(e, "password")}
                type="password"
                placeholder="Password"
                className="form-control"
              />
              <i className="zmdi zmdi-lock"></i>
            </div>

            <button onClick={() => this.handleSubmit()}>
              Register
              <i className="zmdi zmdi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
