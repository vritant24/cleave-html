"use strict";


const ast_types = require("../constants/ast_types");

/* Tag Node */
function Tag(key) {
    this.key = key;
    this.attributes = [];
    this.children = []; 
};

Tag.prototype.type = ast_types.tag;

Tag.prototype.addChild = function(child) { 
    this.children.push(child) 
};

Tag.prototype.addAttribute = function(attribute) { 
    this.attribute.push(attribute)
};
/* -------- */

/* Attribute Node */
function Attribute(key, value) {
    this.key = key;
    this.value = value;
};

Attribute.prototype.type  = ast_types.attribute;
/* -------- */

/* Text Node */
function Text(string) {
    this.text = string;
};

Text.prototype.type = ast_types.text;
/* -------- */

/* Comment Node */
function Comment(string) {
    this.value = string;
};

Comment.prototype.type = ast_types.comment;
/* -------- */

module.exports = {
    Tag,
    Attribute,
    Text,
    Comment
};