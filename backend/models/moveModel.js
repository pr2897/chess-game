const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const tileSchema = new mongoose.Schema({
  type: String,
});

const moveSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("ChessMove", userSchema);
