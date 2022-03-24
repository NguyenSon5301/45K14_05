import React, { Component } from "react";
import "./Blog.css";
import bl1 from "../../More/images/blog_1.jpg";
import bl2 from "../../More/images/blog_2.jpg";
import bl3 from "../../More/images/blog_3.jpg";
import { FormattedMessage } from "react-intl";

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrBlog: [
        {
          id: 1,
          image: bl1,
          title: <FormattedMessage id="Blogs.title" />,
          date: "by admin | dec 01, 2022",
        },
        {
          id: 2,
          image: bl2,
          title: <FormattedMessage id="Blogs.title" />,
          date: "by admin | dec 01, 2022",
        },
        {
          id: 3,
          image: bl3,
          title: <FormattedMessage id="Blogs.title" />,
          date: "by admin | dec 01, 2022",
        },
      ],
    };
  }
  render() {
    let { arrBlog } = this.state;
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
              return (
                <div class="col-lg-4 blog_item_col">
                  <div class="blog_item" key={item.id}>
                    <div class="blog_background">
                      <img src={item.image} />
                    </div>
                    <div class="blog_content d-flex flex-column align-items-center justify-content-center text-center">
                      <h4 class="blog_title">{item.title}</h4>
                      <span class="blog_meta">{item.date}</span>
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
