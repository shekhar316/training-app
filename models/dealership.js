const Sequelize = require("sequelize");
const connection = require("../utils/dbUtils");

const Dealerships = connection.define("rpt_dealerships", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Dealerships;