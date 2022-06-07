const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose
    .connect(process.env.DB_CONNECTION, {})
    .then(() => console.log('*** DB CONNECTED ***'))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
