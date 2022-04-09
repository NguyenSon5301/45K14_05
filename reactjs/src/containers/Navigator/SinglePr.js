import React, { Component } from "react";
import Benefit from "../Benefit/Benefit";
import FooterPage from "../Footer/FooterPage";
import NumberFormat from "react-number-format";
import "../../More/styles/single_styles.css";
import "./SinglePr.scss";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { LANGUAGE } from "../../utils/constant";

import { FormattedMessage } from "react-intl";
import HeaderHomePage from "../HomePage/HeaderHomePage";
import NewLetter from "../NewLetter/NewLetter";
class SinglePr extends Component {
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
  render() {
    let { products } = this.state;
    let { language } = this.props;

    return (
      <>
        <HeaderHomePage />
        <div className="super_container mg-single">
          <div className="row">
            <div className="col-lg-6">
              <div className="single_product_pics">
                <div className="row">
                  <div className="col-lg-3 thumbnails_col order-lg-1 order-2">
                    <div className="single_product_thumbnails">
                      <ul></ul>
                    </div>
                  </div>
                  <div className="col-lg-9  order-1">
                    <div className="single_product_image">
                      {products &&
                        products.length > 0 &&
                        products.map((item, index) => {
                          let imageBase64 = "";
                          if (item.image) {
                            imageBase64 = new Buffer(
                              item.image,
                              "base64"
                            ).toString("binary");
                          }
                          return (
                            <div
                              className="single_product_image_background"
                              style={{
                                backgroundImage: `url(${imageBase64})`,
                              }}
                            ></div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              {products &&
                products.length > 0 &&
                products.map((item, index) => {
                  return (
                    <div className="product_details">
                      <div className="product_details_title">
                        <h2>{item.namePR}</h2>
                        <p>{item.description}</p>
                      </div>
                      <div className="free_delivery d-flex flex-row align-items-center justify-content-center">
                        <span className="ti-truck"></span>
                        <span>free delivery</span>
                      </div>
                      <div className="product_prices" sty>
                        {language === LANGUAGE.VI && (
                          <NumberFormat
                            className="currency"
                            value={item.priceData.valueVi}
                            displayType={"text"}
                            thousandSeparator={true}
                            suffix={"VND"}
                          />
                        )}
                        {language === LANGUAGE.EN && (
                          <NumberFormat
                            className="currency"
                            value={item.priceData.valueEn}
                            displayType={"text"}
                            thousandSeparator={true}
                            suffix={"$"}
                          />
                        )}
                      </div>

                      <div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
                        <span>Quantity:</span>
                        <div className="quantity_selector">
                          <span className="minus">
                            <i className="fa fa-minus"></i>
                          </span>
                          <span id="quantity_value">1</span>
                          <span className="plus">
                            <i className="fa fa-plus"></i>
                          </span>
                        </div>
                        <div className="button-add">
                          <button className="btn-add-product">
                            <FormattedMessage id={"NewArrivals.addCart"} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
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
    products: state.admin.products,
    arrPrices: state.admin.arrPrices,
    arrType: state.admin.arrType,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProduct: () => dispatch(actions.fetchAllProduct()),
    fetchAllPricePr: () => dispatch(actions.fetchAllPricePr()),
    fetchAllTypePr: () => dispatch(actions.fetchAllTypePr()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePr);
