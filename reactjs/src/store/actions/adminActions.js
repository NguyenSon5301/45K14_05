import actionTypes from "./actionTypes";
import { toast } from "react-toastify";
import { getUser } from "../../services/userService";
export const fetchAllUSerRedux = () => {
  return async (dispatch) => {
    try {
      let res = await getUser("All");

      if (res && res.errCode === 0) {
        console.log("check res", res.data);
        dispatch({
          type: actionTypes.FETCH_ALL_USER_SUCCESS,
          allUser: res.data,
        });
      } else {
        toast.error("fetch all user failded");
        dispatch({
          type: actionTypes.FETCH_ALL_USER_FAILDED,
        });
      }
    } catch (e) {
      toast.error("fetch all user failded");
    }
  };
};
