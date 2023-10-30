const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const { json } = require('express');
app.use(json());

const data = require('./json/data.json');

app.get('/api/data', (req, res) => {
    const currentPage = parseInt(req.query.page);
    const endPage = 15 * currentPage;
    const startPage = endPage - 15;
    const final = data.slice(startPage, endPage)
    res.status(200).send(final);
})

app.get("/", (req, res) => {
    res.send('<h1 align="center">Expense Backend Connected...</h1>');
});

app.listen(3050, () => {
    console.log(`Server is running on port  3050.`);
});