'use strict';

var through = require('through2');
var execFile = require('child_process').execFile;

/**
 * PHP linter Plugin
 *
 * @param {String} bin.
 * @returns {Stream}
 */

var phplintPlugin = function(bin) {
  return through.obj(function(file, enc, callback) {
    var stream = this;

    if (file.isNull()) {
      stream.push(file);
      callback();

      return;
    }

    // Run the linter
    execFile(bin || 'php', ['--syntax-check', file.path], function(error, stdout, stderr) {
      var report = {
        error: false,
      };

      if (error) {
        var match = stderr.match(/(.+?):  (.+?) in (.+?) on line (\d+)/i);

        if (match) {
          report.rule = match[1];
          report.message = match[2];
          report.filename = match[3];
          report.line = match[4];
        } else {
          report.message = stderr;
        }

        report.error = true;
      }

      file.phplintReport = report;

      stream.push(file);

      callback();
    });
  });
};

// Attach reporters loader to the plugin.
phplintPlugin.reporter = require('./reporters');

module.exports = phplintPlugin;
