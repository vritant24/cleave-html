"use strict";

const _ = require("../constants/ast");

/* Tag Node */
function tag(key) {
    this.key    = key;
    this.attributes = [];
    this.children = []; 
};

tag.prototype = {
    this.type   = _.ast_types.tag,

    this.addChild       = function(child) {this.children.push(child)},
    this.addAttribute   = function(attribute) {this.attribute.push(attribute)},
};
/* -------- */

/* Attribute Node */
function attribute(key, value) {
    this.key = key;
    this.value = value;
};

attribute.prototype = {
    this.type   = _.ast_types.attribute
};
/* -------- */

/* Text Node */
function text(string) {
    this.text = string;
};

text.prototype = {
    this.type = _.ast_types.text
};
/* -------- */

/* Comment Node */
function comment(string) {
    this.value = string;
};

tag.prototype = {
    this.type = _.ast_types.comment
};
/* -------- */

module.exports = {
    tag,
    attribute,
    text,
    comment
};