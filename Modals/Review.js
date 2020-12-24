const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const Review = mongoose.Schema({
  text: {
    type: String,
  },
  rating: {
    type: Number,
    maxValue: 5,
  },
  user: {
    type: ObjectId,
    ref: "User",
  },
});

module.exports = Review = mongoose.model("Review", Review);
