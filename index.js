const user = 'postgres'
const host = 'localhost'
const database = 'tinyerp'
const password = '1234'
const port = '5432'


import { Sequelize, Model, DataTypes } from 'sequelize'


const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: 'postgres',
  logging: false
})