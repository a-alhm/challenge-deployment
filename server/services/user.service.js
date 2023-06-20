const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/userModel')

// This should be moved to external file
const secretKey = 'secret-key'

const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split('Bearer ').pop()

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'خطأ رقم 1' })
    }

    req.user = decoded

    next()
  })
}

const registerUser = async (req, res, next) => {
  const { name, password } = req.body

  const existingUser = await User.findOne({ where: { name } })
  if (existingUser) {
    return res.status(409).json({ message: 'اسم المستخدم موجود بالفعل' })
  }

  bcrypt.hash(password, 10, async (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ message: 'خطأ رقم 2' })
    }

    const newUser = await User.create({ name, password: hashedPassword })

    const token = jwt.sign({ name: newUser.name, id: newUser.id }, secretKey, {
      expiresIn: '1h',
    })

    return res.json({ token: token })
  })
}

const loginUser = async (req, res) => {
  const { name, password } = req.body

  const user = await User.findOne({ where: { name } })

  bcrypt.compare(password, user.password, (err, isMatch) => {
    if (err || !isMatch) {
      return res.status(401).json({ message: 'خطأ رقم 3' })
    }

    const token = jwt.sign({ name: user.name, id: user.id }, secretKey, {
      expiresIn: '1h',
    })

    return res.json({ token: token })
  })
}

const getUserInfo = async (req, res, next) => {
  const user = await User.findOne({ where: { name: req.user.name } })

  return res.json({ user: { name: user.name, id: user.id } })
}

module.exports = {
  authenticateToken,
  registerUser,
  loginUser,
  getUserInfo,
}
