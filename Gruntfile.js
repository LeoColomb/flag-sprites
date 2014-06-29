module.exports = function (grunt) {
  'use strict';
  // Project configuration
  grunt.initConfig({
    // Metadata
    pkg: grunt.file.readJSON('bower.json'),
    banner: '/*!\n * <%= pkg.name %> v<%= pkg.version %>\n' +
        '<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
        ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
        ' * Licensed under <%= props.license %>\n */',
    // Task configuration
    less: {
      dev: {
        src: 'less/<%= pkg.name %>.less',
        dest: 'dist/css/<%= pkg.name %>.css',
        options: {
          sourceMap: true,
          sourceMapFilename: 'dist/css/<%= pkg.name %>.css.map',
          sourceMapURL: '<%= pkg.name %>.css.map'
        }
      },
      dist: {
        src: 'less/<%= pkg.name %>.less',
        dest: 'dist/css/<%= pkg.name %>.min.css',
        options: {
          cleancss: true,
          report: 'min',
          strictUnits: true,
          strictMath: true,
          strictImports: true
        }
      }
    },
    sprite: {
      flags: {
        src: ['flags/*.png'],
        destImg: 'dist/img/flags.png',
        engine: 'pngsmith',
        algorithm: 'top-down',
        destCSS: 'less/flags.less',
        cssFormat: 'less',
        cssTemplate: 'flags.less.mustache'
      }
    },
    jshint: {
      options: {
        node: true,
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        eqnull: true,
        boss: true
      },
      gruntfile: {
        src: 'gruntfile.js'
      }
    },
    watch: {
      less: {
        files: '<%= less.dev.src %>',
        tasks: ['less']
      }
    }
  });

  // These plugins provide necessary tasks
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task
  grunt.registerTask('default', ['jshint', 'nodeunit']);
};

