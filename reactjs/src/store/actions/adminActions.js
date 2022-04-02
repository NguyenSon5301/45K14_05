import actionTypes from "./actionTypes";

import { getUser, getGender, getBlogs } from "../../services/userService";
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
      let res = await getGender("GENDER");
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
      let res = await getGender("ROLE");
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
