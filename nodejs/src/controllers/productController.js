import productServices from "../services/productServices";
let AddNewPr = async (req, res) => {
  try {
    let data = await productServices.onAddNewPrSV(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};
let getAllPr = async (req, res) => {
  try {
    let id = req.query.id;
    let data = await productServices.onGetAllProduct(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};
let deletePr = async (req, res) => {
  try {
    let id = req.body.id;
    let data = await productServices.onDeletePr(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(200).json({
      errCode: -1,
      errMessage: "Error from server",
    });
  }
};

module.exports = {
  AddNewPr,
  getAllPr,
  deletePr,
};
