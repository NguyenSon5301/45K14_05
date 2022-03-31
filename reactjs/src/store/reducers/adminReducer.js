import actionTypes from "../actions/actionTypes";

const initialState = {
  genders: [],
  role: [],
  users: [],
  roleData: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    //fetch all user
    case actionTypes.FETCH_ALL_USER_SUCCESS:
      state.users = action.users;

      return {
        ...state,
      };
    case actionTypes.FETCH_ALL_USER_FAILDED:
      state.users = [];
      return {
        ...state,
      };
    //get gender
    case actionTypes.FETCH_GENDER_SUCCESS:
      state.genders = action.dataGender;

      return {
        ...state,
      };
    case actionTypes.FETCH_GENDER_FAILDED:
      state.genders = [];
      return {
        ...state,
      };
    //get role
    case actionTypes.FETCH_ROLE_SUCCESS:
      state.roleData = action.roleData;

      return {
        ...state,
      };
    case actionTypes.FETCH_ROLE_FAILDED:
      state.roleData = [];
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default adminReducer;
