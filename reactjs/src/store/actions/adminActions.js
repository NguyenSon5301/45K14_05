import actionTypes from "./actionTypes";

import {
  getUser,
  getAllCode,
  getBlogs,
  getProduct,
  getProductById,
  buyProductOrder,
} from "../../services/userService";
import { toast } from "react-toastify";
export const fetchAllUser = () => {
  return async (dispatch) => {
    try {
      let res = await getUser("All");
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_ALL_USER_SUCCESS,
          users: res.data,
        });
      } else {
        toast.error("fetch all failded");
        dispatch({
          type: actionTypes.FETCH_ALL_USER_FAILDED,
        });
      }
    } catch (e) {
      toast.error("fetch all failded");
    }
  };
};
export const fetchGenderData = () => {
  return async (dispatch) => {
    try {
      let res = await getAllCode("GENDER");
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_GENDER_SUCCESS,
          dataGender: res.data,
        });
      } else {
        toast.error("fetch all gender failded");
        dispatch({
          type: actionTypes.FETCH_GENDER_FAILDED,
        });
      }
    } catch (e) {
      toast.error("fetch all gender failded");
    }
  };
};
// role
export const fetchRoleData = () => {
  return async (dispatch) => {
    try {
      let res = await getAllCode("ROLE");
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_ROLE_SUCCESS,
          roleData: res.data,
        });
      } else {
        toast.error("fetch all gender failded");
        dispatch({
          type: actionTypes.FETCH_ROLE_FAILDED,
        });
      }
    } catch (e) {
      toast.error("fetch all gender failded");
    }
  };
};

// fetch all blogs
export const fetchAllBlogs = () => {
  return async (dispatch) => {
    try {
      let res = await getBlogs();
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_ALL_BLOGS_SUCCEED,
          blogData: res.data,
        });
      } else {
        toast.error("fetch all blogs failded");
        dispatch({
          type: actionTypes.FETCH_ALL_BLOGS_FAILDED,
        });
      }
    } catch (e) {
      toast.error("fetch all blogs failded");
    }
  };
};
export const adminLoginSuccess = (userInfo) => ({
  type: actionTypes.ADMIN_LOGIN_SUCCESS,
  userInfo: userInfo,
});

export const adminLoginFail = () => ({
  type: actionTypes.ADMIN_LOGIN_FAIL,
});
// fetch all product
export const fetchAllProduct = () => {
  return async (dispatch) => {
    try {
      let res = await getProduct("All");
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_ALL_PRODUCT_SUCCEED,
          products: res.data,
        });
      } else {
        toast.error("fetch all product failded");
        dispatch({
          type: actionTypes.FETCH_ALL_PRODUCT_FAILDED,
        });
      }
    } catch (e) {
      toast.error("fetch all product failded");
    }
  };
};

export const fetchAllPricePr = () => {
  return async (dispatch) => {
    try {
      let res = await getAllCode("PRICE");
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_ALL_PRICE_SUCCEED,
          arrPrices: res.data,
        });
      } else {
        toast.error("fetch all product failded");
        dispatch({
          type: actionTypes.FETCH_ALL_PRICE_FAILDED,
        });
      }
    } catch (e) {
      toast.error("fetch all product failded");
    }
  };
};
// fetch all type product
export const fetchAllTypePr = () => {
  return async (dispatch) => {
    try {
      let res = await getAllCode("TYPEPR");
      if (res && res.errCode === 0) {
        dispatch({
          type: actionTypes.FETCH_ALL_TYPE_SUCCEED,
          arrType: res.data,
        });
      } else {
        toast.error("fetch all type product failded");
        dispatch({
          type: actionTypes.FETCH_ALL_TYPE_FAILDED,
        });
      }
    } catch (e) {
      toast.error("fetch all type product failded");
    }
  };
};

/*GET_ALL_PRODUCT*/
export const actFetchProductsRequest = () => {
  return async (dispatch) => {
    try {
      let res = await getProduct("All");
      if (res && res.errCode === 0) {
        dispatch(GetAllProduct(res.data));
      } else {
        toast.error("fetch all product failded");
        dispatch({
          type: actionTypes.FETCH_ALL_PRODUCT_FAILDED,
        });
      }
    } catch (e) {
      toast.error("fetch all product failded");
    }
  };
};

/*GET_ALL_PRODUCT*/
export function GetAllProduct(payload) {
  return {
    type: "GET_ALL_PRODUCT",
    payload,
  };
}

/*GET NUMBER CART*/
export function GetNumberCart() {
  return {
    type: "GET_NUMBER_CART",
  };
}

export function AddCart(payload) {
  return {
    type: "ADD_CART",
    payload,
  };
}
export function UpdateCart(payload) {
  return {
    type: "UPDATE_CART",
    payload,
  };
}
export function DeleteCart(payload) {
  return {
    type: "DELETE_CART",
    payload,
  };
}

export function IncreaseQuantity(payload) {
  return {
    type: "INCREASE_QUANTITY",
    payload,
  };
}
export function DecreaseQuantity(payload) {
  return {
    type: "DECREASE_QUANTITY",
    payload,
  };
}
