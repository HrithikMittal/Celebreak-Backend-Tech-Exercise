const mongoose = require("mongoose");

const FieldSchema = mongoose.Schema({
  description: {
    type: String,
  },
  gpsCoordinates: {
    lat: {
      type: String,
    },
    long: {
      type: String,
    },
  },
  photos: [
    {
      type: String,
    },
  ],
});

module.exports = Field = mongoose.model("Field", FieldSchema);
