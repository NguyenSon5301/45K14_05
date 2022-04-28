import React, { Component } from "react";
import bg from "../../More/images/aaa.jpg";
import "./styleRegister.scss";
import { CreateNewUser } from "../../services/userService";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
class RegisterUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phonenumber: "",
      address: "",

      gender: "",
      roleId: "R2",
      gendersArr: [],
    };
  }
  componentDidMount() {
    this.props.fetchGenderData();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.gendersArr !== this.props.gendersArr) {
      let { gendersArr } = this.props;
      this.setState({
        gendersArr: gendersArr,
        gender: gendersArr && gendersArr.length > 0 ? gendersArr[0].keyMap : "",
      });
    }
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
      "address",
      "gender",
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
        address: this.state.address,
        gender: this.state.gender,
        roleId: this.state.roleId,
      });
      if (res && res.errCode !== 0) {
        alert(res.errMessage);
      } else {
        setTimeout(() => {
          this.props.history.push(`/home`);
        }, 1000);
      }
    }
  };
  render() {
    let {
      address,
      firstName,
      lastName,
      email,
      password,
      phonenumber,
      gendersArr,
    } = this.state;

    return (
      <div className="d-lg-flex half ">
        <div
          className="bg order-1 order-md-2 "
          style={{ backgroundImage: `url(${bg})` }}
        ></div>

        <div className="container color-title">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7">
              <div className="mb-4">
                <h3>Register</h3>
              </div>
              <div>
                <label>Email</label>
                <div className="form-group py-2">
                  <input
                    placeholder="Email"
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => this.handleChangeInput(e, "email")}
                  />
                </div>
                <label>First Name</label>
                <div className="form-group py-2">
                  <input
                    placeholder="First Name"
                    type="text"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => this.handleChangeInput(e, "firstName")}
                  />
                </div>
                <label>Last Name</label>
                <div className="form-group py-2">
                  <input
                    placeholder="Last Name"
                    type="text"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => this.handleChangeInput(e, "lastName")}
                  />
                </div>
                <label>Password</label>
                <div className="form-group py-2">
                  <input
                    placeholder="Password"
                    type="text"
                    className="form-control"
                    value={password}
                    onChange={(e) => this.handleChangeInput(e, "password")}
                  />
                </div>
                <label>Address</label>
                <div className="form-group py-2 ">
                  <input
                    placeholder="Address"
                    type="text"
                    className="form-control"
                    value={address}
                    onChange={(e) => this.handleChangeInput(e, "address")}
                  />
                </div>
                <label>phone number</label>
                <div className="form-group col-12  py-2">
                  <input
                    placeholder="Phone Number"
                    type="text"
                    className="form-control"
                    value={phonenumber}
                    onChange={(e) => this.handleChangeInput(e, "phonenumber")}
                  />
                </div>
                <div className="form-group col-3  py-2">
                  <label>Giới tính</label>
                  <select
                    className="form-select"
                    onChange={(event) =>
                      this.handleChangeInput(event, "gender")
                    }
                  >
                    <label>Giới tính</label>;
                    {gendersArr &&
                      gendersArr.length > 0 &&
                      gendersArr.map((item, index) => {
                        return (
                          <option key="{index}" value={item.keyMap}>
                            {item.valueVi}
                          </option>
                        );
                      })}
                  </select>
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
    );
  }
}
const mapStateToProps = (state) => {
  return {
    gendersArr: state.admin.genders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGenderData: () => dispatch(actions.fetchGenderData()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);
