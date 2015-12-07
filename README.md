# gulp-phplint

> Gulp plugin for running the PHP Linter

## Usage

```js
var gulp = require('gulp');
var phplint = require('gulp-phplint');

gulp.task('default', function () {
  return gulp.src(['src/**/*.php'])
    // Validate files using PHP Lint
    .pipe(phplint('src/vendor/bin/php'))

    // Log all problems that were found
    .pipe(phplint.reporter());
});
```

## Options

Plugin options:

- `bin`
  - Default is `php`

### Reporters

#### Default

```js
gulp.task('default', function () {
  return gulp.src(['src/**/*.php'])
  	.pipe(phplint())
    .pipe(phplint.reporter());
});
```

#### Fail

```js
gulp.task('default', function () {
  return gulp.src(['src/**/*.php'])
  	.pipe(phplint())
    .pipe(phplint.reporter('fail'));
});
```

#### Custom

```js
gulp.task('default', function () {
  return gulp.src(['src/**/*.php'])
  	.pipe(phplint())
    .pipe(phplint.reporter(function(file){
      var report = file.phplintReport || {};

      if (report.error) {
        console.log(report.message+' on line '+report.line+' of '+report.filename);
      }
    }));
});
```

## License

[MIT](http://opensource.org/licenses/MIT) © Jeremy Marzka
