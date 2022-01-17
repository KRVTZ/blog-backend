const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: [true, "Valid username required"],
    unique: true,
  },
  email: {
    type: String,
    require: [true, "Valid email required"],
    unique: true,
  },
  image: { type: String, require: [true, "Image required"], unique: true },
  fName: { type: String, require: [true, "First name required"] },
  lName: { type: String, require: [true, "Last name required"] },
  title: { type: String, require: true },
  password: { type: String, require: [true, "Password required"] },
  role: { type: Number, default: 3 },
  bio: { type: String },
});

const Users = mongoose.model("users", userSchema);

module.exports = Users;
