const Sequelize = require("sequelize");
const connection = require("../utils/dbUtils");

const Topics = connection.define("rpt_topics", {
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

module.exports = Topics;