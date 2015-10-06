'use strict';

var gutil = require('gulp-util');
var through = require('through2');
var chalk = require('chalk');

/**
 * Returns the defalt reporter
 *
 * The default reporter logs all problems to the console.
 *
 * @returns {Function}
 */
module.exports = function() {
  return through.obj(function(file, enc, callback) {
    var report = file.phplintReport || {};

    if (report.error) {
      var message = report.message;

      if (report.rule) {
        message = report.rule + ' ' + chalk.magenta(file.path) + ':' +
          chalk.yellow(report.line) + ' ' + report.message;
      }

      gutil.log(message);
    }

    this.push(file);

    callback();
  });
};