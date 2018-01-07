"use strict";

const chai       = require('chai');
const assert     = require('assert');

const { Reader } = require('../../parser/parser_reader.js');
const { EOF }    = require('../../constants/globals.js');

const exampleFile1 = "<html>";
const exampleFile2 = "     <html>    <body>";
const exampleFile3 = "<! Doctype     html>";
const exampleFile4 = "h";

describe('Reader.next()', function() {
    const testReader1 = new Reader(exampleFile1);
    const testReader2 = new Reader(exampleFile2);
    const testReader3 = new Reader(exampleFile3);
    const testReader4 = new Reader(exampleFile4);
    it('should return the next non-space character in the file', function() {
        chai.assert(testReader1.next() === "<");
        chai.assert(testReader1.next() === "h");
        chai.assert(testReader2.next() === "<");
        chai.assert(testReader2.next() === "h");
        chai.assert(testReader3.next() === "<");
        chai.assert(testReader3.next() === "!");
        chai.assert(testReader3.next() === "D");
        chai.assert(testReader4.next() === "h");
        chai.assert(testReader4.next() === EOF);
    });
});


describe('Reader.nextChar()', function() {
    const testReader1 = new Reader(exampleFile1);
    const testReader2 = new Reader(exampleFile2);
    const testReader3 = new Reader(exampleFile3);
    const testReader4 = new Reader(exampleFile4);
    it('should return the next character in the file', function() {
        chai.assert(testReader1.nextChar() === "<");
        chai.assert(testReader1.nextChar() === "h");
        chai.assert(testReader2.nextChar() === " ");
        chai.assert(testReader2.nextChar() === " ");
        chai.assert(testReader3.nextChar() === "<");
        chai.assert(testReader3.nextChar() === "!");
        chai.assert(testReader3.nextChar() === " ");
        chai.assert(testReader4.nextChar() === "h");
        chai.assert(testReader4.nextChar() === EOF);
    });
});

describe('Reader.peek()', function() {
    const testReader1 = new Reader(exampleFile1);
    const testReader2 = new Reader(exampleFile2);
    const testReader3 = new Reader(exampleFile3);
    const testReader4 = new Reader(exampleFile4);
    it('should return the next non-space character in the file without advancing the Readers index', function() {
        chai.assert(testReader1.peek() === "<");
        chai.assert(testReader1.peek() === "<");
        chai.assert(testReader2.peek() === "<");
        chai.assert(testReader2.peek() === "<");
        chai.assert(testReader3.peek() === "<");
        chai.assert(testReader3.peek() === "<");
        testReader4.next();
        chai.assert(testReader4.peek() === EOF);
    });
});

describe('Reader.peekChar()', function() {
    const testReader1 = new Reader(exampleFile1);
    const testReader2 = new Reader(exampleFile2);
    const testReader3 = new Reader(exampleFile3);
    const testReader4 = new Reader(exampleFile4);
    it('should return the next character in the file without advancing the Readers index', function() {
        chai.assert(testReader1.peekChar() === "<");
        chai.assert(testReader1.peekChar() === "<");
        chai.assert(testReader2.peekChar() === " ");
        chai.assert(testReader2.peekChar() === " ");
        chai.assert(testReader3.peekChar() === "<");
        chai.assert(testReader3.peekChar() === "<");
        testReader4.next();
        chai.assert(testReader4.peekChar() === EOF);
    });
});

describe('Reader.getTag()', function() {
    const testReader1 = new Reader(exampleFile1);
    const testReader2 = new Reader(exampleFile2);
    const testReader3 = new Reader(exampleFile3);
    const testReader4 = new Reader(exampleFile4);
    it('should return the next tag (string of character not containing spaces or tag delimeters)', function() {
        testReader1.next();
        chai.assert(testReader1.getTag() === "html");
        chai.assert(testReader2.getTag() === "<html");
        chai.assert(testReader2.getTag() === "");
        testReader2.next();
        chai.assert(testReader2.getTag() === "<body");
        chai.assert(testReader4.getTag() === "h");
        chai.assert(testReader4.getTag() === "");
    });
});
