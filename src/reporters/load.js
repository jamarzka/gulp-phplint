'use strict';

/**
 * Loads reports
 *
 * @returns {Function}
 */
module.exports = function(reporter) {
  // Check for a custom reporter
  if (typeof reporter === 'function') {
    return reporter;

  // Otherwise load the default reporter
  }else {
    var reporter = require('./default');
    return reporter;
  }
};