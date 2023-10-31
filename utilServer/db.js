const mongoose = require("mongoose");
require('dotenv').config()

async function connectDb() {
    try {
        mongoose.set("strictQuery", false);

        mongoose.connect(process.env.mongoUri);
        console.log("Mongodb connected");
    } catch (error) {

        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDb;
