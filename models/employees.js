const Sequelize = require("sequelize");
const connection = require("../utils/dbUtils");

const Employee = connection.define("rpt_employees", {
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
    role: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    profile_pic: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Employee;