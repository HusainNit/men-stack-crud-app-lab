const express = require("express");
const morgan = require("morgan");
const dbConnection = require("./db");
const Cars = require("./models/cars.js");
const methodOverride = require("method-override");
const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.send("app is running");
});

app.get("/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/new", async (req, res) => {
  const json = req.body;
  console.log(json);
  console.log(json.model[0]);
  if (json !== undefined) {
    const newCar = await Cars.create({
      model: json.model[0],
      year: json.model[1],
    });
    res.send(newCar);
  }
});

app.listen(3000, () => {
  console.log("listen in port 3000");
});
