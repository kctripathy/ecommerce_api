const express = require("express")
const router = express.Router();
const {
		categoryById,
		createCategory, 
		readCategories, 
		updateCategory, 
		deleteCategory,
		listCategories
	} = require("../controllers/category"); 

const {	requireSignin, isAuth, isAdmin	} = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.post("/category/create/:userId",requireSignin, isAuth, isAdmin, createCategory);
router.get("/category/:categoryId",readCategories);
router.get("/categories/list",listCategories);
router.put("/category/update",updateCategory);
router.delete("/category/remove",deleteCategory);

router.param("categoryId",categoryById);
router.param("userId",userById);

module.exports = router;