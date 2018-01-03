"use strict";

const R         = require("ramda"); 
const e         = require("../constants/errors");
const ast_types = require("../constants/ast_types");

/* Tag Node */
function Tag(key) {
    if(!R.is(String, key)) {
        throw(e.ast_node.INVALID_TAG_O);
    }
    this.key = key;
    this.attributes = [];
    this.children = []; 
};

Tag.prototype.type = ast_types.tag;

Tag.prototype.addChild = function(child) { 
    if(!(child instanceof Tag || child instanceof Text || child instanceof Comment)) {       
        throw(e.ast_node.INVALID_CHILD);
    }
    this.children.push(child);
};

Tag.prototype.addAttribute = function(attribute) { 
    if(!(attribute instanceof Attribute)) {
        throw(e.ast_node.INVALID_ATTR);
    }
    this.attribute.push(attribute);
};
/* -------- */

/* Attribute Node */
function Attribute(key, value) {
    if(!R.is(String, key) || !R.is(String, value)) {
        throw(e.ast_node.INVALID_TEXT_O);
    }
    this.key = key;
    this.value = value;
};

Attribute.prototype.type  = ast_types.attribute;
/* -------- */

/* Text Node */
function Text(string) {
    if(!R.is(String, string)) {
        throw(e.ast_node.INVALID_TEXT_O);
    }
    this.text = string;
};

Text.prototype.type = ast_types.text;
/* -------- */

/* Comment Node */
function Comment(string) {
    if(!R.is(String, string)) {
        throw(e.ast_node.INVALID_COMMENT_O);
    } 
    this.value = string;
};

Comment.prototype.type = ast_types.comment;
/* -------- */

/* Cleave Node */
function Cleave(key) {
    Tag.call(this, key);
};

Cleave.prototype = Object.create(Tag.prototype);

Cleave.prototype.type = ast_types.cleave;

Cleave.prototype.addChild = function(child) {
    if(!(child instanceof Tag || child instanceof Text || child instanceof Comment)) {       
        throw(e.ast_node.INVALID_CHILD);
    }
    if(this.children.length != 0) {
        throw(e.ast_node.INVALID_N_CHILD);
    }
    this.children.push(child);
}

/* -------- */

module.exports = {
    Tag,
    Attribute,
    Text,
    Comment,
    Cleave
};

const c = new Cleave("div");
console.log(c);
