import actionTypes from "./actionTypes";
import { getUser, getGender } from "../../services/userService";
import { toast } from "react-toastify";
export const fetchAllUser = () => {
  return async (dispatch) => {
    try {
      let res = await getUser("All");
      if (res && res.errCode === 0) {
        console.log("check res", res);

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
      let resGender = await getGender("GENDER");
      let resRole = await getGender("ROLE");
      if (
        resGender &&
        resGender.errCode === 0 &&
        resRole &&
        resRole.errCode === 0
      ) {
        let resRequire = {
          resGender: resGender.data,
          resRole: resRole.data,
        };
        console.log("check ", resRole, resGender);
        dispatch({
          type: actionTypes.FETCH_GENDER_ROLE_DATA_SUCCESS,
          resRequire,
        });
      } else {
        toast.error("fetch all gender failded");
        dispatch({
          type: actionTypes.FETCH_GENDER_ROLE_DATA_FAILDED,
        });
      }
    } catch (e) {
      toast.error("fetch all failded");
    }
  };
};
