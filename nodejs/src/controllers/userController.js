import userService from "../services/userService";

let handleLoging = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  console.log(email, password);
  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing inputs parameter!",
    });
  }

  let userData = await userService.handleUserLogin(email, password);
  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : {},
  });
};
let AddNewUser = async (req, res) => {
  try {
    let data = await userService.handleAddNewUser(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};
let getAllUser = async (req, res) => {
  try {
    let id = req.query.id;
    let data = await userService.onGetAllUsers(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};
let deleteUser = async (req, res) => {
  try {
    let id = req.body.id;
    let data = await userService.onDeleteUser(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};
let editUser = async (req, res) => {
  try {
    let input = req.body;
    let data = await userService.onEditUser(input);
    res.status(200).json(data);
  } catch (error) {
    console.log("seer", error);
    res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};
module.exports = {
  handleLoging,
  AddNewUser,
  getAllUser,
  deleteUser,
  editUser,
};
