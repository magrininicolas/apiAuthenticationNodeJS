const mongoose = require("mongoose");

const dbURI = "mongodb+srv://nicolas:@mongo-api-nodejs.s17cqiy.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbURI);

mongoose.Promise = global.Promise;

module.exports = mongoose;