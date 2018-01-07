"use strict";

const { EOF } = require('../constants/globals.js');

const parser = readers => {
  readers.forEach((reader) => {
    console.log("Printing Reader in Parser\n-----------------------\n");
    while(reader.peekChar() !== EOF) {
      process.stdout.write(reader.nextChar());
    }
    console.log("\n\n");
  });
};

module.exports = parser;
