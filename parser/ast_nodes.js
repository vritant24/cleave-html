"use strict";

const {ast_types} = require("../constants/ast");

/* Tag Node */
function tag(key) {
    this.key = key;
    this.attributes = [];
    this.children = []; 
};

tag.prototype = {
    type : ast_types.tag,

    addChild : child => this.children.push(child),
    addAttribute : attribute => this.attribute.push(attribute),
};
/* -------- */

/* Attribute Node */
function attribute(key, value) {
    this.key = key;
    this.value = value;
};

attribute.prototype = {
    type : ast_types.attribute
};
/* -------- */

/* Text Node */
function text(string) {
    this.text = string;
};

text.prototype = {
    type : ast_types.text
};
/* -------- */

/* Comment Node */
function comment(string) {
    this.value = string;
};

comment.prototype = {
    type : ast_types.comment
};
/* -------- */

module.exports = {
    tag,
    attribute,
    text,
    comment
};