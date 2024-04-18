const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();
const app = express();
const port = process.env.PORT;
const hostname = process.env.HOSTNAME;

const logger = require("./utils/logUtils");
const connection = require("./utils/dbUtils");

// routes
const commonRoutes = require("./routes/common");
const trainingRoutes = require("./routes/training");
const trainerRoutes = require("./routes/dealership")
const dealershipRoutes = require("./routes/dealership")

// models
const Employee = require("./models/employees");
const Campaigns = require("./models/campaigns");
const Dealerships = require("./models/dealership");
const Topics = require("./models/topics");
const Trainings = require("./models/trainings");
const Trainers = require("./models/trainers");
const Attendance = require("./models/attendance");

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors({ origin: "*" }));
app.use("/api/common", commonRoutes);
app.use("/api/trainings", trainingRoutes);
app.use("/api/trainer", trainerRoutes);
app.use("/api/dealership", dealershipRoutes);


// db connection
try {
    connection.authenticate().then(() => {
        logger.info("Database is connected.");
        Dealerships.hasMany(Campaigns);
        Campaigns.hasMany(Trainings);
        Dealerships.hasMany(Trainings);
        Trainers.hasMany(Trainings);
        Dealerships.hasMany(Employee);
        Topics.hasMany(Trainings);
        Trainings.hasMany(Attendance);
        Employee.hasMany(Attendance);
        // connection.sync({
        //     force: true,
        // })

    });
} catch (err) {
    logger.error("Unable to connect to database.");
    logger.debug("db connection error: " + err);
}

// starting the app
app.listen(port, () => {
    logger.info(`Application is running on: ${hostname}:${port}`);
})
