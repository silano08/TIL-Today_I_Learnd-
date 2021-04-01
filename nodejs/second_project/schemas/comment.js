const mongoose = require("mongoose");

const { Schema } = mongoose;
const commentSchema = new Schema({
  nickname: {
    type: String,
    required: true
  },
  date: {
    type: Date, 
    default: Date.now
  },
  comment: {
    type: String
  },
  postid:{
    type: String
  }
});



module.exports = mongoose.model("comment", commentSchema);