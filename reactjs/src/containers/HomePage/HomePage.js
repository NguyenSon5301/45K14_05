import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { LANGUAGE } from "../../utils/constant";
import HeaderHomePage from "./HeaderHomePage";
import { ChangeLanguage } from "../../store/actions/appActions";
import "../../More/styles/bootstrap4/bootstrap.min.css";
import "../../More/plugins/font-awesome-4.7.0/css/font-awesome.min.css";
import "../../More/styles/main_styles.css";
import "../../More/styles/responsive.css";
import sli1 from "../../More/images/slider_1.jpg";
import ProductItem from "../Product/ProductItem";
import Banner from "../Banner/Banner";
import FooterPage from "../Footer/FooterPage";
import NewLetter from "../NewLetter/NewLetter";
import Benefit from "../Benefit/Benefit";
import BestSellter from "../BetstSeller/BestSellter";
import DealOff from "../Deal/DealOff";

class HomePage extends Component {
  ChangeLanguage = (language) => {
    this.props.ChangeLanguageRedux(language);
  };
  render() {
    let { language } = this.props;
    return (
      <>
        <div className="super_container">
          {/* header */}

          <HeaderHomePage language={this.props.language} />
          <div className="fs_menu_overlay"></div>
          <div className="hamburger_menu">
            <div className="hamburger_close">
              <i className="fa fa-times" aria-hidden="true"></i>
            </div>
            <div className="hamburger_menu_content text-right">
              <ul className="menu_top_nav">
                <li className="menu_item has-children"></li>
                <li className="menu_item has-children">
                  <a href="#">
                    English
                    <i className="fa fa-angle-down"></i>
                  </a>
                  <ul className="menu_selection">
                    <li>
                      <a href="#">French</a>
                    </li>
                    <li>
                      <a href="#">Italian</a>
                    </li>
                    <li>
                      <a href="#">German</a>
                    </li>
                    <li>
                      <a href="#">Spanish</a>
                    </li>
                  </ul>
                </li>
                <li className="menu_item has-children">
                  <a href="#">
                    My Account
                    <i className="fa fa-angle-down"></i>
                  </a>
                  <ul className="menu_selection">
                    <li>
                      <a href="#">
                        <i className="fa fa-sign-in" aria-hidden="true"></i>Sign
                        In
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-user-plus" aria-hidden="true"></i>
                        Register
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu_item">
                  <a href="#">home</a>
                </li>
                <li className="menu_item">
                  <a href="#">shop</a>
                </li>
                <li className="menu_item">
                  <a href="#">promotion</a>
                </li>
                <li className="menu_item">
                  <a href="#">pages</a>
                </li>
                <li className="menu_item">
                  <a href="#">blog</a>
                </li>
                <li className="menu_item">
                  <a href="#">contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="main_slider"
            style={{ backgroundImage: `url(${sli1})` }}
          >
            <div className="container fill_height">
              <div className="row align-items-center fill_height">
                <div className="col">
                  <div className="main_slider_content">
                    <h6>
                      <FormattedMessage id={"Banner.title-banner"} />
                    </h6>
                    <h1>
                      <FormattedMessage id={"Banner.title-banner-price"} />
                    </h1>
                    <div className="red_button shop_now_button">
                      <a href="#">
                        <FormattedMessage id={"Banner.shopButton"} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Banner />
          <ProductItem />
          <DealOff />
          <BestSellter />
          <Benefit />
          <NewLetter />
          <FooterPage />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ChangeLanguageRedux: (language) => dispatch(ChangeLanguage(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
