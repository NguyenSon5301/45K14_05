import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { ChangeLanguage } from "../../store/actions/appActions";
import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";
import * as actions from "../../store/actions";
import { LANGUAGE } from "../../utils/constant";
import { withRouter } from "react-router";
import NumberFormat from "react-number-format";

import "./Product.css";

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }
  async componentDidMount() {
    await this.props.fetchAllProduct();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.products !== this.props.products) {
      let { products } = this.props;
      this.setState({
        products: products,
      });
    }
  }
  handleViewDetailProduct = (item) => {
    this.props.history.push(`/SinglePr/${item.id}`);
  };

  render() {
    let { products } = this.state;
    let { language } = this.props;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };

    return (
      <Fragment>
        <div className="new_arrivals">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <div className="new_arrivals_title">
                  <h2 className="title-product">
                    <FormattedMessage id={"NewArrivals.Title"} />
                    <hr className="underline" />
                  </h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col text-center">
                <div className="new_arrivals_sorting">
                  <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                    <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center active is-checked">
                      <FormattedMessage id={"NewArrivals.All"} />
                    </li>
                    <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center">
                      <FormattedMessage id={"NewArrivals.WOMEN'S"} />
                    </li>
                    <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center">
                      <FormattedMessage id={"NewArrivals.accessories"} />
                    </li>
                    <li className="grid_sorting_button button d-flex flex-column justify-content-center align-items-center">
                      <FormattedMessage id={"NewArrivals.men's"} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="product-grid">
                  {products &&
                    products.length > 0 &&
                    products.map((item, index) => {
                      let imageBase64 = "";
                      if (item.image) {
                        imageBase64 = new Buffer(item.image, "base64").toString(
                          "binary"
                        );
                      }
                      return (
                        <div class="product-item ">
                          <div class="product discount product_filter">
                            <div
                              class="product_image"
                              style={{
                                backgroundImage: `url(${imageBase64})`,
                              }}
                            ></div>
                            <div class="product_info">
                              <h6 class="product_name">
                                <div
                                  key={index}
                                  onClick={() =>
                                    this.handleViewDetailProduct(item)
                                  }
                                >
                                  {item.namePR}
                                </div>
                              </h6>
                              <div className="product_prices">
                                {item &&
                                  item.priceData &&
                                  language === LANGUAGE.VI && (
                                    <NumberFormat
                                      className="currency"
                                      value={item.priceData.valueVi}
                                      displayType={"text"}
                                      thousandSeparator={true}
                                      suffix={"VND"}
                                    />
                                  )}
                                {item &&
                                  item.priceData &&
                                  language === LANGUAGE.EN && (
                                    <NumberFormat
                                      className="currency"
                                      value={item.priceData.valueEn}
                                      displayType={"text"}
                                      thousandSeparator={true}
                                      suffix={"$"}
                                    />
                                  )}
                              </div>
                            </div>
                          </div>
                          <div className="red_button add_to_cart_button">
                            <div
                              key={index}
                              onClick={() => this.handleViewDetailProduct(item)}
                            >
                              <FormattedMessage id={"NewArrivals.addCart"} />
                            </div>
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
    products: state.admin.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ChangeLanguageRedux: (language) => dispatch(ChangeLanguage(language)),
    fetchAllProduct: () => dispatch(actions.fetchAllProduct()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProductItem)
);
