const { Router } = require("express");
const {
  createProduct,
  getAllPRoducts,
} = require("../controllers/product.controller");

const PRODUCT_ROUTER = Router();

PRODUCT_ROUTER.post("/createProduct", createProduct);
PRODUCT_ROUTER.get("/getAllProducts", getAllPRoducts);

module.exports = PRODUCT_ROUTER
