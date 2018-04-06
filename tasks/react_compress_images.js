/*
 * grunt-compress-images
 * https://github.com/itarverne/grunt-compress-images.git
 *
 * Copyright (c) 2018 David RIGAUDIE
 * Licensed under the MIT license.
 */

'use strict';

var compress_images = require('compress-images');

module.exports = function(grunt) {

  grunt.registerMultiTask('compress_images', 'The plugin to use the compress-images package', function() {

    var target = this.target;

    var done = this.async();

    compress_images(
      grunt.config('compress_images.' + target + '.input_path'), 
      grunt.config('compress_images.' + target + '.output_path'), {
        compress_force: grunt.config('compress_images.' + target + '.options.compress_force'), 
        statistic: grunt.config('compress_images.' + target + '.options.statistic'), 
        autoupdate: grunt.config('compress_images.' + target + '.options.autoupdate')
      }, 
      false, {
        jpg: {
          engine: grunt.config('compress_images.' + target + '.jpg.engine'), 
          command: grunt.config('compress_images.' + target + '.jpg.command')
        }
      }, {
        png: {
          engine: grunt.config('compress_images.' + target + '.png.engine'), 
          command: grunt.config('compress_images.' + target + '.png.command')
        }
      }, {
        svg: {
          engine: grunt.config('compress_images.' + target + '.svg.engine'),
          command: grunt.config('compress_images.' + target + '.svg.command')
        }          
      }, {
        gif: {
          engine: grunt.config('compress_images.' + target + '.gif.engine'), 
          command: grunt.config('compress_images.' + target + '.gif.command')
        }
      }, function(err){
        done();
        return true;
      }
    );

  });

};
