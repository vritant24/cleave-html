"use strict";

const _ = require("../constants/ast");

function tag(key) {
    this.type   = _.ast_types.tag;
    this.key    = key;
    this.attributes = [];
    this.children = []; 
};

function attribute(key, value) {
    this.type = _.ast_types.attribute;
    this.key = key;
    this.value = value;
};

function text(string) {
    this.type = _.ast_types.text;
    this.text = string;
};

function comment(string) {
    this.type = _.ast_types.comment;
    this.value = string;
};

