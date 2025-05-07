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
  res.render("index.ejs");
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

app.get("/find", (req, res) => {
  res.render("find.ejs");
});

app.post("/find", async (req, res) => {
  try {
    const carId = req.body.carid;

    const car = await Cars.findById(carId);

    res.send(car);
    console.log("found");
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/update", (req, res) => {
  res.render("update.ejs");
});

app.post("/update", async (req, res) => {
  try {
    const CID = req.body.CID;
    const Carmodel = req.body.cmodel;
    const Cyear = req.body.year;

    if (CID === undefined) {
      res.send("id is undefine");
    }

    const car = await Cars.findByIdAndUpdate(CID, {
      model: Carmodel,
      year: Cyear,
    });

    res.send(car);
    console.log("updated");
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/delete", (req, res) => {
  res.render("delete.ejs");
});

app.post("/delete", async (req, res) => {
  try {
    const CID = req.body.CID;

    if (CID === undefined) {
      res.send("id is undefine");
    }

    const car = await Cars.findOneAndDelete(CID);

    res.send(car);
    console.log("deleted");
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(3000, () => {
  console.log("listen in port 3000");
});
