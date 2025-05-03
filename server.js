const express = require("express");
const morgan = require("morgan");
const dbConnection = require("./db");
const Cars = require("./models/cars.js");
const app = express();
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("app is running");
});

app.listen(3000, () => {
  console.log("listen in port 3000");
});
