const sequelize = require("sequelize");

const connection = new sequelize(
    process.env.DBNAME,
    process.env.DBUSER,
    process.env.DBPASSWORD,
    {
        host: 'localhost',
        port: '3306',
        dialect: 'mysql'
    }
)

module.exports = connection;