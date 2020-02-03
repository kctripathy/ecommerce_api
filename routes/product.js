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
    listSearch,
	listCategories	} = require("../controllers/product");

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");


router.post("/product/create",createProduct);
router.get("/products",getProducts);
router.get("/product/:productId",getProductById);


router.delete(
    "/product/:productId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    removeProduct
);
router.put(
    "/product/:productId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    updateProduct
);
//router.put("/product/:productId",updateProduct);
//router.delete("/product/:productId",removeProduct);

router.get("/products/search", listSearch);
router.get("/product/photo/:productId", getPhoto);
router.get("/products/related/:productId", listRelated);
router.post("/products/by/search", listBySearch);
router.get("/products/categories", listCategories);

router.param("userId", userById);
router.param("productId", productById);

module.exports = router;