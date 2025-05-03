const mongoose = require("mongoose");

const carsSchema = new mongoose.Schema({
  model: { type: String, required: true },
  year: { type: Number, required: true },
});

const Cars = mongoose.model("Cars", carsSchema);

module.exports=Cars;