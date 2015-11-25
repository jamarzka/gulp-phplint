'use strict';

/**
 * Loads reports
 *
 * @returns {Function}
 */
module.exports = function (reporter) {
  // check for a custom reporter
  if (typeof reporter === 'function'){
    return reporter;

  // otherwise load the default reporter
  }else{
    var reporter = require('./default');
    return reporter;
  }
};