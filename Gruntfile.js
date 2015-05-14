/*
 * grunt <http://gruntjs.com/>
 *
 * Copyright (c) 2015 "Cowboy" Ben Alman
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: ['*.js'],
      options: {
        reporter: require('jshint-stylish'),
        jshintrc: '.jshintrc'
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test.js']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');

  // Default task.
  grunt.registerTask('default', ['jshint', 'mochaTest']);
};
