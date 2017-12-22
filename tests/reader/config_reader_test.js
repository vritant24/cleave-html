const fs            = require('fs');
const chai          = require('chai');
const assert        = require('assert');
const e             = require('../../constants/errors');

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
        fs.writeFileSync(file_name, "This is not json");

        chai.expect(jsonReader.bind(this, file_name)).to.throw(e.INVALID_JSON);
    });

    it('should throw an error for a file that does not exist', function() {
        // Remove already created file
        fs.unlinkSync(file_name);

        chai.expect(jsonReader.bind(this, file_name)).to.throw(e.CONFIG_NOT_FOUND);
    });
});