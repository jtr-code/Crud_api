const { v4: uuidv4 } = require("uuid");

let users = [];

const getUser = (req, res) => {
    res.send(users);
};
const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`Added the user ${user.firstName} ${user.lastName} `);
};

const getSingleUserId = (req, res) => {
    const { id } = req.params;

    const foundUserId = users.find((user) => user.id === id);

    res.send(foundUserId);
};

const deleteUser = (req, res) => {
    const { id } = req.params;
    const user = req.body;
    users = users.filter((user) => user.id !== id);
    res.send(`Deleted the username ${user.firstName} of id ${id}`);
};

const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id);

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`User with id ${id} has been updated`);
};

module.exports = {
    createUser,
    getUser,
    getSingleUserId,
    deleteUser,
    updateUser,
};
