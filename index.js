var through2 = require('through2');
var gutil = require('gulp-util');
var path = require('path');
var juicer = require('juicer');
var PluginError = gutil.PluginError;

function obj2str(obj) {
    var result = '{';
    var keys = Object.keys(obj);
    var flag = false;
    keys.forEach(function (key) {
        result += flag ? ',' : '';
        flag = true;
        result += JSON.stringify(key) + ':';
        if (typeof obj[key] === 'object') {
            result += obj2str(obj[key]);
        } else if (typeof obj[key] !== 'function') {
            result += JSON.stringify(obj[key].toString());
        } else {
            result += obj[key].toString();
        }
    });
    result += '}'
    return result;
}

module.exports = function () {

    return through2.obj(function (file, enc, callback) {

        if (file.isNull()) {
            return callback(null, file);
        }

        if (file.isStream()) {
            return callback(new PluginError('gulp-xtpl2js', 'stream is not supported'), file);
        }

        var content = file.contents.toString();
        var extname = path.extname(file.path)
        var funcName = path.basename(file.path, extname);

        var method_body = '_method.__escapehtml=' + obj2str(juicer.options._method.__escapehtml) + ';' + '_method.__throw=' + juicer.options._method.__throw.toString();
        var result = juicer.compile(content)._render.toString().replace(/^function anonymous[^{]*?{([\s\S]*?)}$/igm, function ($, fn_body) {
            return 'function ' + funcName + '(_, _method) {' + method_body + fn_body + '}';
        });
        file.contents = new Buffer(result);

        callback(null, file);
    });
};