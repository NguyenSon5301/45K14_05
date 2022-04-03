import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Navigator from "../../components/Navigator";
import { adminMenu } from "./menuApp";
import { ChangeLanguage } from "../../store/actions/appActions";
import "./Header.scss";
import { LANGUAGE } from "../../utils/constant";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
    };
  }
  ChangeLanguage = (language) => {
    this.props.ChangeLanguageRedux(language);
  };
  render() {
    let { language } = this.props;
    const { processLogout, userInfo } = this.props;

    return (
      <div className="header-container">
        {/* thanh navigator */}
        <div className="header-tabs-container">
          <Navigator menus={adminMenu} />
        </div>
        <div className="change-language">
          <span
            className={language === LANGUAGE.EN ? "en active" : "en"}
            onClick={() => this.ChangeLanguage(LANGUAGE.EN)}
          >
            EN
          </span>

          <span
            className={language === LANGUAGE.VI ? "vi active" : "vi"}
            onClick={() => this.ChangeLanguage(LANGUAGE.VI)}
          >
            VI
          </span>
        </div>
        <div className="welcome">
          Welcome, &nbsp;
          {userInfo && userInfo.firstName ? userInfo.firstName : ""}
        </div>

        {/* nút logout */}
        <div className="btn btn-logout" onClick={processLogout}>
          <i className="fas fa-sign-out-alt"></i>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.user.userInfo,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ChangeLanguageRedux: (language) => dispatch(ChangeLanguage(language)),

    processLogout: () => dispatch(actions.processLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
