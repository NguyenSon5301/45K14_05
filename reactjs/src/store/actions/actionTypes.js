const actionTypes = Object.freeze({
  //app
  APP_START_UP_COMPLETE: "APP_START_UP_COMPLETE",
  SET_CONTENT_OF_CONFIRM_MODAL: "SET_CONTENT_OF_CONFIRM_MODAL",

  //user
  ADD_USER_SUCCESS: "ADD_USER_SUCCESS",
  USER_LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",
  USER_LOGIN_FAIL: "USER_LOGIN_FAIL",
  PROCESS_LOGOUT: "PROCESS_LOGOUT",
  // admin
  ADMIN_LOGIN_SUCCESS: "ADMIN_LOGIN_SUCCESS",
  ADMIN_LOGIN_FAIL: "ADMIN_LOGIN_FAIL",
  PROCESS_LOGOUT: "PROCESS_LOGOUT",
  // CHANGE
  CHANGE_LANGUAGE: "CHANGE_LANGUAGE",
  // fetchAllUSer

  FETCH_ALL_USER_SUCCESS: "FETCH_ALL_USER_SUCCESS",
  FETCH_ALL_USER_FAILDED: "FETCH_ALL_USER_FAILDED",
  //fetch gender
  FETCH_GENDER_SUCCESS: "FETCH_GENDER_SUCCESS",
  FETCH_GENDER_FAILDED: "FETCH_GENDER_FAILDED",
  //fetch role
  FETCH_ROLE_SUCCESS: "FETCH_ROLE_SUCCESS",
  FETCH_ROLE_FAILDED: "FETCH_ROLE_FAILDED",
  //fetch all blogs
  FETCH_ALL_BLOGS_SUCCEED: "FETCH_ALL_BLOGS_SUCCEED",
  FETCH_ALL_BLOGS_FAILDED: "FETCH_ALL_BLOGS_FAILDED",
});

export default actionTypes;
