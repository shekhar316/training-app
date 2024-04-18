const Sequelize = require("sequelize");
const connection = require("../utils/dbUtils");

const Attendance = connection.define("rpt_attendance", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    }, 
    rpt_present: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default: 0,
    }
});

module.exports = Attendance;