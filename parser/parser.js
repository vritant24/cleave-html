"use strict";

const { EOF } = require('../constants/globals.js');

const parser = readers => {
  readers.forEach((reader) => {
    console.log("Printing Reader in Parser\n-----------------------\n");
    while(reader.peek() !== EOF) {
      if(reader.peek() === '/') {
        reader.next();
      }
      if(reader.peek() === '>') {
        reader.next();
      }
      if(reader.peek() === '<') {
        reader.next();
      }
      console.log(reader.getTag());
    }
    console.log("\n\n");
  });
};

module.exports = parser;
