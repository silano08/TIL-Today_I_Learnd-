const mongoose = require("mongoose");

const { Schema } = mongoose;
const userSchema = new Schema({
  nickname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// 유저아이디 버츄얼
userSchema.virtual("userId").get(function () {
  return this._id.toHexString();
});
userSchema.set("toJSON", {
  virtuals: true,
});

module.exports = mongoose.model("users", userSchema);