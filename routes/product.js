const express = require("express");
const router = express.Router();

const { 
	createProduct, 
	getProducts, 
	getProductById, 
	updateProduct,
	removeProduct,
	productById,
	getPhoto,
	listRelated,
	listBySearch,
	listCategories	} = require("../controllers/product");

router.post("/product/create",createProduct);
router.get("/products",getProducts);
router.get("/product/:productId",getProductById);
router.put("/product/:productId",updateProduct);
router.delete("/product/:productId",removeProduct);
router.get("/product/photo/:productId", getPhoto);
router.get("/products/related/:productId", listRelated);
router.post("/products/by/search", listBySearch);
router.get("/products/categories", listCategories);

router.param("productId", productById);

module.exports = router;