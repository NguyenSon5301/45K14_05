import React, { Component } from "react";
import "./Blog.css";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import { FormattedMessage } from "react-intl";
class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrBlogs: [],
    };
  }
  componentDidMount() {
    this.props.fetchAllBlogs();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.arrBlogs !== prevProps.arrBlogs) {
      let { arrBlogs } = this.props;
      this.setState({
        arrBlogs: arrBlogs,
      });
    }
  }
  // move to detail blog
  handleViewDetailBlog = (item) => {
    this.props.history.push(`/detail_blog/${item.id}`);
  };
  render() {
    let { arrBlogs } = this.state;
    return (
      <div class="blogs">
        <div class="container">
          <div class="row">
            <div class="col text-center">
              <div class="section_title">
                <h2>
                  <FormattedMessage id="Blogs.header" />
                </h2>
              </div>
            </div>
          </div>

          <div class="row blogs_container">
            {arrBlogs.map((item, index) => {
              let imageBase64 = "";
              if (item.image) {
                imageBase64 = new Buffer(item.image, "base64").toString(
                  "binary"
                );
              }
              return (
                <div class="col-lg-4 blog_item_col">
                  <div
                    class="blog_item"
                    key={item.id}
                    onClick={() => this.handleViewDetailBlog(item)}
                  >
                    <div
                      class="blog_background"
                      style={{ backgroundImage: `url(${imageBase64})` }}
                    ></div>
                    <div class="blog_content d-flex flex-column align-items-center justify-content-center text-center">
                      <h4 class="blog_title">{item.description}</h4>
                      <span class="blog_meta">{item.createdAt}</span>
                    </div>
                  </div>
                </div>
              );
            })}
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
  return {
    fetchAllBlogs: () => dispatch(actions.fetchAllBlogs()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Blog));
