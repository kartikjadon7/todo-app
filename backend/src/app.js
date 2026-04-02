const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const todoRoutes = require("./routes/todo.routes");

app.use(express.json());
app.use(cookieParser());


app.get("/set-cookie", (req, res) => {
    res.cookie("name", "user-1");
    res.send("Cookie set");
});

app.get("/get-cookie", (req, res) => {
    res.json(req.cookies);
});


app.use("/api/todos", todoRoutes);

app.post("/login", (req, res) => {
    const { username} = req.body;
    req.session.user = { username };
    res.send("Logged in");
});


app.get("/profile", (req, res) => {
    if (!req.session.user) {
        return res.status(401).send("Not logged in");
    }

    res.json(req.session.user);
});

app.get("/logout", (req, res) => {
    req.session.destroy();
    res.send("Logged out");
});

module.exports = app;