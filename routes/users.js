const express = require("express");
const router = express.Router();

//all routes here are starting with /users

let users = [];

router.get("/", (req, res) => {
    res.send(users);
});

router.post("/", (req, res) => {
    const user = req.body;
    
    users.push({ ...user, id: Date.now() });

    res.send(`Added the user ${user.firstName} ${user.lastName} `);
});

module.exports = router;
