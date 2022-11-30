const express = require("express");
const userRoutes = require("./routes/users");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Hello from homepage");
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
