import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter as Router } from "connected-react-router";
import { ChangeLanguage } from "../../store/actions/appActions";
import { ToastContainer } from "react-toastify";
import { FormattedMessage } from "react-intl";
import { LANGUAGE } from "../../utils/constant";
import prd1 from "../../More/images/product_1.png";
import prd2 from "../../More/images/product_2.png";
import prd3 from "../../More/images/product_3.png";
import prd4 from "../../More/images/product_4.png";
import prd5 from "../../More/images/product_5.png";
import prd6 from "../../More/images/product_6.png";
import prd7 from "../../More/images/product_7.png";
import prd8 from "../../More/images/product_8.png";
import prd9 from "../../More/images/product_9.png";
import prd10 from "../../More/images/product_10.png";
class ProductItem extends Component {
  ChangeLanguage = (language) => {
    this.props.ChangeLanguageRedux(language);
  };
  state = {
    arrItem: [
      {
        img: prd1,
        Id: 1,
        Title: "Fujifilm X100T 16 MP Digital Camera (Silver)",
        Price: "$520.00",
      },
      {
        img: prd2,
        Id: 2,
        Title: "Samsung CF591 Series Curved 27-Inch FHD Monitor",
        Price: "$610.00",
      },
      {
        img: prd3,
        Id: 3,
        Title: "Blue Yeti USB Microphone Blackout Edition",
        Price: "$120.00",
      },
      {
        img: prd4,
        Id: 4,
        Title: "DYMO LabelWriter 450 Turbo Thermal Label Printer",
        Price: "$410.00",
      },
      {
        img: prd5,
        Id: 5,
        Title: "Pryma Headphones, Rose Gold & Grey",
        Price: "$180.00",
      },
      {
        img: prd6,
        Id: 6,
        Title: "Fujifilm X100T 16 MP Digital Camera (Silver)",
        Price: "$520.00",
      },
      {
        img: prd7,
        Id: 7,
        Title: "Fujifilm X100T 16 MP Digital Camera (Silver)",
        Price: "$520.00",
      },
      {
        img: prd8,
        Id: 8,
        Title: "Fujifilm X100T 16 MP Digital Camera (Silver)",
        Price: "$520.00",
      },
      {
        img: prd9,
        Id: 9,
        Title: "Fujifilm X100T 16 MP Digital Camera (Silver)",
        Price: "$520.00",
      },
      {
        img: prd10,
        Id: 10,
        Title: "Fujifilm X100T 16 MP Digital Camera (Silver)",
        Price: "$520.00",
      },
    ],
  };
  render() {
    let { language } = this.props;
    let { arrItem } = this.state;
    return (
      <Fragment>
        <div className="new_arrivals">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <div className="section_title new_arrivals_title">
                  <h2>
                    <FormattedMessage id={"NewArrivals.Title"} />
                  </h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col text-center">
                <div className="new_arrivals_sorting">
                  <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                    <li
                      className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked"
                      data-filter="*"
                    >
                      <FormattedMessage id={"NewArrivals.All"} />
                    </li>
                    <li
                      className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
                      data-filter=".women"
                    >
                      <FormattedMessage id={"NewArrivals.WOMEN'S"} />
                    </li>
                    <li
                      className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
                      data-filter=".accessories"
                    >
                      <FormattedMessage id={"NewArrivals.accessories"} />
                    </li>
                    <li
                      className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center"
                      data-filter=".men"
                    >
                      <FormattedMessage id={"NewArrivals.men's"} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="product-grid">
                  {arrItem &&
                    arrItem.length > 0 &&
                    arrItem.map((item, index) => {
                      return (
                        <div class="product-item men" key={item.Id}>
                          <div class="product discount product_filter">
                            <div class="product_image">
                              <img src={item.img} alt="" />
                            </div>
                            <div class="favorite favorite_left"></div>
                            <div class="product_info">
                              <h6 class="product_name">
                                <a href="single.html">{item.Title}</a>
                              </h6>
                              <div class="product_price">
                                <span>{item.Price}</span>
                              </div>
                            </div>
                          </div>
                          <div class="red_button add_to_cart_button">
                            <a href="#">
                              <FormattedMessage id={"NewArrivals.addCart"} />
                            </a>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
