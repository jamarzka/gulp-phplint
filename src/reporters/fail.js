'use strict';

var gutil = require('gulp-util');
var chalk = require('chalk');

/**
 * Returns the fail reporter
 *
 * The fail reporter raises an error on files stream if PHP linter fails
 *
 * @returns {Function}
 */
module.exports = function(file) {
  var report = file.phplintReport || {};

  if (report.error) {
    var message = report.message;

    if (report.rule) {
      message = report.rule + ' ' + chalk.magenta(file.path) + ':' +
        chalk.yellow(report.line) + ' ' + report.message;
    }

    this.emit('error', new gutil.PluginError('gulp-phplint', message));
  }
};
