"use strict";

const { getConfig }             = require('./readers/config_reader.js');
const readSourceFiles           = require('./readers/source_reader.js');
const { createParserReaders }   = require('./parser/parser_reader.js');
const parser                    = require('./parser/parser.js');

getConfig()
  .then(readSourceFiles)
  .then(createParserReaders)
  .then(parser)
  .catch((err) => {
    console.log(err);
  });
