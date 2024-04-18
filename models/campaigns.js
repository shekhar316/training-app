const Sequelize = require("sequelize");
const connection = require("../utils/dbUtils");

const Campaigns = connection.define("rpt_campaigns", {
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

module.exports = Campaigns;