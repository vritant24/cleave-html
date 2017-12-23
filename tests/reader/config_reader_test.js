const fs            = require('fs');
const chai          = require('chai');
const assert        = require('assert');
const e             = require('../../constants/errors');
const _             = require('../../constants/globals');

const config_reader = require('../../reader/config_reader');


describe('JSON Reader', function() {
    const {jsonReader} = config_reader;
    const file_name = 'test_file'

    it('should return an object for a valid file name with valid JSON', function() {
        //set up file to read from
        const obj = {
            source: ['index.html'],
            destination: 'dst'
        }
        fs.writeFileSync(file_name, JSON.stringify(obj), 'utf8');
        
        // deeply compare objects 
        chai.expect(jsonReader(file_name)).to.deep.equal(obj);
    });
    
    it('should throw an error for a file with invalid JSON', function() {
        // Write invalid JSON to file
        fs.writeFileSync(file_name, "This is not json");

        chai.expect( () => jsonReader(file_name)).to.throw(e.config.INVALID_JSON);
    });

    it('should throw an error for a file that does not exist', function() {
        // Remove already created file
        fs.unlinkSync(file_name);

        chai.expect(() => jsonReader(file_name)).to.throw(e.config.CONFIG_NOT_FOUND);
    });

    it('should throw an error for an invalid argument type', function() {
        chai.expect(() => jsonReader(1)).to.throw(e.INVALID_ARGUMENT);
        chai.expect(() => jsonReader(null)).to.throw(e.INVALID_ARGUMENT);
    });
});

describe('Check Config', function() {
    const {checkConfig} = config_reader; 

    it('should throw no errors for a valid object', function() {
        const obj = {
            source: ["index.html"],
            destination: "static",
        };

        chai.expect(checkConfig(obj)).to.equal(undefined);
    });

    it('should throw an error absent source or destination', function() {
        chai.expect(() => checkConfig({source: ["a"]})).to.throw(e.config.INVALID_DST);
        chai.expect(() => checkConfig({destination: "a"})).to.throw(e.config.INVALID_SRC);
    });

    it('should throw an error for incorrect source', function() {
        var obj = {
            destination: "dst",
        }

        obj.source = "";
        chai.expect(() => checkConfig(obj)).to.throw(e.config.INVALID_SRC);

        obj.source = [1];
        chai.expect(() => checkConfig(obj)).to.throw(e.config.INVALID_SRC);
    });

    it('should throw an error for incorrect destination', function() {
        var obj = {
            source: [],
        }

        obj.destination = [];
        chai.expect(() => checkConfig(obj)).to.throw(e.config.INVALID_DST);

        obj.destination = 1;
        chai.expect(() => checkConfig(obj)).to.throw(e.config.INVALID_DST);
    });
});