"use strict";

/* Tests if a character is a whitespace character */
const isSpace = c => /\s/.test(c);

/* Currently this allows html tags to contain any characters that aren't spaces */
const isValidTagCharacter = c => (c !== '/' && c !== '>' && !isSpace(c))

function Reader(file) {
  this.file = file;
  this.index = 0;
}

/* Return next character in file stream and increments the Reader's index */
Reader.prototype.nextChar = function() {
  return this.file[this.index++];
};

/* Returns next character in file without advancing Reader's index */
Reader.prototype.peekChar = function() {
  return this.file[this.index];
};

/* Returns next non-space character */
Reader.prototype.next = function() {
  while(isSpace(this.peekChar())) {
    this.nextChar();
  }
  return this.nextChar();
};

/* Returns next non-space character in file without advancing Reader's index */
Reader.prototype.peek = function() {
  let peekIndex = this.index;
  while(isSpace(this.peekChar())) {
    peekIndex++;
  }
  return this.file[peekIndex];
};

/* Returns the next HTML tag as a string. (Reads next word until space character or closing tag charcters found) */
Reader.prototype.getTag = function() {
  /* Trim whitespace */
  while(isSpace(this.peekChar())) { this.nextChar(); }

  let tag = "";
  while(isValidTagCharacter(this.peekChar())) {
    tag += this.nextChar();
  }
  return tag;
};

const createReaders = files => files.map(file => new Reader(file));

module.exports = createReaders;
