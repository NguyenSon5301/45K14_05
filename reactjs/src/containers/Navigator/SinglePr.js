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
import HeaderBefore from "../HomePage/HeaderBefore";
class SinglePr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    await window.scrollTo(0, 0);
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
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    let { products } = this.state;
    console.log("check products", products.image);
    let { language } = this.props;
    let imageBase64 = "";
    if (products.image) {
      imageBase64 = new Buffer(products.image, "base64").toString("binary");
    }
    return (
      <>
        {this.props.isLoggedIn ? <HeaderHomePage /> : <HeaderBefore />}
        <div className="super_container mg-single">
          <div className="row">
            <div className="col-lg-6">
              <div className="single_product_pics">
                <div className="row">
                  <div className="col-lg-9  order-1">
                    <div className="single_product_image">
                      {products && (
                        <div
                          className="single_product_image_background"
                          style={{
                            backgroundImage: `url(${imageBase64})`,
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
                    <span>
                      <FormattedMessage id="Product.free_delivery" />
                    </span>
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

                  <div
                    className="button-add"
                    style={{ width: "120px", "margin-left": "-20px" }}
                  >
                    <button
                      className="btn-add-product my-2"
                      onClick={() => this.props.AddCart(products)}
                    >
                      <FormattedMessage id={"NewArrivals.addCart"} />
                    </button>
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
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    IncreaseQuantity: (item) => dispatch(actions.IncreaseQuantity(item)),
    DecreaseQuantity: (item) => dispatch(actions.DecreaseQuantity(item)),
    AddCart: (item) => dispatch(actions.AddCart(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SinglePr);
