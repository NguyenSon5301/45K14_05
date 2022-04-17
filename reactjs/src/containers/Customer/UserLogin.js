import React, { Component } from "react";
import bg1 from "./bg_1.jpg";
import "./styleLogin.scss";
import { handleLoginApi } from "../../services/userService";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      showPassword: false,
      errMessage: "",
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
          this.props.userLoginSuccess(data.user);

          setTimeout(() => {
            this.props.history.push(`/home`);
          }, 1000);
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
  };

  render() {
    let { username, password } = this.state;
    return (
      <div className="d-lg-flex half ">
        <div
          className="bg order-1 order-md-2 "
          style={{ backgroundImage: `url(${bg1})` }}
        ></div>

        <div className="container color-title">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7">
              <div className="mb-4">
                <h3>Sign in</h3>
              </div>
              <div>
                <label>Email</label>
                <div className="form-group py-2">
                  <input
                    placeholder="Email"
                    type="email"
                    className="form-control"
                    value={username}
                    onChange={(e) => this.handleChangeInput(e, "username")}
                  />
                </div>

                <label>Password</label>
                <div className="form-group col-12 py-3 login-password">
                  <input
                    type={this.state.showPassword ? "text" : "password"}
                    className="form-control "
                    placeholder="Password"
                    value={password}
                    onChange={(e) => this.handleChangeInput(e, "password")}
                  />
                  <span
                    className="icon-show"
                    onClick={() => this.handleShowHidePassword()}
                  >
                    <i
                      className={
                        this.state.showPassword
                          ? "fas fa-eye show-password"
                          : "fas fa-eye-slash show-password"
                      }
                    ></i>
                  </span>
                </div>
                <div className="col-12" style={{ color: "red" }}>
                  {this.state.errMessage}
                </div>
                <button
                  className="btn btn-block btn-primary"
                  onClick={() => this.handleLogin()}
                >
                  Submit
                </button>
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
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
