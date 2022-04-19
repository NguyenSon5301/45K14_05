import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { LANGUAGE } from "../../utils/constant";
import { ChangeLanguage } from "../../store/actions/appActions";
import "../../More/styles/main_styles.css";
import HeaderBefore from "../HomePage/HeaderBefore";
import HeaderHomePage from "../HomePage/HeaderHomePage";
import FooterPage from "../Footer/FooterPage";
import NewLetter from "../NewLetter/NewLetter";

class Cart extends Component {
  render() {
    return (
      <div className="super_container">
        {this.props.isLoggedIn ? <HeaderHomePage /> : <HeaderBefore />}
        <div className="content-cart">div</div>
        <NewLetter />
        <FooterPage />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ChangeLanguageRedux: (language) => dispatch(ChangeLanguage(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
