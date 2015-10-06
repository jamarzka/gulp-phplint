'use strict';

var gutil = require('gulp-util');
var through = require('through2');
var chalk = require('chalk');

/**
 * Returns the fail reporter
 *
 * The fail reporter raises an error on files stream if PHP linter fails
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

      this.emit('error', new gutil.PluginError('gulp-phplint', message));

      return callback(null, file);
    }

    return callback(null, file);
  });
};
