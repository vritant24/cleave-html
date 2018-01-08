"use strict";

/* Tests if a character is a whitespace character */
const isSpace = c => /\s/.test(c);

function Reader(file) {
  this.file = file;
  this.index = 0;
}

/* Increments reader's index to next non-space character */
Reader.prototype.trimWhiteSpace = function() {
  while((this.index < this.file.length) && isSpace(this.file[this.index])) { this.index++; }
};

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

exports.Reader = Reader;
exports.createParserReaders = files => files.map(file => new Reader(file));
