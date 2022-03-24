import actionTypes from "./actionTypes";
import { getUser } from "../../services/userService";
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
