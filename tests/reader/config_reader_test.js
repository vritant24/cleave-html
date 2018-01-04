"use strict";

const fs                = require('fs');
const chai              = require('chai');
const chai_as_promised  = require('chai-as-promised');
const assert            = require('assert');

const e                 = require('../../constants/errors');
const _                 = require('../../constants/globals');
const config_reader     = require('../../readers/config_reader');

chai.use(chai_as_promised);


describe('JSON Reader', function() {
    const {jsonReader} = config_reader;
    const file_name = 'test_file'

    it('should return an object for a valid file name with valid JSON', async () => {
        //set up file to read from
        const obj = {
            source: ['index.html'],
            destination: 'dst'
        }
        fs.writeFileSync(file_name, JSON.stringify(obj), 'utf8');
        const res = await jsonReader(file_name);
        // deeply compare objects
        chai.expect(res).to.deep.equal(obj);
    });

    it('should throw an error for a file with invalid JSON', () => {
        // Write invalid JSON to file
        fs.writeFileSync(file_name, "This is not json");

        chai.expect(jsonReader(file_name)).to.be.rejectedWith(e.config.CONFIG_ERROR);
    });

    it('should throw an error for a file that does not exist', async () => {
        // Remove already created file
        fs.unlinkSync(file_name);

        chai.expect(jsonReader(file_name)).to.be.rejectedWith(e.config.CONFIG_ERROR);
    });

    it('should throw an error for an invalid argument type', async () => {
        chai.expect(jsonReader(1)).to.be.rejectedWith(e.INVALID_ARGUMENT);
        chai.expect(jsonReader(null)).to.be.rejectedWith(e.INVALID_ARGUMENT);
    });
});

describe('Validate Config', function() {
    const {validateConfig} = config_reader;

    it('should throw no errors for a valid object', function() {
        const obj = {
            source: ["index.html"],
            destination: "static",
        };

        chai.expect(validateConfig(obj)).to.eventually.equal(obj);
    });

    it('should throw an error absent source or destination', function() {
        chai.expect(validateConfig({source: ["a"]})).to.be.rejectedWith(e.config.INVALID_DST);
        chai.expect(validateConfig({destination: "a"})).to.be.rejectedWith(e.config.INVALID_SRC);
    });

    it('should throw an error for incorrect source', function() {
        var obj = {
            destination: "dst",
        }

        obj.source = "";
        chai.expect(validateConfig(obj)).to.be.rejectedWith(e.config.INVALID_SRC);

        obj.source = [1];
        chai.expect(validateConfig(obj)).to.be.rejectedWith(e.config.INVALID_SRC);
    });

    it('should throw an error for incorrect destination', function() {
        var obj = {
            source: [],
        }

        obj.destination = [];
        chai.expect(validateConfig(obj)).to.be.rejectedWith(e.config.INVALID_DST);

        obj.destination = 1;
        chai.expect(validateConfig(obj)).to.be.rejectedWith(e.config.INVALID_DST);
    });
});
