"use strict";

const ERROR = "Error: ";

const FILE_NOT_FOUND    = ERROR + "File not found";
const INVALID_ARGUMENT  = ERROR + "Invalid argument to function"
const INVALID_CNSTR     = ERROR + "Invalid Constructor. Should be of form ";

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

/* AST Node errors */
const INVALID_CHILD     = ERROR + "Invalid Child. Should be of object Tag, Text or Comment";
const INVALID_ATTR      = ERROR + "Invalid Attribute. Should be of object Attribute";
const INVALID_N_CHILD   = ERROR + "Invalid number of children. Cleave tags can't contain more than one child";
const INVALID_TAG_O     = INVALID_CNSTR +  "Tag(String)";
const INVALID_ATTR_O    = INVALID_CNSTR +  "Attribut(String, String)";
const INVALID_TEXT_O    = INVALID_CNSTR +  "Text(String)";
const INVALID_COMMENT_O = INVALID_CNSTR +  "Comment(String)";

const ast_node = {
    INVALID_CHILD,
    INVALID_ATTR,
    INVALID_N_CHILD,
    INVALID_TAG_O,
    INVALID_ATTR_O,
    INVALID_TEXT_O,
    INVALID_COMMENT_O,
}
/* -------------------- */

module.exports = Object.freeze({
    FILE_NOT_FOUND,
    INVALID_ARGUMENT,
    config,
    ast_node,
});
