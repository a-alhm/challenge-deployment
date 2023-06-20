const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('', '', '', {
  host: 'localhost',
  dialect: 'sqlite',
})

sequelize.authenticate()

module.exports = sequelize
