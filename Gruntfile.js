/*
 * grunt-compress-images
 * https://github.com/itarverne/grunt-compress-images.git
 *
 * Copyright (c) 2018 David RIGAUDIE
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Configuration to be run (and then tested).
    compress_images: {
      prod : {
        input_path: 'src/img/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}',
        output_path: 'build/img/',
        options: {
          compress_force: false, 
          statistic: true, 
          autoupdate: true
        },
        jpg: {
          engine: 'jpegtran',
          command: ['-quality', '60']
        },
        png: {
          engine: 'pngquant',
          command: ['--quality=20-50']
        },
        svg: {
          engine: 'svgo',
          command: '--multipass'
        },
        gif: {
          engine: 'gifsicle',
          command: ['--colors', '64', '--use-col=web']
        }
      },
      test : {
        input_path: 'test/src/img/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}',
        output_path: 'test/build/img/',
        options: {
          compress_force: false, 
          statistic: true, 
          autoupdate: true
        },
        jpg: {
          engine: 'jpegtran',
          command: ['-quality', '60']
        },
        png: {
          engine: 'pngquant',
          command: ['--quality=20-50']
        },
        svg: {
          engine: 'svgo',
          command: '--multipass'
        },
        gif: {
          engine: 'gifsicle',
          command: ['--colors', '64', '--use-col=web']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['compress-images:test', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
