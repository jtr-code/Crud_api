const {
    createUser,
    getUser,
    getSingleUserId,
    deleteUser,
    updateUser
} = require("../controllers/users");

const express = require("express");
const router = express.Router();


//all routes here are starting with /users



router.get("/", getUser);

router.post("/", createUser);

router.get("/:id", getSingleUserId);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

module.exports = router;
