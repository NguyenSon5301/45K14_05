import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
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
import Slider from "react-slick";
import "./BestSeller.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class BestSellter extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
    };
    return (
      <div className="best_sellers">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="section_title new_arrivals_title">
                <h2 className="title-bestSeller">
                  <FormattedMessage id={"NewArrivals.Best-Sellers"} />
                </h2>
              </div>
            </div>
            <div className="section-product">
              <div className="section-content">
                <Slider {...settings}>
                  <div className="img-customer">
                    <img src={prd1} />
                    <div className="title-product">product 1</div>
                    <div className="title-price">price 1</div>
                  </div>
                  <div className="img-customer">
                    <img src={prd2} />
                    <div className="title-product">product 1</div>
                    <div className="title-price">price 1</div>
                  </div>
                  <div className="img-customer">
                    <img src={prd3} />
                    <div className="title-product">product 1</div>
                    <div className="title-price">price 1</div>
                  </div>
                  <div className="img-customer">
                    <img src={prd4} />
                    <div className="title-product">product 1</div>
                    <div className="title-price">price 1</div>
                  </div>
                  <div className="img-customer">
                    <img src={prd5} />
                    <div className="title-product">product 1</div>
                    <div className="title-price">price 1</div>
                  </div>
                  <div className="img-customer">
                    <img src={prd6} />
                    <div className="title-product">product 1</div>
                    <div className="title-price">price 1</div>
                  </div>
                  <div className="img-customer">
                    <img src={prd7} />
                    <div className="title-product">product 1</div>
                    <div className="title-price">price 1</div>
                  </div>
                  <div className="img-customer">
                    <img src={prd8} />
                    <div className="title-product">product 1</div>
                    <div className="title-price">price 1</div>
                  </div>
                  <div className="img-customer">
                    <img src={prd9} />
                    <div className="title-product">product 1</div>
                    <div className="title-price">price 1</div>
                  </div>
                  <div className="img-customer">
                    <img src={prd10} />
                    <div className="title-product">product 1</div>
                    <div className="title-price">price 1</div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
