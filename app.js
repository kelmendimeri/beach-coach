const express = require("express");
const cors = require("cors");
const router = require("./Routes");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
const staticPath = path.join(__dirname, '/client/build');
app.use(express.static(staticPath));

module.exports = app;