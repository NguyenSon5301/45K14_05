import React, { Component } from "react";
import "./Blog.css";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { FormattedMessage } from "react-intl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Blog.css";
import { getBlogs } from "../../services/userService";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrBlogs: [],
    };
  }

  async componentDidMount() {
    let res = await getBlogs();

    if (res && res.errCode === 0) {
      this.setState({
        arrBlogs: res.data,
      });
    }
  }

  // move to detail blog
  handleViewDetailBlog = (item) => {
    this.props.history.push(`/detail_blog/${item.id}`);
  };
  render() {
    let { arrBlogs } = this.state;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      accessibility: true,
      arrows: true,
    };
    return (
      <div className="blogs">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="section_title">
                <h2>
                  <FormattedMessage id="Blogs.header" />
                </h2>
              </div>
            </div>
          </div>

          <div className="row blogs_container">
            <Slider {...settings}>
              {arrBlogs &&
                arrBlogs.length > 0 &&
                arrBlogs.map((item, index) => {
                  let imageBase64 = "";
                  if (item.image) {
                    imageBase64 = new Buffer(item.image, "base64").toString(
                      "binary"
                    );
                  }
                  return (
                    <div className="col-lg-4 blog_item_col">
                      <div
                        className="blog_item"
                        key="{index}"
                        onClick={() => this.handleViewDetailBlog(item)}
                      >
                        <div
                          class="blog_background"
                          style={{ backgroundImage: `url(${imageBase64})` }}
                        ></div>
                        <div className="blog_content d-flex flex-column align-items-center justify-content-center text-center">
                          <h4 className="blog_title">{item.description}</h4>
                          <span className="blog_meta">{item.createdAt}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    arrBlogs: state.admin.blogData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Blog));
