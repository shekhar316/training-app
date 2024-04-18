const Sequelize = require("sequelize");
const connection = require("../utils/dbUtils");

const Trainers = connection.define("rpt_trainers", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    mobile_number: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Trainers;