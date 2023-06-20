const Product = require('../models/productModel')

const getProducts = async (req, res, next) => {
  const products = await Product.findAll()

  return res.json(products)
}

module.exports = {
  getProducts,
}
