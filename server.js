const path = require("path");
const express = require("express");

const SERVER_PORT = 8000;

const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if(username !== "admin"){
        return res.status(400).json({ message: "Incorrect username" });
    }

    res.json({ message: "Success." });
})

app.listen(SERVER_PORT, () => {
    console.log(`[SERVER]: Started on http://localhost:${SERVER_PORT}`);
})