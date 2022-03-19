import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { ChangeLanguage } from "../../store/actions/appActions";
import { FormattedMessage } from "react-intl";
import { LANGUAGE } from "../../utils/constant";
import * as actions from "../../store/actions";
import { handleLoginApi } from "../../services/userService";

import { NavLink } from "react-router-dom";
class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  ChangeLanguage = (language) => {
    this.props.ChangeLanguageRedux(language);
  };
  async componentDidMount() {
    let userData = this.props.userData;
    let res = await handleLoginApi();
    console.log("check res", res);
    this.setState({
      user: userData,
    });
  }
  render() {
    return (
      <div className="top_nav" style={{ "z-index": "10" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="top_nav_left">
                <FormattedMessage id={"HeaderHome.title-header"} />
              </div>
            </div>
            <div className="col-md-6 text-right">
              <div className="top_nav_right">
                <ul className="top_nav_menu">
                  <li className="language">
                    <div
                      className="En"
                      onClick={() => this.ChangeLanguage(LANGUAGE.EN)}
                    >
                      English
                      <i className="fa fa-angle-down"></i>
                    </div>
                    <div className="language_selection">
                      <span
                        className="Vi"
                        onClick={() => this.ChangeLanguage(LANGUAGE.VI)}
                      >
                        Việt Nam
                      </span>
                    </div>
                  </li>
                  <li className="account">
                    <a>
                      <span>
                        <FormattedMessage id={"HeaderHome.My-account"} />
                      </span>

                      <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="account_selection">
                      <li>
                        <NavLink to={`/home/userlogin`}>
                          <FormattedMessage id={"HeaderHome.Sign-in"} />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={`/home/register`}>
                          <FormattedMessage id={"HeaderHome.Register"} />
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
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
    userInfo: state.app.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ChangeLanguageRedux: (language) => dispatch(ChangeLanguage(language)),
    processLogout: () => dispatch(actions.processLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);
