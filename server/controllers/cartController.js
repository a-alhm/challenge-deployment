const express = require('express')
const { authenticateToken } = require('../services/user.service')
const {
  getUserCart,
  getCartCount,
  addToCart,
  updateCart,
  deleteFromCart,
} = require('../services/cart.service')

const controller = express.Router()

controller.get('/cart', authenticateToken, getUserCart)
controller.get('/cart/count', authenticateToken, getCartCount)
controller.post('/cart/item/:productId', authenticateToken, addToCart)
controller.put('/cart/item/:productId', authenticateToken, updateCart)
controller.delete('/cart/item/:productId', authenticateToken, deleteFromCart)

module.exports = controller
