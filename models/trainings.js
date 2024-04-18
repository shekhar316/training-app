const Sequelize = require("sequelize");
const connection = require("../utils/dbUtils");

const Trainings = connection.define("rpt_trainings", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    traning_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        default: "draft"
    },
});

module.exports = Trainings;