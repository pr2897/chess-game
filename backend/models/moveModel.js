const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const tileSchema = new mongoose.Schema({
  type: String,
});

const moveSchema = new mongoose.Schema({
  move: [
    {
      intialState: {
        type: [[tileSchema]],
      },
    },
  ],
});

module.exports = mongoose.model("ChessMove", userSchema);
