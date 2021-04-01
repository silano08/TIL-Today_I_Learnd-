'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Goods extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Goods.init({
    goodsId:{
      primaryKey:true,
      type: DataTypes.INTEGER,
    },
    name: DataTypes.STRING,
    thumbnailUrl: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Goods',
  });
  return Goods;
};