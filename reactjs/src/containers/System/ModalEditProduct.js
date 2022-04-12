import React, { Component } from "react";
import { ModalHeader, ModalBody, ModalFooter, Button, Modal } from "reactstrap";
// import "./ModalEditUser.scss";
import { LANGUAGE } from "../../utils/constant";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import _ from "lodash";
import CommonUtils from "../../utils/CommonUtils";
class ModalEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      namePr: "",
      price: "",
      typePr: "",
      description: "",
      image: "",
      size: "",
      arrType: [],
      arrPrice: [],
    };
  }
  onChangeInput = (event, id) => {
    let coppyState = { ...this.state };
    coppyState[id] = event.target.value;
    this.setState({
      ...coppyState,
    });
  };
  checkVaidInput = () => {
    let isValid = true;
    let arrInput = [
      "namePr",
      "price",
      "typePr",
      "description",
      "image",
      "size",
    ];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Missing parameter: " + arrInput[i]);
        break;
      }
      return isValid;
    }
  };
  //toggle
  toggle = () => {
    this.props.toogleEditProduct();
  };
  handleSaveProduct = () => {
    let isValid = this.checkVaidInput();
    if (isValid === true) {
      // call api
      this.props.editProduct(this.state);

      this.toggle();
    }
  };
  async componentDidMount() {
    await this.props.fetchAllPricePr();
    await this.props.fetchAllTypePr();
    let { currentProduct } = this.props;
    if (currentProduct && !_.isEmpty(currentProduct)) {
      this.setState({
        id: currentProduct.id,
        namePr: currentProduct.namePR,
        price: currentProduct.priceId,
        typePr: currentProduct.typeId,
        description: currentProduct.description,
        image: currentProduct.image,
        size: currentProduct.sizeId,
      });
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.arrPrices !== prevProps.arrPrices) {
      let { arrPrices } = this.props;
      this.setState({
        arrPrice: arrPrices,
        price: arrPrices && arrPrices.length > 0 ? arrPrices[0].keyMap : "",
      });
    }
    if (this.props.arrType !== prevProps.arrType) {
      let { arrType } = this.props;
      this.setState({
        arrType: arrType,
        typePr: arrType && arrType.length > 0 ? arrType[0].keyMap : "",
      });
    }
  }
  handleUpload = async (event) => {
    let data = event.target.files;
    let file = data[0];
    if (file) {
      let base64 = await CommonUtils.getBase64(file);
      this.setState({
        image: base64,
      });
    }
  };
  render() {
    let { language } = this.props;
    let {
      namePr,
      price,
      typePr,
      image,
      size,
      description,
      arrProducts,
      arrType,
      arrPrice,
    } = this.state;
    return (
      <Modal isOpen={this.props.isOpen} toggle={() => this.toggle()} size="lg">
        <ModalHeader toggle={() => this.toggle()}>Edit user</ModalHeader>
        <ModalBody>
          <div className="modal-user-container">
            <div className="modal-user-body">
              <div className="input-container max-width-input">
                <label>
                  <FormattedMessage id="Product.title" />
                </label>
                <input
                  className="form-control"
                  type="text"
                  value={namePr}
                  onChange={(event) => this.onChangeInput(event, "namePr")}
                />
              </div>

              <div className="input-container">
                <label>
                  <FormattedMessage id="Product.description" />
                </label>
                <input
                  className="form-control"
                  type="text"
                  value={description}
                  onChange={(event) => this.onChangeInput(event, "description")}
                />
              </div>
              <div className="input-container">
                <label>
                  <FormattedMessage id="Product.size" />
                </label>
                <input
                  className="form-control"
                  type="text"
                  value={size}
                  onChange={(event) => this.onChangeInput(event, "size")}
                />
              </div>

              <div className="form-group col-3">
                <label>Price</label>
                <select
                  value={price}
                  className="form-select"
                  onChange={(event) => this.onChangeInput(event, "price")}
                >
                  {arrPrice &&
                    arrPrice.length > 0 &&
                    arrPrice.map((item, index) => {
                      return (
                        <>
                          <option key={index} value={item.keyMap}>
                            {language === LANGUAGE.VI
                              ? item.valueVi
                              : item.valueEn}
                          </option>
                        </>
                      );
                    })}
                </select>
              </div>
              <div className="form-group col-3">
                <label>Type</label>
                <select
                  value={typePr}
                  className="form-select"
                  onChange={(event) => this.onChangeInput(event, "typePr")}
                >
                  {arrType &&
                    arrType.length > 0 &&
                    arrType.map((item, index) => {
                      return (
                        <>
                          <option key={index} value={item.keyMap}>
                            {language === LANGUAGE.VI
                              ? item.valueVi
                              : item.valueEn}
                          </option>
                        </>
                      );
                    })}
                </select>
              </div>
              <div className="form-group col-3 ">
                <label>file</label>
                <input
                  type="file"
                  onChange={(event) => this.handleUpload(event)}
                />
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary px-2" onClick={() => this.handleSaveProduct()}>
            Save
          </Button>
          <Button color="secondary px-2" onClick={() => this.toggle()}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    arrPrices: state.admin.arrPrices,
    arrType: state.admin.arrType,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPricePr: () => dispatch(actions.fetchAllPricePr()),
    fetchAllTypePr: () => dispatch(actions.fetchAllTypePr()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
