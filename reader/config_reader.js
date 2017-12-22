const fs        = require('fs');
const R         = require('ramda');
const e         = require("../constants/errors");
/**
 * Reads the object from the given json file and return is
 * @param {Name of the config file} file_name
 */
exports.jsonReader = (file_name, next) => {
    if(!R.is(String, file_name)) {
      next(e.INVALID_FILE_NAME);
    }
    else {
      fs.readFile(file_name, 'utf8', (err, data) => {
        //TODO: ADD ERROR CHECKING FOR JSON.parse()
        next(err, JSON.parse(data));
      });
    }
};
