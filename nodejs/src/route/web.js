import express from "express";
import userController from "../controllers/userController";
import productController from "../controllers/productController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.post("/api/login", userController.handleLoging);
  router.post("/api/admin-login", userController.handleAdminLogin);

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
  //blog
  router.post("/api/create-blog", userController.createBlog);
  router.get("/api/get-blog", userController.getBlog);
  router.get("/api/get-blog-by-id", userController.getBlogById);
  router.delete("/api/delete-blog", userController.deleteBlog);
  //contact
  router.get("/api/get-contacts", userController.getContact);
  router.delete("/api/delete-contacts", userController.deleteContact);
  // product
  router.post("/api/create-new-product", productController.AddNewPr);
  router.get("/api/get-all-product", productController.getAllPr);
  router.get("/api/get-product-by-id", productController.getProductById);
  router.delete("/api/delete-product", productController.deletePr);
  router.put("/api/edit-product", productController.editProduct);
  return app.use("/", router);
};

module.exports = initWebRoutes;
