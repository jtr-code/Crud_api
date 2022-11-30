const express = require("express");
const router = express.Router();

//all routes here are starting with /users

let users = [
    {
        firstName: "Jishnu",
        lastName: "t raj",
        age: 22,
    },
    {
        firstName: "John",
        lastName: "Dane",
        age: 20,
    },
];

router.get("/", (req, res) => {
    res.send(users);
});

router.post("/", (req, res) => {
    console.log("Added user");
    res.send("Added user");
});

module.exports = router;
