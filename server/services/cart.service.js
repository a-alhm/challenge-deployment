const Cart = require('../models/cartModel')
const Product = require('../models/productModel')

const getUserCart = async (req, res, next) => {
  const cart = await Cart.findAll({
    where: { UserId: req.user.id },
    include: [Product],
  })

  return res.json(
    cart.map((c) => ({ ...c.Product.dataValues, amount: c.amount }))
  )
}

const getCartCount = async (req, res, next) => {
  const cart = await Cart.findAll({ where: { UserId: req.user.id } })

  return res.json(cart.length)
}

const addToCart = async (req, res, next) => {
  const productId = req.params.productId
  const { amount } = req.body

  const addedProduct = await Cart.findOne({
    where: { ProductId: productId, UserId: req.user.id },
  })

  if (addedProduct) {
    addedProduct.amount += amount
    await addedProduct.save()
    return res.json(addedProduct)
  }

  const cart = await Cart.create({
    amount,
    ProductId: productId,
    UserId: req.user.id,
  })

  return res.json(cart)
}

const updateCart = async (req, res, next) => {
  const productId = req.params.productId
  const { amount } = req.body

  const addedProduct = await Cart.findOne({
    where: { ProductId: productId, UserId: req.user.id },
  })

  addedProduct.amount = amount
  await addedProduct.save()

  return res.json(addedProduct)
}

const deleteFromCart = async (req, res, next) => {
  const productId = req.params.productId

  await Cart.destroy({ where: { ProductId: productId, UserId: req.user.id } })

  return res.sendStatus(200)
}

module.exports = {
  getUserCart,
  getCartCount,
  addToCart,
  updateCart,
  deleteFromCart,
}
