"use strict";

const { matches } = require('z');
const { EOF }     = require('../constants/globals.js');

/* Tests if a character is a whitespace character */
const isSpace = c => /\s/.test(c);

/* Tests if a character is a tag delimeter */
const isTagDelim = c => (c === '/' || c === '>');

/* Tests is a character is EOF */
const isEOF = c => (c === EOF);

/* Tests if a character is an english alphabetical character */
const isAlpha = c => /[a-zA-Z]/.test(c)

/* Currently this allows html tags to contain any characters that aren't spaces */
const isValidKeywordChar = c => !(isEOF(c) || isTagDelim(c) || isSpace(c) || !isAlpha(c));


const parseKeyword = reader => {
  reader.trimWhiteSpace();
  let keyword = "";
  while(isValidKeywordChar(reader.peekChar())) {
    keyword += reader.nextChar();
  }
  return keyword;
};

const parseComment = reader => {

};

const printFile = reader => {
  console.log("Printing Reader in Parser\n-----------------------\n");
  while(reader.peekChar() !== EOF) {
    process.stdout.write(reader.nextChar());
  }
  console.log("\n\n");
};

const parser = readers => {
  readers.forEach(reader => {
    let test = reader.next();
    matches(test)(
      (x = "<") => {
        const nextVal = reader.peek();
        return matches(nextVal)(
          (x = "!") => console.log('comment'),
          (x) => {
            if(isValidKeywordChar(x)) {
              console.log('tag!')
            }
            else {
              console.log('error');
            }
          }
        )
      },
      (x) => console.log('something else.')
    )
  });
};

module.exports = parser;
