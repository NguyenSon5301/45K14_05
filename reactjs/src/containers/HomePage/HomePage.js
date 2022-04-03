import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { LANGUAGE } from "../../utils/constant";
import HeaderHomePage from "./HeaderHomePage";
import { ChangeLanguage } from "../../store/actions/appActions";
import "../../More/styles/main_styles.css";
import sli1 from "../../More/images/slider_1.jpg";
import ProductItem from "../Product/ProductItem";
import Banner from "../Banner/Banner";
import FooterPage from "../Footer/FooterPage";
import NewLetter from "../NewLetter/NewLetter";
import Benefit from "../Benefit/Benefit";
import BestSellter from "../BetstSeller/BestSellter";
import DealOff from "../Deal/DealOff";
import Blog from "../Blog/Blog";
import HeaderBefore from "./HeaderBefore";

class HomePage extends Component {
  ChangeLanguage = (language) => {
    this.props.ChangeLanguageRedux(language);
  };
  render() {
    let check = this.props.isLoggedIn;
    if (check === true) {
    }
    console.log("check ", check);
    return (
      <>
        <div className="super_container">
          {check === true ? <HeaderHomePage /> : <HeaderBefore />}
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
          <Blog />
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
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ChangeLanguageRedux: (language) => dispatch(ChangeLanguage(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
