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

export default class BestSellter extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div className="best_sellers">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="section_title new_arrivals_title">
                <h2>
                  <FormattedMessage id={"NewArrivals.Best-Sellers"} />
                </h2>
              </div>
            </div>
          </div>
          <Slider {...settings}>
            <div className="row">
              <div className="col">
                <div className="product_slider_container">
                  <div className="  product_slider">
                    <div className=" product_slider_item">
                      <div className="product-item">
                        <div className="product discount">
                          <div
                            className="product_image"
                            style={{ backgroundImage: `url(${prd1})` }}
                          ></div>
                          <div className="favorite favorite_left"></div>
                          <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                            <span>-$20</span>
                          </div>
                          <div className="product_info">
                            <h6 className="product_name">
                              <a href="single.html">
                                Fujifilm X100T 16 MP Digital Camera (Silver)
                              </a>
                            </h6>
                            <div className="product_price">
                              $520.00<span>$590.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" product_slider_item">
                      <div className="product-item women">
                        <div className="product">
                          <div className="product_image">
                            <img src={prd2} alt="" />
                          </div>
                          <div className="favorite"></div>
                          <div className="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center">
                            <span>new</span>
                          </div>
                          <div className="product_info">
                            <h6 className="product_name">
                              <a href="single.html">
                                Samsung CF591 Series Curved 27-Inch FHD Monitor
                              </a>
                            </h6>
                            <div className="product_price">$610.00</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" product_slider_item">
                      <div className="product-item women">
                        <div className="product">
                          <div className="product_image">
                            <img src={prd3} alt="" />
                          </div>
                          <div className="favorite"></div>
                          <div className="product_info">
                            <h6 className="product_name">
                              <a href="single.html">
                                Blue Yeti USB Microphone Blackout Edition
                              </a>
                            </h6>
                            <div className="product_price">$120.00</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" product_slider_item">
                      <div className="product-item accessories">
                        <div className="product">
                          <div className="product_image">
                            <img src={prd4} alt="" />
                          </div>
                          <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                            <span>sale</span>
                          </div>
                          <div className="favorite favorite_left"></div>
                          <div className="product_info">
                            <h6 className="product_name">
                              <a href="single.html">
                                DYMO LabelWriter 450 Turbo Thermal Label Printer
                              </a>
                            </h6>
                            <div className="product_price">$410.00</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" product_slider_item">
                      <div className="product-item women men">
                        <div className="product">
                          <div className="product_image">
                            <img src={prd5} alt="" />
                          </div>
                          <div className="favorite"></div>
                          <div className="product_info">
                            <h6 className="product_name">
                              <a href="single.html">
                                Pryma Headphones, Rose Gold & Grey
                              </a>
                            </h6>
                            <div className="product_price">$180.00</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" product_slider_item">
                      <div className="product-item accessories">
                        <div className="product discount">
                          <div className="product_image">
                            <img src={prd6} alt="" />
                          </div>
                          <div className="favorite favorite_left"></div>
                          <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                            <span>-$20</span>
                          </div>
                          <div className="product_info">
                            <h6 className="product_name">
                              <a href="single.html">
                                Fujifilm X100T 16 MP Digital Camera (Silver)
                              </a>
                            </h6>
                            <div className="product_price">
                              $520.00<span>$590.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" product_slider_item">
                      <div className="product-item women">
                        <div className="product">
                          <div className="product_image">
                            <img src={prd7} alt="" />
                          </div>
                          <div className="favorite"></div>
                          <div className="product_info">
                            <h6 className="product_name">
                              <a href="single.html">
                                Samsung CF591 Series Curved 27-Inch FHD Monitor
                              </a>
                            </h6>
                            <div className="product_price">$610.00</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" product_slider_item">
                      <div className="product-item accessories">
                        <div className="product">
                          <div className="product_image">
                            <img src={prd8} alt="" />
                          </div>
                          <div className="favorite"></div>
                          <div className="product_info">
                            <h6 className="product_name">
                              <a href="single.html">
                                Blue Yeti USB Microphone Blackout Edition
                              </a>
                            </h6>
                            <div className="product_price">$120.00</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" product_slider_item">
                      <div className="product-item men">
                        <div className="product">
                          <div className="product_image">
                            <img src={prd9} alt="" />
                          </div>
                          <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                            <span>sale</span>
                          </div>
                          <div className="favorite favorite_left"></div>
                          <div className="product_info">
                            <h6 className="product_name">
                              <a href="single.html">
                                DYMO LabelWriter 450 Turbo Thermal Label Printer
                              </a>
                            </h6>
                            <div className="product_price">$410.00</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" product_slider_item">
                      <div className="product-item men">
                        <div className="product">
                          <div className="product_image">
                            <img src={prd10} alt="" />
                          </div>
                          <div className="favorite"></div>
                          <div className="product_info">
                            <h6 className="product_name">
                              <a href="single.html">
                                Pryma Headphones, Rose Gold & Grey
                              </a>
                            </h6>
                            <div className="product_price">$180.00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="product_slider_nav_left product_slider_nav d-flex align-items-center justify-content-center flex-column">
                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
                  </div>
                  <div className="product_slider_nav_right product_slider_nav d-flex align-items-center justify-content-center flex-column">
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
