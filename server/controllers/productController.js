const express = require('express')
const { getProducts } = require('../services/product.service')

const controller = express.Router()

controller.get('/products', getProducts)

module.exports = controller
