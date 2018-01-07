"use strict";

const { EOF } = require("../constants/globals.js");

/* Tests if a character is a whitespace character */
const isSpace = c => /\s/.test(c);

/* Tests if a character is a tag delimeter */
const isTagDelim = c => (c === '/' || c === '>');

/* Tests is a character is EOF */
const isEOF = c => (c === EOF);

/* Currently this allows html tags to contain any characters that aren't spaces */
const isValidTagCharacter = c => !(isEOF(c) || isTagDelim(c) || isSpace(c));

/* Tests if a character is an english alphabetical character */
const isAlpha = c => /[a-zA-Z]/.test(c)

function Reader(file) {
  this.file = file;
  this.index = 0;
}

/* Increments reader's index to next non-space character */
Reader.prototype.trimWhiteSpace = function() {
  while((this.index < this.file.length) && isSpace(this.file[this.index])) { this.index++; }
}
/* Return next character in file stream and increments the Reader's index */
Reader.prototype.nextChar = function() {
  if(this.index >= this.file.length) {
    return EOF;
  }
  return this.file[this.index++];
};

/* Returns next character in file without advancing Reader's index */
Reader.prototype.peekChar = function() {
  if(this.index >= this.file.length) {
    return EOF;
  }
  return this.file[this.index];
};

/* Returns next non-space character */
Reader.prototype.next = function() {
  this.trimWhiteSpace();
  return this.nextChar();
};

/* Returns next non-space character in file without advancing Reader's index */
Reader.prototype.peek = function() {
  let peekIndex = this.index;
  while((peekIndex < this.file.length) && isSpace(this.file[peekIndex])) { peekIndex++; }
  if(peekIndex >= this.file.length) {
    return EOF;
  }
  return this.file[peekIndex];
};

/* Returns the next HTML tag as a string. (Reads next word until space character or closing tag charcters found) */
Reader.prototype.getTag = function() {
  this.trimWhiteSpace();
  let tag = "";
  while(isValidTagCharacter(this.peekChar())) {
    tag += this.nextChar();
  }
  return tag;
};


exports.Reader = Reader;
exports.createParserReaders = files => files.map(file => new Reader(file));
