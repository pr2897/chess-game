const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User must have a name!"],
    trim: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: [true, "User must have a name!"],
    unique: [true, "Email must be unique. try Again!"],
    trim: true,
    validate: [validator.isEmail, "Please provide a valid Email!"],
  },

  password: {
    type: String,
    required: [true, "Please provide password!"],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm password!"],
    validate: {
      // this only works on CREATE && SAVE !!!
      validator: function (el) {
        return el === this.password;
      },
      message: "Confirm Password did not matched!",
    },
  },
});

// match password and confirm password
userSchema.pre("save", async function (next) {
  // Hash the password
  this.password = await bcrypt.hash(this.password, 12);

  // delete the passwordConfirm
  this.passwordConfirm = undefined;
  next();
});

// verify password
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

module.exports = mongoose.model("User", userSchema);
