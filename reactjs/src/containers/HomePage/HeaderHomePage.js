import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { ChangeLanguage } from "../../store/actions/appActions";
import { FormattedMessage } from "react-intl";
import { LANGUAGE } from "../../utils/constant";

import { NavLink } from "react-router-dom";

class HeaderHomePage extends Component {
  ChangeLanguage = (language) => {
    this.props.ChangeLanguageRedux(language);
  };

  render() {
    let { language } = this.props;
    const { history } = this.props;
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
                          <span>
                            <FormattedMessage id={"HeaderHome.My-account"} />
                          </span>

                          <i className="fa fa-angle-down"></i>
                        </a>
                        <ul className="account_selection">
                          <li>
                            <NavLink to={`/home/userlogin`}>
                              <i
                                className="fa fa-sign-in"
                                aria-hidden="true"
                              ></i>
                              <FormattedMessage id={"HeaderHome.Sign-in"} />
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to={`/home/register`}>
                              <i
                                className="fa fa-user-plus"
                                aria-hidden="true"
                              ></i>
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
                    <a href="#">
                      DANA<span>shop</span>
                    </a>
                  </div>
                  <nav className="navbar">
                    <ul className="navbar_menu">
                      <li>
                        <NavLink to="/home">
                          <FormattedMessage id={"HeaderHome.Home"} />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/">
                          <FormattedMessage id={"HeaderHome.Shop"} />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/">
                          <FormattedMessage id={"HeaderHome.Promotion"} />
                        </NavLink>
                      </li>
                      <li></li>
                      <li>
                        <a href="#">
                          {" "}
                          <FormattedMessage id={"HeaderHome.Blog"} />
                        </a>
                      </li>
                      <li>
                        <a href="contact.html">
                          {" "}
                          <FormattedMessage id={"HeaderHome.Contact"} />
                        </a>
                      </li>
                    </ul>
                    <ul className="navbar_user">
                      <li>
                        <a href="#">
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-user" aria-hidden="true"></i>
                        </a>
                      </li>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ChangeLanguageRedux: (language) => dispatch(ChangeLanguage(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderHomePage);
