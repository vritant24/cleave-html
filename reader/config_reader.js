const fs        = require('fs');
const R         = require('ramda');

const getConfig = (file_name, next) => {
    if(!R.is(String, file_name)) {
      next('Invalid File Name');
    }
    else {
      fs.readFile(file_name, 'utf8', (err, data) => {
        next(err, JSON.parse(data));
      });
    }
};

module.exports = getConfig;
