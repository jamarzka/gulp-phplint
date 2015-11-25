'use strict';

var failReporter = require('./fail');
var loadReporter = require('./load');
var through = require('through2');

/**
 * Gets a reporter
 *
 * The function works only with reporters that shipped with the plugin.
 *
 * @param {String} name Name of a reporter to load or reporter function
 * @param {Object} options Custom options object that will be passed to a reporter.
 * @returns {Function}
 */
module.exports = function(reporter, options) {
  options = options || {};

  if (reporter === 'fail') {
    return failReporter(options);
  }

  var reporter = loadReporter(reporter || 'default');

  return through.obj(function(file, enc, callback) {

    reporter(file);

    return callback(null, file);
  });
};