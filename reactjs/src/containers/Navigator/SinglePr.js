import React, { Component } from "react";
import Benefit from "../Benefit/Benefit";
import FooterPage from "../Footer/FooterPage";
import single1 from "../../More/images/single_1.jpg";
import single2 from "../../More/images/single_2.jpg";
import single3 from "../../More/images/single_3.jpg";
import single1_tb from "../../More/images/single_1_thumb.jpg";
import single2_tb from "../../More/images/single_2_thumb.jpg";
import single3_tb from "../../More/images/single_3_thumb.jpg";
import "../../More/styles/single_styles.css";
import "./SinglePr.scss";
import { FormattedMessage } from "react-intl";
import HeaderHomePage from "../HomePage/HeaderHomePage";
import NewLetter from "../NewLetter/NewLetter";
export default class SinglePr extends Component {
  render() {
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
                      <ul>
                        <li>
                          <img src={single1_tb} />
                        </li>
                        <li className="active">
                          <img src={single2_tb} />
                        </li>
                        <li>
                          <img src={single3_tb} />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-9  order-1">
                    <div className="single_product_image">
                      <div className="single_product_image_background">
                        <img src={single2} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="product_details">
                <div className="product_details_title">
                  <h2>
                    Pocket cotton
                    <br />
                    sweatshirt
                  </h2>
                  <p>
                    Nam tempus turpis at metus scelerisque placerat nulla
                    deumantos solicitud felis. Pellentesque diam dolor,
                    elementum etos lobortis des mollis ut...
                  </p>
                </div>
                <div className="free_delivery d-flex flex-row align-items-center justify-content-center">
                  <span className="ti-truck"></span>
                  <span>free delivery</span>
                </div>
                <div className="original_price">$629.99</div>
                <div className="product_price">$495.00</div>
                <ul className="star_rating">
                  <li>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </li>
                  <li>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </li>
                </ul>
                <div className="product_color">
                  <span>Select Color:</span>
                  <ul>
                    <li style={{ background: "#e54e5d" }}></li>

                    <li style={{ background: "#252525" }}></li>
                    <li style={{ background: "#60b3f3" }}></li>
                  </ul>
                </div>
                <div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
                  <span>Quantity:</span>
                  <div className="quantity_selector">
                    <span className="minus">
                      <i className="fa fa-minus" aria-hidden="true"></i>
                    </span>
                    <span id="quantity_value">1</span>
                    <span className="plus">
                      <i className="fa fa-plus" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className="button-add">
                    <button className="btn-add-product">
                      <FormattedMessage id={"NewArrivals.addCart"} />
                    </button>
                  </div>
                </div>
              </div>
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
