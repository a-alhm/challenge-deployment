const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')
const User = require('./userModel')
const Product = require('./productModel')

const Cart = sequelize.define('Cart', {
  objectKey: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
})

Cart.belongsTo(User)
Cart.belongsTo(Product)

module.exports = Cart
