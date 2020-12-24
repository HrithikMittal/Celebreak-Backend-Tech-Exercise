const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const Game = mongoose.Schema({
  name: {
    type: String,
  },
  field: {
    type: ObjectId,
    ref: "Field",
  },
  fieldSlotsAvaliability: {
    type: ObjectId,
    ref: "FieldSlotsAvaliability",
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
});

module.exports = Game = mongoose.model("Game", Game);
