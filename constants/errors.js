const ERROR = "Error: ";

const FILE_NOT_FOUND    = ERROR + "File not found";
const INVALID_ARGUMENT  = ERROR + "Invalid argument to function"

const CONFIG_NOT_FOUND  = ERROR + "Config file not found";
const INVALID_JSON      = ERROR + "Config file needs to be of valid JSON.";
const INVALID_SRC       = ERROR + "Invalid source attribute in config. Should be array of nonempty strings";
const INVALID_DST       = ERROR + "Invalid destination attribute in config. Should be a nonempty string.";

const config = {
    CONFIG_NOT_FOUND,
    INVALID_JSON,
    INVALID_SRC,
    INVALID_DST,
}

module.exports = {
    FILE_NOT_FOUND,
    INVALID_ARGUMENT,
    config,
}