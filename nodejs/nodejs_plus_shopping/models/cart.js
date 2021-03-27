const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  userId: String,
  goodsId: String,
  quantity: Number,
});
module.exports = mongoose.model("Cart", CartSchema);