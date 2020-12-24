const mongoose = require("mongoose");

const FieldSlotsAvaliability = mongoose.Schema({
  slotDay: {
    type: String,
    enum: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  time: [
    {
      start: String,
    },
  ],
});

FieldSlotsAvaliability.path("time").validate(function (value) {
  if (value.match(`^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$`)) {
    return true;
  }
}, "Time should be in format of HH:MM");

module.exports = FieldSlotsAvaliability = mongoose.model(
  "FieldSlotsAvaliability",
  FieldSlotsAvaliability
);
