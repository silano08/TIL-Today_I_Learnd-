const mongoose = require("mongoose");

const GoodsSchema = new mongoose.Schema({
  name: String,
  thumbnailUrl: String,
  category: String,
  price: Number,
});
GoodsSchema.virtual("goodsId").get(function () {
  return this._id.toHexString();
});
GoodsSchema.set("toJSON", {
  virtuals: true,
});
module.exports = mongoose.model("Goods", GoodsSchema);