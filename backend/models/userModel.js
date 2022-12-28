const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
    },
    date_of_birth: {
      type: Date,
      required: true,
    },
    age: {
      type: Number,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    profilePic: {
      type: String,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  let user = this;

  // Bcrypt password
  if (!user.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  // Bcrypt password

  // Calculating Age
  let diff_ms = Date.now() - user.date_of_birth.getTime();
  let age_dt = new Date(diff_ms);
  user.age = Math.abs(age_dt.getUTCFullYear() - 1970);
  // Calculating Age
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
