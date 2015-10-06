'use strict';

var failReporter = require('./fail');
var defaultReporter = require('./default');

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
  if (reporter === 'default') {
    reporter = defaultReporter;
  } else if (reporter === 'fail') {
    reporter = failReporter;
  }

  reporter = reporter || defaultReporter;

  return reporter(options || {});
};