"use strict";

const ERROR = "Error: ";

const FILE_NOT_FOUND    = ERROR + "File not found";
const INVALID_ARGUMENT  = ERROR + "Invalid argument to function"

/* Config Reader Errors */
const CONFIG_ERROR      = ERROR + "Config file was not found or was not valid JSON";
const INVALID_SRC       = ERROR + "Invalid source attribute in config. Should be array of nonempty strings";
const INVALID_DST       = ERROR + "Invalid destination attribute in config. Should be a nonempty string.";

const config = {
    CONFIG_ERROR,
    INVALID_SRC,
    INVALID_DST,
}
/* -------------------- */

module.exports = Object.freeze({
    FILE_NOT_FOUND,
    INVALID_ARGUMENT,
    config,
});
