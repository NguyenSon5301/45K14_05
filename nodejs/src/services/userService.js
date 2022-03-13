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
          attributes: ["email", "roleId", "password"],
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
      console.log("check data1", data);
      if (!data) {
        resolve({
          errCode: 2,
          errMessage: "Missing parameter",
        });
      } else {
        let hashPassWordFromBcrypt = await hashUserPassword(data.password);
        await db.User.create({
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          password: hashPassWordFromBcrypt,
        });
        console.log("check data", data);
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
      console.log("check password", password);
      let hashPassWord = await bcrypt.hashSync(password, salt);
      resolve(hashPassWord);
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  handleUserLogin,
  handleAddNewUser,
};
