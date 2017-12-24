const fs        = require('fs-extra');
const R         = require('ramda');
const e         = require("../constants/errors");
const _         = require("../constants/globals");
const type      = require("../helpers/typecheck");

/**
 * Reads the object from the given json file and return is
 * @param {Name of the config file} file_name
 */
async function jsonReader(file_name) {
    // check validity of the argument
    if(!file_name || !R.is(String, file_name)) {
        throw(e.INVALID_ARGUMENT);
    }

    try {
        // Read config from given json file
        return await fs.readJson(file_name);
    } catch(err) {
        // If error in reading file
        throw(e.config.CONFIG_ERROR);
    }
}

// console.log(jsonReader("test_file.json"));
/**
 * Checks whether given config is properly formatted
 * @param {Config object read from config file} config
 */
async function validateConfig(config) {
    // Check for valid argument
    if(!config || !R.is(Object, config)) {
        throw e.INVALID_ARGUMENT;
    }

    // Check if source exists and is an array
    if(!config.source || !R.is(Array, config.source)) {
        throw(e.config.INVALID_SRC);
    }

    // Check if the elements of source are strings
    config.source.forEach( s => {
        if(!R.is(String, s)) {
            console.log(typeof s);
            throw(e.config.INVALID_SRC);
        }
    });

    // Check if destination exists and is a string
    if(!config.destination || !R.is(String, config.destination)) {
        throw(e.config.INVALID_DST);
    }

    return config;
}

// console.log(checkConfig({source: "", destination: "dst"}));
/**
 * Main method of the config file
 */
const getConfig = () => {
    const file_name = _.CONFIG_FILE;
    // Get the config from the JSON file
    return jsonReader(file_name).then(validateConfig);
}

module.exports = getConfig;
