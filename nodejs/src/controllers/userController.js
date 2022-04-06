import userService from "../services/userService";
import mailServices from "../services/mailServices";

let handleLoging = async (req, res) => {
  try {
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
      return res.status(200).json({
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
  } catch (error) {}
};
let AddNewUser = async (req, res) => {
  try {
    let data = await userService.handleAddNewUser(req.body);
    res.status(200).json(data);
  } catch (error) {
    console.log("check error", error);
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
    return res.status(200).json(data);
  } catch (error) {
    console.log("check err", error);
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
    return res.status(200).json(data);
  } catch (error) {
    res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};
let sendEmail = async (req, res) => {
  try {
    let input = req.body;
    let data = await mailServices.sendMailSV(input);
    res.status(200).json(data);
  } catch (error) {
    res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};
// mew letter
let sendNewLetter = async (req, res) => {
  try {
    let email = req.body.email;
    let data = await mailServices.sendNewLetterSV(email);
    return res.status(200).json(data);
  } catch (error) {
    res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};
let getAllCode = async (req, res) => {
  try {
    let data = await userService.getAllCodeSV(req.query.type);

    return res.status(200).json(data);
  } catch (error) {
    res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};
// blog
let createBlog = async (req, res) => {
  try {
    let data = await userService.createBlogSV(req.body);

    return res.status(200).json(data);
  } catch (error) {
    res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};

let getBlog = async (req, res) => {
  try {
    let data = await userService.getBlogSV();

    return res.status(200).json(data);
  } catch (error) {
    res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};
let getBlogById = async (req, res) => {
  try {
    let data = await userService.getBlogByIdSV(req.query.id);

    return res.status(200).json(data);
  } catch (error) {
    res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};
let deleteBlog = async (req, res) => {
  try {
    let id = req.body.id;
    let data = await userService.onDeleteBlog(id);
    return res.status(200).json(data);
  } catch (error) {
    res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};
let getContact = async (req, res) => {
  try {
    let data = await userService.getContactSV();
    return res.status(200).json(data);
  } catch (error) {
    res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};
let deleteContact = async (req, res) => {
  try {
    let data = await userService.deleteContactSV(req.query.id);
    return res.status(200).json(data);
  } catch (error) {
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
  sendNewLetter,
  sendEmail,
  getAllCode,
  createBlog,
  getBlog,
  getBlogById,
  deleteBlog,
  getContact,
  deleteContact,
};
