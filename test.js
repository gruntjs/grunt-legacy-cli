/*!
 * grunt-legacy-config <https://github.com/gruntjs/grunt-legacy-config>
 *
 * Copyright (c) 2015 "Cowboy" Ben Alman.
 * Licensed under the MIT license.
 */

'use strict';

/* deps:mocha */
var assert = require('assert');
var grunt = require('grunt');

// Parse options printed by fixtures/Gruntfile-cli into an object.
var optionValueRe = /###(.*?)###/;
function getOptionValues(str) {
  var matches = str.match(optionValueRe);
  return matches ? JSON.parse(matches[1]) : {};
}

exports['cli'] = {
  '--debug taskname': function(test) {
    test.expect(1);
    grunt.util.spawn({
      grunt: true,
      args: ['--gruntfile', 'test/fixtures/Gruntfile-cli.js', '--debug', 'debug', 'finalize'],
    }, function(err, result) {
      test.deepEqual(getOptionValues(result.stdout), {debug: 1}, 'Options should parse correctly.');
      test.done();
    });
  },
  'taskname --debug': function(test) {
    test.expect(1);
    grunt.util.spawn({
      grunt: true,
      args: ['--gruntfile', 'test/fixtures/Gruntfile-cli.js', 'debug', '--debug', 'finalize'],
    }, function(err, result) {
      test.deepEqual(getOptionValues(result.stdout), {debug: 1}, 'Options should parse correctly.');
      test.done();
    });
  },
  '--debug --verbose': function(test) {
    test.expect(1);
    grunt.util.spawn({
      grunt: true,
      args: ['--gruntfile', 'test/fixtures/Gruntfile-cli.js', '--debug', '--verbose', 'debug', 'verbose', 'finalize'],
    }, function(err, result) {
      test.deepEqual(getOptionValues(result.stdout), {debug: 1, verbose: true}, 'Options should parse correctly.');
      test.done();
    });
  },
  '--verbose --debug': function(test) {
    test.expect(1);
    grunt.util.spawn({
      grunt: true,
      args: ['--gruntfile', 'test/fixtures/Gruntfile-cli.js', '--verbose', '--debug', 'debug', 'verbose', 'finalize'],
    }, function(err, result) {
      test.deepEqual(getOptionValues(result.stdout), {debug: 1, verbose: true}, 'Options should parse correctly.');
      test.done();
    });
  },
};
