const mongoose = require("mongoose");

const { Schema } = mongoose;
const postSchema = new Schema({
  postId: {
    type: Number,
    unique: true
  },
  username: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date, 
    default: Date.now
  },
  password: {
    type: Number
  },
  mainpost: {
    type: String
  }
});



module.exports = mongoose.model("post", postSchema);