const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const User = mongoose.Schema({
  email: {
    type: String,
  },
  name: {
    type: String,
  },
  password: {
    type: String,
  },
  games: [
    {
      type: ObjectId,
      ref: "Game",
    },
  ],
});

module.exports = User = mongoose.model("User", User);
