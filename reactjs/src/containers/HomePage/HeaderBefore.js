import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { ChangeLanguage } from "../../store/actions/appActions";
import { FormattedMessage } from "react-intl";
import { LANGUAGE, path } from "../../utils/constant";
import * as actions from "../../store/actions";
import { NavLink } from "react-router-dom";
// import { userMenu } from "../Header/menuApp";

class HeaderBefore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  ChangeLanguage = (language) => {
    this.props.ChangeLanguageRedux(language);
  };

  render() {
    return (
      <Fragment>
        <header className="header trans_300">
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
                          <span>Not Login</span>

                          <i className="fa fa-angle-down"></i>
                        </a>
                        <ul
                          className="account_selection"
                          style={{ height: "100px", width: "128px" }}
                        >
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
                          <span
                            id="checkout_items"
                            className="checkout_items"
                          ></span>
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
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    ChangeLanguageRedux: (language) => dispatch(ChangeLanguage(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBefore);
