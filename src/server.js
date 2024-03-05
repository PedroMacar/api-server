const express = require("express");

const app = express();

const port = 3333

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/teste/:id", (req, res) => {
    const id = req.params.id; 
    res.send(`Hello World! ${id}`);
});
app.get("/teste/:id/:category", (req, res) => {
    const {id,category} = req.params; 
    const soma = id + category;
    res.send(`Hello World! ${soma}`);
});
