import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import * as actions from "../../store/actions";
import Slider from "react-slick";
import "./BestSeller.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from "react-redux";
import { ChangeLanguage } from "../../store/actions/appActions";
import { LANGUAGE } from "../../utils/constant";
import { withRouter } from "react-router";
import NumberFormat from "react-number-format";
import { getProduct } from "../../services/userService";
class BestSellter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    let res = await getProduct("All");
    if (res && res.errCode === 0) {
      this.setState({
        products: res.data,
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
      slidesToShow: 4,
      slidesToScroll: 4,
    };
    return (
      <div className="best_sellers">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="new_arrivals_title">
                <h2 className="title-bestSeller">
                  <FormattedMessage id={"NewArrivals.Best-Sellers"} />
                </h2>
              </div>
            </div>
            <div className="section-product">
              <Slider {...settings}>
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
                      <div
                        className="section-content"
                        onClick={() => this.handleViewDetailProduct(item)}
                      >
                        <div className="img-customer" key={index}>
                          <div
                            className="img-product"
                            style={{
                              backgroundImage: `url(${imageBase64})`,
                            }}
                          ></div>
                          <div className="title-product"> {item.namePR}</div>
                          <div className="title-price">
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
                    );
                  })}
              </Slider>
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
  connect(mapStateToProps, mapDispatchToProps)(BestSellter)
);
