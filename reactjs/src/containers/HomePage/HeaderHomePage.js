import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { ChangeLanguage } from "../../store/actions/appActions";
import { FormattedMessage } from "react-intl";
import { LANGUAGE, path } from "../../utils/constant";
import * as actions from "../../store/actions";
import { handleLoginApi } from "../../services/userService";
import Navigator from "../../components/Navigator";
import { NavLink } from "react-router-dom";
// import { userMenu } from "../Header/menuApp";

class HeaderHomePage extends Component {
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
    this.setState({
      user: userData,
    });
  }

  render() {
    const { processLogout, userInfo, user } = this.props;
    const { history } = this.props;
    return (
      <Fragment>
        <header className="header trans_300">
          {/* <Navigator menus={userMenu} /> */}
          <div className="top_nav">
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
                            <NavLink to={path.USERLOGIN}>
                              <FormattedMessage id={"HeaderHome.Sign-in"} />
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to={path.REGISTERUSER}>
                              <FormattedMessage id={"HeaderHome.Register"} />
                            </NavLink>
                          </li>

                          <li
                            className="btn btn-logout"
                            onClick={processLogout}
                          >
                            <i className="fas fa-sign-out-alt"></i>
                            Log out
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main_nav_container">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-right">
                  <div className="logo_container">
                    <NavLink to={path.HOMEPAGE}>
                      DANA<span>shop</span>
                    </NavLink>
                  </div>
                  <nav className="navbar">
                    <ul className="navbar_menu">
                      <li>
                        <NavLink to={path.HOMEPAGE}>
                          <FormattedMessage id={"HeaderHome.Home"} />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={path.BLOGUSER}>
                          <FormattedMessage id={"HeaderHome.Blog"} />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={path.CATEGORY}>
                          <FormattedMessage id={"HeaderHome.Category"} />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={path.CONTACT}>
                          <FormattedMessage id={"HeaderHome.Contact"} />
                        </NavLink>
                      </li>
                    </ul>
                    <ul className="navbar_user">
                      <li className="checkout">
                        <a href="#">
                          <i
                            className="fa fa-shopping-cart"
                            aria-hidden="true"
                          ></i>
                          <span id="checkout_items" className="checkout_items">
                            2
                          </span>
                        </a>
                      </li>
                    </ul>
                    <div className="hamburger_container">
                      <i className="fa fa-bars" aria-hidden="true"></i>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
      </Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderHomePage);
