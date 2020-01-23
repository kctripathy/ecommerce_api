const express = require("express");
const router = express.Router();

const { 
	createProduct, 
	getProducts, 
	getProductById, 
	updateProduct,
	removeProduct,
	productById } = require("../controllers/product");

router.post("/product/create",createProduct);
router.get("/products",getProducts);
router.get("/product/:productId",getProductById);
router.put("/product/:productId",updateProduct);
router.delete("/product/:productId",removeProduct);

router.param("productId", productById);

module.exports = router;