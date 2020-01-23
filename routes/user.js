const express = require("express");
const router = express.Router();

const {userById, readUser, listUsers, updateUser} = require("../controllers/user");

router.get("/user/:userId",readUser);
router.get("/users/list",listUsers);
router.put("/user/:userId",updateUser);

router.param("userId",userById);

module.exports = router;