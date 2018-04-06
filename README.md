# grunt-compress-images

> The plugin to use the compress-images package

## Getting Started
This plugin requires : 
- Grunt `~1.0.1`
- [compress-images](https://www.npmjs.com/package/compress-images) npm package

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-compress-images --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-compress-images');
```

## The "compress-images" task

### Overview
In your project's Gruntfile, add a section named `compressImages` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  compressImages: {
    prod : {
      input_path: 'src/img/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}',
      output_path: 'build/img/',
      options: {
        compress_force: false, 
        statistic: true, 
        autoupdate: true
      },
      jpg: {
        engine: 'mozjpeg',
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
});
```
