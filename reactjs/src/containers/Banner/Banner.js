import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { LANGUAGE } from "../../utils/constant";
import { ChangeLanguage } from "../../store/actions/appActions";
import bg1 from "../../More/images/banner_1.jpg";
import bg2 from "../../More/images/banner_2.jpg";
import bg3 from "../../More/images/banner_3.jpg";
import "./Banner.css";
class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div
                className="banner_item align-items-center"
                style={{ backgroundImage: `url(${bg1})` }}
                // style="background-image:url(images/banner_1.jpg)"
              >
                <div className="banner_category">
                  <a href="categories.html">
                    <FormattedMessage id={"Banner.WOMEN'S"} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="banner_item align-items-center"
                style={{ backgroundImage: `url(${bg2})` }}
                // style={{background-image:'url(images/banner_2.jpg)'}}
              >
                <div className="banner_category">
                  <a href="categories.html">
                    <FormattedMessage id={"Banner.accessories's"} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="banner_item align-items-center"
                style={{ backgroundImage: `url(${bg3})` }}
              >
                <div className="banner_category">
                  <a href="categories.html">
                    <FormattedMessage id={"Banner.men's"} />
                  </a>
                </div>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ChangeLanguageRedux: (language) => dispatch(ChangeLanguage(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
