import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { ChangeLanguage } from "../../store/actions/appActions";
import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";
import * as actions from "../../store/actions";
import { LANGUAGE } from "../../utils/constant";
import { withRouter } from "react-router";
import Slider from "react-slick";
import SinglePr from "../Navigator/SinglePr";
import { path } from "../../utils/constant";
import "./Product.css";

class ProductItem extends Component {
  ChangeLanguage = (language) => {
    this.props.ChangeLanguageRedux(language);
  };
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
    if (this.props.products !== prevProps.products) {
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
    let { arrItem } = this.state;
    return (
      <Fragment>
        <div className="new_arrivals">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <div className=" new_arrivals_title">
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
                                  key={item.id}
                                  onClick={() =>
                                    this.handleViewDetailProduct(item)
                                  }
                                >
                                  {item.namePR}
                                </div>
                              </h6>
                              <div class="product_price">
                                <td>
                                  {language === LANGUAGE.VI
                                    ? item.priceData.valueVi
                                    : item.priceData.valueEn}
                                </td>
                              </div>
                            </div>
                          </div>
                          <div className="red_button add_to_cart_button">
                            <div
                              key={item.id}
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
