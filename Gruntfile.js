module.exports = function(grunt) {
    'use strict';

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            dist: ['dist']
        },
        lesslint: {
            options: {
                formatters: [{
                  id: 'csslint-xml',
                  dest: 'report/lesslint.xml'
                }]
            },
            src: ['src/less/loop.less']
        },
        jshint: {
            gruntfile: ['Gruntfile.js']
        },
        less: {
            sample: {
                files: {'dist/css/sample.css': 'src/less/sample.less'}
            }
        }
    });

    grunt.registerTask('default', [
        'clean',
        'test',
        'less'
    ]);

    grunt.registerTask('test', ['jshint', 'lesslint']);
};
