const mongoose = require('mongoose');
const dbseeder = require('./db-seeder');

module.exports = async () => {
  await mongoose
    .connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
    .then(() => {
      console.log('Mongodb connected....');
      dbseeder.importData();
    })
    .catch((err) => console.log(err));
};
