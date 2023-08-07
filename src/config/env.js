require("dotenv").config();

const env = {
  port: process.env.PORT,
  collection: process.env.COLLECTION,
};

module.exports = env;
