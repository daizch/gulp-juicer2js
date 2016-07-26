# gulp-juicer2js

[![NPM version](https://img.shields.io/npm/v/gulp-juicer2js.svg?style=flat)](https://www.npmjs.com/package/gulp-juicer2js)
[![Build Status](https://secure.travis-ci.org/Dijason/gulp-juicer2js.svg?branch=master)](http://travis-ci.org/Dijason/gulp-juicer2js)

> A [gulp](https://github.com/gulpjs/gulp) plugin to transform the template of juicer to javascript function.

## Usage

Firstly, install `gulp-juicer2js` as a development dependency:

```shell
npm install gulp-juicer2js --save-dev
```

Then, add it into your `gulpfile.js`:

**transform the template content of juicer to javascript function:**

```javascript
var juicer2js = require("gulp-juicer2js");

gulp.src("./src/**/*.juicer")
    .pipe(juicer2js())
    .pipe(gulp.dest("build"));
```

** use the transformed js function: **
```javascript
//tpl is the transformed content
var html = tpl({val: 'hello world'});
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)