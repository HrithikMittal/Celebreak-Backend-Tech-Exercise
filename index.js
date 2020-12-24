const User = require("./Modals/User");
const Game = require("./Modals/Game");
const Review = require("./Modals/Review");

/**
 *
 * FUNCTION 1: players who haven't played any games since a given date.
 * Example: all players that haven't played a game since November 18th.
 * (1 Input: a date; returns: array of user ids)} param
 */

const function1 = (param) => {
  User.find({ "games.date": { $lt: param } })
    .then((ids) => {
      return ids;
    })
    .catch((err) => console.log("ERROR:", err));
};

/**
 * FUNCTION 2: players that have given an average Game Review
 * rating of below x/5 stars for their previous x games played.
 * For example: all players that have given an average rating below 3.2 for their last 5 games.
 * (2 Inputs: avg star rating, num past games; returns: array of user ids)
 */

const function2 = (rating, noOfGames) => {
  Review.aggregate(
    { $group: { _id: "$user", count: { $sum: 1 }, avg: { $avg: "$rating" } } },
    { $project: { _id: 1, count: 1, avg: { $round: ["$avg", 1] } } }
  );
};

/**
 * **FUNCTION 3**: A function that returns the number of un-utilized
 * Field Availability slots for a given field for a given date range.
 * That means any Field Availability slots that did/do not have a Game
 * scheduled in that slot during the date range. (3 Inputs: a field id,
 * start date, end date; output: integer count)
 */

const function3 = (rating, noOfGames) => {
  Game.find({
    $or: [
      {
        $and: [
          { startDate: { $lte: ISODate(startDate) } },
          { endDate: { $gte: ISODate(endDate) } },
        ],
      },
      {
        $and: [
          { startDate: { $lte: ISODate(startDate) } },
          { endDate: { $gte: ISODate(endDate) } },
        ],
      },
      {
        $and: [
          { startDate: { $lte: ISODate(startDate) } },
          { endDate: { $gte: ISODate(endDate) } },
        ],
      },
      {
        $and: [
          { startDate: { $gte: ISODate(startDate) } },
          { endDate: { $lte: ISODate(endDate) } },
        ],
      },
      { $and: [{ field: fieldId }] },
    ],
  });
  // Field slot avaialblity and count from it
};

module.exports = {
  function1,
  function2,
  function3,
};
