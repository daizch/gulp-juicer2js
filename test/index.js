var wrapper = require('../');
var gutil = require('gulp-util');
var fs = require('fs');
var pjoin = require('path').join;
var path = require('path');
var should = require('should');
require('mocha');

describe('gulp test', function () {
    it('test varible', function (done) {

        var fakeFilePath = pjoin(process.cwd(), '/test/fixtures/file.js');
        var getFakeFile = function (fileContent) {

            return new gutil.File({
                path: fakeFilePath,
                cwd: './test/',
                base: './test/fixture/',
                contents: new Buffer(fileContent || '')
            });
        };

        var fakeFile = getFakeFile("<div>${val}</div>"),
            stream = wrapper();

        stream.on('data', function (file) {
            var fp = file.path;
            var dirname = process.cwd();
            var extname = path.extname(fp);
            var result = file.contents.toString();
            console.log(result)
            // result.should.eql(fs.readFileSync(fakeFilePath).toString());
        });

        stream.once('end', function () {
            done();
        });

        stream.write(fakeFile);
        stream.end();
    })
});