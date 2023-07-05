const mongoose = require("mongoose");

const GraphDashModel = new mongoose.Schema({
  date: {
    type: String,
    require: true,
  },
});

module.exports =
  mongoose.model.graph || mongoose.model("graph", GraphDashModel);
