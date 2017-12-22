const ERROR = "Error: ";

const FILE_NOT_FOUND    = ERROR + "File not found";
const CONFIG_NOT_FOUND  = ERROR + "Config file not found";
const INVALID_JSON      = ERROR + "Config file needs to be of valid JSON.";
const INVALID_FILE_NAME = ERROR + "Invalid file name";

module.exports = {
    FILE_NOT_FOUND,
    CONFIG_NOT_FOUND,
    INVALID_JSON,
    INVALID_FILE_NAME
};
