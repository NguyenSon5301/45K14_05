import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.post("/api/login", userController.handleLoging);
  // user
  router.post("/api/Register", userController.AddNewUser);
  router.get("/api/get-all-users", userController.getAllUser);
  router.delete("/api/delete-user", userController.deleteUser);
  router.put("/api/edit-user", userController.editUser);
  // mail
  router.post("/api/send-gmail", userController.sendEmail);
  // newletter
  router.post("/api/send-newLetter", userController.sendNewLetter);
  // all code
  router.get("/api/get-all-code", userController.getAllCode);

  return app.use("/", router);
};

module.exports = initWebRoutes;
