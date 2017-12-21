const fs        = require('fs');
const type      = require("../helpers/typecheck");
const e         = require("../helpers/errors");

/**
 * Reads the object from the given json file and return is
 * @param {Name of the config file} file_name 
 */
const jsonReader = (file_name) => {
    var config; //stores the json object

    // check validity of the argument
    if(!file_name && type.isString(file_name)) {
        return config;
    }

    try {
        // Read config from given json file
        config = fs.readFileSync(file_name, 'utf8');
    } catch(err) {
        // If error in reading file
        console.log(err);
        throw(e.CONFIG_NOT_FOUND);
    }

    try {
        config = JSON.parse(config)
    } catch(err) {
        // If given file does not have a JSON object
        throw(e.INVALID_JSON);
    }

    return config;
}

module.exports = {
    jsonReader
};