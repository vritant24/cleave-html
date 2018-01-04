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
};
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
};
/* -------------------- */

/* Document Tree Errors */
const INVALID_IMPORT    = ERROR + "Invalid import. Import needs to have a name and src attribute";
const INVALID_I_ATTR    = ERROR + "Invalid import. Import name and path cannot be empty";
const REPEATED_NAME     = ERROR + "Invalid name. Imported cleave names cannot be repeated";
const INVALID_C_NODE    = ERROR + "Invalid cleave node.";
const INVALID_T_NODE    = ERROR + "Invalid tag node";

const doc_tree = {
    INVALID_IMPORT,
    INVALID_I_ATTR,
    REPEATED_NAME,
    INVALID_C_NODE,
    INVALID_T_NODE
};
/* -------------------- */

module.exports = Object.freeze({
    FILE_NOT_FOUND,
    INVALID_ARGUMENT,
    config,
    ast_node,
    doc_tree,
});
