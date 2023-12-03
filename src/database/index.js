const mongoose = require("mongoose");
require("dotenv").config();

const dbURI = `mongodb+srv://nicolas:${process.env.DB_PASSWORD}@mongo-api-nodejs.s17cqiy.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(dbURI);

mongoose.Promise = global.Promise;

module.exports = mongoose;