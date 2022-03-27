import db from "../models/index";
import bcrypt from "bcryptjs";
const salt = bcrypt.genSaltSync(10);

let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkUserEmail(email);
      if (isExist) {
        //user already exist
        let user = await db.User.findOne({
          attributes: ["email", "password", "firstName", "lastName"],
          where: { email: email },
          raw: true,
        });
        if (user) {
          let check = await bcrypt.compare(password, user.password);
          if (check) {
            userData.errCode = 0;
            userData.errMessage = "OK";
            delete user.password;
            userData.user = user;
          } else {
            userData.errCode = 3;
            userData.errMessage = "Wrong password";
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = `User not found`;
        }
      } else {
        //return error
        userData.errCode = 1;
        userData.errMessage = `Your's Email isn't exist in our system, plz try other email`;
      }
      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};

let checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: userEmail },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};
let handleAddNewUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let check = await checkUserEmail(data.email);
      if (check === true) {
        resolve({
          errCode: 1,
          errMessage: "Your email is already in used, Pls try another email",
        });
      } else {
        let hashPassWordFromBcrypt = await hashUserPassword(data.password);
        await db.User.create({
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          password: hashPassWordFromBcrypt,
          address: data.address,
          phonenumber: data.phonenumber,
          // gender: data.gender === "1" ? true : false,
          // roleId: data.roleId,
        });
        resolve({
          errCode: 0,
          errMessage: "Create New User success",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassWord = await bcrypt.hashSync(password, salt);
      resolve(hashPassWord);
    } catch (e) {
      reject(e);
    }
  });
};
let onGetAllUsers = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = "";
      if (!id) {
        resolve({
          errCode: 2,
          errMessage: "Missing parameter",
          userData: [],
        });
      } else {
        if (id === "All") {
          userData = await db.User.findAll({
            attributes: { exclude: ["password"] },
          });
        } else if (id && id !== "All") {
          userData = await db.User.findOne({
            attributes: { exclude: ["password"] },
            where: { id: id },
          });
        }
        resolve({ data: userData, errCode: 0, errMessage: "OK" });
      }
    } catch (e) {
      reject(e);
    }
  });
};
let onDeleteUser = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({
          errCode: 2,
          errMessage: "Missing parameter",
        });
      } else {
        let user = await db.User.findOne({
          where: { id: id },
          raw: false,
        });
        if (!user) {
          resolve({ errCode: 3, errMessage: "The user is not exist" });
        }
        await user.destroy();
        resolve({ errCode: 0, errMessage: "The user is deleted successed" });
      }
    } catch (e) {
      reject(e);
    }
  });
};
let onEditUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: data.id },
        raw: false,
      });
      if (user) {
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.address = data.address;
        user.phonenumber = data.phonenumber;
        await user.save();
        resolve({ errCode: 0, errMessage: "OK" });
      } else {
        resolve({ errCode: 2, errMessage: "The user is not exist" });
      }
    } catch (e) {
      reject(e);
    }
  });
};
let getAllCodeSV = (typeInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!typeInput) {
        resolve({ errCode: 1, errMessage: "Missing parameter" });
      } else {
        let res = {};
        let allCode = await db.Allcode.findAll({
          where: { type: typeInput },
        });
        res.data = allCode;
        res.errCode = 0;
        res.errMessage = "OK";
        resolve(res);
      }
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  handleUserLogin,
  handleAddNewUser,
  onGetAllUsers,
  onDeleteUser,
  onEditUser,
  getAllCodeSV,
};
