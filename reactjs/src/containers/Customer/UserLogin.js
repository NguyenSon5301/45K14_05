import React, { Component } from "react";
import bg1 from "./bg_1.jpg";
import "./styleLogin.scss";
import { handleLoginApi } from "../../services/userService";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import { toast } from "react-toastify";

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showPassword: false,
      errMessage: "",
      showPassword: false,
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
    let arrCheck = ["username", "password"];
    for (let i = 0; i < arrCheck.length; i++) {
      if (!this.state[arrCheck[i]]) {
        alert("Missing required parameter: " + arrCheck[i]);
        isValid = false;
        break;
      }
    }
    return isValid;
  };
  handleLogin = async () => {
    this.setState({
      errMessage: "",
    });

    try {
      let isValid = this.checkValidateInput();
      if (isValid === false) return;
      if (isValid === true) {
        let data = await handleLoginApi(
          this.state.username,
          this.state.password
        );
        if (data && data.errCode !== 0) {
          this.setState({
            errMessage: data.message,
          });
        }
        if (data && data.errCode === 0) {
          toast.success("Login success");
          setTimeout(() => {
            this.props.history.push(`/home`);
          }, 3000);
        }
      }
    } catch (e) {
      if (e.response) {
        if (e.response.data) {
          this.setState({
            errMessage: e.response.data.message,
          });
        }
      }
      console.log("error message", e.response);
    }
  };

  handleShowHidePassword = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
    console.log(this.state.showPassword);
  };

  render() {
    let { username, password } = this.state;
    return (
      <div className="d-lg-flex half">
        <div
          className="bg order-1 order-md-2"
          style={{ backgroundImage: `url(${bg1})` }}
        ></div>
        <div className="contents order-2 order-md-1">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7">
                <div className="mb-4">
                  <h3>Sign In</h3>
                </div>
                <div>
                  <div className="form-group ">
                    <input
                      placeholder="Email"
                      type="text"
                      className="form-control"
                      value={username}
                      onChange={(e) => this.handleChangeInput(e, "username")}
                    />
                  </div>
                  <div className="form-group  mb-3">
                    <input
                      placeholder="Password"
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => this.handleChangeInput(e, "password")}
                    />
                  </div>
                  <input
                    type="submit"
                    value="Log In"
                    className="btn btn-block btn-primary"
                    onClick={() => this.handleLogin()}
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
const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
