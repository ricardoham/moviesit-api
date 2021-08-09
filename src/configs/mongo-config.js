const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(
  config.MONGO_URI,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    dbName: config.MONGO_DBNAME,
    poolSize: 10,
  },
  (err, db) => {
    if (err) {
      console.log('Error occurred on data base connection: ', err);
      db.close();
    }
    console.log('Connected with database');
  },
);
mongoose.Promise = global.Promise;

console.log('------', config.MONGO_DBNAME);
module.exports = mongoose.connection;
