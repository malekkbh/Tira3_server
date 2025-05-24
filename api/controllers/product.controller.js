const PRODUCT_MODEL = require("../models/product.model");

const createProduct = (req, res) => {
  const { name, price } = req.body;

  PRODUCT_MODEL.create({ name, price })
    .then((createRES) => res.status(200).json(createRES))
    .catch((e) => res.status(500).json(e));
};

const getAllPRoducts = (req, res) => {
  PRODUCT_MODEL.find().then((products) => res.status(200).json(products));
};

module.exports = {
  createProduct,
  getAllPRoducts,
};
