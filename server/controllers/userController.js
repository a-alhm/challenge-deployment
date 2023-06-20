const express = require('express')
const {
  authenticateToken,
  registerUser,
  loginUser,
  getUserInfo,
} = require('../services/user.service')

const controller = express.Router()

controller.get('/user', authenticateToken, getUserInfo)

controller.post('/register', registerUser)

controller.post('/login', loginUser)

module.exports = controller
