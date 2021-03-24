const mongoose = require("mongoose");

const {Schema} = mongoose;
const cartSchema = new Schema({
    goodsId:{
        type:Number,
        required: true,
        unique: true,
    },
    quantity:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model("Cart",cartSchema);