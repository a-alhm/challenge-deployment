const path = require('path')
const connectLiveReload = require('connect-livereload')
const express = require('express')

const userController = require('../controllers/userController')
const productController = require('../controllers/productController')
const cartController = require('../controllers/cartController')

module.exports = {
  dev: [
    ['', express.json()],
    ['', express.urlencoded({ extended: true })],
    ['', connectLiveReload()],
    ['', express.static(path.join(__dirname, '../../client/public/'))],
    ['/api', userController],
    ['/api', productController],
    ['/api', cartController],
  ],
  prod: [
    ['', express.json()],
    ['', express.urlencoded({ extended: true })],
    ['', express.static(path.join(__dirname, '../../client/public/'))],
    ['/api', userController],
    ['/api', productController],
    ['/api', cartController],
  ],
}
