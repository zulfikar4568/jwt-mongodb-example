const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  url: process.env.DB_CONNECT_LOCAL
};