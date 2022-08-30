require('dotenv').config()

import { Sequelize } from 'sequelize'



const dbName = process.env.DB_NAME
const dbUser = process.env.DB_USER
const dbHost = process.env.DB_HOST
const dbDriver = process.env.DB_DRIVER
const dbPassword = process.env.DB_PASSWORD


const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDriver,
    logging: false
})

export default sequelizeConnection
