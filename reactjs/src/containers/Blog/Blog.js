import React, { Component } from "react";
import "./Blog.css";

import { FormattedMessage } from "react-intl";
import { getBlogs } from "../../services/userService";
export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrBlog: [],
    };
  }
  async componentDidMount() {
    let res = await getBlogs();
    console.log("check res", res);
    if (res && res.errCode === 0) {
      this.setState({
        arrBlog: res.data,
      });
    }
  }
  render() {
    let { arrBlog } = this.state;
    console.log("check state", this.state);
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
            {arrBlog.map((item, index) => {
              let imageBase64 = "";
              if (item.image) {
                imageBase64 = new Buffer(item.image, "base64").toString(
                  "binary"
                );
              }
              return (
                <div class="col-lg-4 blog_item_col">
                  <div class="blog_item" key={item.id}>
                    <div
                      class="blog_background"
                      style={{ backgroundImage: `url(${imageBase64})` }}
                    ></div>
                    <div class="blog_content d-flex flex-column align-items-center justify-content-center text-center">
                      <h4 class="blog_title">{item.description}</h4>
                      <span class="blog_meta">{item.createdAt}</span>
                      <a class="blog_more" href="#">
                        Read more
                      </a>
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
