import React, { Component } from "react";
import HeaderHomePage from "../HomePage/HeaderHomePage";
import Footer from "../Footer/FooterPage";
import Newsletter from "../NewLetter/NewLetter";
import ProductItem from "../Product/ProductItem";
import "../../More/styles/categories_styles.css";
export default class Category extends Component {
  render() {
    return (
      <div class="super_container">
        <HeaderHomePage />

        <div class="fs_menu_overlay"></div>

        {/* <!-- Hamburger Menu --> */}

        <div class="container product_section_container">
          <div class="row">
            <div class="col product_section clearfix">
              {/* <!-- Sidebar --> */}

              <div class="sidebar">
                <div class="sidebar_section">
                  <div class="sidebar_title">
                    <h5>Product Category</h5>
                  </div>
                  <ul class="sidebar_categories">
                    <li>
                      <a href="#">Men</a>
                    </li>
                    <li class="active">
                      <a href="#">
                        <span>
                          <i
                            class="fa fa-angle-double-right"
                            aria-hidden="true"
                          ></i>
                        </span>
                        Women
                      </a>
                    </li>
                    <li>
                      <a href="#">Accessories</a>
                    </li>
                    <li>
                      <a href="#">New Arrivals</a>
                    </li>
                    <li>
                      <a href="#">Collection</a>
                    </li>
                    <li>
                      <a href="#">Shop</a>
                    </li>
                  </ul>
                </div>

                {/* <!-- Price Range Filtering -->

            <!-- Sizes --> */}
                <div class="sidebar_section">
                  <div class="sidebar_title">
                    <h5>Sizes</h5>
                  </div>
                  <ul class="checkboxes">
                    <li>
                      <i class="fa fa-square-o" aria-hidden="true"></i>
                      <span>S</span>
                    </li>
                    <li class="active">
                      <i class="fa fa-square" aria-hidden="true"></i>
                      <span>M</span>
                    </li>
                    <li>
                      <i class="fa fa-square-o" aria-hidden="true"></i>
                      <span>L</span>
                    </li>
                    <li>
                      <i class="fa fa-square-o" aria-hidden="true"></i>
                      <span>XL</span>
                    </li>
                    <li>
                      <i class="fa fa-square-o" aria-hidden="true"></i>
                      <span>XXL</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <!-- Main Content --> */}

              <div class="main_content">
                {/* <!-- Products --> */}
                <ProductItem />
                <div class="products_iso">
                  <div class="row">
                    <div class="col">
                      {/* <!-- Product Sorting --> */}

                      <div class="product_sorting_container product_sorting_container_top">
                        <ul class="product_sorting">
                          <li>
                            <span class="type_sorting_text">
                              Default Sorting
                            </span>
                            <i class="fa fa-angle-down"></i>
                            <ul class="sorting_type">
                              <li
                                class="type_sorting_btn"
                                data-isotope-option='{ "sortBy": "original-order" }'
                              >
                                <span>Default Sorting</span>
                              </li>
                              <li
                                class="type_sorting_btn"
                                data-isotope-option='{ "sortBy": "price" }'
                              >
                                <span>Price</span>
                              </li>
                              <li
                                class="type_sorting_btn"
                                data-isotope-option='{ "sortBy": "name" }'
                              >
                                <span>Product Name</span>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <span>Show</span>
                            <span class="num_sorting_text">6</span>
                            <i class="fa fa-angle-down"></i>
                            <ul class="sorting_num">
                              <li class="num_sorting_btn">
                                <span>6</span>
                              </li>
                              <li class="num_sorting_btn">
                                <span>12</span>
                              </li>
                              <li class="num_sorting_btn">
                                <span>24</span>
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <div class="pages d-flex flex-row align-items-center">
                          <div class="page_current">
                            <span>1</span>
                            <ul class="page_selection">
                              <li>
                                <a href="#">1</a>
                              </li>
                              <li>
                                <a href="#">2</a>
                              </li>
                              <li>
                                <a href="#">3</a>
                              </li>
                            </ul>
                          </div>
                          <div class="page_total">
                            <span>of</span> 3
                          </div>
                          <div id="next_page" class="page_next">
                            <a href="#">
                              <i
                                class="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="product_sorting_container product_sorting_container_bottom clearfix">
                        <ul class="product_sorting">
                          <li>
                            <span>Show:</span>
                            <span class="num_sorting_text">04</span>
                            <i class="fa fa-angle-down"></i>
                            <ul class="sorting_num">
                              <li class="num_sorting_btn">
                                <span>01</span>
                              </li>
                              <li class="num_sorting_btn">
                                <span>02</span>
                              </li>
                              <li class="num_sorting_btn">
                                <span>03</span>
                              </li>
                              <li class="num_sorting_btn">
                                <span>04</span>
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <span class="showing_results">
                          Showing 1–3 of 12 results
                        </span>
                        <div class="pages d-flex flex-row align-items-center">
                          <div class="page_current">
                            <span>1</span>
                            <ul class="page_selection">
                              <li>
                                <a href="#">1</a>
                              </li>
                              <li>
                                <a href="#">2</a>
                              </li>
                              <li>
                                <a href="#">3</a>
                              </li>
                            </ul>
                          </div>
                          <div class="page_total">
                            <span>of</span> 3
                          </div>
                          <div id="next_page_1" class="page_next">
                            <a href="#">
                              <i
                                class="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ben />

        <Newsletter />

        <Footer />
      </div>
    );
  }
}
