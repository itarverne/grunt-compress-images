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

  grunt.registerMultiTask('compressImages', 'The plugin to use the compress-images package', function() {

    var target = this.target;

    var done = this.async();

    var incr = 0;
    var max_incr = 5;
    var timer = setInterval(function(){
      incr++;
      if(incr > 2*max_incr){
        done()
        clearInterval(timer);
      }
    },1000);

    compress_images(
      grunt.config('compressImages.' + target + '.input_path'), 
      grunt.config('compressImages.' + target + '.output_path'), {
        compress_force: grunt.config('compressImages.' + target + '.options.compress_force'), 
        statistic: grunt.config('compressImages.' + target + '.options.statistic'), 
        autoupdate: grunt.config('compressImages.' + target + '.options.autoupdate'),
        pathLog: grunt.config('compressImages.' + target + '.options.pathLog')
      }, 
      false, {
        jpg: {
          engine: grunt.config('compressImages.' + target + '.jpg.engine'), 
          command: grunt.config('compressImages.' + target + '.jpg.command')
        }
      }, {
        png: {
          engine: grunt.config('compressImages.' + target + '.png.engine'), 
          command: grunt.config('compressImages.' + target + '.png.command')
        }
      }, {
        svg: {
          engine: grunt.config('compressImages.' + target + '.svg.engine'),
          command: grunt.config('compressImages.' + target + '.svg.command')
        }          
      }, {
        gif: {
          engine: grunt.config('compressImages.' + target + '.gif.engine'), 
          command: grunt.config('compressImages.' + target + '.gif.command')
        }
      }, function(err){
        if(err == null){
          if(max_incr < incr)
            max_incr = incr;
          incr = 0;
        }
        return true;
      }
    );
  });

};
