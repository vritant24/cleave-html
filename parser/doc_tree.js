"use strict";

const R             = require("ramda"); 
const e             = require("../constants/errors");
const {Cleave, Tag} = require("./ast_nodes");

function DocTree() {
    //list of imports to verify if cleave nodes are valid
    this.imports = {};
    
    //list of pointers to cleave nodes for quicker tree insertion
    this.cleave_nodes = [];

    //the html tree of the document
    this.html = {};
};

DocTree.prototype.addImport = function(name, path) {

    /* Error checks */
    if(!R.is(String, name) || !R.is(String, path)) {
        throw(e.doc_tree.INVALID_IMPORT);
    }
    if(isEmpty(name) || isEmpty(path)) {
        throw(e.doc_tree.INVALID_I_ATTR);
    }
    if(this.imports[name]) {
        throw(e.doc_tree.REPEATED_NAME);
    }
    /* ------------ */

    this.imports[name] = path;
};

DocTree.prototype.addCleaveNode = function(node) {

    /* Error checks */
    if(!(node instanceof Cleave)) {
        throw(e.doc_tree.INVALID_C_NODE);
    }
    /* ------------ */

    this.cleave_nodes.push(node);
};

DocTree.prototype.addTree = function(tree) {

    /* Error checks */
    if(!(node instanceof Tag)) {
        throw(e.doc_tree.INVALID_T_NODE);
    }
    /* ------------ */

    this.html = tree;
};

function isEmpty(string) {
    return (string.length === 0 || !string.trim());
};

const a = new DocTree();
a.addImport("navbar", "/po/");

module.exports = DocTree;