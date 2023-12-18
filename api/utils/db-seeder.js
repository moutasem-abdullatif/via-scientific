const Omics = require('../models/omics.model');
const fs = require('fs');
// Import JSON data
const importData = async () => {
  const data = JSON.parse(fs.readFileSync(__dirname + '/db.json', 'utf-8'));

  // insert only if there're no data to avoid duplication
  const count = await Omics.countDocuments({});

  if (count === 0) {
    Omics.insertMany(data).then((err, data) => {
      if (err) {
        console.error('Error inserting data:', err);
      } else {
        console.log('Data inserted successfully');
      }
    });
  }
};

module.exports = { importData };
