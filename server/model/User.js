const mongoose = require("mongoose");
// const validator = require("validator");
const {ObjectId} =  mongoose.Schema.Types
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: [true, "Please provide a first name"],
  },
  lastName: {
    type: String,
    require: [true, "Please provide a last name"],
  },
  email: {
    type: String,
    require: [true, "Please provide a unique email"],
    unique: true,
  },
  mobile: { type: Number },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    unique: false,
  },
  mobile: { type: Number },
  followers:[{type:ObjectId,ref:"User"}],
  following:[{type:ObjectId,ref:"User"}]
});

// creating a new model

const User = new mongoose.model("User", UserSchema);

module.exports = User;
