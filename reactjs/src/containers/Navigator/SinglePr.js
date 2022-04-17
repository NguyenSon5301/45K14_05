import React, { Component } from "react";
import Benefit from "../Benefit/Benefit";
import FooterPage from "../Footer/FooterPage";
import NumberFormat from "react-number-format";
import "../../More/styles/single_styles.css";
import "./SinglePr.scss";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { LANGUAGE } from "../../utils/constant";
import { getProductById } from "../../services/userService";
import { FormattedMessage } from "react-intl";
import HeaderHomePage from "../HomePage/HeaderHomePage";
import NewLetter from "../NewLetter/NewLetter";
class SinglePr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      sumCount: 0,
      sumVi: 0,
      sumEn: 0,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.sumCount !== this.props.sumCount) {
      this.setState({
        sumCount: this.props.sumCount,
      });
    }
  }
  async componentDidMount() {
    await this.props.addQuatityProduct();
    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.id
    ) {
      let id = this.props.match.params.id;
      let res = await getProductById(id);
      if (res && res.errCode === 0) {
        this.setState({
          products: res.data,
        });
      }
    }
  }
  handlePlus = () => {
    let priceVi = +this.state.products.priceData.valueVi;
    let priceEn = +this.state.products.priceData.valueEn;
    if (this.props.language === LANGUAGE.VI) {
      this.state.sumVi = (this.state.count + 1) * priceVi;
      this.state.sumEn = (this.state.count + 1) * priceEn;
      this.setState({
        count: this.state.count + 1,
        sumVi: this.state.sumVi,
        sumEn: this.state.sumEn,
        sumCount: this.props.sumCount + 1,
      });
    } else {
      this.state.sumEn = (this.state.count + 1) * priceEn;
      this.state.sumVi = (this.state.count + 1) * priceVi;
      this.setState({
        count: this.state.count + 1,
        sumEn: this.state.sumEn,
        sumVi: this.state.sumVi,
      });
    }
  };
  handleSubtract = () => {
    if (this.state.count > 0) {
      let priceVi = +this.state.products.priceData.valueVi;
      let priceEn = +this.state.products.priceData.valueEn;
      if (this.props.language === LANGUAGE.VI) {
        this.state.sumVi = (this.state.count - 1) * priceVi;
        this.state.sumEn = (this.state.count - 1) * priceEn;
        this.setState({
          count: this.state.count - 1,
          sumVi: this.state.sumVi,
          sumEn: this.state.sumEn,
        });
      } else {
        this.state.sumEn = (this.state.count - 1) * priceEn;
        this.state.sumVi = (this.state.count - 1) * priceVi;
        this.setState({
          count: this.state.count - 1,
          sumEn: this.state.sumEn,
          sumVi: this.state.sumVi,
        });
      }
    }
  };
  render() {
    let { products, count, sumVi, sumEn } = this.state;
    let { language } = this.props;
    console.log("type of", typeof sumVi);
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
                      {products && (
                        <div
                          className="single_product_image_background"
                          style={{
                            backgroundImage: `url(${products.image})`,
                          }}
                        ></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              {products && (
                <div className="product_details">
                  <div className="product_details_title">
                    <h2>{products.namePR}</h2>
                    <p>{products.description}</p>
                  </div>
                  <div className="free_delivery d-flex flex-row align-items-center justify-content-center">
                    <span className="ti-truck"></span>
                    <span>free delivery</span>
                  </div>
                  <div className="product_prices">
                    {products &&
                      products.priceData &&
                      language === LANGUAGE.VI && (
                        <NumberFormat
                          className="currency"
                          value={products.priceData.valueVi}
                          displayType={"text"}
                          thousandSeparator={true}
                          suffix={"VND"}
                        />
                      )}
                    {products &&
                      products.priceData &&
                      language === LANGUAGE.EN && (
                        <NumberFormat
                          className="currency"
                          value={products.priceData.valueEn}
                          displayType={"text"}
                          thousandSeparator={true}
                          suffix={"$"}
                        />
                      )}
                  </div>
                  <div>
                    {language === LANGUAGE.VI && (
                      <div>
                        Tổng tiền:&nbsp;
                        <NumberFormat
                          className="currency"
                          value={sumVi}
                          displayType={"text"}
                          thousandSeparator={true}
                          suffix={"VND"}
                        />
                      </div>
                    )}
                    {language === LANGUAGE.EN && (
                      <div>
                        Sum: &nbsp;
                        <NumberFormat
                          className="currency"
                          value={sumEn}
                          displayType={"text"}
                          thousandSeparator={true}
                          suffix={"$"}
                        />
                      </div>
                    )}
                  </div>

                  <div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
                    <span>Quantity:</span>
                    <div className="quantity_selector">
                      <span
                        className="minus"
                        onClick={() => this.handleSubtract()}
                      >
                        <i className="fa fa-minus"></i>
                      </span>
                      <span id="quantity_value">{count}</span>
                      <span className="plus" onClick={() => this.handlePlus()}>
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
              )}
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
    language: state.app.language,
    sumCount: state.admin.sumCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addQuatityProduct: (sumCount) =>
      dispatch(actions.addQuatityProduct(sumCount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePr);
