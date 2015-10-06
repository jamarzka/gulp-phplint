# gulp-phplint

> Gulp plugin for running the PHP Linter.

## Usage

```js
var gulp = require('gulp');
var phplint = require('gulp-phplint');

gulp.task('default', function () {
  return gulp.src(['src/**/*.php'])
    // Validate files using PHP Lint
    .pipe(phplint('src/vendor/bin/php'))

    // Log all problems that was found
    .pipe(phplint.reporter('log'));
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

## License

[MIT](http://opensource.org/licenses/MIT) © Jeremy Marzka
