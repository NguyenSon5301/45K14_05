import React, { Component } from "react";
import { getProductByIdSV } from "../../services/userService";
// import "./DetailProduct.scss";
import HeaderHomePage from "../HomePage/HeaderHomePage";
import NewLetter from "../NewLetter/NewLetter";
import FooterPage from "../Footer/FooterPage";
export default class DetailProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrProducts: [],
    };
  }
  async componentDidMount() {
    if (
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.id
    ) {
      let id = this.props.match.params.id;
      let res = await getProductByIdSV(id);
      if (res && res.errCode === 0) {
        this.setState({
          arrProducts: res.data,
        });
      }
    }
  }
  render() {
    let { arrProducts } = this.state;

    return (
      <div className="detail-Product-container">
        <HeaderHomePage />
        <div className="detail-cn-body">
          <div className="description-cn">Hell</div>
        </div>
        <NewLetter />
        <FooterPage />
      </div>
    );
  }
}
