import React, { Component } from "react";
import { getBlogByIdSV } from "../../services/userService";
import "./DetailBlog.scss";
import HeaderHomePage from "../HomePage/HeaderHomePage";
import NewLetter from "../NewLetter/NewLetter";
import FooterPage from "../Footer/FooterPage";
export default class DetailBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrBlogs: [],
    };
  }
  async componentDidMount() {
    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.id
    ) {
      let id = this.props.match.params.id;
      let res = await getBlogByIdSV(id);
      if (res && res.errCode === 0) {
        this.setState({
          arrBlogs: res.data,
        });
      }
    }
  }
  render() {
    let { arrBlogs } = this.state;

    return (
      <div className="detail-blog-container">
        <HeaderHomePage />
        <div className="detail-cn-body">
          <div className="description-cn">
            {arrBlogs && arrBlogs.contentHTML && (
              <>
                <div className="title-blg">{arrBlogs.title}</div>
                <hr />
                <div
                  dangerouslySetInnerHTML={{
                    __html: arrBlogs.contentHTML,
                  }}
                ></div>
              </>
            )}
          </div>
        </div>
        <NewLetter />
        <FooterPage />
      </div>
    );
  }
}
