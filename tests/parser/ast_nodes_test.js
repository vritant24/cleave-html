"use strict";

const chai      = require('chai');
const assert    = require('assert');

const e         = require('../../constants/errors');
const ast_types = require('../../constants/ast_types');
const ast_nodes = require('../../parser/ast_nodes');

/* Instantiating nodes */
const string1 = 'random string 1';
const string2 = 'random string 2';

const tag_node = new ast_nodes.Tag(string1);
const attribute_node = new ast_nodes.Attribute(string1, string2);
const text_node = new ast_nodes.Text(string1);
const comment_node = new ast_nodes.Comment(string1);
/* ------------------ */


describe('AST Types', function() {
    it('should contain unique types', function(){
        const values = Object.values(ast_types);
        for(let i = 0; i < values.length; i++) {
            for(let j = i + 1; j < values.length; j++) {
                chai.assert(values[i] != values[j]);
            }
        };
    });

    it('should contain the right type attribute value for each node', function() {
        chai.assert(tag_node.type === ast_types.tag);
        chai.assert(attribute_node.type === ast_types.attribute);
        chai.assert(text_node.type === ast_types.text);
        chai.assert(comment_node.type === ast_types.comment);
    });
});

describe('AST contructors', function() {
    it('should contain right values for the tag node after instantiation', function() {
        chai.expect(tag_node.key).to.equal(string1);
        chai.expect(tag_node.children).to.be.a("array");
        chai.expect(tag_node.attributes).to.be.a("array");
        chai.expect(tag_node.children.length).to.equal(0);
        chai.expect(tag_node.attributes.length).to.equal(0);
    });

    it('should contain right values for the attribute node after instantiation', function() {
        chai.expect(attribute_node.key).to.equal(string1);
        chai.expect(attribute_node.value).to.equal(string2);

        //text
        chai.expect(text_node.text).to.equal(string1);

        //comment
        chai.expect(comment_node.value).to.equal(string1);
    });

    it('should contain right values for the text node after instantiation', function() {
        chai.expect(text_node.text).to.equal(string1);
    });

    it('should contain right values for the comment node after instantiation', function() {
        chai.expect(comment_node.value).to.equal(string1);
    });
});

describe('Tag Node Functions', function() {
    it('should add a child to children array', function() {
        const child = new ast_nodes.Tag("div");
        tag_node.children = [];
        
        tag_node.addChild(child);

        chai.expect(tag_node.children[0]).to.deep.equal(child);
    });

    it('should add a child to attribute array', function() {
        const attr = new ast_nodes.Attribute("class", "active");
        tag_node.attribute = [];

        tag_node.addAttribute(attr);

        chai.expect(tag_node.attribute[0]).to.deep.equal(attr);
    });

    it('should maintain the order the children are added in', function() {
        const string3 = "random string 3";
        tag_node.children = [];
        
        const child1 = new ast_nodes.Tag("div");
        const child2 = new ast_nodes.Text("this is some text");
        const child3 = new ast_nodes.Comment("this is a comment");

        tag_node.addChild(child1);
        tag_node.addChild(child2);
        tag_node.addChild(child3);

        chai.expect(tag_node.children[0]).to.deep.equal(child1);
        chai.expect(tag_node.children[1]).to.deep.equal(child2);
        chai.expect(tag_node.children[2]).to.deep.equal(child3);
    });
});