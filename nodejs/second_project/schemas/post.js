const mongoose = require("mongoose");

const { Schema } = mongoose;
const postSchema = new Schema({
  nickname: {
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
  mainpost: {
    type: String
  }
});



module.exports = mongoose.model("post", postSchema);