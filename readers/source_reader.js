"use strict";

const fs            = require('fs-extra');
const { FILE_TYPE } = require('../constants/globals.js');
console.log(FILE_TYPE);
/* Returns array of all source files */
const readSourceFiles = ({ source }) => {
  return source.map((file_name) => {
    return fs.readFileSync(file_name, FILE_TYPE);
  });
};

module.exports = readSourceFiles;
