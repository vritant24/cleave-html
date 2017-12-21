const fs            = require('fs');
const chai          = require('chai');
const assert        = require('assert');
const jsonReader    = require('../../reader/config_reader');


describe('JSON Reader', function() {
    it('should return an object for a valid file name', function() {
        //set up file to read from
        const obj = {
            source: ['index.html'],
            destination: 'dst'
        }
        const file_name = 'test_file'
        fs.writeFileSync(file_name, JSON.stringify(obj), 'utf8');
        
        //run function
        const res = jsonReader(file_name);

        // deeply compare objects 
        chai.expect(res).to.deep.equal(obj);
    });
});