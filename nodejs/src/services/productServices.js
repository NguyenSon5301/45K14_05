import db from "../models/index";
let onAddNewPrSV = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let check = await checkProductExist(data.namePr);
      if (check === true) {
        resolve({
          errCode: 1,
          errMessage: "Your product is already exist, Pls try another product",
        });
      }
      // check product is exist
      else {
        await db.Product.create({
          namePR: data.namePr,
          sizeId: data.size,
          typeId: data.typePr,
          priceId: data.price,
          image: data.image,
          description: data.description,
        });
        resolve({
          errCode: 0,
          errMessage: "Create New Product succeed",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};
let onGetAllProduct = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let productData = "";
      if (!id) {
        resolve({
          errCode: 2,
          errMessage: "Missing parameter",
          productData: [],
        });
      } else {
        if (id === "All") {
          productData = await db.Product.findAll({
            include: [
              {
                model: db.Allcode,
                as: "priceData",
                attributes: ["valueEn", "valueVi"],
              },
              {
                model: db.Allcode,
                as: "typeData",
                attributes: ["valueEn", "valueVi"],
              },
            ],
            raw: true,
            nest: true,
          });
        } else if (id && id !== "All") {
          productData = await db.Product.findOne({
            where: { id: id },
            include: [
              {
                model: db.Allcode,
                as: "priceData",
                attributes: ["valueEn", "valueVi"],
              },
              {
                model: db.Allcode,
                as: "typeData",
                attributes: ["valueEn", "valueVi"],
              },
            ],
            raw: true,
            nest: true,
          });
        }
        resolve({ data: productData, errCode: 0, errMessage: "OK" });
      }
    } catch (e) {
      reject(e);
    }
  });
};
let onDeletePr = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({
          errCode: 2,
          errMessage: "Missing parameter",
        });
      } else {
        let Product = await db.Product.findOne({
          where: { id: id },
          raw: false,
        });
        if (!Product) {
          resolve({ errCode: 3, errMessage: "The product is not exist" });
        }
        await Product.destroy();
        resolve({ errCode: 0, errMessage: "The product is deleted successed" });
      }
    } catch (e) {
      reject(e);
    }
  });
};
let getProductByIdSV = (inputId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.Product.findOne({
        where: { id: inputId },

        include: [
          {
            model: db.Allcode,
            as: "priceData",
            attributes: ["valueEn", "valueVi"],
          },
          {
            model: db.Allcode,
            as: "typeData",
            attributes: ["valueEn", "valueVi"],
          },
        ],
        raw: true,
        nest: true,
      });
      if (data && data.image) {
        data.image = new Buffer(data.image, "base64").toString("binary");
      }
      resolve({
        errCode: 0,
        errMessage: "OK",
        data,
      });
    } catch (e) {
      reject(e);
    }
  });
};
let checkProductExist = (product) => {
  return new Promise(async (resolve, reject) => {
    try {
      let productData = await db.Product.findOne({
        where: { namePR: product },
      });
      if (productData) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};
let onEditProduct = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let product = await db.Product.findOne({
        where: { id: data.id },
        raw: false,
      });
      if (product) {
        product.namePR = data.namePr;
        product.sizeId = data.size;
        product.typeId = data.typePr;
        product.priceId = data.price;
        product.image = data.image;
        product.description = data.description;

        await product.save();
        resolve({ errCode: 0, errMessage: "OK" });
      } else {
        resolve({ errCode: 2, errMessage: "The product is not exist" });
      }
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  onAddNewPrSV,
  onGetAllProduct,
  onDeletePr,
  getProductByIdSV,
  onEditProduct,
};
